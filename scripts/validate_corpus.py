#!/usr/bin/env python3
"""
CMS v2.0 — Validateur officiel du corpus
Usage: python3 validate_corpus_v2.py [fichier.jsonl]
"""
import json, re, sys
from pathlib import Path

REQUIRED = ["cms_id", "lang_code", "cms_territory", "cms_domain", "text", "source", "license", "date_collected"]
ID_PATTERN = re.compile(r"^CMS-[A-Z]{3}-\d{4}-[A-Z0-9]{8}$")
DATE_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}$")

LANG_VALUES   = {"hat","gcf","acf","jam","pap","srn","nld","fra","eng","spa"}
DOMAIN_VALUES = {"music","dance","theatre","literature","oral_tradition","intangible_heritage",
                 "religion","gastronomy","carnival","visual_arts","education","general","news","social_media"}
LICENSE_VALUES = {"CC0","CC-BY 2.0","CC-BY 4.0","CC-BY-SA 4.0","MIT","Apache 2.0","proprietary","unknown"}
TERRITORY_VALUES = {"Haiti","Guadeloupe","Martinique","Guyane","Jamaica","Trinidad","Barbados",
                    "Cuba","Dominican Republic","Puerto Rico","Aruba","Curacao","Suriname",
                    "Dominica","St Lucia","St Vincent","Grenada","Antigua","Diaspora caribéenne","Caribbean (général)"}

def validate_record(r, idx):
    errors = []
    warnings = []

    # Champs requis
    for f in REQUIRED:
        if f not in r or r[f] is None or r[f] == "":
            errors.append(f"Champ requis manquant: {f}")

    # Format cms_id
    if "cms_id" in r and not ID_PATTERN.match(str(r.get("cms_id",""))):
        errors.append(f"cms_id malformé: {r.get('cms_id')} (attendu: CMS-XXX-YYYY-XXXXXXXX)")

    # lang_code
    if r.get("lang_code") not in LANG_VALUES:
        errors.append(f"lang_code inconnu: '{r.get('lang_code')}' (valeurs: {sorted(LANG_VALUES)})")

    # territory
    if r.get("cms_territory") not in TERRITORY_VALUES:
        errors.append(f"cms_territory inconnu: '{r.get('cms_territory')}'")

    # domain
    if r.get("cms_domain") not in DOMAIN_VALUES:
        errors.append(f"cms_domain inconnu: '{r.get('cms_domain')}'")

    # license
    if r.get("license") not in LICENSE_VALUES:
        errors.append(f"license non conforme: '{r.get('license')}'")

    # date_collected
    if "date_collected" in r and not DATE_PATTERN.match(str(r.get("date_collected",""))):
        errors.append(f"date_collected format invalide: '{r.get('date_collected')}' (attendu: YYYY-MM-DD)")

    # text non vide
    if "text" in r and len(str(r.get("text","")).strip()) < 5:
        errors.append("text trop court (< 5 caractères)")

    # warnings optionnels
    if not r.get("cms_cultural_markers"):
        warnings.append("Aucun marqueur culturel — recommandé")
    if not r.get("cms_verified"):
        warnings.append("cms_verified absent ou false")
    if not r.get("text_translation"):
        warnings.append("Pas de traduction disponible")

    return errors, warnings

def validate_file(path):
    records = []
    parse_errors = []

    with open(path, encoding="utf-8") as f:
        for i, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue
            try:
                records.append((i, json.loads(line)))
            except json.JSONDecodeError as e:
                parse_errors.append(f"Ligne {i}: JSON invalide — {e}")

    print(f"\n{'='*60}")
    print(f"CMS v2.0 — Validateur officiel")
    print(f"Fichier : {path}")
    print(f"{'='*60}")
    print(f"Enregistrements lus : {len(records)}")
    if parse_errors:
        print(f"Erreurs JSON : {len(parse_errors)}")
        for e in parse_errors:
            print(f"  ❌ {e}")

    total_errors = 0
    total_warnings = 0
    records_with_errors = 0

    for idx, r in records:
        errors, warnings = validate_record(r, idx)
        total_errors += len(errors)
        total_warnings += len(warnings)
        if errors:
            records_with_errors += 1
            print(f"\n  Ligne {idx} [{r.get('cms_id','?')}]")
            for e in errors:
                print(f"    ❌ {e}")

    print(f"\n{'='*60}")
    print(f"RÉSULTAT")
    print(f"  Enregistrements valides  : {len(records) - records_with_errors}/{len(records)}")
    print(f"  Enregistrements en erreur: {records_with_errors}")
    print(f"  Erreurs totales          : {total_errors}")
    print(f"  Avertissements           : {total_warnings}")

    if total_errors == 0:
        print(f"\n✅ CORPUS VALIDE — CMS v2.0 conforme")
    else:
        print(f"\n❌ CORPUS NON CONFORME — {total_errors} erreur(s) à corriger")

    return total_errors == 0

if __name__ == "__main__":
    path = sys.argv[1] if len(sys.argv) > 1 else "/home/claude/corpus_v2_fixed.jsonl"
    ok = validate_file(path)
    sys.exit(0 if ok else 1)

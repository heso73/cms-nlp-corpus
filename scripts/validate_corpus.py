#!/usr/bin/env python3
"""
CMS Corpus Validator — Caribbean Metadata Standard v1.0
Valide la conformité d'un fichier corpus avec le schéma CMS.

Usage:
    python validate_corpus.py data/CMS_corpus_v1_unified.jsonl
"""

import json, sys, os
from datetime import datetime

# Champs obligatoires selon schéma CMS v1.0
REQUIRED_FIELDS = ["cms_id", "lang_code", "cms_territory", "cms_domain", 
                   "text", "source", "license", "date_collected"]

# Valeurs valides
VALID_LANG_CODES = ["hat", "gcf", "acf", "jam", "pap", "srn", "fra", "eng", "spa", "nld", "other"]
VALID_DOMAINS = ["music", "dance", "theatre", "literature", "oral_tradition",
                 "intangible_heritage", "religion", "gastronomy", "carnival",
                 "visual_arts", "education", "general", "news", "social_media"]
VALID_LICENSES = ["CC0", "CC-BY 2.0", "CC-BY 4.0", "CC-BY-SA 4.0",
                  "MIT", "Apache 2.0", "proprietary", "unknown"]

def validate_record(record, line_num):
    errors = []
    warnings = []

    # Champs obligatoires
    for field in REQUIRED_FIELDS:
        if field not in record or not record[field]:
            errors.append(f"Champ obligatoire manquant ou vide : '{field}'")

    # Validation cms_id
    if "cms_id" in record:
        cms_id = record["cms_id"]
        if not cms_id.startswith("CMS-"):
            errors.append(f"cms_id invalide (doit commencer par 'CMS-') : {cms_id}")

    # Validation lang_code
    if "lang_code" in record:
        if record["lang_code"] not in VALID_LANG_CODES:
            warnings.append(f"lang_code non standard : {record['lang_code']} (acceptable si justifié)")

    # Validation cms_domain
    if "cms_domain" in record:
        if record["cms_domain"] not in VALID_DOMAINS:
            errors.append(f"cms_domain invalide : {record['cms_domain']}")

    # Validation texte minimum
    if "text" in record:
        if len(record["text"].split()) < 5:
            warnings.append(f"Texte très court ({len(record['text'].split())} mots)")

    # Validation date
    if "date_collected" in record:
        try:
            datetime.strptime(record["date_collected"], "%Y-%m-%d")
        except ValueError:
            errors.append(f"Format date invalide (attendu YYYY-MM-DD) : {record['date_collected']}")

    return errors, warnings


def validate_file(filepath):
    print(f"\n🔍 Validation CMS : {filepath}")
    print("=" * 60)

    if not os.path.exists(filepath):
        print(f"❌ Fichier introuvable : {filepath}")
        return False

    total = 0
    valid = 0
    total_errors = 0
    total_warnings = 0

    with open(filepath, encoding="utf-8") as f:
        for line_num, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue
            total += 1

            try:
                record = json.loads(line)
            except json.JSONDecodeError as e:
                print(f"  ❌ Ligne {line_num} : JSON invalide — {e}")
                total_errors += 1
                continue

            errors, warnings = validate_record(record, line_num)

            if errors:
                print(f"  ❌ Ligne {line_num} [{record.get('cms_id', '?')}]")
                for err in errors:
                    print(f"     → {err}")
                total_errors += len(errors)
            elif warnings:
                print(f"  ⚠️  Ligne {line_num} [{record.get('cms_id', '?')}]")
                for warn in warnings:
                    print(f"     → {warn}")
                total_warnings += len(warnings)
                valid += 1
            else:
                valid += 1

    print("\n" + "=" * 60)
    print(f"📊 Résultats :")
    print(f"   Total enregistrements : {total}")
    print(f"   ✅ Valides            : {valid}")
    print(f"   ❌ Erreurs            : {total_errors}")
    print(f"   ⚠️  Avertissements    : {total_warnings}")

    if total_errors == 0:
        print(f"\n✅ Corpus CMS-conforme !")
        return True
    else:
        print(f"\n❌ Corpus non conforme — {total_errors} erreur(s) à corriger")
        return False


if __name__ == "__main__":
    filepath = sys.argv[1] if len(sys.argv) > 1 else "data/CMS_corpus_v1_unified.jsonl"
    success = validate_file(filepath)
    sys.exit(0 if success else 1)


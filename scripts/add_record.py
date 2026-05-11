#!/usr/bin/env python3
"""
CMS Add Record — Caribbean Metadata Standard v1.0
Ajoute un enregistrement conforme au corpus CMS.

Usage:
    python add_record.py \
      --lang hat \
      --territory Haiti \
      --domain music \
      --markers konpa bele \
      --text "Votre texte ici" \
      --source "France-Antilles" \
      --source-url "https://example.com/article" \
      --license "CC-BY 4.0" \
      --output data/CMS_corpus_v1_unified.jsonl
"""

import argparse, json, uuid
from datetime import date

def generate_cms_id(lang_code):
    unique = str(uuid.uuid4())[:8].upper()
    return f"CMS-{lang_code.upper()}-{date.today().year}-{unique}"

LANG_NAMES = {
    "hat": "Créole haïtien",
    "gcf": "Créole guadeloupéen",
    "acf": "Créole antillais",
    "jam": "Jamaican Patois",
    "pap": "Papiamentu",
    "srn": "Sranan Tongo",
    "fra": "Français caribéen",
    "eng": "English Caribbean",
    "spa": "Español caribeño",
    "nld": "Nederlands Caribisch",
}

def main():
    parser = argparse.ArgumentParser(description="Ajouter un enregistrement au corpus CMS")
    parser.add_argument("--lang", required=True, help="Code ISO 639-3 (ex: hat, gcf, jam)")
    parser.add_argument("--territory", required=True, help="Territoire caribéen")
    parser.add_argument("--domain", required=True, help="Domaine culturel (music, dance, carnival...)")
    parser.add_argument("--markers", nargs="+", default=[], help="Marqueurs culturels")
    parser.add_argument("--text", required=True, help="Texte brut")
    parser.add_argument("--translation-fr", default="", help="Traduction française")
    parser.add_argument("--source", required=True, help="Source du texte")
    parser.add_argument("--source-url", default="", help="URL source")
    parser.add_argument("--license", default="CC-BY 4.0", help="Licence")
    parser.add_argument("--verified", action="store_true", help="Vérifié par un humain")
    parser.add_argument("--output", default="data/CMS_corpus_v1_unified.jsonl", 
                        help="Fichier de sortie")
    args = parser.parse_args()

    record = {
        "cms_id": generate_cms_id(args.lang),
        "lang_code": args.lang,
        "lang_name": LANG_NAMES.get(args.lang, args.lang),
        "cms_territory": args.territory,
        "cms_domain": args.domain,
        "cms_cultural_markers": args.markers,
        "text": args.text,
        "text_translation": {"fr": args.translation_fr} if args.translation_fr else {},
        "source": args.source,
        "source_url": args.source_url,
        "license": args.license,
        "cms_annotation_type": "cultural_tagging",
        "date_collected": str(date.today()),
        "cms_verified": args.verified,
        "word_count": len(args.text.split())
    }

    # Afficher le record
    print("\n📝 Enregistrement créé :")
    print(json.dumps(record, ensure_ascii=False, indent=2))

    # Ajouter au fichier
    with open(args.output, "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")

    print(f"\n✅ Ajouté à {args.output}")
    print(f"   ID : {record['cms_id']}")
    print(f"   Langue : {record['lang_name']} ({args.lang})")
    print(f"   Territoire : {args.territory}")
    print(f"   Domaine : {args.domain}")

if __name__ == "__main__":
    main()


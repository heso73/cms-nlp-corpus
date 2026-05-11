# Caribbean Metadata Standard — NLP Corpus
### Premier corpus culturel caribéen officiel · v1.0 · Mai 2026

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightblue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Standard: CMS v1.0](https://img.shields.io/badge/Standard-CMS%20v1.0-00C2C7.svg)](https://caribbeanmetadata.org)
[![IFLA METATEC](https://img.shields.io/badge/IFLA-METATEC%20Review-003E6B.svg)](https://www.ifla.org/units/metatec/)
[![CROSQ NWIP](https://img.shields.io/badge/CROSQ-NWIP%20Submitted-FFC93C.svg)](https://website.crosq.org)

---

## Qu'est-ce que le CMS ?

Le **Caribbean Metadata Standard (CMS)** n'est pas un simple corpus linguistique.  
C'est un **instrument de certification culturelle** — le premier standard régional 
pour décrire, certifier et protéger les droits des œuvres caribéennes sur les 
plateformes mondiales (Netflix, Spotify, Amazon, YouTube).

> *Les corpus linguistiques existants décrivent les langues.  
> Le CMS certifie les œuvres, protège les droits, et impose  
> une identité culturelle que les plateformes doivent respecter.*

---

## Ce que ce corpus apporte

Les corpus créoles existants (CreoleVal, Kreyol-MT) couvrent :
- Éducation · Religion · Wikipedia général

**Ce corpus CMS couvre ce que personne n'a encore :**
- Musique traditionnelle (gwo ka, bèlè, konpa, zouk, calypso, reggae...)
- Danse et arts du spectacle (quadrille créole, danmyé, kalenda...)
- Carnaval et patrimoine festif (mas, tumba, rara...)
- Patrimoine immatériel certifié UNESCO

---

## Structure du corpus

```
cms-nlp-corpus/
├── README.md                          # Ce fichier
├── LICENSE                            # CC-BY 4.0
├── CITATION.cff                       # Comment citer ce corpus
├── data/
│   ├── CMS_corpus_schema_v1.json      # Schéma de métadonnées officiel
│   └── CMS_corpus_v1_unified.jsonl    # Corpus unifié (JSONL)
├── docs/
│   ├── SCHEMA.md                      # Documentation du schéma
│   ├── LANGUAGES.md                   # Langues couvertes
│   └── CULTURAL_MARKERS.md            # Marqueurs culturels définis
└── scripts/
    ├── validate_corpus.py             # Valider un fichier corpus
    └── add_record.py                  # Ajouter un enregistrement
```

---

## Statistiques v1.0

| Métrique | Valeur |
|----------|--------|
| Enregistrements | 15 |
| Langues couvertes | 8 |
| Marqueurs culturels | 15 |
| Territoires | 8 |
| Tous vérifiés schéma | ✅ |

### Langues

| Code | Langue | Territoire |
|------|--------|------------|
| `hat` | Créole haïtien | Haïti |
| `gcf` | Créole guadeloupéen | Guadeloupe |
| `acf` | Créole antillais | Martinique |
| `jam` | Jamaican Patois | Jamaïque |
| `pap` | Papiamentu | Aruba · Curaçao |
| `fra` | Français caribéen | Antilles FR |
| `spa` | Español caribeño | Cuba · RD · PR |
| `eng` | English Caribbean | Trinidad · Barbados |

### Marqueurs culturels

`bèlè` · `gwo ka` · `konpa` · `zouk` · `calypso` · `soca` · `reggae` · 
`dancehall` · `tumba` · `son cubano` · `salsa` · `quadrille créole` · 
`danmyé` · `kalenda` · `chanté Noël`

---

## Schéma de métadonnées

Chaque enregistrement suit le schéma CMS v1.0 :

```json
{
  "cms_id": "CMS-HAT-2026-A1B2C3D4",
  "lang_code": "hat",
  "lang_name": "Créole haïtien",
  "cms_territory": "Haiti",
  "cms_domain": "music",
  "cms_cultural_markers": ["konpa"],
  "text": "Konpa se yon mizik ki soti Ayiti...",
  "text_translation": {"fr": "Le konpa est une musique..."},
  "source": "CMS Initiative",
  "source_url": "https://caribbeanmetadata.org",
  "license": "CC-BY 4.0",
  "cms_annotation_type": "cultural_tagging",
  "date_collected": "2026-05-11",
  "cms_verified": true,
  "word_count": 32
}
```

---

## Reconnaissance internationale en cours

| Institution | Statut | Date |
|-------------|--------|------|
| IFLA METATEC | 🔄 Sous examen | Mai 2026 |
| CROSQ CARICOM | 🔄 NWIP soumis | Mai 2026 |
| AFNOR / ISO TC 46 | 🔄 Soumis | Mai 2026 |
| UNESCO ICH | 🔄 Soumis | Mai 2026 |
| WIPO | 🔄 Soumis | Mai 2026 |
| W3C | 🔄 Soumis | Mai 2026 |
| Dublin Core | 🔄 Soumis | Mai 2026 |
| ACS-AEC | 🔄 Soumis | Mai 2026 |
| ACURIL | 🔄 Soumis | Mai 2026 |

---

## Comment contribuer

Le corpus CMS grandit par contributions — artistes, chercheurs, 
institutions culturelles caribéennes sont invités à enrichir ce corpus.

### Ajouter un enregistrement

```bash
python scripts/add_record.py \
  --lang hat \
  --territory Haiti \
  --domain music \
  --markers konpa \
  --text "Votre texte ici" \
  --source "Votre source"
```

### Critères de contribution

1. Le texte doit être en langue caribéenne ou sur la culture caribéenne
2. La source doit être citée
3. La licence doit être compatible (CC, domaine public, ou droit de citation)
4. Au moins un marqueur culturel caribéen doit être présent

---

## Citation

```bibtex
@dataset{cms_nlp_corpus_2026,
  author       = {CMS Initiative},
  title        = {Caribbean Metadata Standard NLP Corpus v1.0},
  year         = {2026},
  publisher    = {GitHub},
  url          = {https://github.com/caribbeanmetadata/cms-nlp-corpus},
  note         = {Premier corpus culturel caribéen certifié CMS},
  license      = {CC-BY 4.0}
}
```

---

## Liens

- 🌐 **Site officiel** : [caribbeanmetadata.org](https://caribbeanmetadata.org)
- 📧 **Contact** : contact@caribbeanmetadata.org
- 📋 **Standard CMS v1.0** : [caribbeanmetadata.org/standard](https://caribbeanmetadata.org)

---

*Caribbean Metadata Standard Initiative · Guadeloupe, Caraïbe · 2026*  
*Certifier les œuvres caribéennes. Protéger les droits. Imposer une identité culturelle.*

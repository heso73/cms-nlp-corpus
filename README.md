# Caribbean Metadata Standard — NLP Corpus
### Corpus linguistique pédagogique bilingue · v2.0 · Mai 2026

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightblue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Standard: CMS v2.0](https://img.shields.io/badge/Standard-CMS%20v2.0-00C2C7.svg)](https://caribbeanmetadata.org)

---

## Qu'est-ce que ce corpus ?

Ce dépôt contient un **corpus linguistique** de 110 courts textes bilingues
(langue caribéenne créole/régionale + traduction française), portant sur des
thèmes culturels caribéens (musique, carnaval, patrimoine, langue, diaspora).

**Important — ce que ce corpus n'est pas :** il ne s'agit pas d'un catalogue
d'œuvres culturelles individuelles (films, chansons, livres avec créateur et
date). C'est un ensemble d'exemples de texte court, généré à des fins
pédagogiques et de démonstration du schéma linguistique CMS, illustrant des
sujets et un vocabulaire culturel caribéen.

Le **véritable catalogue d'œuvres culturelles** du Caribbean Metadata
Standard — œuvres individuelles sourcées, avec territoire, langue, année et
certification — est disponible séparément via l'API publique CMS
(`https://cms-api.small-disk-3275.workers.dev/api/v2`) et grandit en continu
par ingestion automatisée. Voir [caribbeanmetadata.org/developers.html](https://caribbeanmetadata.org/developers.html).

---

## Statut de vérification

Aucun enregistrement de ce corpus n'a fait l'objet d'une vérification
humaine individuelle à ce jour (`cms_verified: false` pour toutes les
entrées). Le contenu a été généré comme jeu d'exemples pour illustrer le
schéma de métadonnées linguistiques CMS, et n'a pas valeur de source
culturelle ou historique vérifiée. Toute contribution apportant une
vérification, une correction, ou une source primaire est bienvenue — voir
la section Contribuer ci-dessous.

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
│   └── CMS_corpus_v2_unified.jsonl    # Corpus unifié (JSONL)
├── docs/
│   ├── SCHEMA.md                      # Documentation du schéma
│   ├── LANGUAGES.md                   # Langues couvertes
│   └── CULTURAL_MARKERS.md            # Marqueurs culturels définis
└── scripts/
    ├── validate_corpus.py             # Valider un fichier corpus
    └── add_record.py                  # Ajouter un enregistrement
```

---

## Statistiques v2.0

| Métrique | Valeur |
|----------|--------|
| Enregistrements | 110 |
| Langues couvertes | 10 |
| Marqueurs culturels | 27 |
| Territoires évoqués | 17 |
| Domaines culturels | 14 |
| Conformes au schéma | ✅ |
| Vérification humaine individuelle | ❌ Aucune à ce jour |

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
| `nld` | Nederlands Caribisch | Suriname · Antilles NL |
| `srn` | Sranan Tongo | Suriname |

### Marqueurs culturels

`gwo_ka` · `bèlè` · `konpa` · `zouk` · `calypso` · `soca` · `reggae` · `ska` ·
`dancehall` · `tumba` · `son_cubano` · `salsa` · `bachata` · `merengue` · `rara` ·
`vodou` · `orisha` · `rastafari` · `carnival` · `mas` · `kadans` · `bouyon` ·
`kaseko` · `quadrille_créole` · `danmyé` · `kalenda` · `chanté_Noël`

---

## Schéma de métadonnées

Chaque enregistrement suit le schéma CMS v2.0 :

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
  "cms_verified": false,
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
  title        = {Caribbean Metadata Standard — Linguistic Example Corpus v2.0},
  year         = {2026},
  publisher    = {GitHub},
  url          = {https://github.com/heso73/cms-nlp-corpus},
  note         = {Corpus pédagogique bilingue, non vérifié individuellement},
  license      = {CC-BY 4.0}
}
```

---

## Liens

- 🌐 **Site officiel** : [caribbeanmetadata.org](https://caribbeanmetadata.org)
- 📧 **Contact** : contact@caribbeanmetadata.org
- 📋 **Standard CMS v2.0** : [caribbeanmetadata.org/standard](https://caribbeanmetadata.org)

---

*Caribbean Metadata Standard Initiative · Guadeloupe, Caraïbe · 2026*  
*Corpus linguistique d'exemple pour le standard CMS — le catalogue d'œuvres certifiées vit dans l'API publique.*

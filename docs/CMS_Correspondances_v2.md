# Table de Correspondances — Caribbean Metadata Standard v2.0

> Caribwood Language Lab · Guadeloupe, Caraïbe · Juin 2026  
> Alignement avec les standards internationaux  
> Licence : CC-BY 4.0 · caribbeanmetadata.org

---

## 1. Objet du document

Ce document établit la table de correspondance entre les champs du Caribbean Metadata Standard (CMS) v2.0 et les principaux standards de métadonnées internationaux : **Dublin Core**, **schema.org**, **MARC 21** et **EBUCore**.

L'objectif est double : démontrer la compatibilité technique du CMS avec l'écosystème mondial des standards, et faciliter l'interopérabilité pour les plateformes et institutions qui souhaitent intégrer le CMS dans leurs systèmes existants.

---

## 2. CMS v2.0 — Dublin Core (DC)

Dublin Core est le standard de métadonnées le plus largement adopté dans le monde bibliothéconomique et documentaire. Le CMS est conçu pour **étendre** Dublin Core, non le remplacer.

| Champ CMS | Équivalent Dublin Core | Élément DC | Notes |
|---|---|---|---|
| `cms_id` | Identifier | `dc:identifier` | Identifiant unique CMS |
| `lang_code` | Language | `dc:language` | Code ISO 639-3 étendu |
| `cms_territory` | Coverage | `dc:coverage` | Territoire caribéen spécifique |
| `cms_domain` | Type | `dc:type` | Domaine culturel caribéen |
| `text` | Description | `dc:description` | Contenu textuel principal |
| `source` | Source | `dc:source` | Origine du contenu |
| `license` | Rights | `dc:rights` | Licence CC-BY 4.0 |
| `date_collected` | Date | `dc:date` | Date de collecte ISO 8601 |
| `cms_cultural_markers` | Subject | `dc:subject` | Marqueurs culturels caribéens — extension CMS |
| `text_translation` | — | — | Sans équivalent DC — extension CMS exclusive |

---

## 3. CMS v2.0 — schema.org

schema.org est le vocabulaire structuré utilisé par Google, Bing et les grands moteurs de recherche pour comprendre et indexer les contenus. L'alignement CMS–schema.org est **stratégique** : il permet aux contenus caribéens certifiés CMS d'être correctement interprétés par les algorithmes de découverte.

| Champ CMS | Propriété schema.org | Type schema.org | Notes |
|---|---|---|---|
| `cms_id` | `identifier` | `schema:CreativeWork` | |
| `lang_code` | `inLanguage` | `schema:CreativeWork` | Code BCP 47 recommandé |
| `cms_territory` | `locationCreated` | `schema:Place` | Territoire caribéen |
| `cms_domain` | `genre` | `schema:CreativeWork` | Domaine culturel |
| `text` | `text` / `description` | `schema:CreativeWork` | |
| `source` | `provider` | `schema:Organization` | |
| `license` | `license` | `schema:CreativeWork` | URL de la licence |
| `date_collected` | `dateCreated` | `schema:CreativeWork` | |
| `cms_cultural_markers` | `keywords` | `schema:CreativeWork` | Tags culturels caribéens |
| `cms_compliance.level` | — | — | Extension CMS — badge culturel |
| `cms_compliance.score` | — | — | Extension CMS — score d'ancrage |

---

## 4. CMS v2.0 — MARC 21

MARC 21 est le standard de catalogage utilisé par les bibliothèques nationales et universitaires du monde entier. La correspondance CMS–MARC 21 permet aux institutions culturelles caribéennes d'intégrer le CMS dans leurs systèmes de catalogage existants.

| Champ CMS | Zone MARC 21 | Sous-zone | Notes |
|---|---|---|---|
| `cms_id` | 035 | `$a` | Numéro de contrôle |
| `lang_code` | 041 | `$a` | Code langue ISO 639-3 |
| `cms_territory` | 651 | `$a` | Entrée géographique |
| `cms_domain` | 655 | `$a` | Terme de genre/forme |
| `text` | 520 | `$a` | Résumé / note de contenu |
| `source` | 786 | `$t` | Source dérivée |
| `license` | 540 | `$a` | Note sur les droits |
| `date_collected` | 583 | `$c` | Date d'action |
| `cms_cultural_markers` | 650 | `$a` | Vedette-matière — sujet |
| `cms_verified` | 583 | `$a` | Note de traitement |

---

## 5. CMS v2.0 — EBUCore

EBUCore est le standard de métadonnées de l'Union Européenne de Radio-Télévision (EBU), spécifiquement conçu pour les **contenus audiovisuels**. C'est le standard le plus pertinent pour CaribWood Production et les créateurs audiovisuels caribéens.

| Champ CMS | Élément EBUCore | Notes |
|---|---|---|
| `cms_id` | `ebucore:identifier` | Identifiant unique |
| `lang_code` | `ebucore:language` | Langue principale du contenu |
| `cms_territory` | `ebucore:coverage` | Zone géographique de production |
| `cms_domain` | `ebucore:type` | Genre audiovisuel |
| `text` | `ebucore:description` | Description du contenu |
| `source` | `ebucore:publisher` | Éditeur / producteur |
| `license` | `ebucore:rights` | Droits d'utilisation |
| `cms_cultural_markers` | `ebucore:subject` | Sujets et thèmes culturels |
| `cms_compliance.level` | — | Extension CMS — sans équivalent EBUCore |

---

## 6. Champs exclusifs CMS — sans équivalent international

Certains champs du CMS n'ont pas d'équivalent dans les standards existants. C'est précisément là que réside la **valeur ajoutée du standard** : il comble des lacunes que les standards génériques ne pouvaient pas anticiper.

| Champ CMS exclusif | Description | Justification |
|---|---|---|
| `cms_cultural_markers` | Marqueurs culturels caribéens spécifiques (gwo_ka, bèlè, konpa...) | Inexistants dans tout standard générique |
| `cms_compliance.level` | Niveau de certification culturelle (bronze/silver/gold/platinum) | Système de badge propre au CMS |
| `cms_compliance.score` | Score d'ancrage caribéen (0–100) | Métrique exclusive CMS |
| `cms_territory` | Territoire caribéen précis (Guadeloupe, Haïti, Jamaïque...) | Granularité absente des standards génériques |
| `cms_verified` | Vérifié par un annotateur humain caribéen | Critère de qualité culturelle spécifique |

---

## 7. Exemple d'implémentation JSON-LD

Fiche CMS exportée en JSON-LD schema.org, directement lisible par les algorithmes des grandes plateformes :

```json
{
  "@context": "https://schema.org",
  "@type": "MusicRecording",
  "identifier": "CMS-GCF-2026-A1B2C3D4",
  "inLanguage": "gcf",
  "locationCreated": {
    "@type": "Place",
    "name": "Guadeloupe"
  },
  "genre": "music",
  "keywords": ["gwo_ka"],
  "cms:complianceLevel": "gold",
  "cms:score": 85,
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

---

## 8. Statut de reconnaissance internationale

| Institution | Statut | Date |
|---|---|---|
| IFLA METATEC | 🔄 Sous examen | Mai 2026 |
| CROSQ CARICOM | 🔄 NWIP soumis | Mai 2026 |
| AFNOR / ISO TC 46 | 🔄 Soumis | Mai 2026 |
| UNESCO ICH | 🔄 Soumis | Mai 2026 |
| W3C | 🔄 Soumis | Mai 2026 |
| Dublin Core Metadata Initiative | 🔄 Soumis | Mai 2026 |
| ACURIL | 🔄 Soumis | Mai 2026 |

---

*Caribbean Metadata Standard v2.0 · caribbeanmetadata.org · CC-BY 4.0*

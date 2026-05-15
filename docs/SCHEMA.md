# Schéma de métadonnées CMS v2.0
## Documentation complète des champs

> Mis à jour le 15 mai 2026 — Version 2.0

---

### Champs obligatoires

| Champ | Type | Description | Exemple |
|-------|------|-------------|---------|
| `cms_id` | string | Identifiant unique CMS | `CMS-HAT-2026-A1B2C3D4` |
| `cms_compliance_level` | string | Niveau badge CMS-Compliant | `gold` |
| `cms_score` | integer | Score d'ancrage caribéen (0-100) | `72` |
| `lang_code` | string | Code ISO 639-3 | `hat` |
| `cms_territory` | string | Territoire caribéen | `Haiti` |
| `cms_domain` | string | Domaine culturel | `music` |
| `text` | string | Texte brut | `Konpa se yon mizik...` |
| `source` | string | Source du texte | `France-Antilles` |
| `license` | string | Licence du contenu | `CC-BY 4.0` |
| `date_collected` | string | Date ISO 8601 | `2026-05-11` |

---

### Champs optionnels

| Champ | Type | Description |
|-------|------|-------------|
| `lang_name` | string | Nom lisible de la langue |
| `cms_cultural_markers` | array | Marqueurs culturels caribéens |
| `text_translation` | object | Traductions `{lang_code: texte}` |
| `source_url` | string | URL source |
| `cms_rights_holder` | string | Ayant droit ou institution |
| `cms_compliance_level` | string | Niveau badge (bronze/silver/gold/platinum) |
| `cms_score` | integer | Score d'ancrage caribéen (0-100) |
| `cms_badge_url` | string | URL du badge SVG CMS-Compliant |
| `cms_annotation_type` | string | Type d'annotation NLP |
| `cms_verified` | boolean | Vérifié par un annotateur humain |
| `word_count` | integer | Nombre de mots |

---

### Valeurs valides — `lang_code`

| Code | Langue | Territoire principal |
|------|--------|---------------------|
| `hat` | Créole haïtien | Haïti |
| `gcf` | Créole guadeloupéen | Guadeloupe |
| `acf` | Créole antillais | Martinique |
| `jam` | Jamaican Patois | Jamaïque |
| `pap` | Papiamentu | Aruba · Curaçao |
| `srn` | Sranan Tongo | Suriname |
| `fra` | Français caribéen | Antilles FR · Haïti |
| `eng` | English Caribbean | Trinidad · Barbados · Jamaica |
| `spa` | Español caribeño | Cuba · RD · Puerto Rico |
| `nld` | Nederlands Caribisch | Suriname · Antilles NL |

---

### Valeurs valides — `cms_domain`

| Domaine | Description |
|---------|-------------|
| `music` | Musique — tous genres caribéens |
| `dance` | Danse — traditionnelle et contemporaine |
| `theatre` | Théâtre · arts de la scène |
| `literature` | Littérature · poésie · conte |
| `oral_tradition` | Tradition orale · proverbes · récits |
| `intangible_heritage` | Patrimoine immatériel UNESCO |
| `religion` | Pratiques religieuses · spiritualité |
| `gastronomy` | Gastronomie · cuisine caribéenne |
| `carnival` | Carnaval · fêtes traditionnelles |
| `visual_arts` | Arts visuels · peinture · sculpture |
| `education` | Éducation · académique |
| `general` | Général |
| `news` | Presse · actualité |
| `social_media` | Réseaux sociaux |

---

### Marqueurs culturels caribéens définis

#### Musique
`konpa` · `zouk` · `gwo_ka` · `bele` · `calypso` · `soca` · `reggae` · 
`dancehall` · `ska` · `rocksteady` · `son_cubano` · `salsa` · `merengue` · 
`bachata` · `palo` · `kaseko` · `tumba` · `bouyon` · `kadans` · `rara`

#### Danse
`quadrille_creole` · `danmye` · `kalenda` · `mas` · `bele` · `laghia`

#### Patrimoine
`carnival` · `chante_noel` · `chanté_mas` · `vodou` · `orisha` · 
`rastafari` · `maroon_culture`

---

### Niveaux Badge CMS-Compliant v2.0

| Niveau | Score minimum | Description |
|--------|--------------|-------------|
| `bronze` | ≥ 20 pts | Ancrage caribéen minimal |
| `silver` | ≥ 40 pts | Contenu caribéen identifié |
| `gold` | ≥ 65 pts | Contenu caribéen affirmé |
| `platinum` | ≥ 85 pts | Standard caribéen de référence |

Le badge SVG est généré automatiquement via le Validateur CMS — [caribbeanmetadata.org/validator.html](https://caribbeanmetadata.org/validator.html)


---

### Format de l'identifiant cms_id

```
CMS-{LANG}-{ANNÉE}-{UNIQUE8}
```

Exemples :
- `CMS-HAT-2026-A1B2C3D4` — Créole haïtien, 2026
- `CMS-GCF-2026-E5F6G7H8` — Créole guadeloupéen, 2026
- `CMS-FRA-2026-I9J0K1L2` — Français caribéen, 2026

---

*Caribbean Metadata Standard v2.0 · caribbeanmetadata.org*

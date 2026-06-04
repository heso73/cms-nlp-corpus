# Charte de Gouvernance — Caribbean Metadata Standard v2.0

> Caribwood Language Lab · Guadeloupe, Caraïbe · Juin 2026  
> Structure de décision, contribution et versioning  
> Licence : CC-BY 4.0 · caribbeanmetadata.org

---

## 1. Vision et principes fondateurs

Le Caribbean Metadata Standard (CMS) est plus qu'un outil technique. C'est une **déclaration de souveraineté culturelle** — le premier standard régional conçu pour que les contenus caribéens soient correctement décrits, indexés et valorisés dans l'économie numérique mondiale.

Sa gouvernance repose sur trois principes inviolables :

- **Ancrage caribéen** — les décisions sur le standard sont prises par et pour la Caraïbe
- **Ouverture** — le CMS est open source (CC-BY 4.0), accessible à tous
- **Rigueur** — toute évolution du standard est documentée, versionnée et validée

---

## 2. Structure de gouvernance

### 2.1 Le Caribwood Language Lab — organe fondateur

Le Caribwood Language Lab, ancré en Guadeloupe, est l'organe fondateur et gardien du standard. Il assure la cohérence intellectuelle, culturelle et technique du CMS. Ses responsabilités :

- Publication et maintenance des versions officielles du standard
- Validation finale des évolutions majeures
- Coordination avec les institutions internationales (IFLA, CROSQ, UNESCO...)
- Animation de la communauté des contributeurs

### 2.2 Le Comité Culturel — validation des marqueurs

Le Comité Culturel est composé de représentants des différentes zones linguistiques et culturelles caribéennes. Son rôle est de valider la pertinence et l'exactitude culturelle des marqueurs CMS.

| Zone | Langues concernées | Représentation |
|---|---|---|
| Caraïbe francophone | gcf, acf, hat, fra | Guadeloupe, Martinique, Haïti, Guyane |
| Caraïbe anglophone | eng, jam | Jamaïque, Trinidad, Barbade, Petites Antilles |
| Caraïbe hispanique | spa | Cuba, République Dominicaine, Puerto Rico |
| Caraïbe néerlandophone | pap, srn, nld | Aruba, Curaçao, Suriname |

### 2.3 Les contributeurs — communauté ouverte

Tout créateur, chercheur, institution ou plateforme peut contribuer au CMS selon les modalités définies à la section 4. Les contributions sont examinées par le Language Lab et soumises au Comité Culturel pour validation.

---

## 3. Politique de versioning

Le CMS suit la convention **Semantic Versioning (SemVer)** : `MAJEUR.MINEUR.CORRECTIF`

| Type de version | Déclencheur | Processus de validation |
|---|---|---|
| Majeure (ex: 2.0 → 3.0) | Refonte structurelle des 6 familles ou du schéma | Consultation communautaire 60 jours + Comité Culturel + Language Lab |
| Mineure (ex: 2.0 → 2.1) | Ajout de nouveaux marqueurs ou domaines | Validation Comité Culturel + Language Lab — 30 jours |
| Correctif (ex: 2.0 → 2.0.1) | Correction d'erreur, clarification de définition | Validation Language Lab — 7 jours |

Toutes les versions sont archivées sur GitHub avec un tag versionné et un changelog complet.

---

## 4. Processus de contribution

### 4.1 Contribuer au corpus NLP

Pour ajouter des enregistrements au corpus CMS :

1. Forker le repo GitHub `cms-nlp-corpus`
2. Ajouter les enregistrements via `scripts/add_record.py`
3. Valider via `scripts/validate_corpus.py` — **zéro erreur requis**
4. Soumettre une Pull Request avec description des enregistrements ajoutés
5. Examen par le Language Lab sous 15 jours ouvrés

### 4.2 Proposer un nouveau marqueur culturel

Un nouveau marqueur culturel doit répondre aux critères suivants :

- **Spécificité caribéenne** — le marqueur ne doit pas être réductible à une catégorie générique mondiale
- **Documentation** — une définition, un territoire d'origine, et au moins un exemple d'usage doivent être fournis
- **Validation culturelle** — le marqueur doit être validé par un représentant de la zone concernée au sein du Comité Culturel

### 4.3 Critères de qualité des enregistrements

| Critère | Requis | Recommandé |
|---|---|---|
| Texte en langue caribéenne ou sur culture caribéenne | Oui | |
| Source citée | Oui | |
| Licence compatible (CC, domaine public) | Oui | |
| Au moins un marqueur culturel | Non | Fortement recommandé |
| Traduction française fournie | Non | Recommandé |
| Vérifié par annotateur humain (`cms_verified: true`) | Non | Recommandé |
| Longueur minimum 10 mots | Oui | |

---

## 5. Politique de licences

Le CMS et tous ses composants (standard, corpus, schémas, outils) sont publiés sous licence **Creative Commons CC-BY 4.0**.

Toute personne ou organisation peut :
- Utiliser le CMS librement, y compris à des fins commerciales
- Modifier et adapter le standard pour ses propres besoins
- Distribuer des versions modifiées

À condition de :
- Citer le **Caribbean Metadata Standard** et le **Caribwood Language Lab** comme source
- Indiquer si des modifications ont été apportées

Les contributions au corpus doivent être fournies sous une licence compatible : `CC0`, `CC-BY 2.0`, `CC-BY 4.0`, `CC-BY-SA 4.0`, `MIT`, `Apache 2.0`, ou domaine public.

---

## 6. Résolution des conflits

En cas de désaccord sur une évolution du standard ou l'inclusion d'un marqueur culturel :

1. Discussion ouverte sur le repo GitHub (Issues) — **15 jours**
2. Médiation par le Comité Culturel — **15 jours supplémentaires**
3. Décision finale du Caribwood Language Lab — **sans appel**

Le Language Lab s'engage à motiver toute décision finale et à la documenter dans le changelog de la version concernée.

---

## 7. Contact et ressources

| Organe | Contact / Ressource |
|---|---|
| Caribwood Language Lab | contact@caribbeanmetadata.org |
| Repo GitHub officiel | github.com/heso73/cms-nlp-corpus |
| Site officiel | caribbeanmetadata.org |
| Signaler un problème | GitHub Issues — cms-nlp-corpus |
| Proposer une contribution | GitHub Pull Request |

---

*Caribbean Metadata Standard v2.0 · caribbeanmetadata.org · CC-BY 4.0*

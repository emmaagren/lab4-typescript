# Laboration 4 – Angular II

Det här projektet är skapat som en del av kursen Programmering i TypeScript vid Mittuniversitetet.

## Publicerad webbplats

https://lab4-typescript.netlify.app/

## Beskrivning

Webbapplikationen visar kurser från Webbutvecklingsprogrammets ramschema. Användaren kan söka efter kurser och sortera kurslistan utifrån kurskod, kursnamn eller progression.

## Funktionalitet

- Visar kurser från en JSON-fil i en tabell.
- Hämtar kursinformation med Angular HttpClient via en service.
- Filtrerar kurser utifrån kurskod eller kursnamn.
- Uppdaterar sökresultatet direkt när användaren skriver.
- Sorterar kurser alfabetiskt efter kurskod, kursnamn eller progression.
- Kombinerar sökning och sortering utan att sidan laddas om.
- Har responsiv design som fungerar på både dator och mobil.

## Tekniker

- Angular
- TypeScript
- HTML
- CSS
- Angular Signals och computed()
- Angular HttpClient
- Git och GitHub

## Installation

Klona projektet:

```bash
git clone https://github.com/emmaagren/lab4-typescript.git
```

Gå till projektmappen:

```bash
cd lab4-typescript
```

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
ng serve
```

Öppna sedan `http://localhost:4200` i webbläsaren.

## Kursdata

Kursinformationen kommer från Mittuniversitetets ramschema:

https://webbutveckling.miun.se/files/ramschema.json

JSON-filen finns lokalt i projektets `public`-mapp.

## Github

https://github.com/emmaagren/lab4-typescript.git

## Författare

Emma Ågren 
Student 
Mittuniversitetet
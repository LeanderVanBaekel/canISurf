# canISurf
Rule The World

## Databron

Ik heb gekozen om gebruik te maken van weerdata. Ik ben begonnen met het zoeken naar opensource weerdata. Om in de Internet of Things sfeer te blijven zocht ik op weerdata die door gebruikers gecreëerd wordt. Ik ben terecht gekomen bij [Wunderground.com](https://www.wunderground.com). Wunderground verzameld weerdata van over de hele wereld die door hun community verzameld wordt.

### Voordelen

- Het voordeel van de grote community is dat er veel data is waar je gebruik van kunt maken.

- Je kunt data vinden op plekken waar 'professionele' weersstations niet staan.

### Nadelen

- De data is niet altijd even betrouwbaar omdat niet elk weersstation hetzelfde is.

- Niet elk weersstation geeft dezelfde data terug.

### De API

De site heeft een hele uitgebreide API. Alle functies die ik zou willen gebruiken voor nu, maar ook voor de toekomst zitten er in. Dit komt helaas wel met een prijs. Met de gratis versie van de API mag ik maar 500 calls per dag maken en 10 per minuut.


## Mijn app

Ik wil met mijn applicatie de gebruiker laten weten of het weer goed is om te windsurfen. 

### MVP

- het weer op meerdere plekken laten zien
- duidelijk UI, met één blik zichtbaar
- wind, windrichting, temp
- live updaten

### Zou leuk zijn

- data terug zien
- voorspelling
- eigen instellingen (beginner/gevorderd/expert)
- Notificatie bij verandering (bedacht door maaike)


## Structure

### Server side

#### Main.js
One file with al te servers code. If the code grows to big I can split the code in seperate files like: Startup, Methods, Intervals and Publish. For now it is not necessary because the code is more readable like this.

### Client side

#### Main.html
The main.html provides the main structure for a website. From here the canI template will be renderd.

#### canI html/css/js
The canI template holds the main content of the app. This wil be filled in by the canI.js. The js will make contact with the server and provide the data necessary.
The css file contains css specific to the elements in the canI template.

### Both sides

#### Public
The public file is where all the static files like images can be found. The css in this directory applicable on the whole app.

#### Lib
the lib folder contains libraries and functions that I can use on both the client and server side.
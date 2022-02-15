# Projektplan

## Team navn

Team 1 (Bearnaisee)

## Deltagere:

-   [Martin Tu Lan Nguyen](https://github.com/Martinlanng)
-   [Mads Hougesen](https://github.com/hougesen)
-   [Filip Kuusisto Pedersen](https://github.com/FilipPedersen)
-   [André Hørslev Dijkhuizen](https://github.com/DutchSauce)

## Beskrivelse af ideerne til applikationen

### Plan A - Bearnaisee

En social media platform til deling af opskrifter, hvor man kan dele, like og kommentar samt følge hinanden på platformen. Der vil være mulighed for at kunne scrolle igennem en masse opskrifter eller selv uploade opskrifter.

Målgruppen er madglade/mad interesseret mennesker, der mangler inspiration, idéer eller bare gerne vil dele en opskrift med verdenen.

Dem der vil kunne drage nytte af dette koncept, ville være alle brugere, som befinder sig på siden. Da det er brugergenereret content, er det brugerne der laver content til hinanden. Vi giver dem bare platformen at gøre det på.

### Plan B - SU Opskrift

En applikation som viser opskrifter med hvad de forskellige ingredienser koster og hvor de er billigst at købe.

Produktet vil være både C2C og B2C.
Målgruppen er studerende på SU som mangler inspiration til at kunne lave billige madretter indenfor deres budget.

Dem der kan har nytte af projektet kan være lokale supermarkeder der får muligheden at vise deres tilbud til forskellige opskrifter og de studerende som hurtigt og nemt kan finde frem til billige ingredienser.

## Projektstyring

Team 1 vil bruge en agile scrum board til projektstyringsmetode.

## Risikovurdering

https://docs.google.com/document/d/1aOaY8G56iSpFM0zw2IFkheQnaSA57u7cZvwkJ5FPUaM/edit

## Team kontrakt

### Forventninger

Teamet forventer at alle levere en tilfreds indsats og at slutproduktet er noget alle fra teamet kan stå indenfor.

### Krav

Vi er fleksible med mødetider.
Hvis ikke man kommer eller bliver forhindret/forsinket, gives der en melding.
Hvis der er en fra teamet ikke har mødt op eller svaret efter 2 dage, vil underviseren blive kontaktet.

### Teamets Belbins roller

#### Martin Nguyen

-   Idemager

    -   Styrker: Begavet, kreativ og idérig. Ser vanskelige problemstillinger fra nye vinkler.

    -   Svagheder: Kan være svag i sin kommunikation med andre. Glemsom og ikke praktisk anlagt. Kritikfølsom.

-   Kontakt skaber

    -   Styrker: Udadvendt, entusiastisk, nysgerrig og meddelsom. Undersøger muligheder. Skaber kontakter

    -   Svagheder: Flygtig. Taber let interessen, når den første entusiasme har lagt sig. Taler meget.

-   Formidler

    -   Styrker: Socialt orienteret, udadvendt og skarpt iagttagende. Sensitiv, diplomatisk og fleksibel. God lytter. Undgår gnidninger og skaber et godt klima.

    -   Svagheder: Kan være ubeslutsom og usikker i afgørende situationer. Kan være overfølsom.

#### Mads Hougesen

-   Opstarter

    -   Styrker: Dynamisk, højt gearet og rastløs. Udfordrer og skaber pres, finder veje uden om forhindringer.

    -   Svagheder: Kan have et heftigt temperament. Er utålmodig, påståelig og stædig. Kan virke provokerende.

-   Idemager

    -   Styrker: Begavet, kreativ og idérig. Ser vanskelige problemstillinger fra nye vinkler.

    -   Svagheder: Kan være svag i sin kommunikation med andre. Glemsom og ikke praktisk anlagt. Kritikfølsom.

-   Specialist(?)

    -   Styrker: Bidrager med specialviden og tekniske færdigheder. Stærk fagligt engagement og selvtillid. Meget koncentreret om sine mål og opgaver.

    -   Svagheder: Tendens til at isolere sig og være uinteresseret i andre mennesker. Vogter sit område og bidrager snævert inden for dette.

#### Filip Pedersen

-   Afslutter

    -   Styrker: Omhyggelig og samvittighedsfuld. Leder efter fejl og forglemmelser. Perfektionistisk, vedholdende og præcis.

    -   Svagheder: Kan have en tendens til at bekymre sig unødvendigt. Emsig samt bange for at begå fejl. Utilbøjelig til at delegere.

-   Analysator

    -   Styrker: Analytisk, nøgtern og objektiv. Præcis dømmekraft. Ser alle rationelle aspekter af en sag.

    -   Svagheder: Opfattes ofte som meget direkte, kritisk og skeptisk. Noget træg og ikke så inspirerende for andre.

-   Koordinator

    -   Styrker: Moden, selvsikker og tillidsfuld. Kan prioritere. Klargør mål og frembringer beslutninger. Har øje for andres talenter.

    -   Svagheder: Kan have en tendens til at manipulere og være imperiebygger. Ikke nødvendigvis den mest vidende i teamet.

#### André Hørslev Dijkhuizen

-   Organisator

    -   Styrker: Møder altid op til tiden og er yderst sjælden syg.

    -   Svagheder: Kan godt prøve lidt tid på forandring.

-   Formidler

    -   Styrker: Prøver altid at skabe god stemning i teamet.

    -   Svagheder: Kan godt holde lidt tilbage når det kommer til vigtige beslutninger.

-   Afslutter

    -   Styrker: Går engang imellem ned i de mindste detaljer og kan godt være omhyggelig og bruge tid på opgaver.

    -   Svagheder: Er bange for at begå fejl.

## Beskrivelse af valgt projekt

Gruppen har valgt at arbejde videre med Bearnaisee, social media platformen til deling af opskrifter. Bearnaisee skal være tilgængelig på nettet, så alle har mulighed for at komme ind på den.

Produktet vil være C2C baseret. Som udgangspunkt ville platformen primære indtægt være reklamer. På sigt kan der inkorporeres opskrifter som kræver betaling eller abonnement, og dermed drage inspiration fra Patreon & Only Fans forretningsmodel.

Produkt vil blive lavet som en SPA ved hjælp af Vue.js. Målet er at produktet også kan downloades som en PWA. Til state management vil librariet/patternet Vuex blive brugt til at organisere applikationens state på tværs af komponenterne.

BEM naming convention vil blive brugt til nemmere at kunne for at gøre stylingen mere readable.

Backenden laves i Express. Dertil vil backenden blive koblet på en postgresql database.

Der vil blive opsat workflows til formattering samt linting af kodebasen for at sikre sig en ensartet struktur på tværs af systemet.

# Polskie programistki - Podstawy Dockera
W tym repo znajduje sie mała aplikacja do poćwiczenia dockera. Jest stworzona w Node.js+express i pozwala zapisywac dane w bazie redis. Kiedy wyślesz POST na localhost:3000/<twój_klucz> to aplikacja zapisze to co podasz w body requestu pod <twój_klucz> i kiedy wyślesz GET localhost:3000/<twój_klucz> to w odpowiedzi dostaniesz zapianą przez siebie wartość.

## Zadanie 1 - Pierwszy kontener
- Uruchom kontener z bazą danych redis używając gotowego kontenera z docker hub. Twój kontener powinien udostępniać port 6379. Opcjonalnie możesz też dodać volume, który zapisze dane w folderze ./data.
- Sprawdź status kontenera
- Zatrzymaj kontener
- Uruchom go ponownie (będzie potrzebny do zadanie 2)

## Zadanie 2 - Pierwszy obraz
- w folderze z aplikacja (tym samym w którym zajdują się pliki server.js i package.json) dodaj Dockerfile. Możesz skorzystać z polecenia `docker init` lub dodać go manualnie. Informacje potrzebne do stworzenia docker file: 
    - Aplikacja korzysta z `Node` w wersji `16.16`
    - do zależności używa `npm`
    - do uruchomienia może zostać użyte polecenie `npm start`
    - aplikacja udostępnia port `3000` 
- sprawdź swoje lokalne IP przy pomocy polecenia   `ipconfig` lub `ifconfig` (będzie to dwolne z tych zaczynających się na 172.x.x.x lub 192.x.x.x)
- uruchom kontener z własną aplikacją. Udostępnij port 3000 oraz dodaj zmienną środowiskową (env) HOST=<twoje_lokalne_ip>
- sprawdź czy aplikacja działa wchodząc na `localhost:3000/` i `localhost:3000/kitty`
- możesz też wysłać POST i GET na dowolny inny klucz i sprawdzić czy zostanie zapisany

## Zadanie 3 - docker compose
- utwórz plik compose.yaml (lub skorzystaj z tego stworzonego przez docker init)
- zmodyfikuj go w taki sposób żeby pozwalał na uruchomienie serwisu z db z redisem i server z naszą aplikacją
- uruchom docker compose i sprawdź czy aplikacja działa

## Sprzątanie
Na koniec pora posprzątać po zadaniach, żeby poprzednie zadania nie działały w tle i nie zrzerały zasobów naszych koputerów.
- wyłącz i usuń kontenery z zadań 1 i 2
- zatrzymaj i usuń kontenery uruchomione przy pomocy docker compose
- usuń niepotrzebne już obrazy dockerowe

## Dzięki za wspólną zabawe!
Jeśli masz ochote dalej poćwiczyć to spróbuj stworzyć podobną aplikacje w swoim języku programowania (a jeśli korzystasz z node to z innym frameworkien np. nestem ;) ) i inną bazą danych, a później uruchom je w dockerowych kontenerach tak jak w zadaniach 1, 2 i 3


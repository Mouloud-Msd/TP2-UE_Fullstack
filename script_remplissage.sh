#!/bin/bash

BASE_URL="http://localhost:8080"

declare -A ARTISTS
ARTIST_LIST=(
"Metallica" "Imagine Dragons" "Foo Fighters" "Daft Punk" "Coldplay"
"Green Day" "Billie Eilish" "The Weeknd" "Red Hot Chili Peppers" "Muse"
"Linkin Park" "Nirvana" "Radiohead" "Queen" "U2"
"Arctic Monkeys" "The Killers" "Twenty One Pilots" "Kendrick Lamar" "Post Malone"
"Taylor Swift" "Beyoncé" "Ed Sheeran" "Adele" "Bruno Mars"
"Drake" "Kanye West" "Lady Gaga" "Rihanna" "Sia"
)

for artist in "${ARTIST_LIST[@]}"; do
  echo "Création de l'artiste: $artist"
  artist_id=$(curl -s -X POST "$BASE_URL/artists" \
    -H "Content-Type: application/json" \
    -d "{\"label\":\"$artist\"}")
  echo " -> ID: $artist_id"
  ARTISTS["$artist"]=$artist_id
done

declare -A EVENTS
EVENT_LIST=(
"Hellfest 2025|2025-06-19|2025-06-21"
"Coachella 2025|2025-04-12|2025-04-14"
"Tomorrowland 2025|2025-07-18|2025-07-20"
"Rock en Seine 2025|2025-08-22|2025-08-24"
"Lollapalooza 2025|2025-09-05|2025-09-07"
"Glastonbury 2025|2025-06-25|2025-06-29"
"Reading Festival 2025|2025-08-28|2025-08-30"
"Download Festival 2025|2025-06-12|2025-06-14"
"Rock am Ring 2025|2025-06-05|2025-06-07"
"Rock im Park 2025|2025-06-05|2025-06-07"
"Firefly Festival 2025|2025-06-20|2025-06-22"
"Primavera Sound 2025|2025-06-03|2025-06-07"
"Montreux Jazz Festival 2025|2025-07-04|2025-07-19"
"North Sea Jazz 2025|2025-07-10|2025-07-12"
"Summer Sonic 2025|2025-08-16|2025-08-17"
"Osheaga 2025|2025-07-31|2025-08-02"
"Isle of Wight 2025|2025-06-13|2025-06-15"
"Rock in Rio 2025|2025-09-10|2025-09-15"
"Sziget Festival 2025|2025-08-13|2025-08-20"
"Exit Festival 2025|2025-07-10|2025-07-13"
"Mad Cool 2025|2025-07-08|2025-07-10"
"Lowlands 2025|2025-08-21|2025-08-23"
"Parklife 2025|2025-06-07|2025-06-08"
"Electric Daisy 2025|2025-05-16|2025-05-18"
"Ultra Music 2025|2025-03-28|2025-03-30"
"Coastline 2025|2025-09-15|2025-09-17"
"Festival de Nîmes 2025|2025-07-03|2025-07-05"
"Summer Fest 2025|2025-08-05|2025-08-07"
"Open Air St. Gallen 2025|2025-07-16|2025-07-19"
"Paléo Festival 2025|2025-07-21|2025-07-26"
)

for event_data in "${EVENT_LIST[@]}"; do
  IFS="|" read -r label startDate endDate <<< "$event_data"
  echo "Création de l'événement: $label"
  event_id=$(curl -s -X POST "$BASE_URL/events" \
    -H "Content-Type: application/json" \
    -d "{\"label\":\"$label\",\"startDate\":\"$startDate\",\"endDate\":\"$endDate\"}")
  echo " -> ID: $event_id"
  EVENTS["$label"]=$event_id
done

for event_label in "${!EVENTS[@]}"; do
  event_id=${EVENTS[$event_label]}
  selected_artists=($(printf "%s\n" "${ARTIST_LIST[@]}" | shuf -n3))
  for artist_name in "${selected_artists[@]}"; do
    artist_id=${ARTISTS[$artist_name]}
    echo "Lier l'artiste '$artist_name' ($artist_id) à l'événement '$event_label' ($event_id)"
    curl -s -X POST "$BASE_URL/events/$event_id/artists/$artist_id" -H "accept: */*" > /dev/null
  done
done

echo "Tous les artistes et événements ont été créés et liés !"

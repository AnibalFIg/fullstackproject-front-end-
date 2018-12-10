curl --include --request POST "http://localhost:4741/heroes_villains" \
  --header "Content-type: application/json" \
  --data '{
    "heroes/villains": {
      "name": "'"${TITLE}"'",
      "gender":  "'"${GENDER}"'",
      "eye_color": "'"${EYE_COLOR}"'",
      "race": "'"${RACE}"'",
      "hair_color": "'"${HAIR_COLOR}"'",
      "height": "'"${HEIGHT}"'"
      "publisher": "'"${PUBLISHER}"'",
      "skin_color": "'"${SKIN_COLOR}"'",
      "alignment": "'"${ALIGNMENT}"'",
      "weight": "'"${WEIGHT}"'"
    }
  }'

echo

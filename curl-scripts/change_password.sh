curl "http://localhost:4741/change-password" \
  --include \
  --request PATCH \
  --headers "Authorization: Token token=${TOKEN}" \
  --headers "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo

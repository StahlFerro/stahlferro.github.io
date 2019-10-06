#!/bin/bash

npm run genpage
git add .
echo "Enter commit message:"

read msg

git commit -m "$msg"
git push origin dev
npm run deploy

#!/bin/bash

echo "Enter commit message:"
read msg
npm run genpage
git add .
git commit -m "$msg"
git push origin dev
npm run deploy

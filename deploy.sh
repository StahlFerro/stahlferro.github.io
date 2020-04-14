#!/bin/bash

RED='\033[0;31m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}[1/5]${NC} Enter commit message:"
read msg

echo -e "${CYAN}[2/5]${NC} Running ${GREEN}npm run genpage${NC} to generate static site on dist/ folder..."
yarn genpage

echo -e "${CYAN}[3/5]${NC} Updating remote ${GREEN}dev${NC} repo..."
git add .
git commit -m "$msg"
git push origin dev

echo -e "${CYAN}[4/5]${NC} Pushing dist/ folder into ${GREEN}master${NC} remote branch"
yarn push2master

echo -e "${CYAN}[5/5]${NC} Updating local ${GREEN}master${NC} towards remote ${GREEN}master${NC}"
git checkout master
git reset --hard origin/master

echo -e "${CYAN}[6/6${NC} Switch back to ${GREEN}dev${NC}"
git checkout dev

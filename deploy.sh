#!/bin/bash

RED='\033[0;31m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}[1/6]${NC} Enter commit message:"
read msg

echo -e "${CYAN}[2/6]${NC} Running ${GREEN}npm run genpage${NC} to generate static site on dist/ folder..."
yarn genpage

echo -e "${CYAN}[3/6]${NC} Committing and updating local to remote ${GREEN}dev${NC} repo..."
git add .
git commit -m "$msg"
git push origin dev

echo -e "${CYAN}[4/6]${NC} Pushing dist/ folder into ${GREEN}master${NC} remote branch"
yarn push2master

echo -e "${CYAN}[5/6]${NC} Force hard reset remote to local ${GREEN}master${NC}"
git checkout master
git reset --hard origin/master

echo -e "${CYAN}[6/6]${NC} Switch back to ${GREEN}dev${NC}"
git checkout dev

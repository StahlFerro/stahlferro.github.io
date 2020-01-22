#!/bin/bash

RED='\033[0;31m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}[1/4]${NC} Updating ${GREEN}dev${NC}..."
git pull origin dev

echo -e "${CYAN}[2/4]${NC} Checking out ${GREEN}master${NC}"
git checkout master

echo -e "${CYAN}[3/4]${NC} Updating ${GREEN}master${NC}"
git pull origin master

echo -e "${CYAN}[4/4]${NC} Checking out ${GREEN}dev${NC}"
git checkout dev

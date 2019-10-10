RED='\033[0;31m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'
echo -e "${CYAN}[1/7]${NC} Checkout ${GREEN}dev${NC}..."
git checkout dev
echo -e "${CYAN}[2/7]${NC} Deleting local${GREEN}gh-pages${NC} if exists..."
git branch -d gh-pages
echo -e "${CYAN}[3/7]${NC} Deleting remote ${GREEN}gh-pages${NC} if exists..."
git push --delete origin gh-pages
echo -e "${CYAN}[4/7]${NC} Splitting ${GREEN}dist${NC} folder into new repo ${GREEN}gh-pages${NC}..."
git subtree split --prefix dist -b gh-pages
echo -e "${CYAN}[5/7]${NC} Pushing ${GREEN}gh-pages${NC} forcefully to ${GREEN}master${NC}..."
git push origin gh-pages:master --force
echo -e "${CYAN}[6/7]${NC} Deleting local${GREEN}gh-pages${NC}..."
git branch -D gh-pages
echo -e "${CYAN}[7/7]${NC} Deleting remote ${GREEN}gh-pages${NC}..."
git push --delete origin gh-pages

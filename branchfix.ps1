git checkout dev;
git branch -d gh-pages;
git push --delete origin gh-pages;
git subtree split --prefix dist -b gh-pages;
git push origin gh-pages:master --force;
git branch -d gh-pages;
git push --delete origin gh-pages;

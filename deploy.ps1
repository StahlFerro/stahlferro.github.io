
$msg = Read-Host "Enter commit message";
yarn genpage;
git add .;

git commit -m "$msg";
git push origin dev;
yarn push2ghpages;
git checkout gh-pages;
git reset --hard origin/gh-pages;
git checkout dev;

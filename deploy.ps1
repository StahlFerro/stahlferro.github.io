
$msg = Read-Host "Enter commit message";
npm run genpage;
git add .;

git commit -m "$msg";
git push origin dev;
npm run push2master;
git checkout master;
git reset --hard origin/master;
git checkout dev;

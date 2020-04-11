
$msg = Read-Host "Enter commit message";
yarn genpage;
git add .;

git commit -m "$msg";
git push origin dev;
yarn push2master;
git checkout master;
git reset --hard origin/master;
git checkout dev;

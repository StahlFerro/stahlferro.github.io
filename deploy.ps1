npm run genpage;
git add .;
$msg = Read-Host "Enter commit message:";

git commit -m "$msg";
git push origin dev;
npm run deploy;

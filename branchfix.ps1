Write-Host "[1/10] Switching branch to dev"
git checkout dev;
Write-Host "[2/10] Deleting local gh-pages"
git branch -D gh-pages;
Write-Host "[3/10] Deleting remote gh-pages"
git push --delete origin gh-pages;
Write-Host "[4/10] Split dist folder into local new gh-pages"
git subtree split --prefix dist -b gh-pages;
Write-Host "[5/10] Force push gh-pages into master"
git push origin gh-pages:master --force;
Write-Host "[6/10] Deleting local gh-pages"
git branch -D gh-pages;
Write-Host "[7/10] Deleting remote gh-pages"
git push --delete origin gh-pages;
Write-Host "[8/10] Switch branch to master"
git checkout master
Write-Host "[9/10] Force pull remote into local master"
git reset --hard origin/master
Write-Host "[10/10] Switch back to dev"
git checkout dev

# StahlFerro's website dev repo

Procedures for deploying changes:

```
1. npm run genpage
```
Generates static site into dist/ folder
```
2. git add .
3. git commit -m "e"
4. git push origin dev
```
Save changes to repo and pushes to remote
```
5. npm run deploy
```
Uses git subtree to push contents of dist/ folder to master

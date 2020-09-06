# StahlFerro's website dev repo

> stahlferro.github.io

Procedures for deploying changes:

```
1. yarn run genpage
```
Generates static site into dist/ folder
```
2. git add .
3. git commit -m "e"
4. git push origin master
```
Save changes to repo and pushes to remote
```
5. yarn deploy
```
Uses git subtree to push contents of dist/ folder to master

For detailed explanation on how Nuxt.js work, check out [Nuxt.js docs](https://nuxtjs.org).

### Requirements

```
$ yarn add @nuxtjs/style-resources vue-clipboard2
$ yarn add @nuxtjs/robots @nuxtjs/sitemap babel-eslint bulma cross-env eslint eslint-loader eslint-plugin-vue node-sass rimraf sass-loader -D
```
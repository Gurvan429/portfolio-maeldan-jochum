#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New deployment"
git push -f https://github.com/Gurvan429/portfolio-maeldan-jochum master:gh-pages

cd -


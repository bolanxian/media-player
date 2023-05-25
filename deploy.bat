cd dist

git init
git add -A
git commit -m "deploy"

git push -f --progress "https://github.com/bolanxian/media-player.git" master:gh-pages
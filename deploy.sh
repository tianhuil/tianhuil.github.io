# First run this command:
# git remote add deploy git@github.com:tianhuil/tianhuil.github.io.git

dt=$(date)
ts=$(date +%s)

function echoblue {
  echo -e "\x1B[1;34m${1}\x1B[0m"
}

# build and export files to out directory
# See https://github.com/zeit/next.js#usage
npx next build
npx next export -o out

# deploy from out directory
git push deploy `git subtree split --prefix out master`:master --force
git tag -a "Deploy$ts" -m "Deploy on $dt"
echoblue "Don't forget to git push origin Deploy$ts"

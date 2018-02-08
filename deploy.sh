# First run this command:
# git remote add deploy git@github.com:tianhuil/tianhuil.github.io.git

dt=$(date)
ts=$(date +%s)

function echoblue {
  echo -e "\x1B[1;34m${1}\x1B[0m"
}

git subtree push --prefix out deploy master
git tag -a "Deploy$ts" -m "Deploy on $dt"
echoblue "Don't forget to git push origin Deploy$ts"

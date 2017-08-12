# Personal Homepage

## To Start
We use `yarn` to lock versions.  To install from `yarn.lock`, run
```
yarn install
```
and then run
```
npm start
```

## To Optimize Images
Many of the pngs you get from online are large and poorly compressed.  To optimize images (on OSX), first install these two programs
```
brew install optipng
brew install jpegoptim
```

Then run
```
pushd dist/images
sips -Z 640 *.png  # resize png (biggest images)
optipng *.png  # optimize png
jpegoptim *.jpg  # optimize jpg
popd
```

## To Deploy
First, build the deploy
```
npm run build:prod
```

and then run the deploy script to deploy (check the script for any pre-requisites).
```
./deploy.sh
```

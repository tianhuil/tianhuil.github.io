# Personal Homepage

## To Start

We use `npm@5` to lock versions.

```bash
npm install
```

and then run

```bash
npm run dev
```

## To Optimize Images

Many of the pngs you get from online are large and poorly compressed. To optimize images (on OSX), first install these two programs

```
brew install optipng
brew install jpegoptim
```

Then run

```
pushd public/images
sips -Z 640 *.png  # resize png (biggest images)
optipng *.png  # optimize png
jpegoptim *.jpg  # optimize jpg
popd
```

## To Deploy

Just push to master (it's all through Next / Vercel)!

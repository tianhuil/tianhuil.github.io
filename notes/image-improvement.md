Here are the reusable commands — written as a reference for a coding LLM to accomplish each task independently:

---

## Logo Processing Commands for LLM

### INSPECT first — always run this before anything else

```bash
identify -verbose logo.png | grep -E "Geometry|Colorspace|Type|min:|max:|mean:|kurtosis"
```

Tells you: dimensions, whether it's already grayscale, and whether the contrast is good (`min` should be near 0, `max` near 255).

---

### REMOVE white/light background → transparency

```bash
convert logo.png -fuzz 15% -transparent white -trim +repage logo_clean.png
```

Increase `-fuzz` to `25%` if the background is off-white or cream. Use `black` instead of `white` if the logo is on a dark background.

---

### PAD to a consistent canvas (e.g. 200×80, transparent)

```bash
convert logo_clean.png -gravity center -background none -extent 200x80 logo_padded.png
```

Change `200x80` to whatever your target slot size is. All logos processed this way will be the same canvas, different visual sizes.

---

### BOOST contrast before grayscaling (the key step — do this while color info exists)

```bash
convert logo_padded.png -brightness-contrast 0x25 -modulate 100,150,100 logo_boosted.png
```

`-brightness-contrast 0x25` = no brightness change, +25 contrast. `-modulate 100,150,100` = boost saturation to 150%. This spreads gray values apart before conversion.

---

### CONVERT to grayscale with maximum contrast

```bash
convert logo_boosted.png -colorspace Gray -normalize -brightness-contrast 5x30 logo_gray.png
```

`-normalize` stretches the histogram to full 0–255 range. If the result is still muddy, follow with:

```bash
convert logo_gray.png -level 20%,80% logo_gray.png
```

`-level 20%,80%` = remap so 20% brightness becomes black, 80% becomes white. Aggressive but effective.

---

### CHECK if grayscale contrast is good enough

```bash
identify -verbose logo_gray.png | grep -E "min:|max:"
```

**Good:** min near `0`, max near `65535` (16-bit) or `255` (8-bit).
**Bad:** e.g. `min: 12000, max: 50000` → run `-level` again with wider range like `10%,90%`.

---

### SHARPEN for small display sizes (optional, for thin/outline logos)

```bash
convert logo_gray.png -sharpen 0x1.0 logo_gray.png
```

---

### COMPRESS final PNG for web

```bash
pngquant --quality=70-85 logo_gray.png --output logo_gray_web.png
```

---

### FULL PIPELINE in one command (after inspection)

```bash
convert logo.png \
  -fuzz 15% -transparent white \
  -trim +repage \
  -gravity center -background none -extent 200x80 \
  -brightness-contrast 0x25 \
  -modulate 100,150,100 \
  -colorspace Gray \
  -normalize \
  -brightness-contrast 5x30 \
  logo_gray.png
```

---

### CSS: Apply brand color tint + hover to full color

```css
.logo {
  max-height: 60px;
  max-width: 160px;
  object-fit: contain;

  /* Tint pipeline: gray → sepia → hue-rotate to brand color */
  filter: grayscale(1) sepia(1) hue-rotate(200deg)
    /* 200=blue 120=green 320=pink 0=red — change this one value */
    saturate(0.4) opacity(0.65) brightness(1.05);

  transition: filter 0.35s ease;
}

.logo:hover {
  filter: none;
}
```

**To change brand color:** only touch `hue-rotate`. Reference:
`0°` red · `60°` yellow · `120°` green · `180°` teal · `200°` blue · `270°` purple · `320°` pink

---

### DECISION TREE for the LLM

```
1. Run identify → check min/max
2. min > 50 after grayscale?  → apply -level 10%,90%
3. Logo is outline/thin lines? → skip -modulate, increase -sharpen to 0x1.5
4. Logo looks inverted (dark bg)? → add -negate before -level
5. Logo still muddy at small size? → -sharpen 0x1.0 as final step
6. Background not fully removed? → increase -fuzz to 25% or try -transparent "#f0f0f0"
```

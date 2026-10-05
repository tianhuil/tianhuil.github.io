# Checking image links in MDX with Lychee

## Summary

Lychee appears to be a good existing tool for checking statically written image links in this repository's MDX posts. Its official docs list `.mdx` among default extensions, support offline local-file checks, and document mapping leading-slash paths through `--root-dir`. For `/blog/...` references backed by `public/blog/...`, try:

```sh
lychee --offline --root-dir "$PWD/public" 'content/blog/*.mdx'
```

This should resolve `/blog/foo.png` to `public/blog/foo.png`. Confirm extraction with the installed Lychee version before relying on it in CI; docs do not guarantee all MDX/JSX forms.

## Findings

1. **MDX input:** Official CLI docs include `.mdx` in the default extension list and describe Markdown/HTML parsing. This is direct evidence Lychee scans MDX files, but not proof of complete MDX-language parsing.
2. **Root-relative local assets:** The [root-dir recipe](https://lychee.cli.rs/recipes/root-dir/) documents resolving leading-slash paths against a local filesystem root. Applied here, `--root-dir "$PWD/public"` maps `/blog/x.png` to `public/blog/x.png`.
3. **Offline mode:** The [getting started guide](https://lychee.cli.rs/guides/getting-started/) documents `--offline` for local-file checks without network requests.
4. **MDX/JSX caveat:** The [CLI docs](https://lychee.cli.rs/guides/cli/) and [preprocessing guide](https://lychee.cli.rs/guides/preprocessing/) do not promise extraction from every JSX/dynamic MDX construct. Literal Markdown image syntax is the safer case; `<Image src={asset} />` cannot be assumed to resolve as a literal URL. Use `--dump` or a small fixture to confirm behavior for the corpus.
5. **Useful distinction:** `--root-dir` maps rooted asset paths to local files; `--base-url` changes URL resolution and is not equivalent for checking generated public assets on disk.

## Sources

- [Lychee CLI documentation](https://lychee.cli.rs/guides/cli/)
- [Lychee root-dir recipe](https://lychee.cli.rs/recipes/root-dir/)
- [Lychee getting started](https://lychee.cli.rs/guides/getting-started/)
- [Lychee preprocessing](https://lychee.cli.rs/guides/preprocessing/)
- [Lychee source repository](https://github.com/lycheeverse/lychee)

## Verification status

The command has not been run against this repository because no `lychee` executable was found in PATH during this session. Install Lychee or run it in CI, then verify it reports missing local images as failures before adopting it as the test.
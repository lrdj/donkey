# Donkey on the Edge

Source for **[donkeyontheedge.com](https://donkeyontheedge.com)** — a
long-running personal blog, built with [Jekyll](https://jekyllrb.com) and
served via GitHub Pages.

## Local development

Requires Ruby and Bundler.

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

The site builds to `_site/` (gitignored). GitHub Pages builds the `main`
branch automatically on push; the custom domain is configured via the
`CNAME` file.

## Notes

Git history was consolidated in May 2026 to reduce repository size; earlier
revision history is preserved in a separate offline archive.

## Credits

Built on the [Mundana](https://github.com/wowthemesnet/mundana-theme-jekyll)
Jekyll theme by [WowThemes.net](https://www.wowthemes.net), used under the
MIT license.

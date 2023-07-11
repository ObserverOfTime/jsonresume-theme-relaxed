# jsonresume-theme-relaxed

A [JSON Resume][] theme optimised for PDF output.

[JSON Resume]: https://jsonresume.org/

## Installation

```bash
git clone https://github.com/ObserverOfTime/jsonresume-theme-relaxed
cd jsonresume-theme-relaxed && npm install
```

## Create your resume

Create a `resume.json` file according to the [schema][],
build it [online][resume-builder], or export it from [LinkedIn][json-resume-exporter].

- The following fields are not supported _(yet)_:
  - `.work[].location`
  - `.work[].description`
  - `.projects[].type`
- Line breaks (`\n`) are allowed in the following fields:
  - `.basics.summary`
  - `.work[].summary`
  - `.projects[].description`
  - `.languages[].fluency`
  - `.references[].reference`
- `.volunteer[].summary` is assumed to be the event name.
- The allowed values for `.skills[].level` are:
  - "master"
  - "advanced"
  - "intermediate"
  - "beginner"
- The following non-standard fields are defined:
  - `.meta.x-size` sets the font size (default: "6pt")
  - `.meta.x-lang` sets the resume language (default: "en")
- Translations are available for the following languages:
  - English ("en", "en-GB", "en-US")
  - Greek ("el")
  - German ("de")

[schema]: https://jsonresume.org/schema/
[resume-builder]: https://resume-builder.js.org/en/build
[json-resume-exporter]: https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec

## Export to PDF

```bash
npm run build -- resume.pdf
```

## Credits

The theme was made using [HTMLS][] & [Stylus][],
with icons from [Heroicons][] & [Simple Icons][]
and the [Lato][] font.

[HTMLS]: https://github.com/Daiz/htmls
[Stylus]: https://stylus-lang.com/
[Heroicons]: https://heroicons.dev/
[Simple Icons]: https://simpleicons.org/
[Lato]: https://www.latofonts.com/

## License

> This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.

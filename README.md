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

<details>

| Section | Field | Required | Line breaks (`\n`) | Notes |
|:---:|:---:|:---:|:---:|:---:|
| `basics` | `name` | **Yes** | No | Must be present. |
| `basics` | `label` | No | No |  |
| `basics` | `image` | No | No |  |
| `basics` | `summary` | No | **Yes** |  |
| `basics.location` | `address` | No | No |  |
| `basics.location` | `city` | No | No |  |
| `basics.location` | `postalCode` | No | No |  |
| `basics.location` | `region` | No | No |  |
| `basics.location` | `countryCode` | **Yes** | No |  |
| `basics.profiles[]` | `url` | No | No |  |
| `basics.profiles[]` | `network` | **Yes** | No |  |
| `basics.profiles[]` | `username` | **Yes** | No |  |
| `work[]` | `website` | No | No |  |
| `work[]` | `company` | **Yes** | No |  |
| `work[]` | `location` |  |  | _Unsupported._ |
| `work[]` | `description` |  |  | _Unsupported._ |
| `work[]` | `position` | **Yes** | No |  |
| `work[]` | `summary` | No | **Yes** |  |
| `work[]` | `startDate` | No | No | `YYYY-MM` / `YYYY-MM-DD` |
| `work[]` | `endDate` | No | No | `YYYY-MM` / `YYYY-MM-DD`<br>Requires `startDate`. |
| `work[]` | `highlights[]` | No | No |  |
| `education[]` | `url` | No | No |  |
| `education[]` | `area` | **Yes** | No |  |
| `education[]` | `institution` | **Yes** | No |  |
| `education[]` | `studyType` | **Yes** | No |  |
| `education[]` | `startDate` | No | No | `YYYY-MM` / `YYYY-MM-DD` |
| `education[]` | `endDate` | No | No | `YYYY-MM` / `YYYY-MM-DD`<br>Requires `startDate`. |
| `education[]` | `score` | No | No |  |
| `education[]` | `courses[]` | No | No |  |
| `volunteer[]` | `url` | No | No |  |
| `volunteer[]` | `summary` | **Yes** | No | Should be the event name. |
| `volunteer[]` | `organization` | **Yes** | No |  |
| `volunteer[]` | `position` | **Yes** | No |  |
| `volunteer[]` | `startDate` | No | No | `YYYY-MM-DD` |
| `volunteer[]` | `endDate` | No | No | `YYYY-MM-DD`<br>Requires `startDate`. |
| `volunteer[]` | `highlights[]` | No | No |  |
| `projects[]` | `url` | No | No |  |
| `projects[]` | `name` | **Yes** | No |  |
| `projects[]` | `type` |  |  | _Unsupported._ |
| `projects[]` | `roles[]` | No | No |  |
| `projects[]` | `entity` | No | No | Requires `roles[]`. |
| `projects[]` | `description` | No | **Yes** |  |
| `projects[]` | `startDate` | No | No | `YYYY-MM-DD` |
| `projects[]` | `endDate` | No | No | `YYYY-MM-DD`<br>Requires `startDate`. |
| `projects[]` | `highlights[]` | No | No |  |
| `projects[]` | `keywords[]` | No | No |  |
| `publications[]` | `website` | No | No |  |
| `publications[]` | `name` | **Yes** | No |  |
| `publications[]` | `publisher` | **Yes** | No |  |
| `publications[]` | `summary` | No | **Yes** |  |
| `publications[]` | `releaseDate` | **Yes** | No | `YYYY-MM` / `YYYY-MM-DD` |
| `certificates[]` | `url` | No | No |  |
| `certificates[]` | `name` | **Yes** | No |  |
| `certificates[]` | `issuer` | **Yes** | No |  |
| `certificates[]` | `date` | **Yes** | No | `YYYY-MM` / `YYYY-MM-DD` |
| `skills[]` | `name` | **Yes** | No |  |
| `skills[]` | `level` | **Yes** | No | "master" / "advanced" /<br>"intermediate" / "beginner" |
| `skills[]` | `keywords[]` | No | No |  |
| `languages[]` | `language` | **Yes** | No |  |
| `languages[]` | `fluency` | **Yes** | **Yes** |  |
| `awards[]` | `title` | **Yes** | No |  |
| `awards[]` | `awarder` | **Yes** | No |  |
| `awards[]` | `summary` | No | **Yes** |  |
| `awards[]` | `date` | **Yes** | No | `YYYY-MM` / `YYYY-MM-DD` |
| `interests[]` | `name` | **Yes** | No |  |
| `interests[]` | `keywords[]` | No | No |  |
| `references[]` | `name` | **Yes** | No |  |
| `references[]` | `reference` | **Yes** | **Yes** |  |
| `meta` | `canonical` | No | no |  |
| `meta` | `lastModified` | No | No |  |
| `meta` | `version` | No | No |  |
| `meta` | `x-lang` | No | No | Language (default: "en").<br>_Non-standard._ |
| `meta` | `x-size` | No | No | Font size (default: "10pt").<br>_Non-standard._ |

_All sections (except for `basics`) are optional._<br>
_Fields are only required if the section is present._

</details>

Supported languages:
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

## Sample

![preview](.github/sample.jpeg)

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

const { readFileSync } = require('node:fs');
const htmls = require('htmls');
const stylus = require('stylus');
const { name, version } = require('./package.json');

/** @type {Intl.DateTimeFormatOptions} */
const dateFmt = {day: 'numeric', month: 'long', year: 'numeric'};

const lib = {
  /**
   * Strip the scheme from a URL.
   * @param {string} url a URL
   * @returns {string}
   */
  strip: (url) => /^(?:https?:\/\/)?(.*)/.exec(url)[1],
  /**
   * Check if an object contains any of certain keys.
   * @param {any} obj an object
   * @param {string[]} arr a list of keys
   * @returns {boolean}
   */
  anyOf: (obj, arr) => Object.keys(obj).some(k => arr.includes(k)),
  /**
   * Get the URL of an icon from heroicons.
   * @param {'outline' | 'solid'} style the icon style
   * @param {string} icon the icon name
   * @returns {string}
   */
  icon: (style, icon) => `https://cdn.statically.io/gh/tailwindlabs/heroicons/master/src/24/${style}/${icon}.svg`,
  /**
   * Get the URL of an icon from simple-icons.
   * @param {string} name the icon name
   * @returns {string}
   */
  brand: (name) => `https://cdn.simpleicons.org/${name.toLowerCase().replace(' ', '')}`,
  /**
   * Guess the mime type of an image by its extension.
   * @param {string} url the URL of the image.
   * @returns {string}
   */
  mime: (url) => {
    switch (url.toLowerCase().split('.').at(-1)) {
      case 'png':
        return 'image/png';
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg'
      case 'webp':
        return 'image/webp';
      case 'ico':
        return 'image/vnd.microsoft.icon';
      default:
        return 'image/png';
    }
  },
  /**
   * Map the skill level to a percentage.
   * @param {'beginner' | 'intermediate' | 'advanced' | 'master'} level the skill level as a string
   * @returns {25 | 50 | 75 | 100}
   * @throws if the skill level is invalid
   */
  skill: (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 25;
      case 'intermediate':
        return 50;
      case 'advanced':
        return 75;
      case 'master':
        return 100;
      default:
        throw Error(`Unexpected skill level: ${level}`);
    }
  },
  /**
   * Format `YYYY-MM-DD` date as `MMMM YYYY`.
   * @param {string} date a date in ISO 8601 format
   * @param {string?} locale an optional locale
   * @param {Intl.DateTimeFormatOptions} format an optional date format
   * @returns {string}
   */
  format: (date, locale, format = dateFmt) =>
    new Intl.DateTimeFormat(locale || 'en', format).format(Date.parse(date)),
  /**
   * Format location data as an address.
   * @param {ResumeSchema['basics']['location']} location the location data
   * @param {string?} locale an optional locale
   * @returns {string}
   */
  address: (location, locale) => [
    location.address,
    location.city,
    location.postalCode,
    location.region,
    location.countryCode &&
      new Intl.DisplayNames(locale || 'en', {type: 'region'}).of(location.countryCode)
  ].filter(e => e).join(', ')
}

const template = readFileSync('src/resume.htmls', 'utf-8');

// @ts-ignore (the 'compress' key is missing in the type stub)
const style = stylus.render(readFileSync('src/resume.styl', 'utf-8'), {compress: true});

module.exports = {
  /**
   * Render the resume.
   * @param {ResumeSchema} resume the JSON resume
   * @returns {string}
   */
  render: (resume) => htmls(template)({
    resume, lib, style, name, version
  }),
  pdfViewport: {
    width: 1240,
    height: 1754,
    deviceScaleFactor: 2
  },
  pdfRenderOptions: {
    format: 'A4',
    mediaType: 'screen'
  }
};

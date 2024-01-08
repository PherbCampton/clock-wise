/**
 *
 * @description getUserLocale a method for getting user locals
 * @function getUserLocale
 * @property languageCodeOnly {boolean}
 * @returns string[] | null
 */

export const getUserLocales = ({
  languageCodeOnly = false,
}): string[] | null => {
  if (!window) return null;

  // Detect the language preference of the user's browser
  const userLanguage = window?.navigator?.languages || [
    window?.navigator?.language || "en-US",
  ]; // Fallback;

  return userLanguage.map((locale) =>
    languageCodeOnly ? locale.trim().split(/-|_/)[0] : locale.trim()
  );
};

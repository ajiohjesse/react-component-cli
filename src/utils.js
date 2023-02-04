function formatName(string) {
  const sentenceCase =
    string.charAt(0).toUpperCase() + string.slice(1);

  //camelize
  return sentenceCase.replace(
    /[^a-zA-Z0-9]+(.)/g,
    (_, chr) => chr.toUpperCase()
  );
}

function requireOptional(filePath) {
  try {
    return require(filePath);
  } catch (e) {
    // We want to ignore 'MODULE_NOT_FOUND' errors, since all that means is that
    // the user has not set up a global overrides file.
    // All other errors should be thrown as expected.
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }
}

module.exports = { formatName, requireOptional };

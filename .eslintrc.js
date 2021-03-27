const frontPaths = ["admin/**/*.js"];

module.exports = {
  root: true,
  overrides: [
    {
      files: ["./**/*.js"],
      excludedFiles: frontPaths,
      ...require("./.eslintrc.back.js"),
    },
    {
      files: frontPaths,
      ...require("./.eslintrc.front.js"),
    },
  ],
};

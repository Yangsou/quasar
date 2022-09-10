/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

module.exports = () => {
  const env = process.env.ENV || 'development';
  return {
    ...dotenv.config({ path: `.${env}.env` }).parsed,
  };
};

/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

module.exports = () => {
  const env = process.env.ENV || 'development';
  console.log('env ========', env);
  const variables = {
    ...dotenv.config({ path: `.${env}.env` }).parsed,
  };
  console.log('variables ========', variables);

  return variables;
};

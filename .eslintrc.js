module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module', // Ensure this is set to 'module'
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
    plugins: ['react', 'react-hooks'],
    rules: {
      // Add custom rules here
    },
  };
  
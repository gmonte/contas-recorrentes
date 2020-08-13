module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'import-helpers',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^redux/',
          '/^lodash/',
          'module',
          '/^@monorepo-ts/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true
        }
      }
    ],
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    semi: ['error', 'never'],
    'template-curly-spacing': [2, 'always'],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: false
      }
    ],
    'comma-dangle': 0,
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}

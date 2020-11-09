module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'import-helpers',
    '@typescript-eslint',
    'prettier',
  ], 
  rules: {
    'import/no-unresolved': [
      'error',
      { 'ignore': ['~/'] }
    ],
    'import/extensions': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^redux/',
          '/^lodash/',
          'module',
          '/^@contas-recorrentes/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'prettier/prettier': 'off',
    'class-methods-use-this': 'off',
    semi: ['error', 'never'],
    'template-curly-spacing': [2, 'always'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: false,
      },
    ],
    'comma-dangle': 0,
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/ban-types': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {},
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx'
    ],
    react: {
      version: 'detect'
    }
  }
}

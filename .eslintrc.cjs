module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'airbnb',
      // 'eslint:recommended',
      'plugin:react/jsx-runtime',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react-refresh', 'react', 'import', 'jsx-a11y'],
   rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'react/prop-types': 0,
      'prettier/prettier': 'error',
      'linebreak-style': [0, 'unix'],
      'import/order': [
         2,
         {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
         },
      ],
   },
   globals: {
      __dirname: 'readonly',
   },
   settings: {
      react: { version: '18.2' },
      'import/resolver': {
         alias: {
            map: [['components', './src/components']],
            extensions: ['.ts', '.js', '.jsx', '.json'],
         },
      },
   },
};

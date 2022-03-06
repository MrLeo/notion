module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    // see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // https://dev.to/mikhailkaran/setting-up-eslint-for-vue-3-in-vscode-1bh9
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
    'plugin:@typescript-eslint/recommended',
    // 'standard',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    '': 'readonly',
  },
  rules: {
    // 需使用ctx.log输出
    'no-console': ['warn', { allow: ['error', 'info'] }],
    'no-case-declarations': 'off',
    // 多行时结尾必须加逗号：https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],
    // 请不要再用var啦 🤣
    'no-var': 'error',
    // 匿名函数和箭头函数括号前必须加空格，具名函数不需要：https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // 建议Promise.reject的reason使用Error对象：https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',
    // 与html规范不匹配
    'vue/html-self-closing': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-warning-comments': [1, { terms: ['fixme'], location: 'start' }], // 禁止注释中出现 FIXME
    quotes: 0, // [2, 'single'], //强制使用单引号
    semi: 0, // [2, 'never'], //强制不使用分号结尾
    'max-len': [1, { code: 150 }],
    'no-underscore-dangle': 0, // 下划线开头或结尾
    'no-bitwise': 0, // 位运算符
    'no-plusplus': 0, // 一元操作符 ++ 和 --
    'global-require': 0,
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
    eqeqeq: 1,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 150,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        rangeStart: 0,
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        vueIndentScriptAndStyle: false,
        endOfLine: 'lf',
        embeddedLanguageFormatting: 'auto',
      },
      { usePrettierrc: true },
    ],
    // ------------------ TypeScript ------------------
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // 缩进2个空格：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: 'off',
    // 类型定义的分隔符保持与JS对象一致：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none', requireLast: false },
        singleline: { delimiter: 'semi', requireLast: true },
      },
    ],
    // https://typescript-eslint.io/rules/member-delimiter-style/
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'last-member',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  // overrides: [
  //   {
  //     // enable the rule specifically for TypeScript files
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/no-explicit-any': ['error'],
  //       '@typescript-eslint/no-unused-vars': ['error'],
  //       '@typescript-eslint/explicit-function-return-type': ['error'],
  //       '@typescript-eslint/explicit-module-boundary-types': ['error'],
  //     },
  //   },
  // ],
}

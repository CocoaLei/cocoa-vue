// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // 引入文件时是否需要文件类型后缀
    'import/extensions': ['error', 'always', { js: 'never', vue: 'never' }],
    // 是否允许 console 和 debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // <script></script> 中的缩进
    'vue/script-indent': ['warn', 2, { baseIndent: 1 }],
    // <template></template> 中的缩进，一个缩进两个空格
    'vue/html-indent': ['warn', 2, { attribute: 1, baseIndent: 1, closeBracket: 1 }],
    'max-len': ['warn', { code: 120, comments: 120 }],
    'no-param-reassign': [2, { props: false }],
    'no-return-assign': 0,
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off',
    },
  }],
};

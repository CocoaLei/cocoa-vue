// http://eslint.org/docs/user-guide/configuring

module.exports = {
  // 不可向父级寻找配置文件
  root: true,
  // 指定语言类型和风格
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 指定 eslint 解析器
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  // 指定环境的全局变量
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  // 配置标准风格
  extends: [
    '@vue/eslint-config-airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/base',
    'plugin:vue/recommended',
  ],
  // 配置额外插件
  plugins: [
    'import',
    'vue',
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.vue',
        ]
      }
    }
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
    'vue/html-self-closing': 0,
    'max-len': ['warn', { code: 120, comments: 120 }],
    'no-param-reassign': [2, { props: false }],
    'no-return-assign': 0,
    'object-property-newline':1,
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off',
    },
  }],
};

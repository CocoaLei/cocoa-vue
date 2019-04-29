/*
* 动态的将目录下的组件进行全局注册
*
*/

import Vue from 'vue';

// 将单词的首字母进行大写变换
function capitalize(word) {
  const initial = word && word.charAt(0).toUpperCase();
  const rest = word && word.slice(1);
  return `${initial}${rest}`
}

// 从组件的文件路径名中提取组件名称
function validateFileName(path) {
  return /\.vue$/.test(path) && /[\w|-]+/g.exec(path).pop();
}

function getComponentName(fileName) {
  return fileName.split('-').reduce((comName, segment) => {
    return capitalize(comName) + capitalize(segment);
  });
}


const components = require.context('./', false, /\.vue$/);

components.keys().forEach(comPath => {
  const comConfig = components(comPath);
  const fileName = validateFileName(comPath);
  console.log(fileName);
  const comName = getComponentName(fileName);
  Vue.component(comName, (comConfig && comConfig.default) || comConfig);
});

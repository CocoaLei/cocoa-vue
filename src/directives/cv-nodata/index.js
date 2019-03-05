import Vue from 'vue';

const isObject = obj => obj === Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]';

const setStyles = (el, styles) => {
  if (isObject(el)) Object.assign(el.style, styles);
};

const addNoData = (el) => {
  const noDataDOM = document.createElement('div');
  noDataDOM.id = 'no-data-dom';
  setStyles(noDataDOM, {
    display: 'flex',
    'align-items': 'center',
    'background-color': '#ffffff',
    width: '100%',
    height: '100%',
  });
  const noDataText = el.getAttribute('no-data-text') || 'No data available yet';
  const noDataTextDOM = document.createElement('p');
  setStyles(noDataTextDOM, { flex: '1', 'text-align': 'center', color: '#9a9a9a', 'line-height': '88px' });
  noDataTextDOM.textContent = noDataText;
  noDataDOM.appendChild(noDataTextDOM);

  let hasNoDataNode = false;
  if (el.hasChildNodes()) {
    el.childNodes.forEach((childNode) => {
      if (childNode.id === 'no-data-dom') {
        hasNoDataNode = true;
      }
    });
  }

  if (!hasNoDataNode) el.appendChild(noDataDOM);

  el.childNodes.forEach((childNode) => {
    if (childNode.id !== 'no-data-dom') setStyles(childNode, { display: 'none' });
  });
};

const removeNoData = (el) => {
  if (el.hasChildNodes()) {
    el.childNodes.forEach((childNode) => {
      if (childNode.id === 'no-data-dom') {
        el.removeChild(childNode);
      } else {
        setStyles(childNode, { display: 'unset' });
      }
    });
  }
};

const toggleNoData = (el, binding) => {
  if (binding.value) {
    Vue.nextTick(() => {
      addNoData(el, binding);
    });
  } else {
    Vue.nextTick(() => {
      removeNoData(el);
    });
  }
};

Vue.directive('no-data', {
  bind: (el, binding) => {
    toggleNoData(el, binding);
  },
  update: (el, binding) => {
    toggleNoData(el, binding);
  },
  unbind: (el) => {
    removeNoData(el);
  },
});

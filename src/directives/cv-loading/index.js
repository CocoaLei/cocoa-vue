import Vue from 'vue';
import BarMask from './bar-mask';
import DuplexMask from './duplex-mask';
import BallMask from './ball-mask';

const toggleNoData = (el, binding) => {
  if (binding.value) {
    Vue.nextTick(() => {
      el.appendChild(el.mask.$el);
    });
  } else {
    Vue.nextTick(() => {
      if (el.mask.$el && el.mask.$el.parentNode) el.mask.$el.parentNode.removeChild(el.mask.$el);
    });
  }
};

Vue.directive('loading', {
  bind: (el, binding) => {
    const spinnerType = el.getAttribute('spinner-mask-type');
    console.log(spinnerType);
    let SpinnerMask;
    switch (spinnerType) {
      case 'bar':
        SpinnerMask = Vue.extend(BarMask);
        break;
      case 'duplex':
        SpinnerMask = Vue.extend(DuplexMask);
        break;
      case 'ball':
        SpinnerMask = Vue.extend(BallMask);
        break;
      default:
        SpinnerMask = Vue.extend(BarMask);
        break;
    }
    el.mask = new SpinnerMask({
      el: document.createElement('div'),
    });
    toggleNoData(el, binding);
  },
  update: (el, binding) => {
    if (binding.oldValue !== binding.value) toggleNoData(el, binding);
  },
  unbind: (el) => {
    toggleNoData(el, { value: false });
  },
});

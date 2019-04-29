export function hasClass(element, cls) {
  if (!element || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('class name should not contain space!');

  if (element.classList) {
    return  element.classList.contains(cls);
  } else {
    return (` ${element.className} `).indexOf((` ${cls} `));
  }
}

export function addClass(element, cls) {
  if (!element) return;
  let curClasses = element.className;
  let addingClasses = (cls || '').split('');

  for (let i = 0; i < addingClasses.length; i += 1) {
    let clsName = addingClasses[i];
    if (!clsName) continue;
    if (element.classList) {
      element.classList.add(clsName);
    } else if (!hasClass(element, clsName)) {
      curClasses = `${curClasses} ${clsName}`;
    }
  }

  if (!element.classList) element.className = curClasses;
}

export function removeClass(element, cls) {
  if (!element || !cls) return;
  let removingClasses = cls.split(' ');
  let curClass = ` ${element.className} `;

  for (let i = 0; i < removingClasses.length; i += 1) {
    let clsName = removingClasses[i];
    if (!clsName) continue;

    if (element.classList) {
      element.classList.remove(clsName);
    } else if (hasClass(element, clsName)) {
      curClass = curClass.replace(` ${clsName} `, '');
    }
  }

  if (!element.classList) element.className = curClass.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}

export function getStyle(element, styleName) {
  if (!element || !styleName) return null;
  return element.style[styleName];
}

export function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (const pro in styleName) {
      if (styleName.hasOwnProperty(pro)) {
        setStyle(element, pro, styleName[pro]);
      }
    }
  } else {
    element.style[styleName] = value;
  }
}


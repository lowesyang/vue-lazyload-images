const isIE = function () {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return true
  }
  else return false
}

const getStyle = function (el, prop) {
  if (!el || el === window) return null;
  let value = (isIE() ? el.currentStyle[prop] : (getComputedStyle ?
    getComputedStyle(el, null).getPropertyValue(prop) : el.style[prop])) || el.style[prop];
  return value;
};

const checkOverflow = function (el) {
  let info = getStyle(el, "overflow") + getStyle(el, "overflow-y") + getStyle(el, "overflow-x");
  return /scroll|auto/.test(info);
};

const getScrollParent = (el) => {
  if (!(el instanceof HTMLElement)) {
    console.error(`${el} is not an HTMLElement`);
    return null;
  }
  let parent = el;
  while (parent) {
    if (parent === document.body || parent === document.documentElement) break;
    if (!parent.parentNode) return null;

    if (checkOverflow(parent)) return parent;
    parent = parent.parentNode;
  }
  return window;
};

const checkInView = function (el, scrollParent = window, offset = 0) {
  let clientH, clientW;
  let offsetTop = 0, offsetLeft = 0;
  let isInView;
  clientH = document.documentElement.clientHeight || document.body.clientHeight;
  clientW = document.documentElement.clientWidth || document.body.clientWidth;

  // use getBoundingClientRect
  let top, left, right, bottom, rect;
  rect = el.getBoundingClientRect();
  top = rect.top - offset;
  left = rect.left - offset;
  bottom = rect.bottom + offset;
  right = rect.right + offset;
  isInView = top < clientH && bottom > 0 && left < clientW && right > 0

  if (scrollParent !== window) {
    let scrollTop = scrollParent.scrollTop;
    let scrollLeft = scrollParent.scrollLeft;
    let width = el.offsetWidth, height = el.offsetHeight;
    clientH = scrollParent.clientHeight;
    clientW = scrollParent.clientWidth;
    while (el && el !== scrollParent) {
      let borderWidth = parseInt(getStyle(el, "border-width")) || 0;
      offsetTop += el.offsetTop + borderWidth;
      offsetLeft += el.offsetLeft + borderWidth;
      el = el.offsetParent;
    }
    // console.log(scrollTop,clientH,scrollLeft,clientW)
    isInView = isInView && (scrollTop + clientH > offsetTop - offset && offsetTop + height + offset > scrollTop
      && scrollLeft + clientW > offsetLeft - offset && offsetLeft + width + offset > scrollLeft)
  }
  return isInView;
}

const throttle = function (fn, interval) {
  let begin = 0, setTm;
  if (!interval || interval <= 0) return fn;
  return function () {
    const now = Date.now();
    if (now - begin > interval) {
      begin = now;
      fn.apply(this, arguments);
    }
    else {
      clearTimeout(setTm);
      setTm = setTimeout(fn.bind(this, ...arguments), interval - (now - begin));
    }
  }
}

const debounce = function (fn, idle) {
  let setTm;
  if (!idle || idle <= 0) return fn;
  return function () {
    clearTimeout(setTm);
    setTm = setTimeout(fn.bind(this, ...arguments), idle);
  }
}

export {
  getScrollParent,
  getStyle,
  checkOverflow,
  checkInView,
  throttle,
  debounce
}


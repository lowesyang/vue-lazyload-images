import {expect} from 'chai';
import {
  getScrollParent,
  getStyle,
  checkOverflow,
  checkInView,
  throttle,
  debounce
} from '../src/utils';

import {createTestDiv, clearBody} from './tools';

describe('Function getStyle', () => {
  it('@Param el is window', () => {
    expect(getStyle(window)).to.be.equal(null);
  })

  it('@param el and prop are undefined', () => {
    expect(getStyle()).to.be.equal(null);
  })

  it('@Param el is an element with overflow', () => {
    let div = createTestDiv();
    div.style.overflow = 'scroll';
    expect(getStyle(div, 'overflow')).to.be.equal('scroll');
  })

  it('@Param el is an element with prop whose value is empty', () => {
    let div = createTestDiv();
    expect(getStyle(div, 'overflow')).to.be.empty;
  })

  it('@Param el is an element with undefined prop', () => {
    let div = createTestDiv();
    expect(getStyle(div)).to.be.equal(undefined);
  })
});

describe('Function checkOverflow', () => {
  let testDiv = createTestDiv();

  it('@Param el is an element with overflow "scroll"', () => {
    testDiv.style.overflow = 'scroll';
    expect(checkOverflow(testDiv)).to.be.ok;
  })

  it('@Param el is an element with overflow "auto"', () => {
    testDiv.style.overflow = 'auto';
    expect(checkOverflow(testDiv)).to.be.ok;
  })

  it('@Param el is an element with overflow "hidden"', () => {
    testDiv.style.overflow = 'hidden';
    expect(checkOverflow(testDiv)).to.not.be.ok;
  })

  it('@Param el is an element without overflow', () => {
    testDiv.style.overflow = "";
    expect(checkOverflow(testDiv)).to.not.be.ok;
  })
});

describe('Function getScrollParent', () => {
  afterEach(() => {
    clearBody();
  })

  it('@Param el is a div whose parent is body', () => {
    let div = createTestDiv();
    document.body.appendChild(div);
    expect(getScrollParent(div)).to.be.equal(window);
  })

  it('@Param el is a div with a child div', () => {
    let parent = document.createElement('div');
    parent.className = 'parent';
    parent.style.cssText = 'overflow:scroll;';
    let child = document.createElement('div');
    child.className = 'child';
    parent.appendChild(child);
    document.body.appendChild(parent);
    expect(getScrollParent(child).className).to.be.equal('parent');
  })

  it('@Param el is a div without parents', () => {
    let div = document.createElement('div');
    expect(getScrollParent(div)).to.be.equal(null);
  })

  it('@Param el is body or documentElement', () => {
    expect(getScrollParent(document.body)).to.be.equal(window);
    expect(getScrollParent(document.documentElement)).to.be.equal(window);
  })
});

describe('Function checkInView', () => {
  afterEach(() => {
    clearBody();
  })
  it('@Param el is a 100*100 div in the visible area whose parent is body ', () => {
    let div = createTestDiv();
    document.body.appendChild(div);
    expect(checkInView(div)).to.be.ok;
  })

  it('@Param el is a 100*100 div outside the visible area whose parent is body ', () => {
    let div = createTestDiv();
    div.style.cssText += 'margin-top:-200px;';
    document.body.appendChild(div);
    expect(checkInView(div)).to.not.be.ok;
  })

  it('@Param el is a 100*100 div outside the visible whose parent is another div', () => {
    let parent = createTestDiv();
    parent.style.cssText = 'width:300px;height:300px;overflow:scroll;';
    let div = createTestDiv();
    div.style.marginTop = '-300px';
    parent.appendChild(div);
    document.body.appendChild(parent);
    expect(checkInView(div, parent)).to.not.be.ok;
    div.style.cssText += 'margin-top:0px;margin-left:-110px;';
    expect(checkInView(div, parent)).to.not.be.ok;
  })
})

describe('Function throttle', () => {
  it('Normal situation',()=>{
    let count=0;
    let fn=throttle(()=>{
      count++;
    },200);
    fn();
    expect(count).to.be.equal(1);
    fn();fn();
    expect(count).to.be.equal(1);
    setTimeout(()=>{
      fn();
      expect(count).to.be.equal(2);
    },200)
  })

  it('@Param interval is not more than 0 or not number',()=>{
    let count=0;
    let fn=()=>{
      count++;
    };
    let lastFn=throttle(fn,-1);
    expect(lastFn === fn).to.be.equal(true);
    lastFn();
    expect(count).to.be.equal(1);
    lastFn();
    expect(count).to.be.equal(2);

    count=0;
    lastFn=throttle(fn);
    expect(lastFn === fn).to.be.equal(true);
    lastFn();
    expect(count).to.be.equal(1);
    lastFn();
    expect(count).to.be.equal(2);
  })
})

describe('Function debounce',()=>{
  it('Normal situation',()=>{
    let count=0;
    let fn=debounce(()=>{
      count++;
    },200);
    fn();
    expect(count).to.be.equal(0);
    setTimeout(()=>{
      expect(count).to.be.equal(1);
      fn();
      expect(count).to.be.equal(1);
    },200);
  })

  it('@Param idle is not more than 0 or not number',()=>{
    let count=0;
    let fn=()=>{
      count++;
    };
    let lastFn=debounce(fn,-1);
    expect(lastFn === fn).to.be.equal(true);
    lastFn();
    expect(count).to.be.equal(1);

    count=0;
    lastFn=debounce(fn);
    expect(lastFn === fn).to.be.equal(true);
    lastFn();
    expect(count).to.be.equal(1);
  })
})
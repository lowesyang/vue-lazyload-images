const getStyle=(el,prop)=>{
    if(el===window) return null;
    return getComputedStyle?
        getComputedStyle(el,null).getPropertyValue(prop)
        :el.style[prop]
};

const checkOverflow=(el)=>{
    let info=getStyle(el,"overflow")+getStyle(el,"overflow-y")+getStyle(el,"overflow-x");
    if(/(scroll)|(auto)/.test(info)) return true;
    else return false;
};

const getScrollParent=(el)=>{
    if(!(el instanceof HTMLElement)) return window;
    let parent=el;
    while(parent){
        if(parent===document.body || parent===document.documentElement) break;
        if(!parent.parentNode) break;

        if(checkOverflow(parent)) return parent;
        parent=parent.parentNode;
    }
    return window;
};

const checkInView=(el,scrollParent,offset)=>{
    let clientH,clientW;
    let offsetTop=0,offsetLeft=0;
    if(scrollParent === window) {
        clientH = document.documentElement.clientHeight || document.body.clientHeight;
        clientW = document.documentElement.clientWidth || document.body.clientWidth;

        // use getBoundingClientRect
        let top, left, right, bottom, rect;
        rect = el.getBoundingClientRect();
        top = rect.top - offset;
        left = rect.left - offset;
        bottom = rect.bottom + offset;
        right = rect.right + offset;

        if (top < clientH && bottom > 0 && left < clientW && right > 0) {
            return true;
        }
        else return false;
    }
    else {
        let scrollTop = scrollParent.scrollTop;
        let scrollLeft = scrollParent.scrollLeft;
        clientH = scrollParent.clientHeight;
        clientW=scrollParent.clientWidth;
        while(el!=scrollParent && el!=null){
            let borderWidth=parseInt(getStyle(el,"border-width"));
            offsetTop+=el.offsetTop+borderWidth;
            offsetLeft+=el.offsetLeft+borderWidth;
            el=el.offsetParent;
        }
        if(scrollTop+clientH>offsetTop-offset
            && scrollLeft+clientW>offsetLeft-offset
        ){
            return true;
        }
        else return false;
    }
}

export {
    getScrollParent,
    getStyle,
    checkOverflow,
    checkInView
}


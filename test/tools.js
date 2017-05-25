/**
 * Created by LowesYang on 2017/5/25.
 */
export function createTestDiv(){
    let div=document.createElement('div');
    div.style.cssText='width:100px;height:100px;';
    return div;
}

export function clearBody(){
    let childs=Array.prototype.slice.call(document.body.childNodes);
    childs.forEach((node)=>{
        if(node.tagName) document.body.removeChild(node);
    })
}
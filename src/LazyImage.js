import {getStyle,getScrollParent,checkInView} from "./utils";
const DEFAULT_EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];

class LazyImage{
    constructor(options={}){
        this.images=[];             //list of unload-images info
        this.scrollParent=[];      //list of scrollParent listener
        this.options=options;
        this.eventsList=options.eventsList || DEFAULT_EVENTS;
    }
    addImage(el){
        let scrollParent=getScrollParent(el);
        let image={
            el:el,
            scrollParent:scrollParent
        };
        this.images.push(image);
        this.initListener(el);
    }
    initListener(el){
        let scrollParent=getScrollParent(el);
        if(this.scrollParent.indexOf(scrollParent)<0){
            let position=getStyle(scrollParent,"position");
            if(!position || position=="static") scrollParent.style.position="relative";
            this.scrollParent.push(scrollParent);
            this.eventsList.forEach((event)=>{
                scrollParent.addEventListener(event,this.loadImage.bind(this));
            })
        }

    }
    loadImage(){
        let scrollParent,src,el;
        let images=this.images;
        for(let i = 0;i < images.length;i++){
            scrollParent=images[i].scrollParent;
            el=images[i].el;
            // ready to enter the screen but still "options.offset" px to go,load the img
            if(checkInView(el,scrollParent,this.options.offset)){
                src=el.dataset.src;
                el.setAttribute("src",src);
                images.splice(i--,1);
            }
        }
    }
}

export default LazyImage
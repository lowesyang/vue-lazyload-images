import {getStyle,getScrollParent,checkInView} from "./utils";
const DEFAULT_EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];

class LazyImage{
    constructor(options={}){
        this.init(options);
    }
    init(options={}){
        this.images=[];             //list of unload-images info
        this.scrollParent=new WeakSet();      //list of scrollParent listener
        this.options=options;
        this.eventsList=options.eventsList || DEFAULT_EVENTS;
    }
    addImage(el){
        if(!el.tagName || el.tagName.toLowerCase()!=='img') return;
        let scrollParent=getScrollParent(el);
        if(!scrollParent) return;
        let image={
            el:el,
            scrollParent:scrollParent
        };
        this.images.push(image);
        this.initListener(scrollParent);
    }
    removeImage(el){
        const index = this.images.findIndex(item=>item.el === el);
        this.images.splice(index,1);
    }
    initListener(scrollParent){
        if(!this.scrollParent.has(scrollParent)){
            const position = getStyle(scrollParent, "position");
            if (position==="" || position === "static") scrollParent.style.position = "relative";
            this.scrollParent.add(scrollParent);
            this.eventsList.forEach((event)=>{
                scrollParent.addEventListener(event,this.loadImage.bind(this));
            })
        }
    }
    loadImage(){
        let scrollParent,el;
        let images=this.images;

        // refresh images
        for(let i = 0;i < images.length;i++){
            scrollParent=images[i].scrollParent;
            el=images[i].el;
            // ready to enter the screen but still "options.offset" px to go,load the img
            if(checkInView(el,scrollParent,this.options.offset)){
                el.src=el.dataset.src || '';
                images.splice(i--,1);
            }
        }
    }
}

export default LazyImage;
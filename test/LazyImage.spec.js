import LazyImage from '../src/LazyImage';
import {expect} from 'chai';
import {clearBody} from './tools';

let lazyImage=new LazyImage();

describe('Class LazyImage',()=>{
    it('new Class',()=>{
        expect(lazyImage.images).to.be.an.instanceof(Array);
        expect(lazyImage.scrollParent).to.be.an.instanceof(WeakSet);
        expect(lazyImage.options).to.be.an('object');
        expect(lazyImage.eventsList).to.be.an.instanceof(Array);
    })

    it('init Class',()=>{
        lazyImage.images=null;
        lazyImage.scrollParent=null;
        lazyImage.eventsList=null;
        lazyImage.init({
            test:'Success'
        });
        expect(lazyImage.options.test).to.be.equal('Success');
        expect(lazyImage.images).to.be.an.instanceof(Array);
        expect(lazyImage.scrollParent).to.be.an.instanceof(WeakSet);
        expect(lazyImage.options).to.be.an('object');
        expect(lazyImage.options.test).to.be.equal('Success');
        expect(lazyImage.eventsList).to.be.an.instanceof(Array);
    })
});

describe('Function addImage and initListener',()=>{
    beforeEach(()=>{
        lazyImage.init();
    })
    afterEach(()=>{
        clearBody();
    })
    it('@Param el is not img',()=>{
        let div=document.createElement('div');
        lazyImage.addImage(div);
        expect(lazyImage.images.length).to.be.equal(0);
    })

    it('@Param el is an img without parents',()=>{
        let img=new Image();
        lazyImage.addImage(img);
        expect(lazyImage.images.length).to.be.equal(0);
    })

    it('@Param el is an img owned by the body',()=>{
        let img=new Image();
        document.body.appendChild(img);
        lazyImage.addImage(img);
        expect(lazyImage.images.length).to.be.equal(1);
    })

    it('@Param el is an img owned by a div without parents',()=>{
        let img=new Image();
        let div=document.createElement('div');
        div.style.cssText='overflow:scroll;width:300px;height:500px;';
        div.appendChild(img);
        lazyImage.addImage(img);
        expect(lazyImage.images.length).to.be.equal(0);
    })

    it('@Param el is an img owned by a div with parents "body"',()=>{
        let img=new Image();
        let div=document.createElement('div');
        img.style.cssText='width:10px;height:10px;';
        div.style.cssText='overflow:scroll;width:300px;height:500px;';
        div.className='parent';
        div.appendChild(img);
        document.body.appendChild(div);
        lazyImage.addImage(img);
        expect(lazyImage.images[0].scrollParent.className).to.be.equal('parent');
    })
})

describe('Function loadImage',()=>{
    it('Unvisible image',()=>{
        lazyImage.images[0].el.style.marginTop='-300px';
        lazyImage.loadImage();
        expect(lazyImage.images.length).to.be.equal(1);
    })

    it('Visible image',()=>{
        let img=lazyImage.images[0].el;
        document.body.appendChild(img.parentNode);
        img.style.marginTop='0px';
        lazyImage.loadImage();
        expect(lazyImage.images.length).to.be.equal(0);
    })

    it('Unmounted image',()=>{
        let img=new Image();
        img.setAttribute('data-src','test');
        lazyImage.addImage(img);
        lazyImage.removeImage(img);
        expect(lazyImage.images.length).to.be.equal(0);
        expect(img.src).to.be.equal('');
    })
})
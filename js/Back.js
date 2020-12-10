import Component from "./Component.js";
import Util from "./Util.js";

export default class Back extends Component{
    speed=300;
    bool=false;
    constructor(){
        super();
        this.elem.className = "block";
    }

    createElem(){
        if(this.elem) return this.elem;
        let elem=document.createElement("div");
        let span = document.createElement("span");
        span.textContent = "^";
        elem.appendChild(span);
        return elem;
    }
    appendTo(parent){
        super.appendTo(parent);
        this.init();
    }

    init(){
        this.elem.addEventListener("click",e => this.clickhandler(e));
        document.addEventListener("scroll",e => this.scrollHandler(e));
        // setInterval(this.animation,16);
    }

    clickhandler(e){
        this.bool=true;
    }

    scrollHandler(e){
        if(document.documentElement.scrollTop > document.documentElement.clientHeight){
            Util.addCSS(this.elem,{
                display : "block",
            });
        }else{
            Util.addCSS(this.elem,{
                display : "none",
            })
        }
    }

    // animation(){
    //     if(!this.bool)return;
    //     if(document.documentElement.scrollTop===0) return this.bool=false;
    //     document.documentElement.scrollTop-=this.speed;
    // }
}
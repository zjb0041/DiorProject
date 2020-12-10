import Component from "./Component.js";

export default class StepNumber extends Component{
    left;
    right;
    input;
    step=1;
    ids=0;
    id;
    constructor(_id){
        super();
        this.id=_id;
        this.createStep();
    }

    createStep(){
        this.left=document.createElement("div");
        Object.assign(this.left.style,{
            width:"16px",
            height:"18px",
            float:"left",
            textAlign:"center",
            lineHeight:"18px",
            userSelect:"none",
            border:"1px solid #999999"
        });
        this.left.textContent="-";
        this.right=this.left.cloneNode(false);
        this.right.textContent="+";
        this.input=document.createElement("input");
        Object.assign(this.input.style,{
            width:"46px",
            height:"16px",
            border:"none",
            borderTop:"1px solid #999999",
            borderBottom:"1px solid #999999",
            textAlign:"center",
            lineHeight:"16px",
            outline:"none",
            float:"left"
        });
        this.setStep(1);
        this.elem.appendChild(this.left);
        this.elem.appendChild(this.input);
        this.elem.appendChild(this.right);
        this.left.addEventListener("click",e=>this.clickHandler(e));
        this.right.addEventListener("click",e=>this.clickHandler(e));
        this.input.addEventListener("input",e=>this.inputHandler(e));
    }
    clickHandler(e){
        if(e.currentTarget===this.left){
            this.setStep(this.step-1);
        }else{
            this.setStep(this.step+1);
        }
        this.dispatch();
    }

    inputHandler(e){
        if(this.ids) return;
        this.ids=setTimeout(()=>{
            clearTimeout(this.ids);
             this.ids=0;
             let num=Number(this.input.value.replace(/\D/g,""));
             this.setStep(num);
             this.dispatch();
        },500);
    }

    setStep(_step){
        if(isNaN(_step)) return;
        if(_step<1) _step=1;
        if(_step>5) _step=5;
        if(this.step===1 && _step!==1){
            this.left.style.borderColor="#999999";
            this.left.style.color="#000000";
        }else if(this.step===5 && _step!==5){
            this.right.style.borderColor="#999999";
            this.right.style.color="#000000";
        }
        if(_step===1){
            this.left.style.borderColor="#CCCCCC";
            this.left.style.color="#CCCCCC";
        }else if(_step===5){
            this.right.style.borderColor="#CCCCCC";
            this.right.style.color="#CCCCCC";
        }
        this.input.value=_step;
        this.step=_step;
    }

    dispatch(){
        var evt=new Event("change");
        evt.step=this.step;
        evt.id=this.id;
        this.dispatchEvent(evt);
    }
}
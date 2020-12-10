import Component from "./Component.js";
import Utils from "./Utils.js";
export default class GoodsItem extends Component{
    data;
    iconCon;
    img;
    price;
    prev;
    static styleBool=false;
    constructor(_data){
        super();
        this.data=_data;
        this.elem.className="goodsIcon";
        this.elem.href="./itemInfo.html?id="+this.data.gid;
        this.render();
        GoodsItem.setStyle();
    }
    createElem(){
        if(this.elem) return this.elem;
        let a=document.createElement("a");
        return a;
    }
    appendTo(parent){
        super.appendTo(parent);
        this.img=this.elem.querySelector(".img");
        this.price=this.elem.querySelector(".price");
    }

    render(){
        this.elem.innerHTML=`
            <div class="showImg">
                <img class="img" src=${this.data.imgs.split(",")[0]}>
            </div>
            <div class="infoTagCon">
                 ${(function(data){
                     return data.tag.split(",").reduce((value,item)=>{
                          value+=`<span class='infoTag'>${item}</span>`;
                          return value;
                      },"")
                 })(this.data)}
            </div>
            <div class='titleCon'>
                <div class='title'></span>${this.data.title}</div>
            </div>
            <div class='desCon'>
                <div class='des'></span>${this.data.detail}</div>
            </div>
            <div class="priceCon">
                <span class="priceTag">￥</span>
                <span class="price">${Number(this.data.price)}</span>
            </div>
            
        `;
    }

    static setStyle(){
        if(GoodsItem.styleBool) return;
        GoodsItem.styleBool=true;
        Utils.addCSS(".goodsIcon",{
            width:'412px',
            height:'588px',
            position:'relative',
            marginTop:'10px',
            marginRight:"12px",
            marginLeft:"12px",
            float:'left',
            display:'block',
            textDecoration:"none"
        });
        
        Utils.addCSS(".goodsIcon>.showImg", {
            marginBottom:'18px',
            height:'400px',
            padding:'0',
            position:'relative',
            overflow:'hidden',
            font:'12px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "宋体", sansSerif',
            color:'#666',
        });
        
        Utils.addCSS(".goodsIcon>.showImg>.img", {
            width:'412px',
            height:'400px',
            margin:'0',
            padding:'0',
        });
        
        Utils.addCSS(".goodsIcon>.showImg>.presell", {
            position:'absolute',
            height:'25px',
            width:'200px',
            padding:'0 10px',
            color:'#fff',
            background:'rgba(0, 0, 0, .6)',
            transition:'all .5s ease',
            bottom:'0',
            lineHeight:'25px',
        });
        
        Utils.addCSS(".goodsIcon>.iconList", {
            position:'relative',
            marginBottom:'10px',
            marginLeft:'5px',
            width:'100%',
            marginTop:'5px',
        });
        
        Utils.addCSS(".goodsIcon>.iconList>img", {
            width:'25px',
            height:'25px',
            verticalAlign:'middle',
            border:'1px solid #ddd',
            outline:'1px solid transparent',
            marginLeft:'5px',
        });

        Utils.addCSS(".desCon", {
            position:'relative',
            width:'283px',
            color:'black',
            fontSize:'15px',
            lineHeight:"24px",
            paddingLeft:'18px',
        });
        
        Utils.addCSS(".goodsIcon>.priceCon", {
            position:'relative',
            width:'100%',
            color:'black',
            fontSize:'0',
            paddingLeft:'18px',
            marginTop:'20px',
        });
        
        Utils.addCSS(".goodsIcon>.priceCon>.priceTag", {
            fontSize:'16px',
            fontWeight:'400',
            fontFamily:'Verdana',
            lineHeight:'22px',
        });
        
        Utils.addCSS(".goodsIcon>.priceCon>.price", {
            fontSize:'20px',
            fontWeight:'400',
            fontFamily:'Verdana',
            lineHeight:'22px',
        });
        
        Utils.addCSS(".goodsIcon>.titleCon", {
            position:'relative',
            width:'95%',
            fontSize:'15px 宋体',
            fontWeight:'800',
            color:'black',
            overflow:'hidden',
            paddingLeft:'18px',
            marginTop:'5px',
        });
        
        Utils.addCSS(".goodsIcon>.titleCon>.title", {
            height:'30px',
            lineHeight:'20px',
            overflow:'hidden',
            whiteSpace:'nowrap',
            textOverflow:'ellipsis',
        });
        
        
        Utils.addCSS(".goodsIcon>.infoTagCon", {
            paddingLeft:'15px',
            height:'20px',
            marginBottom:"2px"
        });
        
        Utils.addCSS(".goodsIcon>.infoTagCon>span", {
            float:'left',
            height:'19px',
            lineHeight:'19px',
            padding:'0 4px',
            marginRight:'7px',
            font:'12px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "宋体", sansSerif',
            color:'#666',
        });
        
        Utils.addCSS(".goodsIcon>.tagCon",{
            marginLeft:'10px',
            marginTop:'10px',
        });
        Utils.addCSS(".tag_1",{
            float:'left',
            height:'16px',
            lineHeight:'16px',
            padding:'0 3px',
            marginRight:'3px',
            overflow:'hidden',
            textAlign:'center',
            fontStyle:'normal',
            fontSize:'12px',
            fontFamily:'"Helvetica Neue","Hiragino Sans GB",SimSun,serif',
            background:'#e23a3a',
            color:'#FFF',
            cursor:'default',
            borderRadius:'2px',
        });
        Utils.addCSS(".tag_2",{
            color:'#4d88ff',
            float:'left',
            height:'14px',
            lineHeight:'14px',
            padding:'0 3px',
            border:'1px solid #4d88ff',
            marginRight:'3px',
            overflow:'hidden',
            textAlign:'center',
            fontStyle:'normal',
            fontSize:'12px',
            fontFamily:'"Helvetica Neue","Hiragino Sans GB",SimSun,serif',
            borderRadius:'2px',
        });
        Utils.addCSS(".tag_3",{
            float:'left',
            height:'14px',
            lineHeight:'14px',
            padding:'0 3px',
            border:'1px solid #e23a3a',
            marginRight:'3px',
            overflow:'hidden',
            textAlign:'center',
            fontStyle:'normal',
            fontSize:'12px',
            fontFamily:'"Helvetica Neue","Hiragino Sans GB",SimSun,serif',
            borderRadius:'2px',
            color:'#e23a3a',
        });
        Utils.addCSS(".tag_4",{
            float:'left',
            height:'16px',
            lineHeight:'16px',
            padding:'0 3px',
            marginRight:'3px',
            overflow:'hidden',
            textAlign:'center',
            fontStyle:'normal',
            fontSize:'12px',
            fontFamily:'"Helvetica Neue","Hiragino Sans GB",SimSun,serif',
            background:'#31c19e',
            color:'#FFF',
            cursor:'default',
            borderRadius:'2px',
        });
        
    }
}
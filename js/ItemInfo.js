import Component from "./Component.js";
import Utils from "./Utils.js";
export default class ItemInfo extends Component {
    data;
    iconCon;
    img;
    price;
    prev;
    static styleBool = false;
    constructor(_data) {
        super();
        this.data = _data;
        this.elem.className = "goodsIcon";
        this.render();
        ItemInfo.setStyle();
    }
    createElem() {
        if (this.elem) return this.elem;
        let div = document.createElement("div");
        return div;
    }
    appendTo(parent) {
        super.appendTo(parent);
        this.iconCon = this.elem.querySelector(".iconList");
        this.img = this.elem.querySelector(".img");
        this.price = this.elem.querySelector(".price");
    }

    render() {
        this.elem.innerHTML = `
        <div class="itemsCon">
            <div class="showImg">
                <img class="img" src='${this.data.imgs.split(",")[1]}'>
            </div>
            <div class="iconList">
                ${(function (data) {
                    return data.imgs.split(",").slice(2).map(function (item) {
                        return `<img src='${item}'>`
                    }).join("");
                })(this.data)}
            </div>
        </div>
        <div class="text-con">
            <div class="infoTagCon">
                ${(function (data) {
                    return data.tag.split(",").reduce((value, item) => {
                        value += `<span class='infoTag'>${item}</span>`;
                        return value;
                    }, "")
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
            <div class="buttonCon">
                <a href="./car.html?id=${this.data.gid}" class="buy"><span>立即购买</span></a>
            </div>
            <div class="advantages">
                <div class="svgCon">
                    <span class="imgSvg">
                        <img class="svg" src='${this.data.svg.split(",")[0]}'>
                    </span>
                    <span class="textCon">试用及旅行装礼赠所有订单均获享2件试用装礼赠，订购满指定金额，即享迪奥明星产品旅行装</span>
                </div>
                <div class="svgCon">
                    <span class="imgSvg">
                        <img class="svg" src='${this.data.svg.split(",")[1]}'>
                    </span>
                    <span class="textCon txt">免费配送所有订单均享免费顺丰速递</span>
                </div>
                <div class="svgCon">
                    <span class="imgSvg">
                        <img class="svg" src='${this.data.svg.split(",")[2]}'>
                    </span>
                    <span class="textCon txt">艺术包装尊享Dior艺术包装</span>
                </div>
            </div>
        </div>
        `;
    }

    static setStyle() {
        Utils.addCSS(".goodsIcon", {
            width: '1311px',
            margin: 'auto',
            marginTop: '46px',
        })
        Utils.addCSS(".itemsCon", {
            width: '785px',
            float: 'left',
        })
        Utils.addCSS(".itemsCon>.showImg", {
            width: '785px',
            height: '523px',
            marginBottom: '10px',
            marign: 'auto',
            overflow: 'hidden',
        });
        Utils.addCSS(".itemsCon>.showImg>.img", {
            width: '785px',
            height: '523px',
            margin: '0',
            padding: '0',
        });
        Utils.addCSS(".itemsCon>.iconList", {
            position: 'relative',
            marginBottom: '10px',
            width: '805px',
            marginTop: '10px',
        });
        Utils.addCSS(".itemsCon>.iconList>img", {
            width: '382px',
            height: '412px',
            verticalAlign: 'middle',
            marginLeft: '4px',
            marginRight: '5px',
            marginBottom:'20px',
        });
        Utils.addCSS(".text-con", {
            width: '445px',
            float: 'left',
            marginLeft: '78px'
        })
        Utils.addCSS(".text-con>.titleCon", {
            position: 'relative',
            width: '95%',
            font: '12px tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "宋体", sansSerif',
            color: 'black',
            overflow: 'hidden',
            marginTop: '5px',
            fontWeight: '400',
        });
        Utils.addCSS(".text-con>.titleCon>.title", {
            height: '40px',
            lineHeight: '40px',
            fontSize:'32px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        });
        Utils.addCSS(".text-con>.infoTagCon", {
            height:'40px',
            marginBottom:"4px"
        });
        
        Utils.addCSS(".text-con>.infoTagCon>span", {
            display:'block',
            height:'20px',
            lineHeight:'19px',
            marginRight:'7px',
            font:'16px/150% "Century Gothic Std", Arial, sans-serif',
            color:'#757575',
        });
        Utils.addCSS(".text-con>.priceCon", {
            position:'relative',
            width:'245px',
            height:'30px',
            paddingLeft:"200px",
            paddingTop:'64px',
            color:'black',
            fontSize:'0',
        });
        
        Utils.addCSS(".text-con>.priceCon>.priceTag", {
            fontSize:'16px',
            fontWeight:'400',
            fontFamily:'Verdana',
            lineHeight:'22px',
        });

        
        Utils.addCSS(".text-con>.priceCon>.price", {
            fontSize:'16px',
            fontWeight:'400',
            fontFamily:'Century Gothic Std Bold", "Noto Sans JP", "Noto Sans SC", "Noto Sans TC", "Noto Sans KR',
            lineHeight:'22px',
            margin:'auto',
        });

        Utils.addCSS(".text-con>.desCon", {
            height:'70px',
            borderBottom:'1px solid #e5e5e5',
        });
        Utils.addCSS(".text-con>.desCon>.des", {
            lineHeight:'25px',
            height:'40px',
        });
        Utils.addCSS(".text-con>.buttonCon",{
            width:"255px",
            height:'44px',
            paddingTop:'18px',
            paddingLeft:'190px',
            background:'black',
            color:"white",
            borderRadius:'70px',
        })

        Utils.addCSS(".text-con>.buttonCon>a",{
            textDecoration:'none',
            color:"#FFF",
        })

        Utils.addCSS(".advantages",{
            width:'403px',
            height:'168px',
            marginTop:'20px',
            padding:'30px 20px 10px',
            border:"1px solid #cecece",
        })
        Utils.addCSS(".advantages>.svgCon",{
            width:'403px',
            height:'48px',
            // paddingBottom:'20px',
            position:'relative',
        })
        Utils.addCSS(".advantages>.svgCon>.imgSvg",{
            width:'32px',
            height:'30px',
            // marginRight:'20px',
            position:'absolute',
            top:'6px',
        })
        Utils.addCSS(".advantages>.svgCon>.textCon",{
            width:'351px',
            height:'32px',
            lineHeight:"20px",
            textDecoration:'underline',
            position:'absolute',
            left:"52px",
        })
        Utils.addCSS(".advantages>.svgCon>.txt",{
            position:'absolute',
            top:'9px',
        })
    }
}
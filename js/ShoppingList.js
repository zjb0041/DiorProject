import Component from "./Component.js";
import StepNumber from "../js/StepNumber.js";

export default class ShoppingList extends Component {
    data;
    heads = ["全选", "", "", "", "", "", ""];
    headsWidth = [122, 0, 160, 160, 160, 115, 97];
    ckAll;
    eventList = {};
    table;
    obj = {};
    constructor(_data) {
        super();
        this.data = _data;
        this.createCart();
    }
    // 创建容器
    createCart() {
        if (this.data.length === 0) return;//如果购物车中没有商品，跳出
        this.elem.className = "ShoppingList";
        Object.assign(this.elem.style, {
            width: "602px",
            margin: "15px auto",
        });
        this.table = document.createElement("table");
        Object.assign(this.table.style, {
            width: "620px",
            border: "1px solid #eee",
            margin: '0',
            margin: 'auto',
            marginTop: '20px',
            borderSpacing: "0px",
            cellpadding: "0px",
            cellspacing: "0px",
            // background: 'blue',
        });
        this.createTable();
        this.elem.appendChild(this.table);
    }
    createTable() {
        this.disposeShopping();
        this.createTableHead();
        this.creatTableBody();
        this.creatTableFoot();
    }

    //表头
    createTableHead() {
        let tr = document.createElement("tr");
        Object.assign(tr.style, {
            height: "34px",
            lineHeight: "34px",
        })
        for (let i = 0; i < this.heads.length; i++) {
            if (i === 1 || i === 2) continue;
            let th = document.createElement("th");
            Object.assign(th.style, {
                fontSize: "12px"
            });
            th.style.width = this.headsWidth[i] + "px";
            th.textContent = this.heads[i];
            switch (i) {
                case 0:
                    th.style.textAlign = "left";
                    break;
                default:
                    th.style.textAlign = "center";
                    th.style.fontWeight = "400";
            }
            //购物车中表头部分多选框
            if (i === 0) {
                let div = document.createElement("div");
                Object.assign(div.style, {
                    height: "100%",
                    width: "20px",
                    padding: "0px 5px 0px 0px",
                    float: "left",
                })
                this.ckAll = document.createElement("input");
                this.ckAll.type = "checkbox";
                this.ckAll.style.verticalAlign = "middle";
                // console.log(this.data.constructor)
                // console.log(this.data.split(","));
                this.ckAll.checked = this.data.every(item => item.selected);
                this.addEventManager(this.ckAll, "click", e => this.ckClickHandler(e));  //购物车中表头部分多选框
                // if (!eventList["click"]) eventList["click"] = new Map();

                div.appendChild(this.ckAll);
                th.insertBefore(div, th.firstChild);
            }
            if (i === 0) th.setAttribute("colspan", 2);
            tr.appendChild(th);
        }
        this.table.appendChild(tr);
    }

    // 表格主体
    creatTableBody() {
        for (let i = 0; i < this.data.length; i++) {
            let tr = document.createElement("tr");
            tr.style.height = "100px";
            for (var prop in this.data[i]) {
                // console.log("prop="+prop);
                if (prop === "gid") continue;  //如果是id项，则不创建td
                var td = document.createElement("td");
                Object.assign(td.style, {
                    verticalAlign: "top"
                })
                this.createContent(td, this.data[i], prop);
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        }
    }

    // 表格内容设置
    createContent(td, obj, prop) {
        switch (prop) {
            case "selected":   //购物车中商品信息前的多选框
                var ck = document.createElement("input");
                ck.type = "checkbox";
                td.width = '36px';
                td.height = '131px';
                td.style.paddingRight = "18px";
                td.style.verticalAlign = "middle";
                td.appendChild(ck);
                ck.id = obj.gid;
                ck.checked = obj.selected;
                ck.style.marginLeft = "10px";
                this.addEventManager(ck, "click", e => this.ckClickHandler(e)); //购物车中商品信息前的多选框
                return;
            case "img":
                var img = new Image();
                img.src = obj[prop];
                img.style.width = "106px";
                img.style.height = "111px";
                td.style.width = "106px";
                td.style.padding = "10px";
                td.display = "inline-block";
                td.style.verticalAlign = "middle";
                td.appendChild(img);
                return;
            case "title":
                td.style.width = "160px";
                td.style.fontSize = "10px";
                td.style.verticalAlign = "middle";
                td.textContent = obj[prop];
                break;
            case "detail":
                td.style.verticalAlign = "middle";
                td.style.fontSize = "10px";
                td.textContent = obj[prop];
                // console.log(obj[prop], obj);
                break;
            case "num":
                td.style.verticalAlign = "middle";
                td.style.padding = "18px";
                td.style.width = "160px";
                console.log(obj);
                var step = new StepNumber(obj.gid);
                step.setStep(obj[prop]);
                step.appendTo(td);
                this.addEventManager(step, "change", e => this.stepChangeHandler(e));  //修改商品数量
                break;
            case "total":
                td.style.paddingTop = "55px";
                td.textContent = "￥" + Number(obj[prop]);
                td.style.textAlign = "center";
                td.style.fontSize = "12px";
                return;
            case "del":
                td.style.paddingTop = "52px";
                var a = document.createElement("a");
                a.textContent = "x";
                a.href = "javascript:void(0)";
                Object.assign(a.style, {
                    display: "inline-block",
                    textDecoration: "none",
                    color: "#666666"
                });
                a.id = obj.gid;
                td.style.textAlign = "center";
                this.addEventManager(a, "click", e => this.delHandler(e)); //删除商品链接
                td.appendChild(a);
                break;

            default:
                break;
        }
    }

    //在购物车中查找是否有新点击添加的商品
    searchItem(list, id) {  //list是购物车列表，id是购物车商品的id，即商品id+index
        return list.reduce((value, item) => {
            if (item.gid === id) value = item;
            return value;
        }, null);
    }

    //事件管理
    addEventManager(elem, type, handler) {
        if (!this.eventList[type]) this.eventList[type] = new Map();
        this.eventList[type].set(elem, handler);
        elem.addEventListener(type, handler);
    }


    //修改商品数量
    stepChangeHandler(e) {
        var goods = this.searchItem(this.data, e.id);
        console.log(goods,this.data,e.id,e.step);
        if (!goods) return;
        goods.num = e.step;
        //TODO 数量问题
        goods.total = goods.price * e.step;
        console.log(goods.num, goods.price)
        this.createTable();
    }



    //TODO 点击多选框，修改对应的信息
    ckClickHandler(e) {
        if (!e.currentTarget.id) {
            this.data.forEach(item => {
                item.selected = e.currentTarget.checked;
            })
        } else {
            let goods = this.searchItem(this.data, e.currentTarget.id);
            if (!goods) return;
            goods.selected = e.currentTarget.checked;
        }
        this.createTable();
    }


    //TODO 删除商品
    delHandler(e) {
        let id = e.currentTarget.id;
        console.log("id="+id);
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].gid === id) {
                this.data.splice(i, 1);
                break;
            }
        }
        this.createTable();
    }


    // TODO 清除购物车内容
    disposeShopping() {
        for (var prop in this.eventList) {
            // console.log(this.eventList);
            for (var [key, value] of this.eventList[prop]) {
                key.removeEventListener(prop, value);
            }
            this.eventList[prop].clear();
        }
        this.eventList = null;
        this.eventList = {};
        this.table.innerHTML = "";
    }

    //TODO 
    creatTableFoot() {
        let tr = document.createElement("tr");
        this.table.appendChild(tr);
    }

}
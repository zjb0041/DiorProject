import Component from "./Component.js";
import Utils from "./Utils.js";

export default class Car extends Component {
    data;
    constructor(_data) {
        super();
        this.data = _data;
        this.elem.className = "carCon";
        this.render();
        Car.setStyle();
    }
    createElem() {
        if (this.elem) return this.elem;
        let table = document.createElement("table");
        return table;
    }
    appendTo(parent) {
        super.appendTo(parent);
    }

    render() {
        this.elem.innerHTML = `
            <tbody>
                <tr>
                    <td class="checkbox"><input type="checkbox"></td>
                    <td class="product-cart-image"><img src="./../img/list/zw01.jpg" alt=""></td>
                    <td class="product-cart-info">
                        <span class="product-name">${this.data.title}</span>
                        <span class="push-subtitle">${this.data.detail}</span>
                    </td>
                    <td class="product-cart-actions"> 
                        <div class="qty_box">
                            <span class="minus">-</span>
                            <span class="qty">${this.data.num}</span>
                            <span class="plus">+</span>
                        </div>
                    </td>
                    <td class="product-cart-total">
                        <span class="cart-price">￥${this.data.price}</span>
                    </td>
                    <td class="product-cart-remove">
                        <a href="javascript:void(0)">x</a>
                    </td>
                </tr>
            </tbody>
        `;
    }

    static setStyle() {
        Utils.addCSS("tbody>tr", {
            borderTop: "1px solid #f5f5f5",
            width: '620px',
            height: '130px',
        })
        Utils.addCSS("tbody>tr>.checkbox", {
            width: '36px',
            height: '131px',
        })
        Utils.addCSS("tbody>tr>.product-cart-image", {
            width: '106px',
            padding: '10px',
            display: 'inline-block',
        })
        Utils.addCSS("tbody>tr>.product-cart-image>img", {
            width: '106px',
            height: '111px',
        })
        Utils.addCSS("tbody>tr>.product-cart-info", {
            width: '160px',
            height: '108px',
            padding: '10px',
        })
        Utils.addCSS("tbody>tr>.product-cart-info>span", {
            display: 'block',
        })
        Utils.addCSS("tbody>tr>.product-name", {
            width: '160px',
            height: '16px',
            marginBottom: '8px',
            fontWeight: 'bold',
            fontSize: '12px',
        })
        Utils.addCSS("tbody>tr>.push-subtitle", {
            width: '160px',
            height: '30px',
            marginBottom: '8px',
            color: '#999999',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: '10px',
            lineHeight: '15px',
            textAlign: 'left',
        })
        Utils.addCSS("tbody>tr>.product-cart-actions", {
            width: '115px',
            height: '108px',
            padding: '10px',
        })
        Utils.addCSS("tbody>tr>.product-cart-actions>span", {
            display: "block",
        })
        Utils.addCSS("tbody>tr>.product-cart-actions>.qty_box", {
            height: '100px',
            width: '30px',
            margin: 'auto',
        })
        Utils.addCSS(".product-cart-actions>.qty_box>.minus", {
            width: '28px',
            height: '28px',
            border: '1px solid black',
            borderRadius: '30px',
            textAlign: 'center',
        })
        Utils.addCSS(".product-cart-actions>.qty_box>.qty",{
            width: '30px',
            height: '30px',
            textAlign: 'center',
        })
        Utils.addCSS(".product-cart-actions>.qty_box.plus",{
            width: '28px',
            height: '28px',
            border: '1px solid black',
            borderRadius: '30px',
            textAlign: 'center',
        })
        Utils.addCSS(".product-cart-total",{
            width: '2153px',
            height: '108px',
            padding: '10px',
            textAlign: 'right'
        })
        Utils.addCSS(".product-cart-total>.cart-price",{
            textAlign: 'right',
            fontSize: '10px',
        })
        Utils.addCSS(".product-cart-remove",{
            width: '6px',
            height: '111px',
            padding: '10px',
        })
        Utils.addCSS(".product-cart-remove>a",{
            textDecoration: 'none',
            color: '#999999',
        })
    }
}
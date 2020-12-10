export default class Utils{
   static time=0;
   static ids=0;
   static timeManage={};

   static timeStart(){
        if(Utils.time) return;
        Utils.time=new Date().getTime();
    }
   static timeEnd(){
        var t=new Date().getTime()-Utils.time;
        Utils.time=0;
        return t;
    }
    static ts(){
        Utils.ids++;
        Utils.timeManage[Utils.ids]=new Date().getTime();
        return ids;
    }
    static te(id){
        if(!Utils.timeManage[Utils.id]) return 0;
        var t=new Date().getTime()-Utils.timeManage[Utils.id];
        delete Utils.timeManage[Utils.id];
        return t;
    }
    static randomColor(){
        var col="#";
        for(var i=0;i<6;i++){
            col+=Math.floor(Math.random()*16).toString(16);
        }
        return col;
    }
    static random(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
     static ce(type,style,parent){
        var elem=document.createElement(type);
        if(style){
            for(var prop in style){
                elem.style[prop]=style[prop];
            }
        }
        if(typeof parent==="string") parent=document.querySelector(parent);
        if(parent) parent.appendChild(elem);
        return elem;
    }
    static setStyle(styles){
        var style=document.createElement("style");
        document.head.appendChild(style);
        var styleSheet=document.styleSheets[document.styleSheets.length-1];
        for(var prop in styles){
            Utils.addCss(styleSheet,prop,styles[prop]);
        }
    }
    static  addCSS(selector,style,title){
        if(title===undefined) title="xietian";
        var arr=Array.from(document.styleSheets);
        var  styleSheet=arr.reduce(function(value,item){
            if(item.title===title)return item;
            return value;
        },null);
        if(!styleSheet){
            var s=document.createElement("style");
            s.title=title;
            document.head.appendChild(s);
            styleSheet=document.styleSheets[document.styleSheets.length-1];
        }
        var str="";
        for(var prop in style){
            str+=prop.replace(/[A-Z]/g,function(value){
                return "-"+value.toLowerCase();
            })+":"+(typeof style[prop]==="number" ? style[prop]+"px" : style[prop])+";";
        }
        if(styleSheet.addRule){
            styleSheet.addRule(selector,str,styleSheet.cssRules.length);
        }else{
            styleSheet.insertRule(selector+"{ "+str+" }",styleSheet.cssRules.length);
        }
    }
}
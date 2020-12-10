function $only(TagName){
    return document.querySelector(TagName)
}
function $full(TagName){
    return document.querySelectorAll(TagName)
}

function ajax(json){
    if(window.XMLHttpRequest){
        var ajax = new XMLHttpRequest();
    }
    else{
        var ajax = new ActiveXObject( "Microsoft.XMLHTTP" );
    }
    if(json.type=='get'){
        ajax.open('get',json.url+'?'+JsonToString(json.data),true);
        ajax.send();
    }
    else if(json.type=='post'){
        ajax.open('post',json.url,true);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(JsonToString(json.data));
    }
   
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status>=200 && ajax.status<300 || ajax.status == 304){
                // console.log(ajax.responseText);
                json.success(ajax.responseText);
            }
            else{
                json.error && json.error(ajax.status);
            }
        };
    };
    function JsonToString(json){
        var arr = [];

        for(var i in json){
            arr.push(i+'='+json[i]);
        };

        return arr.join('&');
    }
}

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
// setCookie("tapge","95",1)
// getCookie("tapge") => 95
// removeCookie("taoge")
function setCookie(name,value,t=0.1)
{
    var Days = t;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+ ";path=/";;
}

function getCookie(key){
    var arr1=document.cookie.split(";");
    for(var i=0;i<arr1.length;i++){
        var arr2=arr1[i].split("=");
        if(arr2[0].trim()==key){
            return decodeURI(arr2[1]);
        }
    }
}

function removeCookie(key){
    setCookie(key,"",-1); 
};

var http=require("http");
var querystring=require("querystring");
var mysql=require("mysql");
var server,req,res;
var data="";
var sql=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"dior"
})
sql.connect(function(error){
    if(error){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
        createServer();
    }
})
function createServer(){
    server=http.createServer(createChannel);
    server.listen(4009,"10.9.72.226",listenHandler);
}

function listenHandler(){
    console.log("服务开启")
}

function createChannel(_req,_res){
    req=_req;
    res=_res;
    data="";
     res.writeHead(200,{
        "content-type":"text/html;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    });
    req.on("data",function(_data){
        data+=_data;
    });
    req.on("end",channelEndHandler);
}

function channelEndHandler(){
    if(req.method.toLowerCase()==="get"){
        if(req.url.includes("favicon.ico")) return res.end();//如果get请求的是图标直接返回空跳出
        data=req.url.includes("?") ? req.url.split("?")[1] : "";
    }
    try{
        data=JSON.parse(data);
    }catch(e){
        data=data ? querystring.parse(data) : {};
    }
    var str="SELECT * FROM `goods` WHERE `gid` = '" + data.id + "'";
    sql.query(str,[data],sqlCallBack);
}
function sqlCallBack(error,result){
    var data = result;
    console.log(data);
    if(error){
        res.end("获取数据失败!");
        return;
    }
    res.end(JSON.stringify(data));
}

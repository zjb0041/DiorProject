var createServer=require("./server");
var mysql=require("mysql");
var router={
    login:require("./login"),
    register:require("./register"),
    selectSql:require("./selectSql"),
    select:require("./select"),
    selectCar:require("./selectCar"),
}
var sql=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"dior"
});
sql.connect(function(error){
    if(error){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
        createServer(router,sql);
    }
})
// 用于登录

module.exports=function(res,connection, data) {
    console.log("执行了Select")
    console.log(data);
    var sql = "SELECT `uid` FROM `user` WHERE  tel='" + data.tel + "' and password='" + data.password + "'";
    console.log(sql);
    connection.query(sql,(err, result)=> {
      console.log("result=" +result)
      console.log("result1=" + JSON.stringify(result))
      if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
      } else {
        var jsonserver = {
          "msg": result.length ? "登录成功" : "登录失败",
          "result": result,
          "code": result.length ? "1" : "0",
        }
        res.write("");
        res.end(JSON.stringify(jsonserver));
      }
    })
  }



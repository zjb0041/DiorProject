//查询商品列表
module.exports=function(res,connection, data) {
    console.log("执行了Select");
    // console.log(data);
    var sql="SELECT * FROM `goods` WHERE 1";
    // console.log(sql);
    connection.query(sql,(err, result)=> {
      if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
      } else {
        res.write("");
        res.end(JSON.stringify(result));
      }
    })
  }
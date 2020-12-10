//商品详情页
module.exports=function(res,connection, data) {
    console.log("执行了Select111111");
    console.log(data);
    var sql="SELECT * FROM `goods` WHERE `gid` = '" + data.id + "'";
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
module.exports = function (res, connection, data) {
  console.log("selectCar");

  var jsonserver = {};
  var sql = "SELECT goodsArr FROM `user` WHERE `uid` = '" + data.uid + "'";
  // console.log(sql);
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    } else {
      // console.log("插入成功", result);
      jsonserver = {
        "msg": "查询成功",
        "code": "1",
        "result":result,
      }
      res.write("");
      res.end(JSON.stringify(jsonserver));
    }
  })

}

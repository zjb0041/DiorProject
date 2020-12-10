//执行注册
module.exports=function(res,connection,data){
    console.log("执行了插入用户数据库的操作");
    var jsonserver = {};
    var sql = "SELECT count(*) count FROM user WHERE tel = '" + data.tel + "'";
    var coun;
    connection.query(sql, (err, result) => {
        console.log(result[0].count);
        if (result[0].count < 1) {
        var insql = "INSERT INTO `user`(`f_name`, `l_name`, `tel`, `sex`,`password`) VALUES ('" + data.fname + "','" + data.lname + "','" + data.tel + "','" + data.gender + "','" + data.password + "')";
        console.log(insql);
        connection.query(insql, (err, result) => {
            if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
            } else {
            console.log("插入成功", result);
            jsonserver = {
                "msg": "用户注册成功",
                "code": "1",
            }
            res.write("");
            res.end(JSON.stringify(jsonserver));
            }
        })

        } else {
        console.log("插入失败")
        jsonserver = {
            "msg": "用户注册失败",
            "code": "0",
        }
        res.write("");
        res.end(JSON.stringify(jsonserver))
        }
    })
}

var http = require("http");
// const { type } = require("os");
var querystring = require("querystring");

var req, res, mysql;
var router, sql;
function createServer(_router, _sql) {
    router = _router;
    sql = _sql;
    var server = http.createServer(getServer);
    server.listen(4010, "localhost", function () {
        console.log("服务开启");
    })
}

function getServer(_req, _res) {
    req = _req;
    res = _res;
    var data = "";
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    })
    req.on("data", function (_data) {
        data += _data;
    });
    req.on("end", function () {
        if (req.method.toLowerCase() === "get") {
            if (req.url.includes("favicon.ico")) return res.end();//如果get请求的是图标直接返回空跳出
            data = req.url.includes("?") ? req.url.split("?")[1] : "";
        }
        try {
            data = JSON.parse(data);
        } catch (e) {
            data = data ? querystring.parse(data) : {};
        }
        console.log(data);
        var cut = data.type;
        console.log(cut);

        switch (cut) {
            case 'login':
                type = 'login';
                break;
            case 'register':
                type = "register";
                break;
            case 'selectSql':
                type = "selectSql";
                break;
            case 'select':
                type = "select";
                break;
            case "selectCar":
                type = "selectCar";
                break;
            default:
                type = 'error';
                break;
        }
        if (type == 'error') {
            var error_arr = {
                "status": '403',
            }
            res.end(JSON.stringify(error_arr));
            return;
        };
        router[type](res, sql, data);
    })
}
module.exports = createServer;
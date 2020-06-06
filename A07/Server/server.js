"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//mongodb+srv://TestUser:<password>@eia2-i2krx.mongodb.net/<dbname>?retryWrites=true&w=majority
var A07;
(function (A07) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://TestUser:1234@eia2-i2krx.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("BALANCE").collection("Orders");
        console.log("Database connection ", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        console.log(port);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(A07 = exports.A07 || (exports.A07 = {}));
//# sourceMappingURL=server.js.map
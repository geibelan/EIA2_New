"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//See https://github.com/JirkaDellOro/EIA2-Inverted/blob/master/X00_Code/L07_Database/CocktailBar/Server/Server.ts
//And the coresponding lecture
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//mongodb+srv://TestUser:<password>@eia2-i2krx.mongodb.net/<dbname>?retryWrites=true&w=majority
var magicalCanvas;
(function (magicalCanvas) {
    let load = [];
    let mongoClient;
    let images;
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
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        images = mongoClient.db("Canvas").collection("Save");
        console.log("Database connection ", images != undefined);
        console.log("Database connection ", images != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        console.log(port);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            if (_request.url == "/?load=all") {
                console.log("Load"); //Loading from Database is similar to Kohler, Alida's Code
                let cursor = await images.find();
                await cursor.forEach(getImages);
                let jsonString = JSON.stringify(load);
                _response.write(jsonString);
                load = [];
            }
            else {
                let url = Url.parse(_request.url, true);
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                saveImages(url.query);
            }
        }
        _response.end();
    }
    function getImages(_item) {
        load.push(_item);
    }
    function saveImages(_img) {
        images.insert(_img);
    }
})(magicalCanvas = exports.magicalCanvas || (exports.magicalCanvas = {}));
//# sourceMappingURL=server.js.map
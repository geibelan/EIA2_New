import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//mongodb+srv://TestUser:<password>@eia2-i2krx.mongodb.net/<dbname>?retryWrites=true&w=majority
export namespace magicalCanvas {

    interface Drawing {
        [type: string]: string | string[];
    }

    let load: any[] = [];
    let mongoClient: Mongo.MongoClient;
    let images: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb+srv://TestUser:1234@eia2-i2krx.mongodb.net/<dbname>?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }


    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        images = mongoClient.db("Canvas").collection("Save");
        console.log("Database connection ", images != undefined);
        console.log("Database connection ", images != undefined);
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<any> {
        console.log("What's up?");
        console.log(port);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            if (_request.url == "/?load=all") {
                console.log("Load");
                //let pictures: Mongo.Collection<any> = mongoClient.db("Canvas").collection("Save");
                let cursor: Mongo.Cursor<any> = await images.find();
                await cursor.forEach(getImages);
                let jsonString: string = JSON.stringify(load);
                _response.write(jsonString);
                load = [];

            } else {

                let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }

                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);

                saveImages(<Drawing>url.query);
            }
        }

        _response.end();
    }

    function getImages(_item: object): void {
            load.push( _item);
    }

    function saveImages(_img: Drawing): void {
        images.insert(_img);
    }
}

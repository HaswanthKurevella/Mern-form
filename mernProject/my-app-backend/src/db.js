import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://haswanthkurevella1:1234@cluster0.3wklgks.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("mern");
    cb();
}

export {db,connectToDB};
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const database = 'feedback-final-test';

async function getData()
{
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('feedbacks');
  let response = await collection.find({}).toArray();
  console.log(response);
}



async function insertData(){
    const data = {
        "name": "Salman Juber Adhikari",
        "email": "t1015@gmai.com",
        "feed": "Goods Work",
        "gender": "male"
      }
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('feedbacks');
    let response = await collection.insertOne(data);
    console.log(response);

}

async function run(){
    await getData();
    await insertData();
}

run().then(()=>{
    console.log("Done");
}).catch((err)=>{
    console.log(err);
})
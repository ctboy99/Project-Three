/** @AW_RANTWORKS */
/* Set constant values for number of pulled tweets and critera when making the API call. */
const MAX_TWEETS = 100;
const params = { tweet_mode: 'extended', count: MAX_TWEETS, list_id: "1389838980326301697", exclude: "retweets, replies" };


// var date = new Date();
// var time = date.getUTCHours();
// console.log(time);

/* Required module imports and application. */
const writeJsonFile = require('write-json-file');
var fs = require('fs');
const Database = require('./database.js');
const express = require('express');
const cors = require('cors');
const Twit = require('twit');
const app = express();
app.use(cors());


// Twitter API Connection
const Twitter = new Twit({
    consumer_key: '0JazQAPj3anUdzdkUZe0LSpNY',
    consumer_secret: 'Mf2ZKzNVLy7myvjcrVWIdSYSHU1apfCWtci41SIl5XEKWs6Vlm',
    access_token: '1376962088116105220-pMloTeaypLOZ57opO1ai6ZNvXRpuJ1',
    access_token_secret: 'w8ZSJ862AmlcixPvLkHwoMi8mspYf4VMpWrh4TdHavwoe',
});

/* Model typescript class Tweets with variable that holds expected twitter values. */
var myCollection = {
    profile_picture: String,
    user_name: String,
    screen_name: String,
    full_text: String,
    favorites: String,
    retweets: Number,
    created_at: String,
    //last_retrieved: string,
};

var docs = new Array();

/* Function to get Data from Twitter API call, and store it into the Database. */
async function parser() {
    const Database = require('./database.js');
    console.log("Hello");
    var db = new Database();
    db.Connector(docs);
    db.connect()
    db.removeRecords("TwitterData");
    var i = 0;
    var j = 0;
    Twitter
        .get('/lists/statuses', params, function (error, tweets, response) {
            var x = JSON.parse(JSON.stringify(tweets));
            for (i = 0; i < x.length; i++) {
                var temp = myCollection;
                temp['profile_picture'] = x[i].user.profile_image_url;
                temp['user_name'] = x[i].user.name;
                temp['screen_name'] = x[i].user.screen_name;
                temp['full_text'] = x[i].full_text;
                temp['favorites'] = x[i].favorite_count;
                temp['retweets'] = x[i].retweet_count;
                temp['created_at'] = x[i].created_at;
                docs.push(temp);

                db.addToTwitterTable(docs[i].profile_picture,
                    docs[i].user_name, docs[i].screen_name,
                    docs[i].full_text, docs[i].favorites,
                    docs[i].retweets, docs[i].created_at);
            }

     
    /* Function to get TwitterData from the Database asynchronously and write it to the JSON. */
        async function call() {
            var a = await db.getRecords("TwitterData");
            var b = JSON.stringify(a);
            var c = JSON.parse(b);
            //console.log(a);
            fs.writeFile('mydata.json', '', function(){console.log('JSON Cleared.')})
            fs.writeFile('mydata.json', b, function(err, res) {
                if (err) console.log(err);  
                console.log("JSON Filled.")      
        })
    }
    call();

})
    

}


/* Function to deploy tweets to localHost server via HTTP. */
function localHost() {
    app.get('/user_timeline', (req, response) => {
        Twitter
            .get('/lists/statuses', params)
            .then(timeline => {
                response.send(timeline);

            })
            .catch(error => {
                response.send(error);
            })


    })

};

/* Function to listen to localhost at port 3000, or http://localhost:3000 */
function listener() {
    app.listen(3000, () => console.log("Server Running"));
}

parser();
//call();
//listener();

/* Export functions for global use. */
module.exports = parser;
module.exports = listener;
module.exports = myCollection;

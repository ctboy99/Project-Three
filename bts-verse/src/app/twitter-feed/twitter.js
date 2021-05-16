const MAX_TWEETS = 100;
path = require('path');
var Root = __dirname + '/';

var chart = require('chart.js');

var docs = new Array();

//Chart = new chart(chart);
const Database = require('./database.js');



const params = { tweet_mode: 'extended', count: MAX_TWEETS, list_id: "1389838980326301697", exclude: "retweets, replies" };

// Printed number of streamed tweets filtered by name. 

var date = new Date();
var time = date.getUTCHours();
console.log(time);

const writeJsonFile = require('write-json-file');
var fs = require('fs');
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

    // Pull tweets for an hour at noon, based on the screenname of the user.
});

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

     
    //db.quit()
    //app.get('/twitter/api', (req, response) => {
        async function call() {
            var a = await db.getRecords("TwitterData");
            var b = JSON.stringify(a);
            var c = JSON.parse(b);
            //console.log(a);
            await fs.writeFile('mydata.json', '', function(){console.log('JSON Cleared.')})
            await fs.writeFile('mydata.json', b, function(err, res) {
                if (err) console.log(err);  
                console.log("JSON Filled.")      
        })
    }
    call();

})
    

}



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


parser();
//call();
//listener();

module.exports = parser;
module.exports = listener;
module.exports = myCollection;

function listener() {
    app.listen(3000, () => console.log("Server Running"));
}




function shifter(array1, array2) {
    for (x in array1) {
        array2.push(x);
    }

    return array2;
}

function getter(array, index) {
    return array[index];
}

function adder(array, value) {
    array.push(value);
    return array;
}

exports.getCreated = function () {
    return created.toString();
}
exports.getText = function () {
    return text.toString();
}


    //console.log(x.response.user.followers_count);
    //console.log(x)

//exports.created = created;
/*
// Stream for constant pulls based on the content of the tweet.
var stream = Twitter.stream('statuses/filter', {track: ['bts'] })
stream.on('tweet', function(tweet) {
    setTimeout (() => {console.log(tweet); }, 5000)
})
*/
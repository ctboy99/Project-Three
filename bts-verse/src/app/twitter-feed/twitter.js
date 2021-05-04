
// var favorite_count;
// var retweet_count;
// var text;
const info = new Array();
var filled = new Array();

// Printed number of streamed tweets filtered by name. 
const MAX_TWEETS = 1;

var date = new Date();
var time = date.getUTCHours();
console.log(time);

var express = require('express');
var cors = require('cors');
var Twit = require('twit');
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
    
//if (time == 12) {
    
    //console.log(x);


    // console.log(x[0].created_at);
    // console.log(x[0].text);
    // if (x[0].favorite_count != 0) {
    //     console.log(x[0].favorite_count);
    // }
    // console.log(x[0].retweet_count);
    // console.log(x[0].user.profile_image_url);
    // console.log(x[0].user.profile_banner_url);



    //console.log(x.user.followers_count);
 
  // function exporter() {
    app.get('/user_timeline', (req, response) => {
        const params = { tweet_mode: 'extended', count: 1, screen_name: "bts_twt" };
        //app.get('statuses/user_timeline', {screen_name: "bts_twt", count: MAX_TWEETS}, function(err, data, response) {
            // let arr = new Array();
            // var x = JSON.parse(JSON.stringify(data));
            // //console.log(x)
            // var screen_name = x[0].user.screen_name;
            // var created = x[0].created_at;
            // //console.log(screen_name);
            // var text = x[0].text;
            // var favorite_count = x[0].favorite_count;
            // var retweet_count = x[0].retweet_count;
            // var profile_image = x[0].user.profile_image_url;
            // var profile_banner = x[0].user.profile_banner_url; 
            // adder(info, screen_name);
            // adder(info, created);
            // adder(info, text);
            // adder(info, favorite_count);
            // adder(info, retweet_count);
            // adder(info, profile_image);
            // adder(info, profile_banner);
            // //console.log(getter(info, 2));  
            // console.log(info);
            //console.log(response);
            Twitter 
            .get('statuses/user_timeline', params)
            .then(timeline => {
                response.send(timeline);
                //console.log(timeline);
            })
            .catch(error => {
                response.send(error);
            });
            });
        
        
            app.listen(3000, () => console.log("Server Running"))


      
//exporter();
//console.log(exporter(info));
//console.log(info);    

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

exports.getCreated = function(){
    return created.toString();
}
exports.getText = function(){
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
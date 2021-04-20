# Printed number of streamed tweets filtered by name. 
const MAX_TWEETS = 3;

var date = new Date();
var time = date.getUTCHours();
console.log(time);

var Twit = require('twit');

# Twitter API Connection
var Twitter = new Twit({
    consumer_key: '0JazQAPj3anUdzdkUZe0LSpNY',
    consumer_secret: 'Mf2ZKzNVLy7myvjcrVWIdSYSHU1apfCWtci41SIl5XEKWs6Vlm',
    access_token: '1376962088116105220-pMloTeaypLOZ57opO1ai6ZNvXRpuJ1',
    access_token_secret: 'w8ZSJ862AmlcixPvLkHwoMi8mspYf4VMpWrh4TdHavwoe',

# Pull tweets for an hour at noon, based on the screenname of the user.
})
if (time == 12) {
    Twitter.get('statuses/user_timeline', {screen_name: "bts_twt", count: MAX_TWEETS}, function(err, data, response) {
    //console.log(data)
    var x = JSON.parse(JSON.stringify(data))
    console.log(x)
})
}

# Stream for constant pulls based on the content of the tweet.
var stream = Twitter.stream('statuses/filter', {track: ['bts'] })
stream.on('tweet', function(tweet) {
    setTimeout (() => {console.log(tweet); }, 5000)
})

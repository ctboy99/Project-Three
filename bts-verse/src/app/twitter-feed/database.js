const mysql = require('mysql');
class myCollection {
    profile_picture;
    user_name;
    screen_name;
    full_text;
    favorites;
    retweets;
    created_at;
    //last_retrieved: String,
};
//const twitter = require("./twitter.js");

//const { resourceLimits } = require('node:worker_threads');

class Database {
    docs = new Array();
    Connector(docs) {
        this.connection = mysql.createConnection({
            host: "bts-verse.cw824owciirp.us-east-1.rds.amazonaws.com",
            user: "admin",
            password: "rantworks",
            database: "btsverse",

        });

        this.docs = docs;

    }

    connect() {
        this.connection.connect();
        console.log("Connected!");
    }

    quit() {
        this.connection.end();
        console.log("Ended.")
    }

    getRecords = (tableName) => {
        return new Promise(resolve => {
            var docs = new Array();
            var holder;
            var sql = "SELECT * FROM " + tableName;
            console.log("Done!");
            this.connection.query(sql, function (error, results, fields) {
                //console.log(results);
                for (let i = 0; i < results.length; i++) {
                    var temp = new myCollection();
                    temp['profile_picture'] = results[i].profile_picture;
                    temp['user_name'] = results[i].user_name;
                    temp['screen_name'] = results[i].screen_name;
                    temp['full_text'] = results[i].full_text;
                    temp['favorites'] = results[i].favorites;
                    temp['retweets'] = results[i].retweets;
                    temp['created_at'] = results[i].created_at;
                    docs.push(temp);
                }
                resolve(docs);

                //console.log(this.docs);
            });

        })

    }

    removeRecords(tableName) {
        var sql = "TRUNCATE TABLE " + tableName;
        this.connection.query(sql);
    }

    setTwitterRecord(queue, link) {
        var sql = "INSERT INTO Twitter(queue, link) VALUES('" + queue + "', '" + link + "')";
        this.connection.query(sql);
        console.log("Done!");
    }

    setYouTubeRecord(queue, link) {
        var sql = "INSERT INTO Youtube(queue, link) VALUES('" + queue + "', '" + link + "')";
        this.connection.query(sql);
    }

    dropTable(tableName) {
        var sql = "DROP TABLE " + tableName;
        this.connection.query(sql);

    }

    createTwitterTable() {
        var sql = "CREATE TABLE TwitterData (profile_picture VARCHAR(255), user_name VARCHAR(255), screen_name VARCHAR(255), full_text VARCHAR(1000), favorites INT, retweets INT, created_at VARCHAR(255))";
        this.connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        console.log(sql);
    }

    addToTwitterTable(profile_pic, user_name, screen_name, full_text, favorites, retweets, created_at) {
        var final = full_text.toString().replace(/['`]/g, "");
        final.trim();
        var sql = "INSERT INTO TwitterData (profile_picture, user_name, screen_name, full_text, favorites, retweets, created_at) VALUES (" + "'" + profile_pic.toString() + "'" + "," + " " + "'" + user_name.toString() + "'" + "," + " " + "'" + screen_name.toString() + "'" + "," + " " + "'" + final.toString() + "'" + "," + " " + "'" + favorites.toString() + "'" + "," + " " + "'" + retweets.toString() + "'" + "," + " " + "'" + created_at.toString() + "')";
        this.connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        console.log(sql);
    }

}

//var db1 = new Database();
//db1.Connector();
//db1.connect();
//db1.dropTable("TwitterData")
//db1.removeRecords("TwitterData");
//db1.createTwitterTable();
//db1.getRecords("TwitterData");
// console.log(db1.getRecords("Twitter"));
// console.log("Test");
//db1.quit();
//db1.connector();
//console.log(db1.connection);
module.exports = Database;

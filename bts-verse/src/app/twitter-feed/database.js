/** @AW_RANTWORKS */
/** @TD_RANTWORKS */

/* Import MySQL package (functions, connector) */
const mysql = require('mysql');

/* A class that models the Tweet template for them to be stored. */
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
/* Create a class Database that connects to live RDS MySQL Database. */
class Database {
    docs = new Array();
    Connector(docs) {
        /* Database Connector Configuration */
        this.connection = mysql.createConnection({
            host: "bts-verse.cw824owciirp.us-east-1.rds.amazonaws.com",
            user: "admin",
            password: "rantworks",
            database: "btsverse",

        });

        this.docs = docs;

    }
/* Function to force the connection configuration to connect to the Database. */
    connect() {
        this.connection.connect();
        console.log("Connected!");
    }
/* Function to end the connection to the Database. */
    quit() {
        this.connection.end();
        console.log("Ended.")
    }
/* Function to get records of data from the database */
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
/* Function to remove all records from a table with an input of a String "tableName". */
    removeRecords(tableName) {
        var sql = "TRUNCATE TABLE " + tableName;
        this.connection.query(sql);
    }
/* Function that adds the link and place in line of a tweet to the Database. */
    setTwitterRecord(queue, link) {
        var sql = "INSERT INTO Twitter(queue, link) VALUES('" + queue + "', '" + link + "')";
        this.connection.query(sql);
        console.log("Done!");
    }
/* Function that adds the link and place in line of a YouTube Video to the Database. */
    setYouTubeRecord(queue, link) {
        var sql = "INSERT INTO Youtube(queue, link) VALUES('" + queue + "', '" + link + "')";
        this.connection.query(sql);
    }
/* Function to delete a table from the database using the input of a string "tablename". */
    dropTable(tableName) {
        var sql = "DROP TABLE " + tableName;
        this.connection.query(sql);

    }
/* Function to create a new table named "TwitterData" for storage. */
    createTwitterTable() {
        var sql = "CREATE TABLE TwitterData (profile_picture VARCHAR(255), user_name VARCHAR(255), screen_name VARCHAR(255), full_text VARCHAR(1000), favorites INT, retweets INT, created_at VARCHAR(255))";
        this.connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        console.log(sql);
    }
/* Function to add rows of data to the database. */
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
/* Unit Tests for creating and accessing a Database Object and its data. */
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

/* Allow the class Database to be accessed globally. */
module.exports = Database;

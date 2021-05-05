const mysql = require('mysql');
const twitter = require("./twitter.js");


//const { resourceLimits } = require('node:worker_threads');

/*const Connector = (function() {
    function Connector() {
*/        const conn = mysql.createConnection({
            host: "bts-verse.cw824owciirp.us-east-1.rds.amazonaws.com",
            user: "admin",
            password: "rantworks",
            database: "btsverse"
        });
        conn.connect(function(err) {
            if (err) throw err; 
            console.log("Connected");
            conn.end();
        });
    
    

/*    var instance;
    return {
        getInstance: function() {
            if (null == instance) {
                instance = new Connector();
                instance.constructor = null;
            }
            return instance;
        }
    }
})();
*/
function getRecords(tableName) {
    var sql = "SELECT * FROM " + tableName;
    //var conn = conn;
    return conn.query(sql);
}

//getRecords("Twitter");

function removeRecords(tableName) {
    var sql = "TRUNCATE TABLE " + tableName;
    var conn = conn;
    conn.query(sql);
}

function setTwitterRecord(queue, link) {
    var sql = "INSERT INTO Twitter(queue, link) VALUES('" + queue + "', '" + link + "')";
    var conn = conn;
    conn.query(sql);
}

function setYouTubeRecord(queue, link) {
    var sql = "INSERT INTO Youtube(queue, link) VALUES('" + queue + "', '" + link + "')";
    var conn = Connector();
    conn.query(sql);
}


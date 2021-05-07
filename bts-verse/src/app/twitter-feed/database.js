const mysql = require('mysql');
//const twitter = require("./twitter.js");


//const { resourceLimits } = require('node:worker_threads');

class Database  {    
     Connector() {
         this.connection = mysql.createConnection({
            host: "bts-verse.cw824owciirp.us-east-1.rds.amazonaws.com",
            user: "admin",
            password: "rantworks",
            database: "btsverse",
        
        });  
    }

connect() {
    this.connection.connect();
    console.log("Connected!");
}

quit() {
    this.connection.end();
    console.log("Ended.")
}


getRecords(tableName) {
    var sql = "SELECT * FROM " + tableName;
    console.log("Done!");
    return this.connection.query(sql, function(error, results, fields) {
        console.log(results);
    });
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
    
}

var db1 = new Database();
db1.Connector();
db1.connect();

db1.getRecords("Twitter");
// console.log(db1.getRecords("Twitter"));
// console.log("Test");
db1.quit();
//db1.connector();
//console.log(db1.connection);
module.exports = Database;

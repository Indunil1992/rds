let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {

    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param 
    // You must always end/destroy the DB connection after it's used
    rds.query({
        instanceIdentifier: 'indunil1',
        query: 'name, age',
        inserts: ["indunil1", 27]
    }, function (error, results, connection) {
        if (error) {
            console.log("Error occurred");
            throw error;
        } else {
            console.log("Success")
            console.log(results);
        }

        connection.end();
    });


    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'indunil2'
    }, function (error, connection) {
        if (error) {
            throw error;
        }
    });


    callback(null, { "message": "Successfully executed" });
}
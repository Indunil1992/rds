module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunil1"] = {
        host: process.env.EndPoint_rdsIndunil1,
        port: process.env.Port_rdsIndunil1,
        user: process.env.User_rdsIndunil1,
        password: process.env.Password_rdsIndunil1,
        database: "indunil1"
    };
    this.dbConnections["indunil2"] = {
        host: process.env.EndPoint_rdsIndunil2,
        port: process.env.Port_rdsIndunil2,
        user: process.env.User_rdsIndunil2,
        password: process.env.Password_rdsIndunil2,
        database: "indunil2"
    };
};
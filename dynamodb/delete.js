
                        

var AWS = require("aws-sdk");
AWS.config.update({region: 'eu-west-2'});

AWS.config.update({
    dynamodb: {
        endpoint: "http://127.0.0.1:8000"
    }
  })

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "VersionTracker";

var Id = 1;


var params = {
    TableName:table,
    Key:{
        "Id": Id
    }
    
  
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});

                    
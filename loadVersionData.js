var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    dynamodb: {
        endpoint: "http://localhost:8000",
        region: "eu-west-1"
    }
  })

  var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Importing Versions into DynamoDB. Please wait.");
var vers = JSON.parse(fs.readFileSync('formatted-data.json', 'utf8'));

vers.forEach(function(ver) {
    console.log(ver)
  var params = {
          TableName: "TrackerVersion",
          Item: {
              "ID": ver.ID,
              "VersionNo": ver.VersionNo,
              "DeploymentTime": ver.DeploymentTime,
              "Description": ver.Description,
              "DeveloperId": ver.DeveloperId,
              "CustomerCanSee": ver.CustomerCanSee
          }
      };
  docClient.put(params, function(err, data) {
         if (err) {
             console.error("Unable to add Version", ver.ID, ". Error JSON:", JSON.stringify(err, null, 2));
         } else {
             console.log("PutItem succeeded:",ver.ID );
         }
      });
  });
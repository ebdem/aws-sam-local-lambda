 var AWS = require('aws-sdk')
 //AWS.config.update({endpoint,region: process.env.REGION});
 //AWS.config.update({})


AWS.config.update({
  dynamodb: {
      endpoint: "http://dynamodb-local:8000"
  }
})

const docClient = new AWS.DynamoDB.DocumentClient()
//const dynamoDB = new AWS.DynamoDB();

// var cors = require("cors");
// cors();

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
    //event.pathParameters.key
    try {
    //   let params = {};

  
    // const resp = await dynamoDB.listTables(params).promise();
    // console.log(resp);
    
    const versions = await docClient.scan({ TableName: 'TrackerVersion' }).promise()
    
  //       versions = [
  //   { "id": 1,
  //     "type" : "Automatic",
  //     "name" : "Toyota Yaris", 
  //     "manufacturer" : "Toyota",
  //     "fuel_type" : "Petrol",
  //     "description" : "A smooth ride"
  //   },
  //   { "id": 2,
  //     "type" : "Manual",
  //     "name" : "Volkswagen Golf",
  //     "manufacturer" : "Volkswagen",
  //     "fuel_type" : "Petrol",
  //     "description" : "Good Value"
  //   },
  //   { "id": 3,
  //       "type" : "Automatic",
  //       "name" : "Audi",
  //       "manufacturer" : "Toyota",
  //       "fuel_type" : "Petrol",
  //       "description" : "A smooth ride"
  //     },
  //     { "id": 4,
  //       "type" : "Manual",
  //       "name" : "BMW",
  //       "manufacturer" : "Volkswagen",
  //       "fuel_type" : "Petrol",
  //       "description" : "Good Value"
  //     },
  //     { "id": 5,
  //       "type" : "Automatic",
  //       "name" : "Passat",
  //       "manufacturer" : "Toyota",
  //       "fuel_type" : "Petrol",
  //       "description" : "A smooth ride"
  //     },
  //     { "id": 6,
  //       "type" : "Manual",
  //       "name" : "Reno",
  //       "manufacturer" : "Volkswagen",
  //       "fuel_type" : "Petrol",
  //       "description" : "Good Value"
  //     },
  //     { "id": 7,
  //       "type" : "Automatic",
  //       "name" : "TOfaş",
  //       "manufacturer" : "Toyota",
  //       "fuel_type" : "Petrol",
  //       "description" : "A smooth ride"
  //     },
  //     { "id": 8,
  //       "type" : "Manual",
  //       "name" : "Range",
  //       "manufacturer" : "Volkswagen",
  //       "fuel_type" : "Petrol",
  //       "description" : "Good Value"
  //     },
  //     { "id": 9,
  //       "type" : "Automatic",
  //       "name" : "Ferrari",
  //       "manufacturer" : "Toyota",
  //       "fuel_type" : "Petrol",
  //       "description" : "A smooth ride"
  //     },
  //     { "id": 10,
  //       "type" : "Manual",
  //       "name" : "Mercedes",
  //       "manufacturer" : "Volkswagen",
  //       "fuel_type" : "Petrol",
  //       "description" : "Good Value"
  //     },
  //     { "id": 11,
  //       "type" : "Manual",
  //       "name" : "Toros",
  //       "manufacturer" : "Volkswagen",
  //       "fuel_type" : "Petrol",
  //       "description" : "Good Value"
  //     }
  // ]
        return {            
            statusCode: 200,
            headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ versions, status: 'success' })
            
        }
         
    } catch (err) {
        return {
            status: 'error',
            err
        }
    }
}
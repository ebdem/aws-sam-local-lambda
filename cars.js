// 'use strict'

//import { config } from 'aws-sdk'
//import { DynamoDB } from 'aws-sdk' ;
//require('dotenv').config() 

//config.update({ region: 'eu-west-2', apiVersion: '2012-08-10' })
//const docClient = new DynamoDB.DocumentClient()

 var AWS = require('aws-sdk');
 config.update({ region: 'eu-west-2', apiVersion: '2012-08-10' });
 const docClient = new AWS.DynamoDB.DocumentClient()
//  AWS.config.update({region: 'eu-west-2'});
// var cors = require("cors");
// cors();

module.exports.handler = async (event, context) => {
    //event.pathParameters.key
    try {
        const versions = await docClient.scan({ TableName: 'Cars' }).promise()

  
        // versions = [
        //     { "id": 1,
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

var params = {
    TableName: "Cars",
    ProjectionExpression: "#id, #name, #type, #manufacturer, #fuel_type, #description",
    ExpressionAttributeNames: {
        "#id": "id",
        "#name": "name",
        "#type": "type",
        "#manufacturer": "manufacturer",
        "#fuel_type": "fuel_type",
        "#description": "description"
    }
};
// console.log("Scanning Cars table.");
// docClient.scan(params, onScan);
// function onScan(err, data) {
//     if (err) {
//         console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         res.send(data)
//         // print all the Cars
//         console.log("Scan succeeded.");
//         data.Items.forEach(function(car) {
//            console.log(car.id, car.type, car.name)
//         });
// if (typeof data.LastEvaluatedKey != "undefined") {
//             console.log("Scanning for more...");
//             params.ExclusiveStartKey = data.LastEvaluatedKey;
//             docClient.scan(params, onScan);
//         }
//     }
//   }

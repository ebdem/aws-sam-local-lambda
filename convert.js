const fs = require("fs");
const { format } = require("path");
var data = JSON.parse(fs.readFileSync('version.json', 'utf8'));

const formattedData = data.map(eachData=>{
    let obj = {}
    Object.keys(eachData).map(key=>{
        return obj[key] = eachData[key]["S"]
    })
    return obj;
})
fs.writeFileSync("formatted-data.json", JSON.stringify(formattedData))

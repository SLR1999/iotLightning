var AWS = require('aws-sdk');
var iotdata = new AWS.IotData({ endpoint: 'a3crcy44jplwd-ats.iot.us-east-2.amazonaws.com' });

exports.handler = async(event) => {
    console.log("Event => " + JSON.stringify(event));
    var lightOn = true
    if(event['uv_visible'] > 700) {
        lightOn = false
    }
    console.log(lightOn)
    var msg = {
        "state": {
            "desired": {
                "lights": lightOn
            }
        }
    }
    var params = {
        topic: "$aws/things/lightBulb/shadow/update",
        payload: JSON.stringify(msg),
        qos: 0
    };

    return iotdata.publish(params, function(err, data) {
        if (err) {
            console.log("ERROR => " + JSON.stringify(err));
        }
        else {
            console.log("Success");
        }
    }).promise();
};
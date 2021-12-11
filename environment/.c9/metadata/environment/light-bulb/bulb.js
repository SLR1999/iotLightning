{"changed":true,"filter":false,"title":"bulb.js","tooltip":"/light-bulb/bulb.js","value":"// Register to Thing Shadow and act on light status\n\n/*\n* Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\").\n* You may not use this file except in compliance with the License.\n* A copy of the License is located at\n*\n*  http://aws.amazon.com/apache2.0\n*\n* or in the \"license\" file accompanying this file. This file is distributed\n* on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n* express or implied. See the License for the specific language governing\n* permissions and limitations under the License.\n*/\n\n// Require AWS IoT Device SDK\nconst awsIoT = require('aws-iot-device-sdk');\n\n// Load the endpoint from file\nconst endpointFile = require('/home/ec2-user/environment/endpoint.json');\n\n// Fetch the thingName from the folder name\nconst thingName = 'lightBulb';\n\n// Initial Get Client Token\nlet initialGetClientToken;\n\n// Initial state of car\nconst initialState = {\n    state: { \n        reported: { \n            lights: false,\n            lightOffTimestamp: new Date(),\n        }, \n        desired: null \n    }\n};\n\n// Create the thingShadow object with argument data\nconst thingShadows = awsIoT.thingShadow({\n   keyPath: 'private.pem.key',\n  certPath: 'certificate.pem.crt',\n    caPath: '/home/ec2-user/environment/root-CA.crt',\n  clientId: thingName,\n      host: endpointFile.endpointAddress\n});\n\n// Register/Subscribe to the thingShadow topic\nthingShadows.register(thingName, {}, function(err, failedTopics) {\n    if (isUndefined(err) && isUndefined(failedTopics)) {\n        console.log('The ' + thingName + ' has been registered.\\r\\nSending initial get to set the light state.');\n        initialGetClientToken = thingShadows.get(thingName);\n        console.log(initialGetClientToken)\n    }\n});\n\n// On delta generated by IoT\nthingShadows.on('delta', function(thingName, stateObject) {\n    console.log(stateObject.state.lightOffTimestamp)\n    // If the lights attribute was modified, call the outputLightState function\n    if (!isUndefined(stateObject.state.lights)) {\n        outputLightState(stateObject.state.lights);\n    }\n    \n    // Report to the Shadow the new state\n    console.log('Reporting my new state.');\n    thingShadows.update(thingName, { state: { reported: stateObject.state, desired: null } } );\n});\n\n\n// Function outputting the state of the car\nfunction outputLightState(lights) {\n    if (lights) {\n        console.log('My lights are on');\n    } else {\n        console.log('My lights are off');\n    }\n}\n\n// Function to look for undefined values\nfunction isUndefined(value) {\n    return typeof value === 'undefined' || value === null;\n}\n\n// On status when a get/update/delete is received\nthingShadows.on('status', function(thingName, statusType, clientToken, stateObject) {\n    \n    // Resolving the initial state status. There could be no state, a delta state or a reported state\n    \n    // If the clientToken is for our initial Get request and the status is rejected\n    //  this means that the Thing Shadow has been deleted. We need to set the state to defaults\n    if (initialGetClientToken === clientToken && statusType === 'rejected') {\n        \n        setDefaultState();\n    }\n    \n    // If the clientToken is for our initial Get request and the status is accepted\n    //  this means that there is a Shadow, but it may be empty\n    if (initialGetClientToken === clientToken && statusType === 'accepted') {\n        console.log('Received the initial get data.');\n        \n        // If the Thing Shadow is empty, set the state to defaults\n        if (Object.keys(stateObject.state).length == 0) {\n            setDefaultState();\n        } \n        // Else if there is a delta state, resolve it\n        else if (stateObject.state.hasOwnProperty('delta')) {\n            console.log('Delta found on initial get setting lights to that state and reporting.');\n            \n            // If the lights attribute was modified, call the outputLightState function\n            if (!isUndefined(stateObject.state.delta.lights)) {\n                outputLightState(stateObject.state.delta.lights);\n            }\n            \n            // Report to the Shadow the new state\n            thingShadows.update(thingName, { state: { reported: stateObject.state.delta, desired: null } } );\n            \n        } else {\n            // If the state isn't empty and there is no delta, there is a reported state\n            \n            // If the lights attribute has been reported\n            if (stateObject.state.reported.hasOwnProperty('lights')) {\n                \n                // A previously reported state has been found (probably from the previous run), set the state to that\n                console.log('Found a previously reported state, setting my lights to that');\n                outputLightState(stateObject.state.reported.lights);\n            } else {\n                \n                // Else, we need to set the state to defaults\n                setDefaultState();\n            }\n        }\n    }\n});\n\n// Unregister the Shadow if the connection closes\nthingShadows.on('close', function() {\n    console.log('The connection has been closed. Deregistering the Thing Shadow.');\n      thingShadows.unregister(thingName);\n});\n\n// Set the state to defaults\nfunction setDefaultState() {\n    console.log('No lights state found, setting state to defaults.');\n    thingShadows.update(thingName, initialState);\n    outputLightState(initialState.state.reported.lights);\n}","undoManager":{"mark":65,"position":65,"stack":[[{"start":{"row":0,"column":0},"end":{"row":154,"column":1},"action":"insert","lines":["// Register to Thing Shadow and act on light status","","/*","* Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.","*","* Licensed under the Apache License, Version 2.0 (the \"License\").","* You may not use this file except in compliance with the License.","* A copy of the License is located at","*","*  http://aws.amazon.com/apache2.0","*","* or in the \"license\" file accompanying this file. This file is distributed","* on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either","* express or implied. See the License for the specific language governing","* permissions and limitations under the License.","*/","","// Require AWS IoT Device SDK","const awsIoT = require('aws-iot-device-sdk');","","// Load the endpoint from file","const endpointFile = require('/home/ec2-user/environment/endpoint.json');","","// Fetch the thingName from the folder name","const thingName = __dirname.split('/').pop();","","// Initial Get Client Token","let initialGetClientToken;","","// Initial state of car","const initialState = {","    state: { ","        reported: { ","            lights: false","        }, ","        desired: null ","    }","};","","// Create the thingShadow object with argument data","const thingShadows = awsIoT.thingShadow({","   keyPath: 'private.pem.key',","  certPath: 'certificate.pem.crt',","    caPath: '/home/ec2-user/environment/root-CA.crt',","  clientId: thingName,","      host: endpointFile.endpointAddress","});","","// Register/Subscribe to the thingShadow topic","thingShadows.register(thingName, {}, function(err, failedTopics) {","    if (isUndefined(err) && isUndefined(failedTopics)) {","        console.log('The ' + thingName + ' has been registered.\\r\\nSending initial get to set the light state.');","        initialGetClientToken = thingShadows.get(thingName);","    }","});","","// On delta generated by IoT","thingShadows.on('delta', function(thingName, stateObject) {","    ","    // If the lights attribute was modified, call the outputLightState function","    if (!isUndefined(stateObject.state.lights)) {","        outputLightState(stateObject.state.lights);","    }","    ","    // Report to the Shadow the new state","    console.log('Reporting my new state.');","    thingShadows.update(thingName, { state: { reported: stateObject.state, desired: null } } );","});","","","// Function outputting the state of the car","function outputLightState(lights) {","    if (lights) {","        console.log('My lights are on');","        console.log(\"    ____\\r\\n\" +","                    ' __/    \\\\__\\r\\n' +","                    '|  _     _ `-.///\\r\\n' +","                    \"'-(_)---(_)--'\\\\\\\\\\\\\");","    } else {","        console.log('My lights are off');","        console.log(\"    ____\\r\\n\" +","                    ' __/    \\\\__\\r\\n' +","                    '|  _     _ `-.\\r\\n' +","                    \"'-(_)---(_)--'\");","    }","}","","// Function to look for undefined values","function isUndefined(value) {","    return typeof value === 'undefined' || value === null;","}","","// On status when a get/update/delete is received","thingShadows.on('status', function(thingName, statusType, clientToken, stateObject) {","    ","    // Resolving the initial state status. There could be no state, a delta state or a reported state","    ","    // If the clientToken is for our initial Get request and the status is rejected","    //  this means that the Thing Shadow has been deleted. We need to set the state to defaults","    if (initialGetClientToken === clientToken && statusType === 'rejected') {","        ","        setDefaultState();","    }","    ","    // If the clientToken is for our initial Get request and the status is accepted","    //  this means that there is a Shadow, but it may be empty","    if (initialGetClientToken === clientToken && statusType === 'accepted') {","        console.log('Received the initial get data.');","        ","        // If the Thing Shadow is empty, set the state to defaults","        if (Object.keys(stateObject.state).length == 0) {","            setDefaultState();","        } ","        // Else if there is a delta state, resolve it","        else if (stateObject.state.hasOwnProperty('delta')) {","            console.log('Delta found on initial get setting lights to that state and reporting.');","            ","            // If the lights attribute was modified, call the outputLightState function","            if (!isUndefined(stateObject.state.delta.lights)) {","                outputLightState(stateObject.state.delta.lights);","            }","            ","            // Report to the Shadow the new state","            thingShadows.update(thingName, { state: { reported: stateObject.state.delta, desired: null } } );","            ","        } else {","            // If the state isn't empty and there is no delta, there is a reported state","            ","            // If the lights attribute has been reported","            if (stateObject.state.reported.hasOwnProperty('lights')) {","                ","                // A previously reported state has been found (probably from the previous run), set the state to that","                console.log('Found a previously reported state, setting my lights to that');","                outputLightState(stateObject.state.reported.lights);","            } else {","                ","                // Else, we need to set the state to defaults","                setDefaultState();","            }","        }","    }","});","","// Unregister the Shadow if the connection closes","thingShadows.on('close', function() {","    console.log('The connection has been closed. Deregistering the Thing Shadow.');","      thingShadows.unregister(thingName);","});","","// Set the state to defaults","function setDefaultState() {","    console.log('No lights state found, setting state to defaults.');","    thingShadows.update(thingName, initialState);","    outputLightState(initialState.state.reported.lights);","}"],"id":39}],[{"start":{"row":24,"column":18},"end":{"row":24,"column":44},"action":"remove","lines":["__dirname.split('/').pop()"],"id":40}],[{"start":{"row":24,"column":18},"end":{"row":24,"column":20},"action":"insert","lines":["\"\""],"id":41}],[{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"remove","lines":["\""],"id":42},{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"remove","lines":["\""]}],[{"start":{"row":24,"column":18},"end":{"row":24,"column":20},"action":"insert","lines":["''"],"id":43}],[{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"insert","lines":["l"],"id":44},{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"insert","lines":["i"]},{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"insert","lines":["g"]},{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["h"]},{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"insert","lines":["t"]},{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["B"]},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["u"]}],[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["l"],"id":45},{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["b"]}],[{"start":{"row":77,"column":44},"end":{"row":78,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":78,"column":0},"end":{"row":78,"column":20},"action":"insert","lines":["                    "]}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":4},"action":"remove","lines":["    "],"id":47}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":4},"action":"remove","lines":["    "],"id":48}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":4},"action":"remove","lines":["    "],"id":49}],[{"start":{"row":78,"column":8},"end":{"row":78,"column":9},"action":"insert","lines":["c"],"id":50},{"start":{"row":78,"column":9},"end":{"row":78,"column":10},"action":"insert","lines":["o"]},{"start":{"row":78,"column":10},"end":{"row":78,"column":11},"action":"insert","lines":["n"]},{"start":{"row":78,"column":11},"end":{"row":78,"column":12},"action":"insert","lines":["s"]},{"start":{"row":78,"column":12},"end":{"row":78,"column":13},"action":"insert","lines":["i"]},{"start":{"row":78,"column":13},"end":{"row":78,"column":14},"action":"insert","lines":["l"]}],[{"start":{"row":78,"column":13},"end":{"row":78,"column":14},"action":"remove","lines":["l"],"id":51},{"start":{"row":78,"column":12},"end":{"row":78,"column":13},"action":"remove","lines":["i"]}],[{"start":{"row":78,"column":12},"end":{"row":78,"column":13},"action":"insert","lines":["o"],"id":52},{"start":{"row":78,"column":13},"end":{"row":78,"column":14},"action":"insert","lines":["l"]},{"start":{"row":78,"column":14},"end":{"row":78,"column":15},"action":"insert","lines":["e"]},{"start":{"row":78,"column":15},"end":{"row":78,"column":16},"action":"insert","lines":["."]},{"start":{"row":78,"column":16},"end":{"row":78,"column":17},"action":"insert","lines":["l"]}],[{"start":{"row":78,"column":16},"end":{"row":78,"column":17},"action":"remove","lines":["l"],"id":53},{"start":{"row":78,"column":16},"end":{"row":78,"column":21},"action":"insert","lines":["log()"]}],[{"start":{"row":78,"column":20},"end":{"row":78,"column":22},"action":"insert","lines":["\"\""],"id":54}],[{"start":{"row":78,"column":21},"end":{"row":78,"column":22},"action":"insert","lines":[" "],"id":55},{"start":{"row":78,"column":22},"end":{"row":78,"column":23},"action":"insert","lines":[" "]},{"start":{"row":78,"column":23},"end":{"row":78,"column":24},"action":"insert","lines":[" "]},{"start":{"row":78,"column":24},"end":{"row":78,"column":25},"action":"insert","lines":[" "]}],[{"start":{"row":78,"column":25},"end":{"row":78,"column":26},"action":"insert","lines":["-"],"id":56},{"start":{"row":78,"column":26},"end":{"row":78,"column":27},"action":"insert","lines":["-"]},{"start":{"row":78,"column":27},"end":{"row":78,"column":28},"action":"insert","lines":["-"]}],[{"start":{"row":78,"column":28},"end":{"row":78,"column":29},"action":"insert","lines":["\\"],"id":57},{"start":{"row":78,"column":29},"end":{"row":78,"column":30},"action":"insert","lines":["n"]}],[{"start":{"row":73,"column":40},"end":{"row":78,"column":32},"action":"remove","lines":["","        console.log(\"    ____\\r\\n\" +","                    ' __/    \\\\__\\r\\n' +","                    '|  _     _ `-.///\\r\\n' +","                    \"'-(_)---(_)--'\\\\\\\\\\\\\");","        console.log(\"    ---\\n\")"],"id":58}],[{"start":{"row":75,"column":41},"end":{"row":79,"column":38},"action":"remove","lines":["","        console.log(\"    ____\\r\\n\" +","                    ' __/    \\\\__\\r\\n' +","                    '|  _     _ `-.\\r\\n' +","                    \"'-(_)---(_)--'\");"],"id":59}],[{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":[","],"id":60}],[{"start":{"row":33,"column":26},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":61},{"start":{"row":34,"column":0},"end":{"row":34,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["p"],"id":62},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["r"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["e"]}],[{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"remove","lines":["e"],"id":63},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"remove","lines":["r"]},{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"remove","lines":["p"]}],[{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["l"],"id":64},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["i"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["o"]},{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"insert","lines":["g"]},{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":["h"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"insert","lines":["t"]}],[{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"remove","lines":["t"],"id":65},{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"remove","lines":["h"]},{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"remove","lines":["g"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"remove","lines":["o"]}],[{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["g"],"id":66},{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"insert","lines":["h"]},{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":["t"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"insert","lines":["O"]},{"start":{"row":34,"column":18},"end":{"row":34,"column":19},"action":"insert","lines":["n"]}],[{"start":{"row":34,"column":19},"end":{"row":34,"column":20},"action":"insert","lines":["T"],"id":67},{"start":{"row":34,"column":20},"end":{"row":34,"column":21},"action":"insert","lines":["i"]},{"start":{"row":34,"column":21},"end":{"row":34,"column":22},"action":"insert","lines":["m"]},{"start":{"row":34,"column":22},"end":{"row":34,"column":23},"action":"insert","lines":["e"]},{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["s"]},{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"insert","lines":["t"]},{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":["a"]},{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":["m"]},{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["p"]}],[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":[":"],"id":68}],[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":[" "],"id":69}],[{"start":{"row":34,"column":30},"end":{"row":34,"column":42},"action":"insert","lines":["new Date(0);"],"id":70}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"remove","lines":[";"],"id":71}],[{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"insert","lines":[","],"id":72}],[{"start":{"row":34,"column":18},"end":{"row":34,"column":19},"action":"remove","lines":["n"],"id":73}],[{"start":{"row":34,"column":18},"end":{"row":34,"column":19},"action":"insert","lines":["f"],"id":74},{"start":{"row":34,"column":19},"end":{"row":34,"column":20},"action":"insert","lines":["f"]}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":5},"action":"insert","lines":["c"],"id":76},{"start":{"row":59,"column":5},"end":{"row":59,"column":6},"action":"insert","lines":["o"]},{"start":{"row":59,"column":6},"end":{"row":59,"column":7},"action":"insert","lines":["n"]}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":7},"action":"remove","lines":["con"],"id":77},{"start":{"row":59,"column":4},"end":{"row":59,"column":13},"action":"insert","lines":["confirm()"]}],[{"start":{"row":59,"column":11},"end":{"row":59,"column":13},"action":"remove","lines":["()"],"id":78},{"start":{"row":59,"column":10},"end":{"row":59,"column":11},"action":"remove","lines":["m"]},{"start":{"row":59,"column":9},"end":{"row":59,"column":10},"action":"remove","lines":["r"]},{"start":{"row":59,"column":8},"end":{"row":59,"column":9},"action":"remove","lines":["i"]},{"start":{"row":59,"column":7},"end":{"row":59,"column":8},"action":"remove","lines":["f"]}],[{"start":{"row":59,"column":7},"end":{"row":59,"column":8},"action":"insert","lines":["s"],"id":79}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":8},"action":"remove","lines":["cons"],"id":80},{"start":{"row":59,"column":4},"end":{"row":59,"column":11},"action":"insert","lines":["console"]}],[{"start":{"row":59,"column":11},"end":{"row":59,"column":12},"action":"insert","lines":["."],"id":81},{"start":{"row":59,"column":12},"end":{"row":59,"column":13},"action":"insert","lines":["l"]}],[{"start":{"row":59,"column":12},"end":{"row":59,"column":13},"action":"remove","lines":["l"],"id":82},{"start":{"row":59,"column":12},"end":{"row":59,"column":17},"action":"insert","lines":["log()"]}],[{"start":{"row":59,"column":16},"end":{"row":59,"column":17},"action":"insert","lines":["s"],"id":83},{"start":{"row":59,"column":17},"end":{"row":59,"column":18},"action":"insert","lines":["t"]},{"start":{"row":59,"column":18},"end":{"row":59,"column":19},"action":"insert","lines":["O"]}],[{"start":{"row":59,"column":18},"end":{"row":59,"column":19},"action":"remove","lines":["O"],"id":85},{"start":{"row":59,"column":17},"end":{"row":59,"column":18},"action":"remove","lines":["t"]}],[{"start":{"row":59,"column":17},"end":{"row":59,"column":18},"action":"insert","lines":["t"],"id":86},{"start":{"row":59,"column":18},"end":{"row":59,"column":19},"action":"insert","lines":["a"]},{"start":{"row":59,"column":19},"end":{"row":59,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":59,"column":16},"end":{"row":59,"column":20},"action":"remove","lines":["stat"],"id":87},{"start":{"row":59,"column":16},"end":{"row":59,"column":27},"action":"insert","lines":["stateObject"]}],[{"start":{"row":59,"column":27},"end":{"row":59,"column":28},"action":"insert","lines":["."],"id":88},{"start":{"row":59,"column":28},"end":{"row":59,"column":29},"action":"insert","lines":["s"]},{"start":{"row":59,"column":29},"end":{"row":59,"column":30},"action":"insert","lines":["t"]}],[{"start":{"row":59,"column":28},"end":{"row":59,"column":30},"action":"remove","lines":["st"],"id":89},{"start":{"row":59,"column":28},"end":{"row":59,"column":33},"action":"insert","lines":["state"]}],[{"start":{"row":59,"column":33},"end":{"row":59,"column":34},"action":"insert","lines":["."],"id":90}],[{"start":{"row":59,"column":34},"end":{"row":59,"column":51},"action":"insert","lines":["lightOffTimestamp"],"id":91}],[{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"remove","lines":["0"],"id":92}],[{"start":{"row":52,"column":113},"end":{"row":53,"column":0},"action":"insert","lines":["",""],"id":93},{"start":{"row":53,"column":0},"end":{"row":53,"column":8},"action":"insert","lines":["        "]},{"start":{"row":53,"column":8},"end":{"row":53,"column":9},"action":"insert","lines":["c"]},{"start":{"row":53,"column":9},"end":{"row":53,"column":10},"action":"insert","lines":["o"]},{"start":{"row":53,"column":10},"end":{"row":53,"column":11},"action":"insert","lines":["n"]}],[{"start":{"row":53,"column":8},"end":{"row":53,"column":11},"action":"remove","lines":["con"],"id":94},{"start":{"row":53,"column":8},"end":{"row":53,"column":17},"action":"insert","lines":["confirm()"]}],[{"start":{"row":53,"column":15},"end":{"row":53,"column":17},"action":"remove","lines":["()"],"id":95},{"start":{"row":53,"column":14},"end":{"row":53,"column":15},"action":"remove","lines":["m"]},{"start":{"row":53,"column":13},"end":{"row":53,"column":14},"action":"remove","lines":["r"]},{"start":{"row":53,"column":12},"end":{"row":53,"column":13},"action":"remove","lines":["i"]},{"start":{"row":53,"column":11},"end":{"row":53,"column":12},"action":"remove","lines":["f"]}],[{"start":{"row":53,"column":11},"end":{"row":53,"column":12},"action":"insert","lines":["s"],"id":96}],[{"start":{"row":53,"column":11},"end":{"row":53,"column":12},"action":"remove","lines":["s"],"id":97}],[{"start":{"row":53,"column":11},"end":{"row":53,"column":12},"action":"insert","lines":["s"],"id":98}],[{"start":{"row":53,"column":8},"end":{"row":53,"column":12},"action":"remove","lines":["cons"],"id":99},{"start":{"row":53,"column":8},"end":{"row":53,"column":15},"action":"insert","lines":["console"]}],[{"start":{"row":53,"column":15},"end":{"row":53,"column":16},"action":"insert","lines":["."],"id":100},{"start":{"row":53,"column":16},"end":{"row":53,"column":17},"action":"insert","lines":["l"]}],[{"start":{"row":53,"column":16},"end":{"row":53,"column":17},"action":"remove","lines":["l"],"id":101},{"start":{"row":53,"column":16},"end":{"row":53,"column":21},"action":"insert","lines":["log()"]}],[{"start":{"row":53,"column":20},"end":{"row":53,"column":41},"action":"insert","lines":["initialGetClientToken"],"id":102}],[{"start":{"row":53,"column":8},"end":{"row":53,"column":42},"action":"remove","lines":["console.log(initialGetClientToken)"],"id":103}],[{"start":{"row":53,"column":4},"end":{"row":53,"column":8},"action":"remove","lines":["    "],"id":104},{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]},{"start":{"row":52,"column":113},"end":{"row":53,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":53,"column":60},"end":{"row":54,"column":0},"action":"insert","lines":["",""],"id":105},{"start":{"row":54,"column":0},"end":{"row":54,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":54,"column":8},"end":{"row":54,"column":42},"action":"insert","lines":["console.log(initialGetClientToken)"],"id":106}],[{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"remove","lines":["o"],"id":108}],[{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"insert","lines":["o"],"id":108}]]},"ace":{"folds":[],"scrolltop":1884,"scrollleft":0,"selection":{"start":{"row":148,"column":1},"end":{"row":148,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1606326236192}
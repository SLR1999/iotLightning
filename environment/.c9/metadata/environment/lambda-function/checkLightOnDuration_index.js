{"filter":false,"title":"checkLightOnDuration_index.js","tooltip":"/lambda-function/checkLightOnDuration_index.js","undoManager":{"mark":67,"position":67,"stack":[[{"start":{"row":0,"column":0},"end":{"row":51,"column":0},"action":"insert","lines":["var awsIoT = require('aws-sdk');","","awsIoT.config.region = \"us-east-2\";","var iotdata = new awsIoT.IotData({ endpoint: 'a3crcy44jplwd-ats.iot.us-east-2.amazonaws.com' });","","const thingName = 'lightBulb';","var params = {","  thingName: thingName,","};","","exports.handler = async (event) => {","    console.log(\"hi1\")","    iotdata.getThingShadow(params, function(err, data) {","      if (err) {","          console.log(err, err.stack);","      }","      else {    ","          console.log(\"hi2\");","          console.log(data);  ","          var dataObj = JSON.parse(data.payload);","          // console.log(dataObj)","          // console.log(dataObj.state.reported.lightOffTimestamp);","          var time1 = new Date();","          var time2 = new Date(dataObj.state.reported.lightOffTimestamp);","          var diff = Math.abs(time1 - time2);","          var diffMin = Math.ceil(diff / (60 * 1000));","          console.log(diffMin);","          if(diffMin >= 3 * 60) {","              console.log(\"nice\");","              var msg = {","                \"lightOnDuration\": diffMin","              }","              var params = {","              topic: \"lightOnDurationTopic\",","              payload: JSON.stringify(msg),","              qos: 0","          };","      ","          return iotdata.publish(params, function(err, data) {","              if (err) {","                  console.log(\"ERROR => \" + JSON.stringify(err));","              }","              else {","                  console.log(\"Success\");","              }","          }).promise();","          }","      }     ","    });","};","",""],"id":1}],[{"start":{"row":19,"column":49},"end":{"row":21,"column":67},"action":"remove","lines":["","          // console.log(dataObj)","          // console.log(dataObj.state.reported.lightOffTimestamp);"],"id":2}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "],"id":5},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"insert","lines":["    "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"insert","lines":["    "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"insert","lines":["    "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"insert","lines":["    "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"insert","lines":["    "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":[";"],"id":6}],[{"start":{"row":11,"column":23},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["/"]},{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":[" "],"id":8},{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"insert","lines":["f"]},{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"insert","lines":["e"]},{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"insert","lines":["t"]},{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"insert","lines":["c"]},{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"insert","lines":["h"]}],[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":[" "],"id":9},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["s"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["h"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["a"]}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["d"],"id":10},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["o"]}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"remove","lines":["o"],"id":11},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["d"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":["a"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"remove","lines":["h"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"remove","lines":["s"]}],[{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["l"],"id":12},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["i"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["g"]},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["h"]}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["t"],"id":13},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["B"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["u"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["l"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["b"]}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":[" "],"id":14},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["t"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["h"]},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":["i"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["n"]},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["g"]}],[{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["'"],"id":15},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["s"]}],[{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":[" "],"id":16},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["s"]},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["h"]},{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"insert","lines":["a"]},{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"insert","lines":["d"]},{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"insert","lines":["o"]},{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"insert","lines":["w"]}],[{"start":{"row":20,"column":49},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":21,"column":0},"end":{"row":21,"column":10},"action":"insert","lines":["          "]},{"start":{"row":21,"column":10},"end":{"row":21,"column":11},"action":"insert","lines":["/"]},{"start":{"row":21,"column":11},"end":{"row":21,"column":12},"action":"insert","lines":["/"]}],[{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"insert","lines":[" "],"id":18},{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"insert","lines":["c"]},{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"insert","lines":["o"]},{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"insert","lines":["m"]},{"start":{"row":21,"column":16},"end":{"row":21,"column":17},"action":"insert","lines":["p"]},{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"insert","lines":["a"]},{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"insert","lines":["r"]},{"start":{"row":21,"column":19},"end":{"row":21,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":21,"column":20},"end":{"row":21,"column":21},"action":"insert","lines":[" "],"id":19}],[{"start":{"row":21,"column":20},"end":{"row":21,"column":21},"action":"remove","lines":[" "],"id":20},{"start":{"row":21,"column":19},"end":{"row":21,"column":20},"action":"remove","lines":["e"]},{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"remove","lines":["r"]},{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"remove","lines":["a"]},{"start":{"row":21,"column":16},"end":{"row":21,"column":17},"action":"remove","lines":["p"]},{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"remove","lines":["m"]},{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"remove","lines":["o"]},{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"remove","lines":["c"]},{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"remove","lines":[" "]},{"start":{"row":21,"column":11},"end":{"row":21,"column":12},"action":"remove","lines":["/"]}],[{"start":{"row":21,"column":10},"end":{"row":21,"column":11},"action":"remove","lines":["/"],"id":21},{"start":{"row":21,"column":9},"end":{"row":21,"column":10},"action":"remove","lines":[" "]},{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"remove","lines":[" "]},{"start":{"row":21,"column":4},"end":{"row":21,"column":8},"action":"remove","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":49},"end":{"row":21,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":21,"column":33},"end":{"row":21,"column":34},"action":"insert","lines":[" "],"id":22},{"start":{"row":21,"column":34},"end":{"row":21,"column":35},"action":"insert","lines":["/"]},{"start":{"row":21,"column":35},"end":{"row":21,"column":36},"action":"insert","lines":["/"]}],[{"start":{"row":21,"column":36},"end":{"row":21,"column":37},"action":"insert","lines":[" "],"id":23},{"start":{"row":21,"column":37},"end":{"row":21,"column":38},"action":"insert","lines":["c"]},{"start":{"row":21,"column":38},"end":{"row":21,"column":39},"action":"insert","lines":["u"]},{"start":{"row":21,"column":39},"end":{"row":21,"column":40},"action":"insert","lines":["r"]},{"start":{"row":21,"column":40},"end":{"row":21,"column":41},"action":"insert","lines":["r"]},{"start":{"row":21,"column":41},"end":{"row":21,"column":42},"action":"insert","lines":["e"]},{"start":{"row":21,"column":42},"end":{"row":21,"column":43},"action":"insert","lines":["n"]},{"start":{"row":21,"column":43},"end":{"row":21,"column":44},"action":"insert","lines":["t"]}],[{"start":{"row":21,"column":44},"end":{"row":21,"column":45},"action":"insert","lines":[" "],"id":24},{"start":{"row":21,"column":45},"end":{"row":21,"column":46},"action":"insert","lines":["t"]},{"start":{"row":21,"column":46},"end":{"row":21,"column":47},"action":"insert","lines":["i"]},{"start":{"row":21,"column":47},"end":{"row":21,"column":48},"action":"insert","lines":["m"]},{"start":{"row":21,"column":48},"end":{"row":21,"column":49},"action":"insert","lines":["e"]}],[{"start":{"row":22,"column":73},"end":{"row":22,"column":74},"action":"insert","lines":[" "],"id":25},{"start":{"row":22,"column":74},"end":{"row":22,"column":75},"action":"insert","lines":["/"]},{"start":{"row":22,"column":75},"end":{"row":22,"column":76},"action":"insert","lines":["/"]}],[{"start":{"row":22,"column":76},"end":{"row":22,"column":77},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":22,"column":77},"end":{"row":22,"column":78},"action":"insert","lines":["l"],"id":27},{"start":{"row":22,"column":78},"end":{"row":22,"column":79},"action":"insert","lines":["a"]},{"start":{"row":22,"column":79},"end":{"row":22,"column":80},"action":"insert","lines":["s"]},{"start":{"row":22,"column":80},"end":{"row":22,"column":81},"action":"insert","lines":["t"]}],[{"start":{"row":22,"column":81},"end":{"row":22,"column":82},"action":"insert","lines":[" "],"id":28},{"start":{"row":22,"column":82},"end":{"row":22,"column":83},"action":"insert","lines":["t"]},{"start":{"row":22,"column":83},"end":{"row":22,"column":84},"action":"insert","lines":["i"]},{"start":{"row":22,"column":84},"end":{"row":22,"column":85},"action":"insert","lines":["m"]},{"start":{"row":22,"column":85},"end":{"row":22,"column":86},"action":"insert","lines":["e"]}],[{"start":{"row":22,"column":86},"end":{"row":22,"column":87},"action":"insert","lines":[" "],"id":29},{"start":{"row":22,"column":87},"end":{"row":22,"column":88},"action":"insert","lines":["w"]},{"start":{"row":22,"column":88},"end":{"row":22,"column":89},"action":"insert","lines":["h"]},{"start":{"row":22,"column":89},"end":{"row":22,"column":90},"action":"insert","lines":["e"]},{"start":{"row":22,"column":90},"end":{"row":22,"column":91},"action":"insert","lines":["n"]}],[{"start":{"row":22,"column":91},"end":{"row":22,"column":92},"action":"insert","lines":[" "],"id":30},{"start":{"row":22,"column":92},"end":{"row":22,"column":93},"action":"insert","lines":["l"]},{"start":{"row":22,"column":93},"end":{"row":22,"column":94},"action":"insert","lines":["i"]}],[{"start":{"row":22,"column":94},"end":{"row":22,"column":95},"action":"insert","lines":["g"],"id":31},{"start":{"row":22,"column":95},"end":{"row":22,"column":96},"action":"insert","lines":["h"]},{"start":{"row":22,"column":96},"end":{"row":22,"column":97},"action":"insert","lines":["t"]},{"start":{"row":22,"column":97},"end":{"row":22,"column":98},"action":"insert","lines":["B"]},{"start":{"row":22,"column":98},"end":{"row":22,"column":99},"action":"insert","lines":["u"]},{"start":{"row":22,"column":99},"end":{"row":22,"column":100},"action":"insert","lines":["l"]},{"start":{"row":22,"column":100},"end":{"row":22,"column":101},"action":"insert","lines":["b"]}],[{"start":{"row":22,"column":101},"end":{"row":22,"column":102},"action":"insert","lines":[" "],"id":32},{"start":{"row":22,"column":102},"end":{"row":22,"column":103},"action":"insert","lines":["w"]},{"start":{"row":22,"column":103},"end":{"row":22,"column":104},"action":"insert","lines":["a"]},{"start":{"row":22,"column":104},"end":{"row":22,"column":105},"action":"insert","lines":["s"]}],[{"start":{"row":22,"column":105},"end":{"row":22,"column":106},"action":"insert","lines":[" "],"id":33},{"start":{"row":22,"column":106},"end":{"row":22,"column":107},"action":"insert","lines":["s"]},{"start":{"row":22,"column":107},"end":{"row":22,"column":108},"action":"insert","lines":["w"]},{"start":{"row":22,"column":108},"end":{"row":22,"column":109},"action":"insert","lines":["i"]}],[{"start":{"row":22,"column":108},"end":{"row":22,"column":109},"action":"remove","lines":["i"],"id":34},{"start":{"row":22,"column":107},"end":{"row":22,"column":108},"action":"remove","lines":["w"]},{"start":{"row":22,"column":106},"end":{"row":22,"column":107},"action":"remove","lines":["s"]}],[{"start":{"row":22,"column":106},"end":{"row":22,"column":107},"action":"insert","lines":["s"],"id":35},{"start":{"row":22,"column":107},"end":{"row":22,"column":108},"action":"insert","lines":["w"]}],[{"start":{"row":22,"column":107},"end":{"row":22,"column":108},"action":"remove","lines":["w"],"id":36},{"start":{"row":22,"column":106},"end":{"row":22,"column":107},"action":"remove","lines":["s"]}],[{"start":{"row":22,"column":106},"end":{"row":22,"column":107},"action":"insert","lines":["i"],"id":37},{"start":{"row":22,"column":107},"end":{"row":22,"column":108},"action":"insert","lines":["n"]}],[{"start":{"row":22,"column":108},"end":{"row":22,"column":109},"action":"insert","lines":[" "],"id":38},{"start":{"row":22,"column":109},"end":{"row":22,"column":110},"action":"insert","lines":["o"]},{"start":{"row":22,"column":110},"end":{"row":22,"column":111},"action":"insert","lines":["f"]},{"start":{"row":22,"column":111},"end":{"row":22,"column":112},"action":"insert","lines":["f"]}],[{"start":{"row":22,"column":112},"end":{"row":22,"column":113},"action":"insert","lines":[" "],"id":39},{"start":{"row":22,"column":113},"end":{"row":22,"column":114},"action":"insert","lines":["s"]},{"start":{"row":22,"column":114},"end":{"row":22,"column":115},"action":"insert","lines":["t"]},{"start":{"row":22,"column":115},"end":{"row":22,"column":116},"action":"insert","lines":["a"]},{"start":{"row":22,"column":116},"end":{"row":22,"column":117},"action":"insert","lines":["t"]},{"start":{"row":22,"column":117},"end":{"row":22,"column":118},"action":"insert","lines":["e"]}],[{"start":{"row":22,"column":77},"end":{"row":22,"column":81},"action":"remove","lines":["last"],"id":40},{"start":{"row":22,"column":77},"end":{"row":22,"column":78},"action":"insert","lines":["l"]},{"start":{"row":22,"column":78},"end":{"row":22,"column":79},"action":"insert","lines":["a"]},{"start":{"row":22,"column":79},"end":{"row":22,"column":80},"action":"insert","lines":["t"]},{"start":{"row":22,"column":80},"end":{"row":22,"column":81},"action":"insert","lines":["e"]},{"start":{"row":22,"column":81},"end":{"row":22,"column":82},"action":"insert","lines":["s"]},{"start":{"row":22,"column":82},"end":{"row":22,"column":83},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":45},"end":{"row":23,"column":46},"action":"insert","lines":[" "],"id":41},{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["/"]},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"insert","lines":["/"]}],[{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"insert","lines":[" "],"id":42},{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"insert","lines":["d"]},{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"insert","lines":["e"]},{"start":{"row":23,"column":51},"end":{"row":23,"column":52},"action":"insert","lines":["l"]},{"start":{"row":23,"column":52},"end":{"row":23,"column":53},"action":"insert","lines":["t"]},{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"insert","lines":["a"]}],[{"start":{"row":23,"column":54},"end":{"row":23,"column":55},"action":"insert","lines":[" "],"id":43},{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"insert","lines":["b"]},{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"insert","lines":["e"]},{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"insert","lines":["t"]},{"start":{"row":23,"column":58},"end":{"row":23,"column":59},"action":"insert","lines":["w"]},{"start":{"row":23,"column":59},"end":{"row":23,"column":60},"action":"insert","lines":["e"]},{"start":{"row":23,"column":60},"end":{"row":23,"column":61},"action":"insert","lines":["e"]},{"start":{"row":23,"column":61},"end":{"row":23,"column":62},"action":"insert","lines":["n"]}],[{"start":{"row":23,"column":62},"end":{"row":23,"column":63},"action":"insert","lines":[" "],"id":44},{"start":{"row":23,"column":63},"end":{"row":23,"column":64},"action":"insert","lines":["t"]},{"start":{"row":23,"column":64},"end":{"row":23,"column":65},"action":"insert","lines":["i"]},{"start":{"row":23,"column":65},"end":{"row":23,"column":66},"action":"insert","lines":["m"]},{"start":{"row":23,"column":66},"end":{"row":23,"column":67},"action":"insert","lines":["e"]},{"start":{"row":23,"column":67},"end":{"row":23,"column":68},"action":"insert","lines":["s"]}],[{"start":{"row":24,"column":54},"end":{"row":24,"column":55},"action":"insert","lines":[" "],"id":45},{"start":{"row":24,"column":55},"end":{"row":24,"column":56},"action":"insert","lines":["/"]},{"start":{"row":24,"column":56},"end":{"row":24,"column":57},"action":"insert","lines":["/"]}],[{"start":{"row":24,"column":57},"end":{"row":24,"column":58},"action":"insert","lines":[" "],"id":46},{"start":{"row":24,"column":58},"end":{"row":24,"column":59},"action":"insert","lines":["t"]},{"start":{"row":24,"column":59},"end":{"row":24,"column":60},"action":"insert","lines":["i"]},{"start":{"row":24,"column":60},"end":{"row":24,"column":61},"action":"insert","lines":["m"]},{"start":{"row":24,"column":61},"end":{"row":24,"column":62},"action":"insert","lines":["e"]}],[{"start":{"row":24,"column":62},"end":{"row":24,"column":63},"action":"insert","lines":[" "],"id":47},{"start":{"row":24,"column":63},"end":{"row":24,"column":64},"action":"insert","lines":["d"]},{"start":{"row":24,"column":64},"end":{"row":24,"column":65},"action":"insert","lines":["i"]},{"start":{"row":24,"column":65},"end":{"row":24,"column":66},"action":"insert","lines":["f"]},{"start":{"row":24,"column":66},"end":{"row":24,"column":67},"action":"insert","lines":["f"]},{"start":{"row":24,"column":67},"end":{"row":24,"column":68},"action":"insert","lines":["e"]},{"start":{"row":24,"column":68},"end":{"row":24,"column":69},"action":"insert","lines":["r"]},{"start":{"row":24,"column":69},"end":{"row":24,"column":70},"action":"insert","lines":["e"]},{"start":{"row":24,"column":70},"end":{"row":24,"column":71},"action":"insert","lines":["n"]},{"start":{"row":24,"column":71},"end":{"row":24,"column":72},"action":"insert","lines":["c"]},{"start":{"row":24,"column":72},"end":{"row":24,"column":73},"action":"insert","lines":["e"]}],[{"start":{"row":24,"column":73},"end":{"row":24,"column":74},"action":"insert","lines":[" "],"id":48},{"start":{"row":24,"column":74},"end":{"row":24,"column":75},"action":"insert","lines":["i"]},{"start":{"row":24,"column":75},"end":{"row":24,"column":76},"action":"insert","lines":["n"]}],[{"start":{"row":24,"column":76},"end":{"row":24,"column":77},"action":"insert","lines":[" "],"id":49},{"start":{"row":24,"column":77},"end":{"row":24,"column":78},"action":"insert","lines":["m"]},{"start":{"row":24,"column":78},"end":{"row":24,"column":79},"action":"insert","lines":["i"]},{"start":{"row":24,"column":79},"end":{"row":24,"column":80},"action":"insert","lines":["n"]},{"start":{"row":24,"column":80},"end":{"row":24,"column":81},"action":"insert","lines":["u"]},{"start":{"row":24,"column":81},"end":{"row":24,"column":82},"action":"insert","lines":["t"]},{"start":{"row":24,"column":82},"end":{"row":24,"column":83},"action":"insert","lines":["e"]},{"start":{"row":24,"column":83},"end":{"row":24,"column":84},"action":"insert","lines":["s"]}],[{"start":{"row":25,"column":31},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":50},{"start":{"row":26,"column":0},"end":{"row":26,"column":10},"action":"insert","lines":["          "]},{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["/"]},{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["/"]}],[{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":[" "],"id":51},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["i"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["f"]}],[{"start":{"row":26,"column":15},"end":{"row":26,"column":16},"action":"insert","lines":[" "],"id":52},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["m"]},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["o"]},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["r"]},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":[" "],"id":53},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["t"]},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["h"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["a"]},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["n"]}],[{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":[" "],"id":54},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["3"]}],[{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":[" "],"id":55},{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["h"]},{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["o"]},{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["u"]},{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["r"]},{"start":{"row":26,"column":32},"end":{"row":26,"column":33},"action":"insert","lines":["s"]}],[{"start":{"row":26,"column":33},"end":{"row":26,"column":34},"action":"insert","lines":[" "],"id":56},{"start":{"row":26,"column":34},"end":{"row":26,"column":35},"action":"insert","lines":["o"]},{"start":{"row":26,"column":35},"end":{"row":26,"column":36},"action":"insert","lines":["v"]},{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["e"]},{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["r"]}],[{"start":{"row":26,"column":38},"end":{"row":26,"column":39},"action":"insert","lines":[" "],"id":57}],[{"start":{"row":26,"column":39},"end":{"row":26,"column":40},"action":"insert","lines":["s"],"id":58},{"start":{"row":26,"column":40},"end":{"row":26,"column":41},"action":"insert","lines":["i"]},{"start":{"row":26,"column":41},"end":{"row":26,"column":42},"action":"insert","lines":["n"]},{"start":{"row":26,"column":42},"end":{"row":26,"column":43},"action":"insert","lines":["c"]},{"start":{"row":26,"column":43},"end":{"row":26,"column":44},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":44},"end":{"row":26,"column":45},"action":"insert","lines":[" "],"id":59},{"start":{"row":26,"column":45},"end":{"row":26,"column":46},"action":"insert","lines":["l"]},{"start":{"row":26,"column":46},"end":{"row":26,"column":47},"action":"insert","lines":["i"]},{"start":{"row":26,"column":47},"end":{"row":26,"column":48},"action":"insert","lines":["g"]},{"start":{"row":26,"column":48},"end":{"row":26,"column":49},"action":"insert","lines":["h"]},{"start":{"row":26,"column":49},"end":{"row":26,"column":50},"action":"insert","lines":["t"]},{"start":{"row":26,"column":50},"end":{"row":26,"column":51},"action":"insert","lines":["B"]},{"start":{"row":26,"column":51},"end":{"row":26,"column":52},"action":"insert","lines":["u"]},{"start":{"row":26,"column":52},"end":{"row":26,"column":53},"action":"insert","lines":["l"]},{"start":{"row":26,"column":53},"end":{"row":26,"column":54},"action":"insert","lines":["b"]}],[{"start":{"row":26,"column":54},"end":{"row":26,"column":55},"action":"insert","lines":[" "],"id":60},{"start":{"row":26,"column":55},"end":{"row":26,"column":56},"action":"insert","lines":["w"]},{"start":{"row":26,"column":56},"end":{"row":26,"column":57},"action":"insert","lines":["a"]},{"start":{"row":26,"column":57},"end":{"row":26,"column":58},"action":"insert","lines":["s"]}],[{"start":{"row":26,"column":58},"end":{"row":26,"column":59},"action":"insert","lines":[" "],"id":61},{"start":{"row":26,"column":59},"end":{"row":26,"column":60},"action":"insert","lines":["o"]},{"start":{"row":26,"column":60},"end":{"row":26,"column":61},"action":"insert","lines":["f"]},{"start":{"row":26,"column":61},"end":{"row":26,"column":62},"action":"insert","lines":["f"]}],[{"start":{"row":26,"column":62},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":62},{"start":{"row":27,"column":0},"end":{"row":27,"column":10},"action":"insert","lines":["          "]},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["/"]},{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":["/"]}],[{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"insert","lines":[" "],"id":63}],[{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":["s"],"id":64},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["e"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["n"]},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["d"]}],[{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":[" "],"id":65},{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"insert","lines":["a"]}],[{"start":{"row":27,"column":19},"end":{"row":27,"column":20},"action":"insert","lines":[" "],"id":66},{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["m"]},{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":["e"]},{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["s"]},{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["s"]},{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["a"]},{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["g"]},{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"insert","lines":[" "],"id":67},{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"insert","lines":["t"]},{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["o"]}],[{"start":{"row":27,"column":30},"end":{"row":27,"column":31},"action":"insert","lines":[" "],"id":68}],[{"start":{"row":27,"column":31},"end":{"row":27,"column":51},"action":"insert","lines":["lightOnDurationTopic"],"id":69}],[{"start":{"row":27,"column":51},"end":{"row":27,"column":52},"action":"insert","lines":[" "],"id":70}]]},"ace":{"folds":[],"scrolltop":265.5,"scrollleft":0,"selection":{"start":{"row":50,"column":2},"end":{"row":50,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":13,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1606917816542,"hash":"df3ffb2902a219161ef86be52cd9cf83a20c63eb"}
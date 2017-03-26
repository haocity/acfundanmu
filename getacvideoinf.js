"use strict";
const fetch = require('node-fetch')
 fetch("http://www.acfun.cn/v/ac3572617").then(function(res){return res.text()}
        ).then(function(body)
            {
                var reg = /{"commentCount".*}/g;
                var a= body.match(reg)[0]
                var c=JSON.parse(a)
                let vid=c.videoId
                fetch('http://danmu.aixifan.com/V3/'+vid+'/1/2000/').then(
                	function(res){return res.text()}).then(function(body)
                		{
                			let oldjson=JSON.parse(body)[2]
                			let newjson="";
                			for (var i = 0; i < oldjson.length; i++) {
                				let t= oldjson[i].c;
                				let text=oldjson[i].m;
                				let c= t.split(',')
                				let time=c[0]
                				let color10=c[1]
                				let color=parseInt(color10).toString(16)
                				let place2=t[2]
                				let place=parseInt(place2)
                				if (place!=1) {place=2}
                				newjson+=`{"id":${i},"time":${c[0]},"text":"${text}","color":"${color}","place":${place}}`
                				if (i < oldjson.length-1) {newjson+=","}
             				}
             				let json='{"success":1,"data":['+newjson+']}'
                		}

                	)
                
            }
        )
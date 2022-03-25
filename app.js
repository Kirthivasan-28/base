const fetch=require('./AttendanceRegister.json')
// fetch("")
//   .then(response => response.json())
//   .then(json => console.log(json));
console.log(fetch)

const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("Enter your Name");
// console.log(age);
// const inp=prompt("How old are you? ");

// let name=JSON.parse(fetch)
for(var i=0;i<fetch.length;i++){
    if(fetch[i].employeName==age){
        var formattedDate = new Date(fetch[i].date).toJSON();
        console.log(formattedDate,'*******')
        console.log(fetch[i].employeName,fetch[i].date,fetch[i].checkinTime,fetch[i].checkouttime,fetch[i].dept)
    }
}

// var tc = require("timezonecomplete");   

        // var start = new tc.DateTime(fetch[i].date,fetch[i].checkinTime);
        // var end = new tc.DateTime(fetch[i].date,fetch[i].checkouttime);

        // var duration = end.diff(start);  // unit-aware duration

        // console.log(duration.minutes()); // -120
        // console.log(duration.hours());
        // var moment = require('moment')
        // var startDate = moment(fetch[i].date,fetch[i].checkinTime, 'YYYY-M-DD HH:mm')
        // var endDate = moment(fetch[i].date,fetch[i].checkouttime, 'YYYY-M-DD HH:mm')
        // console.log(endDate,'****************')
        // var secondsDiff = endDate.diff(startDate)
        // console.log(secondsDiff)


        // var valuestart=fetch[i].checkinTime
        // var valuestop=fetch[i].checkouttime
        // console.log(valuestart,'********')
        // var k= new Date(String(fetch[i].date) + valuestart)
        // console.log(k,'__________')
        // var timeStart = new Date(fetch[i].date + valuestart).getHours();
        // var timeEnd = new Date(String(fetch[i].date)+ valuestop).getHours();     
        // var hourDiff = timeEnd - timeStart;   
        // console.log(timeStart,'&&&&&&&&')
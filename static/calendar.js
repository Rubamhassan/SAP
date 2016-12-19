"use strict";


var events=[ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ];

var layOutDay = function() {
    for(var i=0; i < events.length; i++) {
       console.log(events[i]);
   }
};
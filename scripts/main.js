function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}




// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('clock').innerHTML =
//   h + ":" + m + ":" + s;
//   var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;


// }








// function details(){
//  var d = new Date (year, month day);

//  document.getElementById('details').innerHTML =
//  year + month + day;
// }





// var today = new Date ();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) { //6:00 pm
//   greeting = 'Good afternoon';
// } else if (hourNow > 12) { //12:00 pm
//   greeting = 'Good evening';
// } else if (hourNow > 0) { //12:00 am
//   greeting = 'Good morning';
// } else {
//   greeting = 'Welcome!'; //default option
// }

// document.write('<h3>' + greeting + '</h3>');
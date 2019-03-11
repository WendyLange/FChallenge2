window.onload = function () {
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


    function getMessage() {
        var message = document.querySelector('.message');
        var value = '';
        var currentTime = new Date().getHours();

        if (0 <= currentTime&&currentTime < 5) {
              value = "It is early, good morning!";
        }
        if (5 <= currentTime&&currentTime < 11) {
              value = "Morning, maybe not?";
        }
        if (11 <= currentTime&&currentTime < 16) {
              value = "It's afternoon here, cup a soup time!";
        }
        if (16 <= currentTime&&currentTime < 22) {
              value = 'Currently it is evening';
        }
        if (22 <= currentTime&&currentTime <= 24) {
              value = 'It is night, time to go to sleep';
        }
        message.innerHTML = value;
    }

    function displayNextImage() {
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("img").src = images[x];
    }

    function displayPreviousImage() {
        x = (x <= 0) ? images.length - 1 : x - 1;
        (function(x) {
            document.getElementById("img").src = images[x];
        })(x)

    }

    function startImage() {
        setInterval(displayNextImage, 2000);
    }

    var images = [], x = -1;
    images[0] = "images/image1.jpg";
    images[1] = "images/image2.jpg";
    images[2] = "images/image3.jpg";
    images[3] = "images/image4.jpg";
    images[4] = "images/image5.jpg";

    startTime();
    getMessage();
    startImage();
};

function getMessage() {
      var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 5) {
       document.write("It is early, good morning!");
      }
      if (5 <= currentTime&&currentTime < 11) {
       document.write("Morning, maybe not?");
      }
      if (11 <= currentTime&&currentTime < 16) {
       document.write("It's afternoon here, cup a soup time!");
      }
      if (16 <= currentTime&&currentTime < 22) {
       document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
      }
      if (22 <= currentTime&&currentTime <= 24) {
       document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
      }
}

getMessage();
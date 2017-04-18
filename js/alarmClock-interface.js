var Clock = require('../js/alarmClock.js').clockModule;

function drawClock(timeString, section) {
  var timeArray = timeString.split(":");
  var map = {};
  map["hours"] = timeArray[0];
  map["minutes"] = timeArray[1];
  map["seconds"] = timeArray[2];
  for(var i in map){
    $("#"+section + " ." + i).empty();
    $("#"+section + " ." + i).append("<img style='width: 50px' src='img/"+map[i].charAt(0)+".png'>");
    $("#"+section + " ." + i).append("<img style='width: 50px' src='img/"+map[i].charAt(1)+".png'>");
  }
  $("#"+section+" .amPm").empty();
  $("#"+section+" .amPm").append("<h4>"+map["seconds"].charAt(3)+map["seconds"].charAt(4)+"</h4>");
}

$(function() {
  var alarmClock = new Clock();
  var newAlarm;
  var time = setInterval(function() {
    drawClock(alarmClock.getCurrentTime(), "time")
    if(alarmClock.checkAlarm()){
      $("#alarmField").show();
      $("#alarmField .jumbotron").toggleClass( "alarmClass" );
    }
  }, 500);

  $("#alarmSet").click(function() {
    alarmClock.setAlarm(newAlarm);
    $("#alarmSection").slideUp();
    $("#nextAlarm span").text(alarmClock.getNextTime());
    $("#nextAlarm").slideDown();
  });

  $("#snooze").click(function(){
    $("#alarmField").hide();
    var snooze = moment().add(10, 'm');
    alarmClock.setAlarm(snooze.format("hh:mm:ss a"));
    $("#nextAlarm span").text(alarmClock.getNextTime());
  });

  $("#newAlarmBtn").click(function() {
    newAlarm = alarmClock.getNextTime();
    drawClock(newAlarm, "setAlarm");
    $("#alarmSection").slideDown();
  });

  $("#hourUp").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").add(1, 'h');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

  $("#hourDown").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").subtract(1, 'h');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

  $("#minuteUp").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").add(1, 'm');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

  $("#minuteDown").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").subtract(1, 'm');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

  $("#secondUp").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").add(1, 's');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

  $("#secondDown").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").subtract(1, 's');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

  $("#amPmUp").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").add(12, 'h');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

  $("#amPmDown").click(function() {
    newAlarm = moment(newAlarm, "hh:mm:ss a").subtract(12, 'h');
    drawClock(newAlarm.format("hh:mm:ss a"), "setAlarm");
  })

});

function Clock() {
  var alarm;
}

Clock.prototype.getCurrentTime = function() {
  return moment().format("hh:mm:ss a");
};

Clock.prototype.setAlarm = function(alarm) {
  this.alarm = moment(alarm, "hh:mm:ss a");
};

Clock.prototype.checkAlarm = function () {
  if (this.alarm) {
    return moment().isSameOrAfter(this.alarm, "second");
  }
};

Clock.prototype.getNextTime = function() {
  if (this.alarm) {
    return this.alarm.format("hh:mm:ss a");
  } else {
    return this.getCurrentTime();
  }
}

exports.clockModule = Clock;

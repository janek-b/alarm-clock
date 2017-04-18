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
    return moment().isSame(this.alarm, "second");
  }
};

exports.clockModule = Clock;

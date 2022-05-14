var data = [{
  start: 0,
  duration: 15,
  title: "Exercise"
}, {
  start: 25,
  duration: 30,
  title: "Travel to work"
}, {
  start: 30,
  duration: 30,
  title: "Plan day"
}, {
  start: 60,
  duration: 15,
  title: "Review yesterday's commits"
}, {
  start: 100,
  duration: 15,
  title: "Code review"
}, {
  start: 180,
  duration: 90,
  title: "Have lunch with John"
}, {
  start: 360,
  duration: 30,
  title: "Skype call"
}, {
  start: 370,
  duration: 45,
  title: "Follow up with designer"
}, {
  start: 400,
  duration: 30,
  title: "Push up branch"
}];

$(".main").append(`<div class="TimeSection">
<div class="firsthalf d-flex">
  
  <div class="timeContent">
    
  </div>
</div>
</div>`)


var firststart = 60 * 8;
var secondstart = 63.75 * 8;
for (var i = 0; i < 10; i++) {
  var currentTimeTopHour = (i * 120) + 60;
  var currentTimeTopMin = (i * 120) + 120;
  var hour = Math.floor((firststart + i * 60) / 60);
  if (hour > 12) var hour = ((hour + 11) % 12 + 1);
  var min = (firststart + i * 60) % 60;
  var currentHrTagTop = (i * 120) + 45;
  var hour1 = Math.floor((secondstart + i * 60) / 60);
  if (hour1 > 12)
    var hour1 = ((hour1 + 11) % 12 + 1);
  var min1 = (secondstart + i * 60) % 60;
  $('.TimeSection').append(`<hr style="top:${currentHrTagTop}px">`);
  $('.firsthalf').append(`<span class="time" style="left:120px;top:${currentTimeTopHour}px">${hour+':'+min}0</span>`);
  $('.firsthalf').append(`<span class="time" style="left:120px;top:${currentTimeTopMin}px">${hour1+':'+min1}</span>`);
}
for (i = 0; i < data.length; i++) {
  if (i > 0) {
    for (var j = 0; j < i; j++) {
      var currenteventStart = data[i].start;
      var isOverlapping = currenteventStart - (data[j].start + data[j].duration);
      if (isOverlapping < 0) {
        data[i].overlapped = 'left';
        if (data[j].overlapped == 'left') {
          data[i].overlapped = true;
          break;
        }
        data[j].overlapped = true;
      }
    }
  }
}
for (i = 0; i < data.length; i++) {
  var currentEventTop = ((data[i].start) * 2);
  var currentEventDuration = (data[i].duration) * 2 + 'px';
  if (data[i].overlapped == true) {
    var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:46%;top:${currentEventTop}px;left:46%">${data[i].title}</div>`;
  } else if (data[i].overlapped == 'left') {
    var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:46%;top:${currentEventTop}px;left:">${data[i].title}</div>`;
  } else
    var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:92%;top:${currentEventTop}px;left:">${data[i].title}</div>`;
  $('.firsthalf').find('.timeContent').append(addTask);
}
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
  var currentEventDuration = (data[i].duration) * 2 + 'px';
  var nexteventStart = (data[i + 1]) ? data[i + 1].start : (data[i].start + data[i].duration);
  var currentEventTop = ((data[i].start) * 2) + 60;
  var isOverlapping = nexteventStart - (data[i].start + data[i].duration);
  if (isOverlapping <= 0) {
    if(data[i + 1]) data[i + 1].overlapped = true;
    var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:450px;top:${currentEventTop}px;left:660px">${data[i].title}</div>`;
  } else{
    var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:900px;top:${currentEventTop}px;left:210px">${data[i].title}</div>`;
  }
  //if (data[i].overlapped && !data[i].isPloated)  
  if (data[i].overlapped && data[i+1])
    var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:450px;top:${currentEventTop}px;left:210px">${data[i].title}</div>`;
  $('.firsthalf').find('.timeContent').append(addTask);
  data[i].isPloated=true;

}
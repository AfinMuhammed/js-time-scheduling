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


// console.log(data[0].title);
var firststart = 60 * 8;
var secondstart = 63.75 * 8;
// var i = 0;
for (var i = 0; i < 10; i++) {
// console.log(data[i].start + 60 * 8);
var eight = 8;

var hour = Math.floor((firststart + i * 60) / 60);
var min = (firststart + i * 60) % 60;

var hour1 = Math.floor((secondstart + i * 60) / 60);
var min1 = (secondstart + i * 60) % 60;

$('.firsthalf').append(`<span class="time" style="left:120px">${hour+':'+min}0</span>`);
console.log('aaaa:'+hour);
}

$(".main").append(`<div class="TimeSection">
<div class="firsthalf d-flex">
  
  <div class="timeContent">
    
  </div>
</div>
</div>`)

for (i = 0; i < data.length; i++) {
  if (i+1==(data.length-1) && data[data.length - 1].overlapped) {
    // console.log("aaa");
    var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:450px;top:${currentEventTop}px;">${data[i].title}</div>`;
    $('.firsthalf').find('.timeContent').append(addTask);

  } else {
    var currentEventDuration = (data[i].duration) * 2 + 'px';
    var nexteventStart = data[i + 1].start;
    var currentEventTop = ((data[i].start) * 2) + 60;
    console.log("hello:  " + (nexteventStart - (data[i].start + data[i].duration)));
    var isOverlapping = nexteventStart - (data[i].start + data[i].duration);
    if (isOverlapping < 0) {
      data[i + 1].overlapped = true;

      var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:450px;top:${currentEventTop}px;left:660px">${data[i].title}</div>`;
    } else
      var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:900px;top:${currentEventTop}px;left:210px">${data[i].title}</div>`;
    if (data[i].overlapped)
      var addTask = `<div class=" contentActive " style="height:${currentEventDuration};width:450px;top:${currentEventTop}px;left:210px">${data[i].title}</div>`;
    $('.firsthalf').find('.timeContent').append(addTask);
  }
}
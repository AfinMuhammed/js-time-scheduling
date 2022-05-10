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


console.log(data[0].title);
var a = 60 * 8;

for (var i = 0; i < 10; i++) {
  // console.log(data[i].start + 60 * 8);

var hour = Math.floor((a+i*30) / 60);
var min = (a+i*30) % 60;
// var duration= ( i==0 ) ? 0 : data[i--].duration;
// console.log(b + ":" + c);
  $(".main").append(`<div class="TimeSection">
  <div class=" d-flex">
    <span class="time">${hour + ":" + min}</span>
    <div class="timeContent">
      <div class=" contentActive" style="height:${data[i].duration}px;margin-top:${data[i].start}px;">
        ${data[i].title}
      </div>
    </div>
  </div>
</div>`)


}

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

console.log(data[1].start + 60 * 8);
var a = data[0].start + 60 * 8;
var b = Math.floor(a / 60);
var c = a % 60;
console.log(b + ":" + c);
// console.log(data[0].start);


for (var i = 0; i < 10; i++) {
  $(".main").after(`<div class="TimeSection">
  <div class="firsthalf d-flex">
    <span class="time">8:00</span>
    <div class="timeContent">
      <div class=" contentActive firstOne">
        Exercise
      </div>
      <div class=" d-block h-33"></div>
      <div class="d-flex  h-16">
        <div class=" w-50"></div>
        <div class="contentActive w-50 ms-0"></div>
      </div>
    </div>
  </div>
  <div class="secondhalf d-flex">
    <span class="time">8:30</span>
    <div class="timeContent contentActive planDay h-100 w-50">
      Plan day
    </div>
    <div class="timeContent contentActive ms-0 travelWork w-50">
      Travel to work
    </div>
  </div>
</div>`)


}

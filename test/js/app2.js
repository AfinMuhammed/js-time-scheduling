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


console.log(data[7].title);
var a = 60 * 8;
var tempArray =[]
var tempOverlapArray = []
var count2 = 1;

var tempdata = -1;
for (var i = 0; i < 10; i++) {
  // console.log(data[i].start + 60 * 8);

var hour = Math.floor((a+i*30) / 60);
var min = (a+i*30) % 60;
var duration = 0;
var tempValue = 0;
tempdata = 0;
if(data[i].start!=0){
  tempValue =data[i].start-(data[i-1].start+ data[i-1].duration);
}
// console.log("tempValue:"+tempValue);
// console.log("tempdata:"+tempdata);
if(tempValue < 0 && tempdata == 0 ){
  for (var j = i; j<10; j++){
    tempdata =data[j].start-(data[j-1].start + data[j-1].duration);
    if(tempdata < 0){
      count2++;
    }else{
      break;
    }
  }
}
console.log(tempValue + ' ' + data[i].title + " " + count2+' '+ tempdata);
  $(".main").append(`
  <div class=" ">
    <div class=" d-flex">
      <span class="time">${hour + ":" + min}</span>
      <div class="timeContent">
        <div class=" contentActive" style="height:${data[i].duration}px;margin-top:${tempValue}px;margin-left:${(count2 == 1 )? 0 : 100/count2}%">
          ${data[i].title}
        </div>
      </div>
    </div>
  </div>`)
  if(count2 > 1){
    count2 = count2 -1 ;
  }else{
    tempdata =0;
  }
}

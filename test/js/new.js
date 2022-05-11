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
var i = 0;
// for (var i = 0; i < 10; i++) {
// console.log(data[i].start + 60 * 8);
var eight = 8;

var hour = Math.floor((firststart + i * 60) / 60);
var min = (firststart + i * 60) % 60;

var hour1 = Math.floor((secondstart + i * 60) / 60);
var min1 = (secondstart + i * 60) % 60;

// console.log(hour+"start"+min);
// console.log(hour1+"min"+min1);
var a = data[i].start;
// console.log(Math.floor((a+firststart)/60) + ':'+(a+firststart)%60);
console.log(((a * 60) + firststart) / 60 + '----' + (firststart + i * 60) / 60);
// console.log(min1);
// console.log((a+firststart)%60);
// console.log((a+secondstart)%60);
if (Math.floor((a + firststart) / 60) === hour && (a + firststart) % 60 >= min && (a + firststart) % 60 <= min1) {
  console.log(data[i].title);
}

{
  /* <div class=" d-block h-33"></div>
      <div class="d-flex  h-16">
        <div class=" w-50"></div>
        <div class="contentActive w-50 ms-0"></div>
      </div> */
}



$(".main").append(`<div class="TimeSection">
<div class="firsthalf d-flex">
  <span class="time">${hour+':'+min}</span>
  <div class="timeContent">
    
    
  </div>
</div>
<div class="secondhalf d-flex">
  <span class="time">${hour1+':'+min1}</span>
  <div class="timeContent">
    
    
  </div>
</div>
</div>`)
// }

{
  /* <div class="timeContent contentActive planDay h-100 w-50">
      Plan day
    </div>
    <div class="timeContent contentActive ms-0 travelWork w-50">
      Travel to work
    </div> */
}

// if (data[0].start == 0) {
  for(i=0;i<15;i++){
  var pixel = (data[i].duration)*2+'px';
  console.log("aaaaaaa:"+pixel +"title: "+ data[i].title);
  $('.firsthalf').find('.timeContent').append(`<div class=" contentActive ">
  ${data[i].title}
</div>`)
  $('.firsthalf').find('.contentActive').css('height', pixel);

// if (data[i+1].start - (data[i].start + data[i].duration)) {
//   console.log("true");
//   for (var j = i+1; j < 10; j++) {
//     var pixel2 = data[j].duration * 2 + 'px';
//     console.log("trail1=  " + data[j].start);
//     // console.log("trail2=  "+ (data[j].start-(data[j-1].start+data[j-1].duration)));
//     var ttt = (data[j - 1].start + data[j - 1].duration);
//     console.log("trail2=  " + ttt);
//     if (data[j].start > ttt) {
//       var m_Top = (data[j].start - (data[j - 1].start + data[j - 1].duration)) * 2 + 'px';
//       console.log("MTop:" + m_Top);
//     }
//     else{
//       var m_Top= (data[j].start-data[j-1].start)*2+'px';
//     }
//     console.log(data[j].start)
//     $('.secondhalf').find('.timeContent').append(`<div class=" contentActive ">
//   ${data[j].title}</div>`)
//     var titleA = data[j].title;
//     var title = titleA.split(' ')[0];
//     console.log("Aaa: " + title);
//     // $('.secondhalf').find('.timecontent').children().addClass(title);
//     $('.secondhalf').find('.contentActive').css('height', pixel2);
//     $('.secondhalf').find('.contentActive').css('width', '50%');
//     // $('.secondhalf').find('contentActive').css('margin-top', m_Top);
//     $('.secondhalf').find('.timeContent').addClass('d-flex');
//   }
// }

}

// if (data[2].start - (data[1].start + data[1].duration)) {
//   console.log("true");
//   for (var j = 1; j < 3; j++) {
//     var pixel2 = data[j].duration * 2 + 'px';
//     console.log("trail1=  " + data[j].start);
//     // console.log("trail2=  "+ (data[j].start-(data[j-1].start+data[j-1].duration)));
//     var ttt = (data[j - 1].start + data[j - 1].duration);
//     console.log("trail2=  " + ttt);
//     if (data[j].start > ttt) {
//       var m_Top = (data[j].start - (data[j - 1].start + data[j - 1].duration)) * 2 + 'px';
//       console.log("MTop:" + m_Top);
//     }
//     // else{
//     //   var m_Top=
//     // }
//     console.log(data[j].start)
//     $('.secondhalf').find('.timeContent').append(`<div class=" contentActive ">
//   ${data[j].title}</div>`)
//     var titleA = data[j].title;
//     var title = titleA.split(' ')[0];
//     console.log("Aaa: " + title);
//     // $('.secondhalf').find('.timecontent').children().addClass(title);
//     $('.secondhalf').find('.contentActive').css('height', pixel2);
//     $('.secondhalf').find('.contentActive').css('width', '50%');
//     // $('.secondhalf').find(title).css('margin-top', m_Top);
//     $('.secondhalf').find('.timeContent').addClass('d-flex');
//   }
// }
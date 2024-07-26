var index = 0;

function slider() {
  li = document.querySelectorAll('.interview_contents > li');

  if (index == 4) {
    index = 0;
  }
  for (i = 0; i < li.length; i++) {
    var onNum = index + 1;
    if (onNum == 4) {
      onNum = 0;
    }
    console.log(index, onNum);
    if (i == index) {
      console.log(i, '번째 클래스명 out');
      li.item(i).setAttribute('class', 'out');
    }
    else if (i == onNum) {
      console.log(i, '번째 클래스명 on');
      li.item(i).setAttribute('class', 'on');
    }
    else {
      console.log(i, '여긴 클래스를 지워라');
      li.item(i).setAttribute('class', '');
    }

  }
  index++;
}

setInterval(slider, 1000);
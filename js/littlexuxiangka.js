//选项卡1
(function cardOne() {
  let ulbox = document.querySelector(".cardWrap")
  //console.log(ulbox);
  let date = null
  let numLists = null
  let hotImgs = null
  let hotUp = null

  function getData() {

    $.ajax({
      type: 'GET',
      url: './json/data-little1.json',
      success: function (data) {
        date = data;
      },
      async: false
    })
    //console.log(date);
    date.forEach((item, index) => {
      let { id, pic, title, click } = item
      let str = `<li>
    <div class="numList">
      <img src="${pic}" alt="" class="numImg">
    </div>
    <div class="titleBox">
      <div class="tWrap">
        <h3 class="title">${title}</h3>
      <img src="images/hot_hot.png"  class="hotImg"alt="">
      </div>
      <div class="detail">
        <span class="click-volume">${click}</span>
        <span class="hotUp">热度</span>
      </div>
    </div>
  </li>`
      ulbox.innerHTML += str
      numLists = ulbox.querySelectorAll(".numList")
      hotImgs = ulbox.querySelectorAll(".hotImg")
      hotUps = ulbox.querySelectorAll(".hotUp")


    })


  }
  getData()


  for (let i = 0; i < numLists.length; i++) {
    if (i > 3) {
      let index = i
      numLists[i].innerHTML = `${index}`
    }
  }

  for (let n = 0; n < hotImgs.length; n++) {
    if (n % 3 === 1 || n % 5 === 2 || n % 6 === 0) {
      hotImgs[n].style.opacity = 0

    }
  }
  //console.log(hotUps);
  hotUps[0].style.opacity = 0

})();
//选项卡2
(function cardTwo() {
  let ulbox = document.querySelector(".cardWrap2")
  //console.log(ulbox);
  let date = null
  let numLists = null
  let hotImgs = null
  let hotUp = null

  function getData() {

    $.ajax({
      type: 'GET',
      url: '../json/data-little2.json',
      success: function (data) {
        date = data;
      },
      async: false
    })
    //console.log(date);
    date.forEach((item, index) => {
      let { id, pic, title, click } = item
      let str = `<li>
      <div class="numList">
        <img src="${pic}" alt="" class="numImg">
      </div>
      <div class="titleBox">
        <div class="tWrap">
          <h3 class="title">${title}</h3>
        <img src="images/hot_new.png"  class="hotImg"alt="">
        </div>
        <div class="detail">
          <span class="click-volume">${click}</span>
          <span class="hotUp">热度</span>
        </div>
      </div>
    </li>`
      ulbox.innerHTML += str
      numLists = ulbox.querySelectorAll(".numList")
      hotImgs = ulbox.querySelectorAll(".hotImg")
      hotUps = ulbox.querySelectorAll(".hotUp")


    })


  }
  getData()


  for (let i = 0; i < numLists.length; i++) {
    if (i > 2) {
      let index = i + 1
      numLists[i].innerHTML = `${index}`
    }
  }

  for (let n = 0; n < hotImgs.length; n++) {
    if (!(n % 3 === 2 || n % 5 === 7 || n % 6 === 2)) {
      hotImgs[n].style.opacity = 0

    }
  }
  //console.log(hotUps);
  hotUps[0].style.opacity = 0

})();
//选项卡3
(function cardThree() {
  let ulbox = document.querySelector(".cardWrap3")
  //console.log(ulbox);
  let date = null
  let numLists = null
  let hotImgs = null
  let hotUp = null

  function getData() {

    $.ajax({
      type: 'GET',
      url: '../json/data-little2.json',
      success: function (data) {
        date = data;
      },
      async: false
    })
    //console.log(date);
    // date=date.reverse((a,b)=>{
    //   b-a
    // })
    date.forEach((item, index) => {
      let { id, pic, title, click } = item
      let str = `<li>
      <div class="numList">
        <img src="${pic}" alt="" class="numImg">
      </div>
      <div class="titleBox">
        <div class="tWrap">
          <h3 class="title">${title}</h3>
        <img src="images/hot_new.png"  class="hotImg"alt="">
        </div>
        <div class="detail">
          <span class="click-volume">${click}</span>
          <span class="hotUp">热度</span>
        </div>
      </div>
    </li>`
      ulbox.innerHTML += str
      numLists = ulbox.querySelectorAll(".numList")
      hotImgs = ulbox.querySelectorAll(".hotImg")
      hotUps = ulbox.querySelectorAll(".hotUp")


    })


  }
  getData()


  for (let i = 0; i < numLists.length; i++) {
    if (i > 2) {
      let index = i + 1
      numLists[i].innerHTML = `${index}`
    }
  }

  for (let n = 0; n < hotImgs.length; n++) {
    if (!(n % 3 === 1 || n % 5 === 3 || n % 6 === 1)) {
      hotImgs[n].style.opacity = 0

    }
  }
  //console.log(hotUps);
  hotUps[0].style.opacity = 0

})();
//选项卡4
(function cardThree() {
  let ulbox = document.querySelector(".cardWrap4")
  //console.log(ulbox);
  let date = null
  let numLists = null
  let hotImgs = null
  let hotUp = null

  function getData() {

    $.ajax({
      type: 'GET',
      url: '../json/data-little2.json',
      success: function (data) {
        date = data;
      },
      async: false
    })
    //console.log(date);
    // date=date.reverse((a,b)=>{
    //   b-a
    // })
    date.forEach((item, index) => {
      let { id, pic, title, click } = item
      let str = `<li>
      <div class="numList">
        <img src="${pic}" alt="" class="numImg">
      </div>
      <div class="titleBox">
        <div class="tWrap">
          <h3 class="title">${title}</h3>
        <img src="images/hot_new.png"  class="hotImg"alt="">
        </div>
        <div class="detail">
          <span class="click-volume">${click}</span>
          <span class="hotUp">热度</span>
        </div>
      </div>
    </li>`
      ulbox.innerHTML += str
      numLists = ulbox.querySelectorAll(".numList")
      hotImgs = ulbox.querySelectorAll(".hotImg")
      hotUps = ulbox.querySelectorAll(".hotUp")


    })


  }
  getData()


  for (let i = 0; i < numLists.length; i++) {
    if (i > 2) {
      let index = i + 1
      numLists[i].innerHTML = `${index}`
    }
  }

  for (let n = 0; n < hotImgs.length; n++) {
    if ((n % 3 === 2 || n % 5 === 2 || n % 6 === 1)) {
      hotImgs[n].style.opacity = 0

    }
  }
  //console.log(hotUps);
  hotUps[0].style.opacity = 0

})();

//实现选项卡效果
(function choiceTab() {
  let tab = document.getElementById('tab')

  let tags = Array.from(tab.querySelectorAll('div'))
  //console.log(tags);

  let cardBox = document.getElementById("cardBox")
  //console.log(cardBox);

  let cards = Array.from(document.querySelectorAll('#cardBox>div'))
  //console.log(cards);
  //事件绑定
  for (let i = 0; i < tags.length; i++) {
    tags[i].onclick = function () {
      for (let n = 0; n < tags.length; n++) {
        tags[n].className = ""
        cards[n].className = ""
      }
      tags[i].className = "active"
      cards[i].className = "active"
      cards[i].scrollTop = -100

      //console.dir(cards[i]);
      console.log(`cards[i]-->`, [cards[i]]);
      let cardsParent = cards[i].parentNode
      cardsParent.scrollTop = 0


    }
  }




})()
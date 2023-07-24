
(() => {
  var mySwiper = new Swiper('.swiper',
    {
      direction: 'vertical',
      mousewheel: true,
      on: {
        slideChange: function () {
          if (mySwiper.activeIndex + 4 > mySwiper.slides.length) {
            getData();
          }
          /* console.log(`mySwiper-->`, mySwiper);
          console.log(`this-->`, this); */



        },
      },
    })
  let upperKey = document.querySelector(".pressBox .upper")
  upperKey.onclick = function () {
    mySwiper.slidePrev();

  }


  let nexterKey = document.querySelector(".pressBox .nexter")
  nexterKey.onclick = function () {
    mySwiper.slideNext();
  }


  function getData() {

    $.ajax({
      type: 'GET',
      url: './json/data1.json',
      success: function (data) {
        date = data;
      },
      async: false
    })
    //console.log(date);
    date.forEach((item, index) => {
      let { id, pic, likes, talk, add, share, video, name, date, title } = item
      let str = ` <div class="swiper-slide" id="${id}">
      <div class="showVideo">
        <div class="videoWrap">
          <div class="clickIfo">
            <ul>
              <li class="firTouxiang1">
                <div class="touxiangBox">
                  <img src="${pic}" alt="" class="touxiang">
                </div>
                <div class="iconbox addFouce ">
                  <i class="iconfont icon-tianjia">
                  </i>
                </div>

              </li>
              <li>
                <div class="icbox">
                  <i class="iconfont icon-xihuan"></i>
                </div>
                <div class="words">
                  <span>${likes}</span>
                </div>

              </li>
              <li>
                <div class="icbox">
                  <i class="iconfont icon-xinxi"></i>
                </div>
                <div class="words">
                  <span>${talk}</span>
                </div>

              </li>
              <li>
                <div class="icbox">
                  <i class="iconfont icon-shoucang"></i>
                </div>
                <div class="words">
                  <span>${add}</span>
                </div>

              </li>
              <li>
                <div class="icbox">
                  <i class="iconfont icon-fenxiang"></i>
                </div>
                <div class="words">
                  <span>${share}</span>
                </div>

              </li>
              <li>
                <div class="icbox">
                  <i class="iconfont icon-gengduo"></i>
                </div>
              </li>
            </ul>
          </div>
          <div class="videoCon">
            <img src="${pic}" alt="" class="bgImg">
            <video class="page1" src="${video}" controls controlslist="nodownload " loop
              poster="${pic}" nodownload nofullscreen noremoteplayback disablePictureInPicture
              noplaybackrate preload="metadata" muted="true" autoplay></video>
          </div>
        </div>
      </div>
      <div class="video-info-datail">
        <div class="writerBox">
          <span class="writer">@${name}</span>
          <span class="date">· ${date}</span>
        </div>
        <div class="intro">${title}</div>
      </div>
    </div>`
      let swiperWrapper = document.querySelector(".swiper-wrapper")
      swiperWrapper.innerHTML += str
      console.log(`swiperWrapper-->`, [swiperWrapper]);
      // console.log(`str-->`, str);
      mySwiper.updateSlides();






    })


  }
  getData()





})()


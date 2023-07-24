

(function leftFlow(){
  let columns = Array.from(document.querySelectorAll('.colum'))
//console.log(columns);
let data = null
let videoBoxs=null
let itemBox=document.getElementById("itemBox")
//通过AJXA获取json数据，客户端循环渲染
function getData() {
  let xhr = new XMLHttpRequest
  xhr.open("get", "../json/data1.json", false)
  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      data = JSON.parse(xhr.response)
    }
    //console.log(data);
  }
  xhr.send(null)

}
getData()

function render() {
  let groups = null
  for (let i = 0; i < data.length; i += 3) {
    groups = data.slice(i, i + 3)
    groups.sort((a, b) => {
      return b.height - a.height
    })
    columns.sort((a, b) => {
      return a.offsetHeight - b.offsetHeight
    })
    groups.forEach((item, index) => {
      let { id, pic,video, height, likes, duration, name, date, title, link } = item
      let str =`<div class="item">
                  <a href="#">
                    <div class="videoBox" style="height:${height}px">
                      <div class="showBg">
                        <svg width="18" height="18" fill="rgba(169, 170, 183, 1)" xmlns="http://www.w3.org/2000/svg"
                          class="u1O5vnab" viewBox="0 0 105 120" style="width: 105px; height: 120px;">
                          <g opacity="0.04">
                            <path
                              d="M89.013 24.055C82.55 19.84 77.883 13.098 76.427 5.238A28.704 28.704 0 0175.939 0H55.31l-.035 82.675c-.345 9.257-7.967 16.689-17.307 16.689-2.902 0-5.636-.726-8.044-1.992-5.517-2.907-9.299-8.692-9.299-15.35 0-9.56 7.783-17.343 17.343-17.343 1.783 0 3.495.297 5.119.803V44.423a38.211 38.211 0 00-5.12-.368C17.034 44.055 0 61.088 0 82.027c0 12.848 6.42 24.216 16.213 31.088A37.749 37.749 0 0037.973 120c20.939 0 37.972-17.033 37.972-37.973V40.101a49.054 49.054 0 0028.704 9.227v-20.63a28.56 28.56 0 01-15.636-4.643z"
                              fill="#2F3035" fill-opacity="0.9"></path>
                            <path
                              d="M88.74 24.474h0a29.057 29.057 0 0015.409 4.72V48.826a48.547 48.547 0 01-27.912-9.131l-.792-.568v42.9c0 20.664-16.81 37.473-37.472 37.473a37.252 37.252 0 01-21.473-6.794l-.285.406.285-.406C6.835 105.922.5 94.704.5 82.027c0-20.663 16.81-37.472 37.467-37.472 1.565 0 3.1.117 4.619.307V64.814a17.46 17.46 0 00-4.62-.635c-9.835 0-17.842 8.006-17.842 17.842 0 6.853 3.892 12.804 9.566 15.793h0a17.732 17.732 0 008.277 2.05c9.61 0 17.451-7.646 17.806-17.17V82.676L55.81.5h19.635c.029 1.647.2 3.259.491 4.829 1.483 7.998 6.231 14.857 12.805 19.145z"
                              stroke="#E7E7EC" stroke-opacity="0.3"></path>
                          </g>
                        </svg>
                        <video
                        class="imgone1"
                        src="${video}"
                        style="height:${height}px"
                        controls
                        controlslist="nodownload "
                        loop
                        poster="${pic}"
                        nodownload
                        nofullscreen
                        noremoteplayback
                        disablePictureInPicture
                        noplaybackrate
                        preload="metadata"
                      ></video>
                        <img src="" alt="" data-src="${pic}"class="imgone"
                        style="height:${height}px"> 
                      </div>
                      <div class="leftIconbox">
                        <i class=" leftIcon iconfont icon-xihuan-xianxing"></i>
                        <span class="like">${likes}</span>
                      </div>
                      <div class="time">${duration}</div>
                    </div>
                    <div class="userIfo">
                      <div class="userName">
                        <span class="sign">@</span>
                        <span class="name">${name}</span>
                        <span class="time1"> · ${date}</span>
                      </div>
                      <div class="video-introduction">${title} </div>
                    </div>
                  </a>
                </div>` 

     columns[index].innerHTML+=str;
     //itemBox.innerHTML+=str
     
    }) 
  }
  videoBoxs=Array.from(document.querySelectorAll(".videoBox"))
     //console.log(videoBoxs);
}
render()
//展示图片
function showImg(img){
  let datasrc=img.getAttribute("data-src")
  let newImg=new Image
  newImg.src=datasrc
  newImg.onload=function(){
    img.src=datasrc
    img.flag=true
    //newImg=null

  }

}
//设置图片懒加载 监听器
function handle(){
  let ob=new IntersectionObserver(function(changes){
    changes.forEach(change=>{
      if(change.isIntersecting){
        //console.log(change.target);
        let img=change.target.querySelector("img")
        //console.log(img);
        if(img.flag){
          ob.unobserve(change.target)
          return
        }
        showImg(img)
      }
    })


  },{threshold:[0.5]})

  videoBoxs.forEach(videoBox=>{
    ob.observe(videoBox)
  })
}
handle()
//加载更多
let addMore=document.getElementById("addMore")
let count=0
function loadMore(){
  let ob2=new IntersectionObserver(changes=>{
    if(changes[0].isIntersecting){
      count++
      if(count>13){
        ob2.unobserve(changes[0].target)
        loadMore.innerHTML="啊哦！到底了哦"
        return
      } 
      getData()
      render()
      handle()

    }
  },{
    threshold:[0]
  })
  ob2.observe(addMore)
}
loadMore()

})()




(function () {
  let navWrap = document.querySelector(".navWrap")
  //console.log(navWrap);
  const click = function click(e) {
    //console.log(`e-->`, e);
    let current = e.target

    for (; current.parentElement !== navWrap;) {
      current = current.parentElement
      if(!current) return
    } 
    
    // console.log(`navWrap-->`, [navWrap]);

    let index = null
    for (let i = 0; i < navWrap.children.length; i++) {
      if (navWrap.children[i] === current) {
        index = i
      }
      navWrap.children[i].classList.remove("hoverClass")


    }
    let sectionList = [...document.querySelectorAll(".dyRightContainer>section")]
  
    sectionList.forEach(item => {
      item.style.display = "none"
    })
    
    //console.log(`current.classList-->`, current.classList);

    current.classList.add("hoverClass")
    

    sectionList[index].style.display = "block"
    
    //console.log(`1current-->`, current);
  }
  navWrap.addEventListener("click", click)
















})()
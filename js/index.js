document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon")
    const searchInput = document.getElementById("search-input")
    const searchForm = document.getElementById("search-form")
    const navMenu = document.querySelector('.nav-menu')

    searchIcon.addEventListener("click", function() {
      if (searchInput.style.display === "none") {
        // Hiển thị ô tìm kiếm và ẩn biểu tượng tìm kiếm
        searchInput.style.display = "flex";
        navMenu.style.display = "none";
        // Focus vào ô tìm kiếm
        searchInput.focus();
      } else {
        // Ẩn ô tìm kiếm và hiển thị biểu tượng tìm kiếm
        searchInput.style.display = "none";
        navMenu.style.display = "flex";
      }
    });

    const listImage = document.querySelector('.list-images')
    const imgs = listImage.querySelectorAll('.image')
    const btnLeft = document.querySelector('.btn-left')
    const btnRight = document.querySelector('.btn-right')
    const length = imgs.length
    let current = 0
    // Thiết lập biến index hiện tại
    let currentIndex = 0

    const MoveSlide = () =>{
        if (current == length - 1){
            current = 0
            const width = imgs[currentIndex].offsetWidth
            listImage.style.transform = `translateX(0px)`
            currentIndex = (currentIndex + 1) % imgs.length;
        } else {
            current++
            const width = imgs[currentIndex].offsetWidth
            listImage.style.transform = `translateX(${-width * current}px)`
            currentIndex = (currentIndex + 1) % imgs.length;
        } 
    }

    let handelMoveSlide = setInterval(MoveSlide, 4000)

    btnRight.addEventListener('click', () => {
        clearInterval(handelMoveSlide)
        MoveSlide()
        handelMoveSlide = setInterval(MoveSlide, 4000)
    })

    btnLeft.addEventListener('click', () => {
        clearInterval(handelMoveSlide)
        if (current == 0){
            current = length - 1
            const width = imgs[currentIndex].offsetWidth
            listImage.style.transform = `translateX(${-width * current}px)`
            currentIndex = (currentIndex + 1) % imgs.length;
        } else {
            current--
            const width = imgs[currentIndex].offsetWidth
            listImage.style.transform = `translateX(${-width * current}px)`
            currentIndex = (currentIndex + 1) % imgs.length;
        } 
        handelMoveSlide = setInterval(MoveSlide, 4000)

    })
  });

    
  
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

  });

document.getElementById('search-icon').addEventListener('click', function () {
    let searchText = document.getElementById('search-input').value.toLowerCase();
    let recipeItems = document.querySelectorAll('.recipe-item');

    recipeItems.forEach(function (item) {
        let title = item.querySelector('.recipe-details p').innerText.toLowerCase();
        if (title.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}); 
  
document.querySelectorAll('.dropdown-item').forEach(function (filter) {
    filter.addEventListener('click', function (e) {
        e.preventDefault();
        let category = filter.innerText;
        let recipeItems = document.querySelectorAll('.recipe-item');

        recipeItems.forEach(function (item) {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lấy nút
let backToTopButton = document.getElementById("backToTop");

// Khi người dùng cuộn xuống 20px từ đầu tài liệu, hiển thị nút
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Khi người dùng nhấp vào nút, cuộn lên đầu trang
backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
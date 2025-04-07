$grid = $('.xgrid').isotope({});

$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});


const navbarToggle = document.querySelector(".navbar-toggler");
navbarToggle.addEventListener("toggle", () => {
    const navbar1 = document.querySelector(".navbar");
    navbar1.style.height = "100vh";
});

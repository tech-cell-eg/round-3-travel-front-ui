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
//customers
//text-center
const customer_text = document.querySelector(".customer_text");
//customer_name
const customer_name = document.querySelector(".customer_name");
//Job_description
const job_description = document.querySelector(".Job_description");
//customer_img
const images = document.querySelectorAll(".customer_img img");

images.forEach((image,index)=>{
    //index
      
    //console.log(index);                                             
    image.addEventListener("click",()=>{
      for(let i=0 ;i<images.length;i++){
        images[i].classList.remove("customer_js");
        }
       // console.log(image.index);
        if(index+1===1){
           customer_name.textContent = "aly Tufan";
          job_description.textContent = "Product Manager, Apple Inc.";
          customer_text.textContent="The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"; 
          customer_text.style.color="green";
          images[index].classList.add("customer_js");
           console.log(images[index]);
        }
        if(index+1===2){
          customer_name.textContent = "John Doe";
          job_description.textContent = "manger of CBC bank";
          customer_text.textContent="The tours on this website are amazing. I had a wonderful time with my family! The team is highly professional and very caring towards their customers. I will definitely recommend this company to my friends!";
          customer_text.style.color="red";
          images[index].classList.add("customer_js");
        }
        if(index+1===3){
          customer_name.textContent = "Mohamed Abeed";
          job_description.textContent = "manger of CBC bank";
          customer_text.textContent="The tours provided by this company are fantastic. I really enjoyed spending time with my family! Their staff is incredibly professional and attentive to the needs of customers. I'll surely encourage my friends to try this company!";
          customer_text.style.color="Blue";
          images[index].classList.add("customer_js");
        }
        if(index+1===4){
          customer_name.textContent = "Cristina jamis";
          job_description.textContent = "Account Manager - Microsoft";
          customer_text.textContent="This company offers excellent tours. My family and I had an enjoyable experience! The team is professional and takes good care of their clients. I would highly recommend this company to my friends!";
          customer_text.style.color="yellow";
          images[index].classList.add("customer_js");
        }
        if(index+1===5){
          customer_name.textContent = "Dena goarge ";
          job_description.textContent = "Electrical Engineer";
          customer_text.textContent="The tours on this platform are top-notch. I had a great experience with my family! The team is very skilled and customer-oriented. I will definitely advise my friends to book with this company!";
          customer_text.style.color="black";
          images[index].classList.add("customer_js");
        }
      
    })
});



//الإنتقال بين الصفحات
let currentPage = 1;
const pages = ["index.html", "list.html", "details.html", "index.html"]; // ترتيب الصفحات
const button = document.getElementById("navigateButton");

button.addEventListener("click", function() {
    currentPage = (currentPage % 4) + 1; // الانتقال إلى الرقم التالي
    button.textContent = currentPage; // تحديث الرقم داخل الزر
    window.location.href = pages[currentPage - 1]; // تحميل الصفحة المناسبة
});

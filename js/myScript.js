

//Переход на другую страницу
function goToPage(url) {
    // var url = "index.html";
    window.open(url, url).focus();
    // document.location.href = "http://www.figma.com";
}


//Переход на helpDiv с Pets
// function goToPageHelp(){
//     goToPage('index.html');
//     document.getElementById("m3").click();

// }


//Переход по якорной ссылке

// function scrollTo(has) {
//     location.href = "#" + has;
// }

function menuTarget1() {
    document.getElementById("m3").style.borderBottom = "none";
    document.getElementById("s3").style.color = "#CDCDCD";
    document.getElementById("m4").style.borderBottom = "none";
    document.getElementById("s4").style.color = "#CDCDCD";
}
function menuTarget2() {
    document.getElementById("m1").style.borderBottom = "none";
    document.getElementById("s1").style.color = "#CDCDCD";
    document.getElementById("m3").style.borderBottom = "none";
    document.getElementById("s3").style.color = "#CDCDCD";
    document.getElementById("m4").style.borderBottom = "none";
    document.getElementById("s4").style.color = "#CDCDCD";
}
function menuTarget3() {
    document.getElementById("m1").style.borderBottom = "none";
    document.getElementById("s1").style.color = "#CDCDCD";
    document.getElementById('m3').style.borderBottom = "#F1CDB3 3px solid";
    document.getElementById('s3').style.color = "white";
    document.getElementById("m4").style.borderBottom = "none";
    document.getElementById("s4").style.color = "#CDCDCD";
}
function menuTarget4() {
    document.getElementById("m1").style.borderBottom = "none";
    document.getElementById("s1").style.color = "#CDCDCD";
    document.getElementById('m4').style.borderBottom = "#F1CDB3 3px solid";
    document.getElementById('s4').style.color = "white";
    document.getElementById("m3").style.borderBottom = "none";
    document.getElementById("s3").style.color = "#CDCDCD";
}


function menu2Target1() {
    document.getElementById("m3").style.borderBottom = "none";
    document.getElementById("s3").style.color = "#545454";
    document.getElementById("m4").style.borderBottom = "none";
    document.getElementById("s4").style.color = "#545454";
}

function menu2Target3() {
    document.getElementById('m3').style.borderBottom = "#F1CDB3 3px solid";
    document.getElementById('s3').style.color = "#292929";
    document.getElementById("m4").style.borderBottom = "none";
    document.getElementById("s4").style.color = "#545454";
}
function menu2Target4() {
    document.getElementById('m4').style.borderBottom = "#F1CDB3 3px solid";
    document.getElementById('s4').style.color = "#292929";
    document.getElementById("m3").style.borderBottom = "none";
    document.getElementById("s3").style.color = "#545454";
}


window.onload = function () {

    if (window.jQuery) {
        // jQuery подключен к странице
        console.log('jQuery подключен к странице')
    } else {
        // jQuery не подключен к странице
        console.log('jQuery не подключен к странице')
    }



}

//Плавная прокрутка
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const blockID = anchor.getAttribute('href');

//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

//Плавная прокрутка jQuery

// $('.scroll-to a').on('click', function() {

//     let href = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 800,   // по умолчанию «400» 
//         easing: "linear" // по умолчанию «swing» 
//     });

//     return false;
// });


$("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});
var button =document.querySelector('.menu-button');
button.addEventListener('click', () => {
        document.querySelector('nav div.pp').classList.toggle('show');
        for(i=0;i<button.children.length;i++){
                button.children[i].classList.toggle('toggle');
        }       
});


var currentImage = 1;

var dotContainer = document.querySelector(".dot-container");
dotContainer.addEventListener("click",()=>{
    if(event.target.classList.contains('dot')){
        var index = Array.prototype.indexOf.call(dotContainer.children, event.target);
        currentImage = index +1;
        showImage(index+1);
}
})


function showImage(index){
    var t = document.querySelector('#tiles-container').children;
        var dots = document.getElementsByClassName("dot");
        for(i=0;i<5;i++){
                t[i].style.display="none";
                dots[i].className = dots[i].className.replace("active","");
        }
        t[currentImage-1].style.display="block";
        dots[currentImage-1].classList.toggle("active");
}

showImage(currentImage);

var searchIcon = document.getElementsByClassName("searchIcon")[0];
searchIcon.addEventListener("click",() => {
    document.querySelector(".searchModal").classList.toggle("active");
    console.log("aa");
});

var searchModalClose = document.getElementsByClassName("search-close")[0];
searchModalClose.addEventListener("click",() => {
    document.querySelector(".searchModal").classList.toggle("active");
    console.log("aa");
});
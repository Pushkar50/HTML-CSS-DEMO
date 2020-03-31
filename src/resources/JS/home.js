var button =document.querySelector('.menu-button');
button.addEventListener('click', () => {
        document.querySelector('nav div.pp').classList.toggle('show');
        for(i=0;i<button.children.length;i++){
                button.children[i].classList.toggle('toggle');
        }       
}
);



var currentImage =1
var s = document.querySelector('.slider .next');
s.addEventListener('click', () => {
        currentImage = currentImage +1;
        if(currentImage > 3){
                currentImage = 1;
        }
        showImage(currentImage);
});

var dotContainer = document.querySelector(".dotContainer");
        dotContainer.addEventListener('click', (event)=>{
                if(event.target.classList.contains('dot')){
                        var index = Array.prototype.indexOf.call(dotContainer.children, event.target);
                        currentImage = index +1;
                        showImage(index+1);
                }
        })
var s1 = document.querySelector('.slider .last');
s1.addEventListener('click', () => {
        currentImage = currentImage -1;
        if(currentImage < 1 ){
                currentImage = 3;
        }
        showImage(currentImage);
})

function showImage(n){
        var t = document.querySelector('.slider').children;
        var dots = document.getElementsByClassName("dot");
        for(i=0;i<3;i++){
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
      
        


        
        
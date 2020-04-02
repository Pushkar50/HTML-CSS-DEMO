
import '../scss/blog.scss';

var button =document.querySelector('.menu-button');
button.addEventListener('click', () => {
	document.querySelector('nav div.pp').classList.toggle('show');
	for(var i=0; i<button.children.length; i+=1){
		button.children[i].classList.toggle('toggle');
	}       
});


const showImage = function (){
	var t = document.querySelector('.image-container').children;
	var dots = document.getElementsByClassName('dot');
	for(var i=0; i<3; i+=1){
		t[i].style.display='none';
		dots[i].className = dots[i].className.replace('active','');
	}
	t[currentImage-1].style.display='block';
	dots[currentImage-1].classList.toggle('active');
};
var currentImage = 1;

var dotContainer = document.querySelector('.dot-container');
dotContainer.addEventListener('click',()=>{
	if(window.event.target.classList.contains('dot')){
		var index = Array.prototype.indexOf.call(dotContainer.children, window.event.target);
		currentImage = index +1;
		showImage(index+1);
	}
});


showImage(currentImage);

var searchIcon = document.getElementsByClassName('searchIcon')[0];
searchIcon.addEventListener('click',() => {
	document.querySelector('.searchModal').classList.toggle('active');
});

var searchModalClose = document.getElementsByClassName('search-close')[0];
searchModalClose.addEventListener('click',() => {
	document.querySelector('.searchModal').classList.toggle('active');

});
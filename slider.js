let currentSlidesIndex=0

//function to show active slide
function showSlide(index){
    const slides=document.getElementsByClassName("carousel-slide")
    console.log(slides);
    const dots=document.getElementsByClassName("dot")
    
 
    //handling edge cases
        if(index >= slides.length)
        {
           currentSlidesIndex=0;
        }
        else if(index < 0){
          currentSlidesIndex=slides.length-1   
        }

        //hide all slides before showing the active one
        for(let i=0;i<slides.length;i++){
            slides[i].style.display="none";
        }

        //remove all active class from dots
        for(let i=0; i<dots.length;i++)
        {
            dots[i].className=dots[i].className.replace("dot-active", "");
        }
        slides[currentSlidesIndex].style.display="block"
        dots[currentSlidesIndex].className +=" dot-active"

}
//function to change slide
function changeSlide(n){
    showSlide((currentSlidesIndex += n))
}

// function to jump to specific slide
function currentSlide(n){
    showSlide((currentSlidesIndex = n));
}
//initial display setup
showSlide(currentSlidesIndex)
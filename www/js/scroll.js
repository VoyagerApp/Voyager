var ypos = window.pageYOffset;
var scrollAmmount = 0;
    function Scroll(){
      var animate = document.getElementById('SearchButton');
      if(ypos > 20) {
        animate.style.right = "-5vh";
      }      
      else if (ypos <= 20){
        animate.style.right = "2.5vh";
      }
      ypos = window.pageYOffset;
      }
window.addEventListener("scroll",Scroll);
      
            
  
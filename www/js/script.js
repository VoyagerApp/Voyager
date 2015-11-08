var ypos = window.pageYOffset;
var scrollAmmount = 0;
		function Scroll(){
			var object = document.getElementById('SearchButton');
			var ypos2 = window.pageYOffset;
			if(ypos2 > ypos) {
					object.style.margin = "-69px 0px 0px 0px";
			}	
			else{
				object.style.margin = "0px 0px 0px 0px";
			}
			ypos = window.pageYOffset;
			}
			window.addEventListener("scroll",Scroll);

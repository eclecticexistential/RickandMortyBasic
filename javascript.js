document.getElementById("upload").value;

var slideIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block";
	setTimeout(carousel, 3000); // Change image every 3 seconds
	};

function stop(){		
		var $overlay =$('<div id="overlay"></div>');
		var $image = $("<img>");
		var $caption = $("<p></p>");
		//Add image to overlay
		$overlay.append($image);
		//Add caption to overlay
		$overlay.append($caption);
		//Add overlay
		$("#imageGallery").append($overlay);

		//Capture the click event on a link to an image
		$("#imageGallery a").click(function(event){
			event.preventDefault();
			var imageLocation=$(this).attr("href");
			//update overlay with thte image linked to the link
			$image.attr("src",imageLocation);
			//Show the overlay
			$overlay.show();
			
			//Get Child's alt attribute and set caption
			var captionText=$(this).children("img").attr("alt");
			$caption.text(captionText);
		});

		//When overlay is clicked
		$overlay.click(function(){
			//Hide the overlay
			$overlay.hide();
		});
}
carousel();
stop();
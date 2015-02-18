jQuery(document).ready(function($){

//clickin on popular list:
	$('li').on('click', function() {

			// clear out results container
			$('#instafeed').html('');

			var getLocationID = $(this).data('location');

			// console.log(getLocationID);

			getInstaFeed(getLocationID);
	})

//searching in <input> box: 

	//when the user hits 'enter' we create a event. preventDefault stops the page reloading
	$('form').submit( function(event) { 
		event.preventDefault();

		// clear out results container
		$('#instafeed').html('');

		//create a variable which takes all the <li> within the <ul> therefore creating an array
		var places = $(".places li");

		//the below is a for loop which starts at 0 and works through 1 by one
		for (i = 0; i < places.length; i++){

			//create a variable which take the value the user inputs
			var inputLocation = $("#location-search").val();

			//create two variable which take the 'name' and 'location' from the array abover
 			var dataName = $(places[i]).data("name");
			var dataLoc = $(places[i]).data("location");

			// console.log(dataName, dataLoc);

			//compare the 
			if (inputLocation === dataName) {

				// console.log("this will work");
				getInstaFeed(dataLoc);
				break;

				}

			else {
				alert("No Location Found");
			}	
			
		}


});
	

//instfeed.js script		
function getInstaFeed (locationID) { 

	    var resortSelected = new Instafeed({
    		get: 'location',
	        locationId: locationID,
	        sortBy: 'most-recent',
	        limit: 12,
	        resolution: 'low_resolution',
	        clientId: 'b6c4b0d93b8346e28dd13c06f5d34282',
	        template: '<div class="instaImgContainer"><a class="instaImg" href="{{link}}"><img src="{{image}}" /></a><p class="instaLocation">{{location}}</p><p class="insta-date">{{model.created_time}}</p><p class="instaLikes">{{likes}}</p><span id="insta-heart" class="icon-heart"></span></div>',
		   	filter: function(image) {
 
			var date = new Date(image.created_time*1000);
	 
			m = date.getMonth();
			d = date.getDate();
			y = date.getFullYear();
	 
			var month_names = new Array ( );
			month_names[month_names.length] = "Jan";
			month_names[month_names.length] = "Feb";
			month_names[month_names.length] = "Mar";
			month_names[month_names.length] = "Apr";
			month_names[month_names.length] = "May";
			month_names[month_names.length] = "Jun";
			month_names[month_names.length] = "Jul";
			month_names[month_names.length] = "Aug";
			month_names[month_names.length] = "Sep";
			month_names[month_names.length] = "Oct";
			month_names[month_names.length] = "Nov";
			month_names[month_names.length] = "Dec";
	 
			var thetime = month_names[m] + ' ' + d + ' ' + y;
	 
			image.created_time = thetime;
	 
			return true;
				}
		    });

		    resortSelected.run();

		};

//fade search box in and out 

var searchWrapper = $('#search-nav-wrapper'),
    extra = 280; // In case you want to trigger it a bit sooner than exactly at the bottom.

searchWrapper.css({ opacity: '0', display: 'block' });

$(window).scroll(function() {

   var scrolledLength = ( $(window).height() + extra ) + $(window).scrollTop(),
       documentHeight = $(document).height();


    console.log( 'Scroll length: ' + scrolledLength + ' Document height: ' + documentHeight )


   if( scrolledLength >= documentHeight ) {

       searchWrapper
          .addClass('nav-search-wrapper')
          .stop().animate({ bottom: '0', opacity: '1' }, 300);

   }
   else if ( scrolledLength <= documentHeight && searchWrapper.hasClass('nav-search-wrapper') ) {           
        searchWrapper
           .removeClass('bottom')
           .stop().animate({ bottom: '-100', opacity: '0' }, 300);

   }
});


//bottom 'aboutButton' 
	$("#storyButton").click(toggleStory);

	$("#story").hide();

	function toggleStory() {
		$("#story").slideToggle();
			}


});


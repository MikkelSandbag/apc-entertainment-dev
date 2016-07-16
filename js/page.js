/***** Begin calendar config *****/
var ww = window.innerWidth;
var view;
var getWindowWidth = function() {
  return window.innerWidth;
};
var getView = function() {
   return (ww < 768) ? 'basicWeek' : 'month';
};
  
$(document).ready(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyCWrRvtyHqWOJ3M0_irYnO1wBJvZPsoQyE',
    events: {
      googleCalendarId: 'apcentertainment@outlook.com',
      className: 'apc-ent-event',
      backgroundColor: '#ff7d7d',
      borderColor: 'transparent'
    },
    eventRender: function(event, element) {
      element.attr('href', '/');
    },
    eventClick: function(event) {
      if (event.url) {
        return false;
      }
    },
    header: {
    	left: 'prev',
    	center: 'title',
    	right: 'next'
    },
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesShort: ['U', 'M', 'T', 'W', 'R', 'F', 'S'],
    views: {
      basicWeek: {
        columnFormat: 'ddd'
      },
      month: {
        columnFormat: 'dddd'
      }
    },
    defaultView: getView(),
    aspectRatio: function() {
      if (getWindowWidth() < 768) {
        return 2;
      } else {
        return 1;
      }
    },
    windowResize: function(view) {
      ww = getWindowWidth();
      view = getView();
      var currentView = $('#calendar').fullCalendar('getView');
      if(view != currentView){
        $('#calendar').fullCalendar('changeView', view);
      }
    },
    dayClick: function(date, jsEvent, view) {
      $('#booking .ctaButtonInnerWrapper a').click();
      $('#eventDay').val(date.format());
    }
  });
});
/***** End calendar config *****/

/***** Begin mobile nav menu *****/
$('.mobileMenuButton').click(function() {
	$(this).next('.navInnerWrapper').toggleClass('show');
});
/* If window gets above mobile size, remove 'show' class */
$(window).resize(function() {
	if (window.innerWidth > 525) {
		$('.navInnerWrapper').removeClass('show');
	}
});
/* If user selects nav item, close menu */
$('.navItem a').click(function() {
	$('.navInnerWrapper').removeClass('show');
});
/***** End mobile nav menu *****/

/***** Begin booking form *****/
$('#booking .ctaButtonInnerWrapper a').click(function(e) {
	e.preventDefault();

	$('#bookingFormAnchor').addClass('showPopup');
});

$('#eventForm button').addClass('disabled').attr('disabled', true);

$('.eventFormSection input, .eventFormSection textarea').blur(function(event) {
	var custNameRegEx = /^[a-z\ \.\']+$/i;
	var custEmailRegEx = /[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/;
	var custPhoneRegEx = /^[0-9\ \(\)\-\+\.\/]+$/;
	var custAddressRegEx = /^[0-9a-z\ \-\#\(\)\.]+$/i;
	var custCityStateRegEx = /^[a-z\ ]+$/i;
	var custZipRegEx = /^[0-9]+$/;
	var eventDescRegEx = /^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/i;
	var eventDayRegEx = /^[0-9\-]+$/;
	var eventTimeRegEx = /^[0-9a-z\:]+$/i;
	var eventLocationRegEx = /^[0-9a-z\ \-\#\(\)\.\,]+$/i;
	var eventNotesRegEx = /^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/im;

	if ($(this).attr('id') === 'custName') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').addClass('error blankError').removeClass('inputError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else if (custNameRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'custEmail') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').addClass('error blankError').removeClass('inputError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else if (custEmailRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'custPhone') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (custPhoneRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'custAddress-line1' || $(this).attr('id') === 'custAddress-line2') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (custAddressRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'custCity' || $(this).attr('id') === 'custState') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (custCityStateRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'custZip') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (custZipRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'eventDesc') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (eventDescRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'eventDay') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').addClass('error blankError').removeClass('inputError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else if (eventDayRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'eventTimeStart') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (eventTimeRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'eventTimeEnd') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (eventTimeRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'eventLocation') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (eventLocationRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'eventNotes') {
		if ($(this).val().length === 0) {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		} else if (eventNotesRegEx.test($(this).val()) === false) {
			$(this).closest('.eventFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitEventSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.eventFormSection').removeClass('error inputError blankError');
		}
	}

	if (!($('#eventForm').hasClass('error')) && ($('#custName').val() !== '' && $('#custEmail').val() !== '' && $('#eventDay').val() !== '')) {
		$('#submitEventSection button').removeClass('disabled').attr('disabled', false);
	}
});
/***** End booking form *****/

/***** Begin contact form verify *****/
$('#submitContactSection button').addClass('disabled').attr('disabled', true);

$('.contactFormSection input, .contactFormSection textarea').blur(function(event) {
	var nameRegEx = /^[a-z\ \.\']+$/i;
	var emailRegEx = /[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/;
	var subjectRegEx = /^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/i;
	var messageRegEx = /^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/im;

	if ($(this).attr('id') === 'name') {
		if ($(this).val().length === 0) {
			$(this).closest('.contactFormSection').addClass('error blankError').removeClass('inputError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else if (nameRegEx.test($(this).val()) === false) {
			$(this).closest('.contactFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.contactFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'email') {
		if ($(this).val().length === 0) {
			$(this).closest('.contactFormSection').addClass('error blankError').removeClass('inputError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else if (emailRegEx.test($(this).val()) === false) {
			$(this).closest('.contactFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.contactFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'subject') {
		if ($(this).val().length === 0) {
			$(this).closest('.contactFormSection').addClass('error blankError').removeClass('inputError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else if (subjectRegEx.test($(this).val()) === false) {
			$(this).closest('.contactFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.contactFormSection').removeClass('error inputError blankError');
		}
	}

	if ($(this).attr('id') === 'body') {
		if ($(this).val().length === 0) {
			$(this).closest('.contactFormSection').addClass('error blankError').removeClass('inputError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else if (subjectRegEx.test($(this).val()) === false) {
			$(this).closest('.contactFormSection').addClass('error inputError').removeClass('blankError');
			$('#submitContactSection button').addClass('disabled').attr('disabled', true);
		} else {
			$(this).closest('.contactFormSection').removeClass('error inputError blankError');
		}
	}

	if (!($('.contactFormSection').hasClass('error')) && ($('#name').val() !== '' && $('#email').val() !== '' && $('#subject').val() !== '' && $('#message').val() !== '')) {
		$('#submitContactSection button').removeClass('disabled').attr('disabled', false);
	}
});
/***** End contact form verify *****/

/***** Begin price calculator *****/
var price = 1100;
var basePrice = 1100;
var addHour = 200;
var projectorPrice = 350;
var ceremonyAudioPrice = 250;
var uplightingPrice = 250;
var danceLightingPrice = 50;
var counter = 0;

var updateCounter = function() {
	parseInt($('.value').text(counter));
};
var increasePrice = function(feature) {
	price += feature;
	$('.finalPriceAmount').html($.formatNumber(price, {format:"#,###", locale: "us"}));
	$('.depositAmount').html($.formatNumber(price/2, {format:"#,###", locale: "us"}));
};
var decreasePrice = function(feature) {
	price -= feature;
	$('.finalPriceAmount').html($.formatNumber(price, {format:"#,###", locale: "us"}));
	$('.depositAmount').html($.formatNumber(price/2, {format:"#,###", locale: "us"}));
};

$('.subtract').click(function() {
	if (counter != 0) {
		counter--;
		updateCounter();
		decreasePrice(addHour);
	} else if (counter === 0) {
		return;
	}
});

$('.add').click(function() {
	counter++;
	updateCounter();
	increasePrice(addHour);
});

$('.addOnGroup').click(function() {
	if ($(this).find('span.fa-check-square-o').hasClass('hide')) {
		$(this).toggleClass('selected').find('span.fa').toggleClass('hide');

		if ($(this).attr('id') === 'addOn-projector') {
			increasePrice(projectorPrice);
		} else if ($(this).attr('id') === 'addOn-ceremonyAudio') {
			increasePrice(ceremonyAudioPrice);
		} else if ($(this).attr('id') === 'addOn-uplighting') {
			increasePrice(uplightingPrice);
		} else if ($(this).attr('id') === 'addOn-danceLighting') {
			increasePrice(danceLightingPrice);
		}
	} else {
		$(this).toggleClass('selected').find('span.fa').toggleClass('hide');
		
		if ($(this).attr('id') === 'addOn-projector') {
			decreasePrice(projectorPrice);
		} else if ($(this).attr('id') === 'addOn-ceremonyAudio') {
			decreasePrice(ceremonyAudioPrice);
		} else if ($(this).attr('id') === 'addOn-uplighting') {
			decreasePrice(uplightingPrice);
		} else if ($(this).attr('id') === 'addOn-danceLighting') {
			decreasePrice(danceLightingPrice);
		}
	}
});
/***** End price calculator *****/

/***** Init page *****/
window.onload = function() {
	$('body').removeClass('loading');
	$('#bookingFormAnchor').removeClass('showPopup');
}
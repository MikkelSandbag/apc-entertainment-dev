/***** Begin icon animation *****/
var heroHeight = $('.splashSection').height();
$(window).resize(function() {
	heroHeight = $('.splashSection').height();
});

// $(window).scroll(function() {
// 	if ($(window).scrollTop() <= heroHeight) {	
// 		if ($(window).scrollTop() === 0) {
// 			$('#Headphones', $('#homeIcon')[0].contentDocument)
// 				.css('transform', 'rotate(0deg)');

// 				$('#homeIcon').css('left', 0);

// 			$('#apc-icon > g:not(#Headphones)', $('#homeIcon')[0].contentDocument)
// 				.css('opacity', '1');
// 		} else if ($(window).scrollTop() > heroHeight - 20) {
// 			$('#Headphones', $('#homeIcon')[0].contentDocument)
// 				.css('transform', 'rotate(90deg)');

// 			$('#homeIcon').css({'left': -20, 'top': 7});

// 			$('#apc-icon > g:not(#Headphones)', $('#homeIcon')[0].contentDocument)
// 				.css('opacity', '0');
// 		} else {
// 			$('#Headphones', $('#homeIcon')[0].contentDocument)
// 				.css('transform', 'rotate(' + $(window).scrollTop() / (heroHeight / 90) + 'deg)');

// 			$('#homeIcon').css({'left': $(window).scrollTop() / (heroHeight / -20), 'top': $(window).scrollTop() / (heroHeight / 7)});

// 			$('#apc-icon > g:not(#Headphones)', $('#homeIcon')[0].contentDocument)
// 				.css('opacity', 1 - $(window).scrollTop()/heroHeight);
// 		}
// 	}
// });
/***** End icon animation *****/

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

	$('body, .bookingPopupOverlay, .bookingPopupOuterWrapper').toggleClass('showPopup');
});

$('.bookingPopupOverlay').click(function() {
	$('body, .bookingPopupOverlay, .bookingPopupOuterWrapper').toggleClass('showPopup');
});

$('.bookingPopupOuterWrapper .closeButton').click(function() {
 	$('body, .bookingPopupOverlay, .bookingPopupOuterWrapper').toggleClass('showPopup');
});

$(document).on('keyup', function(e) {
	if (e.keyCode === 27) {
		$('body, .bookingPopupOverlay, .bookingPopupOuterWrapper').removeClass('showPopup');
	}
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

/***** Begin calendar display adjustments *****/

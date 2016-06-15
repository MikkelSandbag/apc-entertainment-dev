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
			console.log('we have a valid form folks!');
			$('#submitContactSection button').removeClass('disabled').attr('disabled', false);
		}
	});
/***** End contact form verify *****/
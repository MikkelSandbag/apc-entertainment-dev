$(document).ready(function() {
	$('#submitContactSection button').addClass('disabled');

	$('.contactFormSection input, .contactFormSection textarea').blur(function(event) {
		var emailRegEx = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/g;
		var charRegEx = /^([a-zA-Z0-9 ])\w+$/g;

		if ($(this).attr('id') === 'name' || $(this).attr('id') === 'subject' || $(this).attr('id') === 'message') {
			if (charRegEx.test($(this).val()) === false || $(this).val().length < 2) {
				$(this).closest('.contactFormSection').addClass('error');
				$('#submitContactSection button').addClass('disabled').attr('disabled', true);
			} else {
				$(this).closest('.contactFormSection').removeClass('error');
			}
		}

		if ($(this).attr('id') === 'email') {
			if (emailRegEx.test($(this).val()) === false) {
				$(this).closest('.contactFormSection').addClass('error');
				$('#submitContactSection button').addClass('disabled').attr('disabled', true);
			} else {
				$(this).closest('.contactFormSection').removeClass('error');
			}
		}

		if (!($('.contactFormSection').hasClass('error')) && ($('#name').val() !== '' && $('#email').val() !== '' && $('#subject').val() !== '' && $('#message').val() !== '')) {
			console.log('we have a valid form folks!');
			$('#submitContactSection button').removeClass('disabled').attr('disabled', false);
		}
	});
});
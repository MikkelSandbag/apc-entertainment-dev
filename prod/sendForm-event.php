<html>
<head>
	<!-- Place these first -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Page title (mandatory) -->
	<title>Thank you for contacting APC Entertainment</title>

	<!-- main styles - master override -->
	<link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />

	<!-- favicon -->
	<link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="images/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
	<link rel="manifest" href="images/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
</head>
<body>
	<nav class="navOuterWrapper">
		<a href="./" class="homeLink"><img src="images/apc-icon.svg" id="homeIcon" alt="APC Entertainment Icon"></a>
	</nav>

	<div class="messageWrapper">
		<?php 
			$recipient = 'admin@mikkelsandberg.com';
			$custName = $_POST['custName'];
			$custEmail = $_POST['custEmail'];
			$custPhone = $_POST['custPhone'];
			$custAddressLine1 = $_POST['custAddress-line1'];
			$custAddressLine2 = $_POST['custAddress-line2'];
			$custCity = $_POST['custCity'];
			$custState = $_POST['custState'];
			$custZip = $_POST['custZip'];
			$eventDesc = $_POST['eventDesc'];
			$eventDay = $_POST['eventDay'];
			$eventTimeStart = $_POST['eventTimeStart'];
			$eventTimeEnd = $_POST['eventTimeEnd'];
			$eventLocation = $_POST['eventLocation'];
			$eventNotes = $_POST['eventNotes'];
			// For errors and confirmation message
			$messages = array();

			$subject = '';
			if($eventDesc !== '') {
				$subject = $eventDesc . ' on ' . $eventDay;
			} else {
				$subject = 'Event for ' . $eventDay;
			};

			$body = '';
			$body .= "Name: " . $custName .  "\r\n" . "Email: " . $custEmail . "\r\n" . "Phone: " . $custPhone . "\r\n" . "Address: " . $custAddressLine1 . "\r\n" . "Address: " . $custAddressLine2 . "\r\n" . "City: " . $custCity . "\r\n" . "State: " . $custState . "\r\n" . "Zip: " . $custZip . "\r\n" . "Event Description: " . $eventDesc . "\r\n" . "Event Day: " . $eventDay . "\r\n" . "Event Time Start: " . $eventTimeStart . "\r\n" . "Event Time End: " . $eventTimeEnd . "\r\n" . "Event Location: " . $eventLocation . "\r\n" . "Event Notes: " . $eventNotes;
			$body = wordwrap($body, 70, "\r\n");

			$headers = "From: " . $custName . "<" . $custEmail . ">\r\n" . "Reply-To: $custName <$custEmail>\r\n";

			if (!preg_match('/^[a-z\ \.\']+$/i', $custName)) {
				$messages[] = "Name: Only alphabetical letters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/', $custEmail)) {
				$messages[] = "Email: Please make sure you entered an email in the proper format (i.e. myemail@example.com). Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9\ \(\)\-\+\.\/]+$/', $custPhone) && $custPhone !== '') {
				$messages[] = "Phone Number: Only numbers and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9a-z\ \-\#\(\)\.]+$/i', $custAddressLine1) && $custAddressLine1 !== '') {
				$messages[] = "Address Line 1: Only alphanumeric letters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9a-z\ \-\#\(\)\.]+$/i', $custAddressLine2) && $custAddressLine2 !== '') {
				$messages[] = "Address Line 2: Only alphanumeric letters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[a-z\ ]+$/i', $custCity) && $custCity !== '') {
				$messages[] = "City: Only alphabetical letters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[a-z]+$/i', $custState) && $custState !== '') {
				$messages[] = "State: Only two alphabetical letters are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9]+$/', $custZip) && $custZip !== '') {
				$messages[] = "Zip Code: Only numbers are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/i', $eventDesc) && $eventDesc !== '') {
				$messages[] = "Event Description: Only alphabetical letters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9\-]+$/', $eventDay) && $eventDay !== '') {
				$messages[] = "Event Day: Only numbers and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9a-z\:]+$/i', $eventTimeStart) && $eventTimeStart !== '') {
				$messages[] = "Event Start Time: Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9a-z\:]+$/i', $eventTimeEnd) && $eventTimeEnd !== '') {
				$messages[] = "Event End Time: Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[0-9a-z\ \-\#\(\)\.\,]+$/i', $eventLocation) && $eventLocation !== '') {
				$messages[] = "Event Location: Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (!preg_match('/^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/im', $eventNotes) && $eventNotes !== '') {
				$messages[] = "Additional Notes: Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			if (count($messages)) {
		    // There were problems, so tell the user and
		    // don't send the message yet
		    foreach ($messages as $message) {
		      echo("<p>$message</p>\n");
		    }
		    echo("<p>Click the back button and correct the problems. Then send your message again.</p>");
		  } else {
		    // Send the email - we're done
				mail($recipient,
					$subject,
					$body,
					$headers); 
		    echo("<p>Your message has been sent. Thank you!</p>\n".
		    	"<p>Click <a href='./'>here</a> to go back to the site.</p>");
		  }
		?>
	</div>

	<footer class="formPageFooter">
		<p class="copyright">APC Entertainment &copy; 2016 All rights reserved</p>
		<p class="byline">Site designed by <a href="http://mikkelsandberg.com" target="_blank">Mikkel Sandberg</a></p>
	</footer>

	<script src="https://use.typekit.net/hqg4hfr.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
</body>
</html>
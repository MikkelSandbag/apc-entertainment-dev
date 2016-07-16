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
			$name = $_POST['name'];
			$email = $_POST['email'];
			$subject = $_POST['subject'];
			$body = $_POST['body'];
			// For errors and confirmation message
			$messages = array();

			// Allow names with limited punctuation
			if (!preg_match('/^[a-z\ \.\']+$/i', $name)) {
				$messages[] = "Name: Only alphabetical letters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			// Allow only valid emails
			if (!preg_match('/[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/', $email)) {
				$messages[] = "Email: Please make sure you entered an email in the proper format (i.e. myemail@example.com). Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			// CAREFUL: don't allow hackers to sneak line breaks and additional headers into the message and trick us into spamming for them!
			$subject = preg_replace('/\s+/', ' ', $subject);
			// Make sure the subject isn't blank afterwards!
			if (!preg_match('/^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/i', $subject)) {
				$messages[] = "Subject: Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			// Make sure the message has a body
			if (!preg_match('/^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/im', $body)) {
				$messages[] = "Message: Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience."; 
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
		      "From: $name <$email>\r\n" .
		      "Reply-To: $name <$email>\r\n"); 
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
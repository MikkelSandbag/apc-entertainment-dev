<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Thank you for contacting APC Entertainment</title>

	<!-- main styles - master override -->
	<link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
</head>
<body>
	<nav class="navOuterWrapper">
		<a href="../" class="homeLink"><img src="images/apc-icon.svg" id="homeIcon" alt="APC Entertainment Icon"></a>
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
				$messages[] = "Only alphabetical letters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			// Allow only valid emails
			if (!preg_match('/[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/', $email)) {
				$messages[] = "Please make sure you entered an email in the proper format (i.e. myemail@example.com). Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			// CAREFUL: don't allow hackers to sneak line breaks and additional headers into the message and trick us into spamming for them!
			$subject = preg_replace('/\s+/', ' ', $subject);
			// Make sure the subject isn't blank afterwards!
			if (!preg_match('/^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/i', $subject)) {
				$messages[] = "Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience.";
			}

			// Make sure the message has a body
			if (!preg_match('/^[a-z0-9\ \!\@\#\$\%\&\*\(\)\-\_\+\=\,\.\?\/\;\:\'\"]+$/im', $body)) {
				$messages[] = "Only alphanumeric characters and limited punctuation are allowed. Sorry for the inconvenience."; 
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
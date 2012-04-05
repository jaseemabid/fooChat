<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="description" content="fooChat" />
		<meta name="author" content="Jaseem Abid" />
		<title>fooChat</title>

		<!-- Less styles -->
		<link rel="stylesheet" href="static/css/bootstrap.min.css" />
		<link rel="stylesheet/less" type="text/css" href="static/css/style.less">
	</head>
	<body>

		<script id="template-contact" type="text/template">
			<a href="#"><img class="avatar" src="http://www.gravatar.com/avatar/{hash}" />
			<span class="name">{fullName}</span></a>
		</script>

		<script id="template-message" type="text/template">
			<time class="timeago" datetime="{timestamp}">{timestamp}</time><div class="message">{msg}</div>
			<div class="avatar"><img src="http://www.gravatar.com/avatar/{hash}" /></div>
		</script>

		<script id="template-message-self" type="text/template">
			<time class="timeago" datetime="{timestamp}">{timestamp}</time><div class="selfMessage">{msg}</div>
			<div class="selfAvatar"><img src="http://www.gravatar.com/avatar/{hash}" /></div>
		</script>

		<div class="container-fluid">

			<div class="row-fluid" id="topBar">
				<h2 class="welcome">Welcome Jaseem Abid :)</h2>
				<button class="btn pull-right"> <i class="icon-cog"></i>Settings</button>
				<button class="btn pull-right">fooBar</button>
			</div>

			<div class="row-fluid">
				<div class="span3" id="sideBar">
					<ul class="nav nav-tabs nav-stacked" id="contactsList">
					</ul>
					<form class="well form-search">
						<input type="text" id="newContact" class="input-medium search-query" placeholder="Add a new contact ">
					</form>

				</div>
				<div class="span4" id="messageBox">
					<!--Body content-->
					<textarea class="input-xlarge" id="newMessage" rows="3" ></textarea>
				</div>
			</div>
		</div>


		<script src="static/js/foochat.js"></script>
	</body>
</html>

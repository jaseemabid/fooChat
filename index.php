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
			<span class="name">{username}</span></a>
		</script>

		<script id="template-message" type="text/template">
			<time class="timeago" datetime="{timestamp}">{timestamp}</time><div class="message">{message}</div>
			<div class="avatar"><img src="http://www.gravatar.com/avatar/{hash}" /></div>
		</script>

		<script id="template-message-self" type="text/template">
			<time class="timeago" datetime="{timestamp}">{timestamp}</time><div class="selfMessage">{msg}</div>
			<div class="selfAvatar"><img src="http://www.gravatar.com/avatar/{hash}" /></div>
		</script>

		<script id="template-addContact" type="text/template">
				<input type="text" id="newContact" class="input-medium search-query" placeholder="Add a new contact ">
		</script>


<div class="navbar">
	<div class="navbar-inner">
		<div class="container">
			<a class="brand" href="#">
				Welcome {fullname}
			</a>
			<ul class="nav pull-right" id="dashBoard">
				<li class="dropdown active">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-user icon-white"></i>&nbsp;&nbsp;&nbsp;{fullname}<b class="caret"></b></a>
					<ul class="dropdown-menu">
						<img src="http://www.gravatar.com/avatar/{hash}"/>
						<ul class="userInfo" >
							<li><strong>{fullname}</strong></li>
							<li>{email}</li>
							<li>{username}</li>
						</ul>
						<li class="divider"></li>
						<li>
							<a id="signout" href="#logout">Signout</a>
							<a id="settings" href="#settings">Settings</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>

		<div class="container-fluid">

			<div class="row-fluid" id="topBar">

			</div>

			<div class="row-fluid">
				<div class="span3" id="sideBar">
					<ul class="nav nav-tabs nav-stacked" id="contactsList">
					</ul>


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

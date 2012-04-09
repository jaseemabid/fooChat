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

<script id="template-topBar" type="text/template">
	<div class=navbar-inner><div class=container><a class=brand href="#">Welcome {fullname}</a><ul class="nav pull-right" id=dashBoard><li class="dropdown active"><a href="#" class=dropdown-toggle data-toggle=dropdown><i class="icon-user icon-white"></i>&nbsp;&nbsp;&nbsp;{fullname}<b class=caret></b></a><ul class=dropdown-menu><img src="http://www.gravatar.com/avatar/{hash}"><ul class=userInfo><li><strong>{fullname}</strong></li><li>{email}</li><li>{username}</li></ul><li class=divider></li><li><a id=signout href="#logout">Signout</a><a id=settings href="#settings">Settings</a></li></ul></li></ul></div></div>
</script>

<script id="template-login" type="text/template">
<form class="well form-vertical"><div class="input-prepend">
<label>Username</label><span class="add-on"><i class="icon-user"></i></span><input class="span10" placeholder="Username">
</div><div class="input-prepend">
<label>Password</label><span class="add-on"><i class="icon-lock"></i></span><input class="span10" placeholder="Username">
</div><button type="submit" class="btn">Sign in</button></form>
</script>

		<div class="container-fluid">

			<div class="row-fluid">
				<div class="span3" id="sideBar">
					<!--Sidebar content-->
					<ul class="nav nav-tabs nav-stacked" id="contactsList">
					</ul>

				</div>
				<div class="span4" id="messageBox">
					<!--Body content-->
				</div>
			</div>
		</div>


		<script src="static/js/foochat.js"></script>
	</body>
</html>

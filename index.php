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
			<a href="#">
				<img class="avatar" src="http://www.gravatar.com/avatar/{hash}?s=30" />
				<span class="name">{fullName}</span>
			</a>
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
						<li> <a href="#">Addy singh </a> </li>
						<li> <a href="#">foo </a> </li>
						<li> <a href="#">bar </a> </li>
					</ul>
					<form class="well form-search">
						<input type="text" class="input-medium search-query" placeholder="Add a new contact ">
					</form>

				</div>
				<div class="span4" id="messageBox">
					<!--Body content-->
					<div class="well messageBox">
						<time>5 minutes ago</time>
						<div class="message">
							foobar new mesage foobar new mesage 
						</div>
						<div class="avatar">
							<img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
						</div>
					</div>


					<div class="well messageBox">
						<time>2 minutes ago</time>
						<div class="message">
							foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage foobar new mesage 
						</div>
						<div class="avatar">
							<img src="http://www.gravatar.com/avatar/3f82922e82d1a0c164a5caa909fa0ac5" />
						</div>
					</div>


					<div class="well messageBox">
						<time>few seconds ago</time>
						<div class="selfMessage">
							foobar new mesage foobar new mesage 
						</div>
						<div class="selfAvatar">
							<img src="http://www.gravatar.com/avatar/40901f06ff8e7bb58e200630c613d647" />
						</div>
					</div>


					<textarea class="input-xlarge" id="newMessage" rows="3" ></textarea>
				</div>
			</div>
		</div>


		<script src="static/js/foochat.js"></script>
	</body>
</html>

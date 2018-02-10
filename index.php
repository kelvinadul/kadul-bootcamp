<?php 
require_once('config.php');

var_dump($_POST);


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title></title>

	<link rel="shortcut icon" href="" type="image/x-icon">
	<link rel="icon" href="" type="image/x-icon">

	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/font-awesome.min.css">
	<link rel="stylesheet" href="/css/app.css">
</head>
<body>

	<div class="container" style="margin-top: 50px;">
		<div class="row justify-content-center">
			<div class="col-3">
				<form action="" method="POST">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="First Name" name="first_name">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Last Name">
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-primary">Add Details</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<script src="/js/jquery.min.js"></script>
	<script src="/js/popper.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/app.js"></script>
</body>
</html>
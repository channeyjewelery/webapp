<#import "/spring.ftl" as spring />

<!DOCTYPE html>
<html ng-app="app">
	<head>
	  	<#include 'partials/head.ftl'>
	</head>
  	<body>
		<#include 'partials/header.ftl'>
		
		<div id="page-wrapper">
			<div ui-view id="view-content">
				<h1>Welcome to dashboard</h1>
			</div>
        </div>
		
		<#include 'partials/footer.ftl'>
  	</body>
</html>

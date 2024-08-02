<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="${url.resourcesPath}/css/styles.css" />
</head>
<body>
<div id="kc-container">
    <div id="kc-container-wrapper">
        <div id="kc-header">
            <h1>Welcome</h1>
        </div>
        <form id="kc-form" action="${url.loginAction}" method="post">
            <div id="kc-form-fields">
                <input type="text" name="username" placeholder="Username" required autofocus>
                <input type="password" name="password" placeholder="Password" required>
                <input type="submit" value="Sign In">
            </div>
            <div class="kc-form-options">
                <a href="${url.registrationUrl}" class="kc-register">Register</a>
            </div>
        </form>
    </div>
</div>
</body>
</html>

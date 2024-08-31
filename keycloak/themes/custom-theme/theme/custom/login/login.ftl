<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${msg("loginTitle", realm.name)}</title>
    <link rel="stylesheet" type="text/css" href="${url.resourcesPath}/css/styles.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
<div class="navbar">
    <div class="navbar-center" onclick="goToHomepage()">${msg("title")}</div>
    <div class="navbar-right">
        <button class="mui-button purple" onclick="goToRegister()">${msg("register")}</button>
    </div>
</div>
<div id="kc-container">
    <div id="kc-container-wrapper">
        <div id="kc-header">
            <h1>${msg("loginWelcome")}</h1>
        </div>
        <form id="kc-form" action="${url.loginAction}" method="post">
            <div id="kc-form-fields">
                <input type="text" name="username" placeholder="${msg('username')}" required autofocus>
                <input type="password" name="password" placeholder="${msg('password')}" required>
                <input type="submit" value="${msg('doLogIn')}" class="mui-button purple">
            </div>
        </form>
    </div>
</div>

<script type="text/javascript">
    function goToHomepage() {
        window.location.href = 'http://localhost:3000';
    }

    function goToRegister() {
        window.location.href = '${url.registrationUrl}';
    }
</script>
</body>
</html>

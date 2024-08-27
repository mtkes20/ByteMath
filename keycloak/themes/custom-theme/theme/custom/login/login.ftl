<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${msg("loginTitle",realm.name)}</title>
    <link rel="stylesheet" type="text/css" href="${url.resourcesPath}/css/styles.css"/>
</head>
<body>
<div id="kc-container">
    <div id="kc-container-wrapper">
        <div id="kc-header">
            <h1>${msg("loginWelcome")}</h1>
        </div>
        <form id="kc-form" action="${url.loginAction}" method="post">
            <div id="kc-form-fields">
                <input type="text" name="username" placeholder="${msg('username')}" required autofocus>
                <input type="password" name="password" placeholder="${msg('password')}" required>
                <input type="submit" value="${msg('doLogIn')}">
            </div>
            <div class="kc-form-options">
                <a href="${url.registrationUrl}" class="kc-register">${msg("doRegister")}</a>
            </div>
        </form>
    </div>
</div>
</body>
</html>

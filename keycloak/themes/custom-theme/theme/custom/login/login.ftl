<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico">
    <title>${msg("loginTitle", realm.name)}</title>
    <link rel="stylesheet" type="text/css" href="${url.resourcesPath}/css/styles.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
<div class="navbar">
    <img
            src="${url.resourcesPath}/img/bytemath-logo.png"
            alt="Image"
            width="295"
            height="70"
            onclick="goToHomepage()"
            style="
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #ffffff;
        font-size: 24px;
        font-family: 'Roboto';
        cursor: pointer;
    "
    />
    <div class="navbar-right">
        <button class="mui-button purple" onclick="goToRegister()">${msg("register")}</button>
    </div>
</div>
<div id="kc-container">
    <div id="kc-container-wrapper">
        <div id="kc-header">
            <h1>${msg("loginWelcome")}</h1>
        </div>
        <#if message?has_content && (message.type != 'success')>
            <div class="alert alert-${message.type}">
                <span class="kc-feedback-text">${kcSanitize(message.summary)?no_esc}</span>
            </div>
        </#if>
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

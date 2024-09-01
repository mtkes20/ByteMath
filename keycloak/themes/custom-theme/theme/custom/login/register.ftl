<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico">
    <title>${msg("registerTitle", realm.name)}</title>
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
        <button class="mui-button purple" onclick="goToLogin()">${msg("login")}</button>
    </div>

</div>
<div id="kc-container">
    <div id="kc-container-wrapper">
        <div id="kc-header">
            <h1>${msg("loginWelcome")}</h1>
        </div>
        <form id="kc-form" action="${url.registrationAction}" method="post">
            <div id="kc-form-fields">
                <input type="text" id="firstName" name="firstName" placeholder="${msg('firstName')}"
                       value="${(register.formData.firstName!'')}" required autofocus>
                <input type="text" id="lastName" name="lastName" placeholder="${msg('lastName')}"
                       value="${(register.formData.lastName!'')}" required>
                <input type="email" id="email" name="email" placeholder="${msg('email')}"
                       value="${(register.formData.email!'')}" required>
                <#if !realm.registrationEmailAsUsername>
                    <input type="text" id="username" name="username" placeholder="${msg('username')}"
                           value="${(register.formData.username!'')}" required>
                </#if>
                <input type="password" id="password" name="password" placeholder="${msg('password')}" required>
                <input type="password" id="password-confirm" name="password-confirm"
                       placeholder="${msg('confirmPassword')}" required>
                <input type="submit" value="${msg('doRegister')}" class="mui-button purple">
            </div>
        </form>
    </div>
</div>

<script type="text/javascript">
    function goToLogin() {
        window.location.href = '${url.loginUrl}';
    }

    function goToHomepage() {
        window.location.href = 'http://localhost:3000';
    }
</script>
</body>
</html>

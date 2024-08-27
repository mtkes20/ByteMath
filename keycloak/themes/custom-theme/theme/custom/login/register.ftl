<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${msg("registerTitle", realm.name)}</title>
    <link rel="stylesheet" type="text/css" href="${url.resourcesPath}/css/styles.css" />
</head>
<body>
<div id="kc-container">
    <div id="kc-container-wrapper">
        <div id="kc-header">
            <h1>${msg("registerHeader")}</h1>
        </div>
        <form id="kc-form" action="${url.registrationAction}" method="post">
            <div id="kc-form-fields">
                <input type="text" id="firstName" name="firstName" placeholder="${msg('firstName')}" value="${(register.formData.firstName!'')}" required autofocus>
                <input type="text" id="lastName" name="lastName" placeholder="${msg('lastName')}" value="${(register.formData.lastName!'')}" required>
                <input type="email" id="email" name="email" placeholder="${msg('email')}" value="${(register.formData.email!'')}" required>
                <#if !realm.registrationEmailAsUsername>
                    <input type="text" id="username" name="username" placeholder="${msg('username')}" value="${(register.formData.username!'')}" required>
                </#if>
                <input type="password" id="password" name="password" placeholder="${msg('password')}" required>
                <input type="password" id="password-confirm" name="password-confirm" placeholder="${msg('confirmPassword')}" required>
                <input type="submit" value="${msg('doRegister')}">
            </div>
            <div class="kc-form-options">
                <a href="${url.loginUrl}" class="kc-login">${msg("backToLogin")}</a>
            </div>
        </form>
    </div>
</div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="${url.resourcesPath}/css/styles.css" />
</head>
<body>
<div id="kc-container">
    <div id="kc-container-wrapper">
        <div id="kc-header">
            <h1>Register</h1>
        </div>
        <form id="kc-form" action="${url.registrationAction}" method="post">
            <div id="kc-form-fields">
                <input type="text" id="firstName" name="firstName" placeholder="First Name" value="${(register.formData.firstName!'')}" required autofocus>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" value="${(register.formData.lastName!'')}" required>
                <input type="email" id="email" name="email" placeholder="Email" value="${(register.formData.email!'')}" required>
                <#if !realm.registrationEmailAsUsername>
                    <input type="text" id="username" name="username" placeholder="Username" value="${(register.formData.username!'')}" required>
                </#if>
                <input type="password" id="password" name="password" placeholder="Password" required>
                <input type="password" id="password-confirm" name="password-confirm" placeholder="Confirm Password" required>
                <input type="submit" value="Register">
            </div>
            <div class="kc-form-options">
                <a href="${url.loginUrl}" class="kc-login">Back to Login</a>
            </div>
        </form>
    </div>
</div>
</body>
</html>

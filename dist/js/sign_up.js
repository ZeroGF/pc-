"use strict";require(["/pc/js/config.js"],function(){require(["jquery","cookie","load"],function(t,o){var n=!0;function e(o){for(var e,t,n="";n.length<o;){var r=(e=48,t=123,Math.floor(Math.random()*(t-e))+e);(48<=r&&r<=57||65<=r&&r<=90||97<=r&&r<=122)&&(n+=r=String.fromCharCode(r))}return n}t(".phone").blur(function(){var o=t(".phone").val();""!==o&&/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(o)?(n=!0,t(".phone-info").text("✔").css("color","green")):(n=!1,t(".phone-info").text("✘"))}),t(".password").blur(function(){var o=t(".password").val();""!==o&&/^[a-z0-9_-]{6,18}$/.test(o)?(n=!0,t(".password-info").text("✔").css("color","green")):(n=!1,t(".password-info").text("✘"))}),t(".pwd").blur(function(){var o=t(this).val();o!==t(".password").val()&&(n=!1,t(".pwd-info").text("密码不一致")),""===o?(n=!1,t(".pwd-info").text("✘")):(n=!0,t(".pwd-info").text("✔").css("color","green"))}),t(".email").blur(function(){var o=t(".email").val();""!==o&&/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(o)?(n=!0,t(".email-info").text("✔").css("color","green")):(n=!1,t(".email-info").text("✘"))}),t(".code").val(e(4)),t(".code").click(function(){t(this).val(e(4))}),t(".check").blur(function(){var o=t(".check").val(),e=t(".code").val();""!==o&&o===e?(n=!0,t(".check-info").text(" ")):(n=!1,t(".check-info").text("输入错误"))}),t(".up_form :text[name='phone']").blur(function(){t.getJSON("/pc/php/check.php",{phone:t(this).val()},function(o){0===o.res_body.status?(n=!0,t(".phone-info").text("号码可用").css("color","green")):(n=!1,t(".phone-info").text("号码已被注册，请重新填写").css("color","red"))})}),t(".sign-up").submit(function(){return console.log(n),n&&(console.log("aaaa"),t.ajax({type:"post",url:"/pc/php/register.php",data:t(this).serialize(),dataType:"json",success:function(o){0===o.res_code?(console.log(o),t.cookie.json=!0,t.cookie("user",o.res_body,{path:"/"}),location="/pc/index.html"):alert("用户注册失败，请稍后重试...")}})),!1})})});
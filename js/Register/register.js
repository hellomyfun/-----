/**
 * Created by a on 2016/12/27.
 */
(function () {
    function init() {
        var registerNow = $(".registerNow");
        var status = "register";
        registerNow.click(function () {
            var userID=$("#user").val();
            var password =$("#password").val();

        new Register("http://datainfo.duapp.com/shopdata/userinfo.php",{status:status,userID:userID,password:password},$(".register"),function (result) {
            console.log(result);
            if(result == 1){
                alert("注册成功！");
                window.location.href='../html/login.html';
            }else if(result == 0){
                alert("用户名已存在请重新输入用户名！");
            }
            });

    });

    }
    init();
})();

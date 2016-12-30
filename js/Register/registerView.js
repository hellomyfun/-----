/**
 * Created by a on 2016/12/27.
 */
(function () {
    function Register(url,data,superView,callBack) {
        this.showRegister(url,data,superView,callBack);
    }
    Register.prototype = new HTTPClient();
    Register.prototype.showRegister = function (url,
        data,superView,callBack) {
        this.getJsonTo(url,data,function (result) {
            console.log(result);
            if(callBack){
                callBack(result);
            }
        });


    };
    // Register.prototype.createRegister = function (url,data,superView) {
    //
    //
    //
    // };
    window.Register = Register;
})();
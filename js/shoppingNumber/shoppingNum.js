/**
 * Created by a on 2016/12/30.
 */
(function () {
        function ShoppingNumber(url,userID,superView,callback) {
            this.superView = superView;
            this.shoppingnum(url,userID,superView,callback);
        }
    ShoppingNumber.prototype = new HTTPClient();
    ShoppingNumber.prototype.shoppingnum = function (url,userID,superView,callback) {
            this.getJsonp(url,{userID:userID},function (result) {
                console.log(result);
                if (callback){
                    callback(result);
                }

            })
        };
    window.ShoppingNumber= ShoppingNumber;
})();
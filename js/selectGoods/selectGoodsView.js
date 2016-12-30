/**
 * Created by a on 2016/12/29.
 */
(function () {
    function SelectGoods(url,data,superView,callback) {
        this.showSelectGoods(url,data,superView,callback);
    }
    SelectGoods.prototype = new HTTPClient();
    SelectGoods.prototype.showSelectGoods = function (url,data,superView,callback) {
        var self = this;
        this.getJsonp(url,data,function (result) {
            console.log(result);

            if(callback){
                callback(result);
            }
        });

    };
    window.SelectGoods = SelectGoods;
})();
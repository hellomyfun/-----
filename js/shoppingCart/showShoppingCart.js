/**
 * Created by a on 2016/12/29.
 */
(function () {
    function init() {
        var string = location.search.replace("?","");
        console.log(string);
        var mainshoppingView = $(".showshoppingView");
        new ShowShoppingView("http://datainfo.duapp.com/shopdata/getCar.php",string,mainshoppingView);
        // new ShoppingCartView("http://datainfo.duapp.com/shopdata/getGoods.php",string2[0],mainshoppingView);
        // console.log(string2[0]);
        $("#toindex").click(function () {
            window.history.back(-1);
        });
    }
    init();
})();
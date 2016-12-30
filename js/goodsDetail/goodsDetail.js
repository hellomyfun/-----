/**
 * Created by a on 2016/12/26.
 */
(function () {
    //console.log(location.search);
    var goodsID = location.search.replace("?","");
   var string= goodsID.split("&");
    new GoodsView("http://datainfo.duapp.com/shopdata/getGoods.php",string[0],$(".mainInfomationContext"));
    $("#toindex3").click(function () {
       window.history.back(-1);
    });

})();
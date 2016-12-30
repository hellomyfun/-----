/**
 * Created by a on 2016/12/29.
 */
(function () {
    /**
     * Created by a on 2016/12/21.
     */
    (function () {
        function init() {
            var navContext = $(".navContainer");
            var selectGoods2= location.search.replace("?","");
            console.log(selectGoods2);
            $("#showShoppingCart").click(function () {
                var targer = "../html/showShoppingCart.html?"+location.search.replace("?","");
                this.href = targer;
            });


            showContent("1");
            var navBar = new NavBar(" http://datainfo.duapp.com/shopdata/getclass.php",navContext,function (items) {
                $(items).each(function () {
                    var self = this;
                    this.li.click(function () {
                        //alert(self.info.classID);
                        showContent(self.info.classID);
                    });
                })
            });

            function showContent(classID) {
                new GoodsListView("http://datainfo.duapp.com/shopdata/getGoods.php",{classID:classID},$(".mainContext"));
            }
            new SelectGoods("http://datainfo.duapp.com/shopdata/selectGoodes.php",{selectText:selectGoods2},$(".mainContext"),function (result) {
                console.log(result);
                if(result == 0){
                  alert("没有商品！")
                }
                $(result).each(function () {
                    showContent(this.classID);
                });
            });
            $(".prehtml").click(function () {
                window.history.back(-1);
            });

        }
        init();
    })();
})();
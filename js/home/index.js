/**
 * Created by a on 2016/12/21.
 */
(function () {
    function init() {
        var navContext = $(".navContainer");
        var carousel = $(".Carousel");
        var user = location.search.replace("?","");
        $("#showShoppingCart").click(function () {
            var targer = "../html/showShoppingCart.html?"+location.search.replace("?","");
            this.href = targer;
        });

        $(".searchButton").click(function () {
            var selectGoods = $(".searchInput").val();
            var selectGoodshtml = decodeURI("selectGoodes.html?"+selectGoods);
            console.log(selectGoods);
            window.location.href = selectGoodshtml;
        });


        console.log(user);
        if(user){
            $(".top-container-a1").text("用户："+user);
        }else {
            $(".top-container-a1").text("登录");
        }
        if (user.length == 31){
            $(".top-container-a1").text("登录");
        }
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

      new CarouselView("http://datainfo.duapp.com/shopdata/getBanner.php",carousel,function (arr2) {
          //console.log(arr2);
          new _.CarouselView(arr2,document.querySelector(".Carousel")).showFirstPage(0);
      });

        function showContent(classID) {
            new GoodsListView("http://datainfo.duapp.com/shopdata/getGoods.php",{classID:classID},$(".mainContext"));
        }
        if (user.length == 31){
            $("#shoppingCart").html("0");
        }else {
            new ShoppingNumber("http://datainfo.duapp.com/shopdata/getCar.php",user,$("#shoppingCart"),function (result) {
                console.log(result);
                $("#shoppingCart").html(result.length);

            })
        }


    }
    init();
})();
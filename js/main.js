function scrollToElement(element){
      var accordion_offset = $(element).offset().top;
      $("html,body").animate({
        scrollTop: accordion_offset
      }, 50);
}

function jsonLoaded(response){

    $(".date").append(
      'ののいち、白山の'+response.results.collection2[0].date + '当番医です。'
    );

    var len = response.results.collection1.length;
    var WindowHeight = $(window).height();
    var j = 0;
    var k = 0;
    var cat = [];
    var cat_check = '*****';

    for (var i = 0; i < len; i++) {
      // \nは  「スペース,改行」ではなく。なぜか「文字コード160と改行」
      cat[i] = response.results.collection1[i].category.replace(" \n" , "" ) ;
      if (cat_check != cat[i]) {
        cat_check = cat[i];
        k++;
      };
    };
    var accordion_height = WindowHeight / k;
    if(k>5){
        if (accordion_height < 100) {
            accordion_height = 100;
        };
    };
    cat_check = '*****';
    for (var i = 0; i < len; i++) {
        var collection = response.results.collection1[i]
        var category = cat[i];
        if (cat_check != category) {
            j++;
            var insertElement = $('<div class="panel panel-default">' +
                              '<div class="panel-heading c'+j+'"style="height:' + accordion_height + 'px" >' + '<h4 class="panel-title">' +
                              '<a data-toggle="collapse" data-parent="#accordion" href="#'+category+ '">' +
                              category + '</a></h4></div>' +
                              '<div id="' + category + '" class="panel-collapse collapse"><div class="panel-body"><div class="' + j + '"></div></div></div></div>')

            $("#accordion").append(insertElement);
            cat_check = category;
        };
        $("."+j).append('<ul><li class="name">' + collection.name + "</li>"
          + '<li class="category">' + collection.category + "</li>"
          + '<li class="time">'+ collection.time + "</li>"
          + '<li class="tel">' + ' <a href="tel:'+ collection.tel + '"> '+ collection.tel + "</a></li>"
          + '<li class="address"><a href="http://maps.google.co.jp/maps?hl=ja&ie=UTF8&q='+collection.adress+'">'+collection.adress +"</a></li>"
          + '</ul>');
    };
    $(".panel").on("shown.bs.collapse", function() {
        scrollToElement(this)
    })

}

$.ajax({
  url:"https://www.kimonolabs.com/api/99zbfmcw?apikey=e0cab1ea62558e9f07e4d1109a9eaf59&kimmodify=1",
  crossDomain: true,
  dataType: "json",
  success: function (response) {
    jsonLoaded(response)
  },
  error: function (xhr, status) {
    alert(status)
//    local test
    var json={"name":"holiday_doctor","count":8,"frequency":"Daily","version":6,"newdata":true,"lastrunstatus":"success","thisversionstatus":"success","nextrun":"Thu Nov 12 2015 07:50:52 GMT+0000 (UTC)","thisversionrun":"Wed Nov 11 2015 07:50:51 GMT+0000 (UTC)","results":{"collection1":[{"name":"斉藤小児科医院","adress":"白山市馬場二丁目16番地","tel":"076-275-3110","category":"小児科","time":"9:00～12:00","index":4,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?a=3"},{"name":"医療法人社団大倉外科医院","adress":"野々市市本町3丁目7-12","tel":"076-248-3263","category":"外科","time":"9:00～12:00","index":1,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?a=3"},{"name":"医療法人社団　長尾医院","adress":"白山市美川永代町ソ248","tel":"076-278-2156","category":"内科 \n外科","time":"9:00～12:00","index":6,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?p=2&a=3"},{"name":"織田内科クリニック","adress":"白山市鶴来本町3丁目ヲ11","tel":"076-273-9100","category":"内科","time":"9:00～12:00","index":2,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?a=3"},{"name":"喜多内科医院","adress":"野々市市横宮町7-20","tel":"076-248-0020","category":"内科","time":"9:00～12:00","index":3,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?a=3"},{"name":"てらしま内科クリニック","adress":"白山市中奥町91-3","tel":"076-274-8666","category":"内科","time":"9:00～12:00","index":5,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?a=3"}],"collection2":[{"date":"11月15日 （日）","index":7,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?a=3"},{"date":"11月15日 （日）","index":8,"url":"http://i-search.pref.ishikawa.jp/toban/index.php?p=2&a=3"}]}}
    jsonLoaded(json)

  }
});



$.ajax({
  url:"https://www.kimonolabs.com/api/99zbfmcw?apikey=e0cab1ea62558e9f07e4d1109a9eaf59&kimmodify=1",
  crossDomain: true,
  dataType: "json",
  success: function (response) {
    //Do something with the response
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
      cat[i] = response.results.collection1[i].category.replace( " \n" , "" ) ;
      if (cat_check != cat[i]) {
        cat_check = cat[i];
        k++;};
      };
      var accordion_height = WindowHeight / k;
      if(k>5){
        if (accordion_height<100) {accordion_height=100;};
      };
      cat_check = "*****";
      for (var i = 0; i < len; i++) {
        if (cat_check != cat[i]) {
          j++;
          $("#accordion").append('<div class="panel panel-default">' +
            '<div class="panel-heading c'+j+'"style="height:' + accordion_height + 'px" >' + '<h4 class="panel-title">' +
            '<a data-toggle="collapse" data-parent="#accordion" href="#'+cat[i]+ '">' +
            cat[i] + '</a></h4></div>' +
            '<div id="' + cat[i] + '" class="panel-collapse collapse"><div class="panel-body"><div class="' + j + '"></div></div></div></div>');
          cat_check = cat[i];
        };
        $("."+j).append('<ul><li class="name">' + response.results.collection1[i].name
          + '</li><li class="category">' + cat[i]
          + '</li><li class="time">'+ response.results.collection1[i].time
          + '</li><li class="tel">' + ' <a href="tel:'+ response.results.collection1[i].tel + '"> '+ response.results.collection1[i].tel
          + '</a></li><li class="address"><a href="http://maps.google.co.jp/maps?hl=ja&ie=UTF8&q='+response.results.collection1[i].address+'">'+response.results.collection1[i].address
          + '</a></li></ul>');
      };
    },
    error: function (xhr, status) {
    //handle errors
  }
});
$.ajax({
  url:"https://www.kimonolabs.com/api/99zbfmcw?apikey=e0cab1ea62558e9f07e4d1109a9eaf59&kimmodify=1",
  crossDomain: true,
  dataType: "json",
  success: function (response) {
    //Do something with the response
    var len = response.count;
    var cat_check = response.results.collection1[0].category;
    for (var i = 0; i < len; i++) {
      $("#test").append('<ul><li class="name">' + response.results.collection1[i].name
        + '</li><li class="category">' + response.results.collection1[i].category
        + '</li><li class="time">'+ response.results.collection1[i].time
        + '</li><li class="tel">' + ' <a href="tel:'+ response.results.collection1[i].tel + '"> '+ response.results.collection1[i].tel
        + '</a></li><li class="adress"><a href="http://maps.google.co.jp/maps?hl=ja&ie=UTF8&q='+response.results.collection1[i].adress+'">'+response.results.collection1[i].adress
        + '</a></li></ul>');
    };
  },
  error: function (xhr, status) {
    //handle errors
  }
});
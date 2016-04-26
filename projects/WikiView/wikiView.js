$(document).ready(function(){

var searchTerm;

$("#go").click(function() {
  searchTerm = $("#search").val();

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&callback=?&prop=pageimages|info&inprop=url&srsearch=' + searchTerm + "'",
    dataType: 'json',
    type: 'GET',
    headers: { "http://codepen.io/jbull328/pen/LNPYqG?editors=1111": 'https://github.com/jbull328' },
    success: function(data) {
     console.log(data);

   for(var i=0; i<data['query']['search'].length; i++) {
        var searchTitle = data['query']['search'][i]['title'];
        var searchUrl = "https://en.wikipedia.org/wiki/" + data['query']['search'][i]['title'];
        var dynamicSnippet = data['query']['search'][i]['snippet'];

        //function to account for spaces in url
        //-----------------------------------------------
        var noSpaceUrl = searchUrl.replace(/ /g, "_" );

        //Loads data into the Card's
        //-----------------------------------------------
        $("#loadIn").append("<div class='card col-lg-2 col-md-4 col-sm-6 col-xs-8 col-sm-offset-1 col-xs-offset-1><img class='card-img-top' src='http://res.cloudinary.com/jbull238/image/upload/v1457647249/wikiIMG_rhvujt.png'> <div class='card-block'><h6 class='card-title'>" + data['query']['search'][i]['title'] + "</h6> <p class='card-text'>" + dynamicSnippet +"</p><a href=" + noSpaceUrl  + " class='btn btn-primary'>More</a></div></div>");
    }

 }
})
});
      //remove the cards
      $("#clear").click(function(){
      $(".card").remove();
    });

   if ($(window).width() < 768) {
     $('.card').addClass('col-centered');
   }
 });

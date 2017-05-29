$(document).ready(function () {

//reload page
$('#logo').on('click', function(){
  location.reload();
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/popular?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US&page=1",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

$.ajax(settings).done(function (response) {


  $('#movies').click('click',function(a) {
    a.stopPropagation();

  $('#resultsMovies').slideToggle("fast", function(){
      $('#movies').toggleClass('active');
      for(var i = 0, l = response.results.length/2; i < l; i++) {
        var resultShow = '<ul>';
        resultShow += '<li><a id="resultLink" href="https://api.themoviedb.org/3/movie/' + response.results[i].id + '?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US" class="result-row"><img src="https://image.tmdb.org/t/p/w500' + response.results[i].poster_path + '?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US" height="120px" /> ' + response.results[i].title + '</a></li>';
        resultShow += '</ul>';
        $('#resultsMovies').append(resultShow);
      }
  });


});

// $('#resultLink').on('click', function(){
//   var movieContainer = '<ul>';
//   movieContainer += '<li>' + response.results[i].title + '</li>';
//   movieContainer += '</ul>';
//   $('#movieDetalsContainer').append(movieContainer);
//
// });

});


//tv show popular btn and content
var tvPopular = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/tv/popular?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US&page=1",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

$.ajax(tvPopular).done(function (response) {

    $('#tvShows').click('click',function(e) {
        e.stopPropagation();

        $('#resultsTvShows').slideToggle("fast", function(){
        $('#tvShows').toggleClass('active');
        for(var i = 0, l = response.results.length/2; i < l; i++) {
          var resultTvShow = '<ul>';
          resultTvShow += '<li><a id="resultLink" href="https://api.themoviedb.org/3/tv/' + response.results[i].id + '?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US" class="result-row"><img src="https://image.tmdb.org/t/p/w500' + response.results[i].poster_path + '?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US" height="120px" /> '+ response.results[i].name +'</a></li>';
          resultTvShow += '</ul>';
          $('#resultsTvShows').append(resultTvShow);
        }
      });
    });
});



//Searching movies from the input field

// var searchMovie = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.themoviedb.org/3/search/multi?query=searchField&api_key=9e93a8072a4001746ef7cd2093ad1e4a",
//     "method": "GET",
//     "headers": {},
//     "data": "{}"
// }
//
// $('#searchMovie').keydown(function(){
//
//     $.getJSON(searchMovie,function(data){
//
//       var search = $('#searchMovie').val();
//       var regex = new RegExp(search, 'i');
//
//       $.each(data, function(key, val){
//
//         if((data.results.title.search(regex)) != -1 ){
//
//           for(var i = 0, l = results.length/1; i < l; i++) {
//             var output;
//             output += '<ul>';
//              output += '<li>';
//              output += '<h2>' + data.results[i].title + '</h2>';
//
//              output += '</li>';
//              output += '</ul>';
//              $('#results').append(output);
//
//              }
//         }
//       });
//     });
//   });


var searchMovie = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/search/multi?query=searchField&api_key=9e93a8072a4001746ef7cd2093ad1e4a",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

$.ajax(searchMovie).done(function (response) {
console.log(this);
               $('#searchMovie').keyup(function() {

                 var searchField = $('#searchMovie').val();
                 var myExp = new RegExp(searchField, 'i');

             $.each(data, function(key, val) {
               var output = '<ul class="search-results">';

                 if (response.results.name.search(myExp) != -1) {
                   for(var i = 0, l = response.results.length / 1; i < l; i++) {
                     output += '<li>';
                     output += '<h2>' + response.results[i].name + '</h2>';
                     output += '</li>';
                     }
                 }
             });
             output += '</ul>';
             $('#results').html(output);

         });

  });

});

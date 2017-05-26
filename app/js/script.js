$(document).ready(function () {
            var settings = {
                "async": true,
                "crossDomain": true,
//serch param              "url": "https://api.themoviedb.org/3/search/movie?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US&page=1&include_adult=false",
                "url": "https://api.themoviedb.org/3/movie/popular?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US&page=1",
                "method": "GET",
                "headers": {},
                "data": "{}"
            }

            $.ajax(settings).done(function (response) {

              $('#mostPopular').on('click',function(e) {
                  e.stopPropagation();
                  $('#mostPopular').addClass('active');
                  for(var i = 0, l = response.results.length/2; i < l; i++) {

                    var resultShow = '<ul>';
                    resultShow += '<li><a id="resultLink" href="https://api.themoviedb.org/3/movie/' + response.results[i].id + '?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US" class="result-row"><img src="https://image.tmdb.org/t/p/w500/' + response.results[i].poster_path + '?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US" height="120px" /> ' + response.results[i].title + '</a></li>';
                    resultShow += '</ul>';
                    $('#results').append(resultShow);





                  //$("#results").append('<a id="resultLink" href="https://api.themoviedb.org/3/movie/' + response.results[i].id + '?api_key=9e93a8072a4001746ef7cd2093ad1e4a&language=en-US" class="result-row">' + response.results[i].title + '</a>');



                  $('#resultLink').on('click', function(){
                    var movieContainer = '<ul>';
                    movieContainer += '<li>' + response.results[i].title + '</li>';
                    movieContainer += '</ul>';
                    $('#movieDetalsContainer').append(movieContainer);

                  });
                  }
              });


// related code for searching movies
//              $('#search').keyup(function() {
//
//                var searchField = $('#search').val();
//                var myExp = new RegExp(searchField, 'i');
//
//            $.each(data, function(key, val) {
//              var output = '<ul class="search-results">';
//
//                if (results.title.search(myExp) != -1) {
//                  for(var i = 0, l = response.results.length / 1; i < l; i++) {
//                    output += '<li>';
//                    output += '<h2>' + response.results[i].title + '</h2>';
//
//                    output += '</li>';
//                    }
//                }
//            });
//            output += '</ul>';
//            $('#results').html(output);
//
//        });
    });
});

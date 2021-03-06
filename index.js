var urls = [];
var url_obj = [];
var netflix_url = 'https://www.netflix.com/search?q=';
var prime_url = 'https://www.primevideo.com/region/eu/search/ref=atv_nb_sr?phrase=';
var hotstar_url = 'https://www.hotstar.com/in/search?q=';
var imdb_url = 'https://imdb.com/find?q=';
var yt_url = 'https://www.youtube.com/results?search_query=';


function open_results() {
  query = document.getElementById('query');
  if (query.value == "") {
    query.focus();
    close_results();
    return false;
  } else {
    urls = [];
    url_obj = [];
    if (document.getElementById('netflix').checked == true) {
      urls.push(netflix_url+query.value);
    }
    if (document.getElementById('prime').checked == true) {
      urls.push(prime_url+query.value);
    }
    if (document.getElementById('hotstar').checked == true) {
      urls.push(hotstar_url+query.value);
    }
    if (document.getElementById('youtube').checked == true) {
      urls.push(yt_url+query.value);
    }
    if (document.getElementById('imdb').checked == true) {
      urls.push(imdb_url+query.value);
    }
    if (urls.length == 0) {
      alert('☑️ Please select at least 1 option');
      return false;
    } else {
      for (var i in urls) {
        url_obj[i] = window.open(urls[i]);
      }
    }
  }
}

function close_results() {
  for (var i in url_obj) {
    if (url_obj[i] != null && url_obj[i].closed == false) {
      url_obj[i].close();
    }
  }
  url_obj = [];
  urls = [];
}
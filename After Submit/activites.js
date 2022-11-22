var selectList = document.getElementsByTagName('select')[0];
var postsRow = document.getElementsByClassName('row-custom')[0];
var allPostItems = document.getElementsByClassName('post-column');

var liveMusic = document.getElementsByClassName('live-music');
var albumReviews = document.getElementsByClassName('album-reviews');
var playingMusic = document.getElementsByClassName('playing-music');
var musicProduction = document.getElementsByClassName('music-production');
var loadMoreButton = document.getElementById('load-more-container');


for (var i = 0; i < 6; i++) {
  allPostItems[i].style.display = 'block';
}

loadMoreButton.style.display = 'block';
loadMoreButton.addEventListener('click', loadMoreAll);


selectList.addEventListener('change', function() {

  loadMoreButton.removeEventListener('click', loadMoreAll);
  loadMoreButton.removeEventListener('click', loadMoreLiveMusic);
  loadMoreButton.removeEventListener('click', loadMoreAlbumReviews);
  loadMoreButton.removeEventListener('click', loadMorePlayingMusic);
  loadMoreButton.removeEventListener('click', loadMoreMusicProduction);

  for (var i = 0; i < allPostItems.length; i++) {
    allPostItems[i].style.display = 'none';
  }

  switch(this.value) {

    case "Live Music":
      for (var i = 0; i < 6; i++) {
        liveMusic[i].style.display = 'block';
        loadMoreButton.style.display = 'none';
      }

      if(liveMusic.length > 6) {
        loadMoreButton.style.display = 'block';
        loadMoreButton.addEventListener('click', loadMoreLiveMusic);
      }
      break;

    case "Album Reviews":
      for (var i = 0; i < 6; i++) {
        albumReviews[i].style.display = 'block';
        loadMoreButton.style.display = 'none';
      }

      if(albumReviews.length > 6) {
        loadMoreButton.style.display = 'block';
        loadMoreButton.addEventListener('click', loadMoreAlbumReviews);
      }
      break;

    case "Playing Music":
      for (var i = 0; i < 6; i++) {
        playingMusic[i].style.display = 'block';
        loadMoreButton.style.display = 'none';
      }

      if(playingMusic.length > 6) {
        loadMoreButton.style.display = 'block';
        loadMoreButton.addEventListener('click', loadMorePlayingMusic);
      }
      break;

    case "Music Production":
      for (var i = 0; i < 6; i++) {
        musicProduction[i].style.display = 'block';
        loadMoreButton.style.display = 'none';
      }

      if(musicProduction.length > 6) {
        loadMoreButton.style.display = 'block';
        loadMoreButton.addEventListener('click', loadMoreMusicProduction);
      }
      break;

    default:
      for (var i = 0; i < 6; i++) {
        allPostItems[i].style.display = 'block';
        loadMoreButton.style.display = 'none';
      }

      if(allPostItems.length > 6) {
        loadMoreButton.style.display = 'block';
        loadMoreButton.addEventListener('click', loadMoreAll);
      }
    }
});


function loadMoreAll() {
  for (var i = 0; i < allPostItems.length; i++) {
    allPostItems[i].style.display = 'block';
    loadMoreButton.style.display = 'none';
  }
}

function loadMoreLiveMusic() {
  for (var i = 0; i < liveMusic.length; i++) {
    liveMusic[i].style.display = 'block';
    loadMoreButton.style.display = 'none';
  }
}

function loadMoreAlbumReviews() {
  for (var i = 0; i < albumReviews.length; i++) {
    albumReviews[i].style.display = 'block';
    loadMoreButton.style.display = 'none';
  }
}

function loadMorePlayingMusic() {
  for (var i = 0; i < playingMusic.length; i++) {
    playingMusic[i].style.display = 'block';
    loadMoreButton.style.display = 'none';
  }
}

function loadMoreMusicProduction() {
  for (var i = 0; i < musicProduction.length; i++) {
    musicProduction[i].style.display = 'block';
    loadMoreButton.style.display = 'none';
  }
}

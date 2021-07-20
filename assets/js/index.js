// Plz don't hack with this key... :(
var key = 'AIzaSyDutbMPfjzGyVKISkH38y8WGwW3LCYrUKI';

$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/playlistItems", {
      part: 'snippet',
      playlistId: 'UUUo0HM2SbVvk-JO17mQQW4A',
      key: key
    }, function(data) {
      data.items.forEach(function(item) {
        videoId = item.snippet.resourceId.videoId;
        videoTitle = item.snippet.title;
        $('.video-group').append('<div class="video"><p class="video-title">' + videoTitle + '</p><iframe width="560" height="315" src=https://www.youtube.com/embed/' + videoId + ' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
      });
    }
  );
})

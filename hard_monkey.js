// ==UserScript==
// @name     Hardwax Player
// @version  1
// @grant    none
// @match https://hardwax.com/*
// @require  https://code.jquery.com/jquery-3.4.0.min.js
// ==/UserScript==

$(document).ready(function() {
  
  window.setTimeout(loader, 500);
  

});

var track_id=0;
var tracks = [];
var length = 0;
var nextSong= "";

function play() {
  
  			tracks = $('.download_listen');
  			length = tracks.length
  			nextSong = tracks[0].href;
  
   $('#audio').on('ended', function(){
        track_id++;
        if(track_id >= length) // this is the end of the songs.
        {
            track_id = 0;
        }
     
        nextSong = tracks[track_id].href;
     		$('#audio').attr('src', nextSong);
  			$('#track_name').html(tracks[track_id].title);
        $('#audio').load();
        $('#audio').play();
     	//alert('ended');
    }
  );
  /** */
  			//alert(nextSong);
        $('#audio').attr('src', tracks[0].href);
  			$('#track_name').html(tracks[0].title);
        //$('#audio').html(tracks[i].attr('title'));
        $('#audio').load();
        $('#audio').play();
 
}



function loader(){
  //nextSong = $('.download_listen')[0].href;

  
$('body').prepend(
	$('<div id="player" class="player"></div>')
);

$('#player').append(
	$('<audio id="audio" controls="controls" autoplay="autoplay"   align=""></audio><span id="track_name"></span>')
);

$('body').append(
	$('<style>.player{background-color:black;color:white;}</style>')
);
  
  play();
}

var playTimeout;    

$("#player").on("timeupdate", function(e) {
    playTimeout = setTimeout(function() {
        $("#player").get(0).pause();
        $("#player").get(0).currentTime = 0; // Restarts video
    }, 3000); // 3 seconds in ms
});


$("#player").on("pause", function(e) {
    clearTimeout(playTimeout);
});

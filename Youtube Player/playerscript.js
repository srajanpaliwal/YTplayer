//console.log("asdasdasd1111111111111111sdasdasdasdasdasd");
var currentVideo = document.getElementById("movie_player");
window.onPlayerStateChange = function() {};
	 if(currentVideo.getPlayerState()==1){
			pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC40lEQVR4Xu3ZUU4DQQwE0eT+hwYJwQWmLJEdP/7bir2dqgXeLz+rL/Bevb3lXwqwvAQKoADLL7B8fQRQgOUXWL4+AijA8gssXx8BFGD5BZavjwAKsPwCy9dHAAVYfoHl6yOAAuQLfOUJbcB/l/jR+08c79EHaN37ST96fwXoDVCAfsM0YaLE5QMoQLneQFYBwhEnjvfob0C43V/00fsrQG+AAvQbpgkTJS4fQAHK9QayChCOOHG8R38Dwu28A/xeQAEGWhRGpC9xCiuAvwQ+/k+h4ZtHAQiAAAjgn0HP/m8YBfQL+C2g37BMSC/yKewdwDuAdwDvAN4BCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKKA0V/YDLjBBgA9Yw0c4vYACnF7ukpwCXPIgT9dQgNPLXZJTgEse5OkaCnB6uUtyCnDJgzxdQwFOL3dJTgEueZCnayjA6eUuySnAJQ/ydA0FOL3cJTkFuORBnq6hAKeXuySnAJc8yNM1vgFKXMCBAVz+CwAAAABJRU5ErkJggg==");
			pbutton.setAttribute("class","yp-play");
	}

currentVideo.addEventListener("onStateChange", "StateChanged");
function showDialog(url) {
    window.postMessage({
        type: "FROM_PAGE",
        text: url
    }, "*");
}
function StateChanged(e) {
        console.log('State is:', e);
		if(e==0)
		{
		showDialog("playnext");
		}
		if(e==2)
		{
		showDialog("pause");
		}
		if(e==1)
		{
		showDialog("play");
		}
    }
window.addEventListener("message", function (event) {
if (event.data.type && (event.data.type == "FROM_CONTENT")&&event.data.text=='pausevideo') {
		console.log('%s',currentVideo);
		currentVideo.pauseVideo();
		showDialog("pause");
		console.log("got here successfully %s",currentVideo); 		
    }
	if (event.data.type && (event.data.type == "FROM_CONTENT")&&event.data.text=='playvideo') {
		console.log('%s',currentVideo);
		currentVideo.playVideo();
		showDialog("play");
		console.log("got here successfully %s",currentVideo); 		
    }
}, false);

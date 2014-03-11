/*var exdiv=document.createElement("div");
exdiv.setAttribute("id", "exqwejkl");
exdiv.setAttribute("class","yclose");
exdiv.innerHTML=player.html
var div = document.createElement("div");
div.setAttribute("id", "qwejkl");
div.setAttribute("ondrop","drop(event)");
div.setAttribute("ondragover","allowDrop(event)");
div.innerHTML = "sidebar lol";
var ocbutton=document.createElement("button");
ocbutton.setAttribute("id", "qwe1");
ocbutton.setAttribute("onclick", "presse()");
var t=document.createTextNode("Open");
ocbutton.appendChild(t);
exdiv.appendChild(ocbutton);
var pbutton=document.createElement("button");
pbutton.setAttribute("id", "play");
pbutton.setAttribute("onclick", "play()");
var pt=document.createTextNode("play");
pbutton.appendChild(pt);
exdiv.appendChild(pbutton);
var pabutton=document.createElement("button");
pabutton.setAttribute("id", "pause");
pabutton.setAttribute("onclick", "pause()");
var pat=document.createTextNode("pause");
pabutton.appendChild(pat);
exdiv.appendChild(pabutton);
exdiv.appendChild(div);
document.body.insertBefore(exdiv, document.body.firstChild);*/
var exdiv=document.getElementById("exqwejkl");
var div=document.getElementById("yp_info");
var pbutton=document.getElementById("yp_play");
showDialog("qwejkl");

function allowDrop(ev)
{
ev.preventDefault();
}
function presse(){
if(exdiv.getAttribute("class")=="yopen"){
	exdiv.setAttribute("class","yclose");
}
else{
	exdiv.setAttribute("class","yopen")
	}
}

function play(){
if(pbutton.getAttribute("class")=="yp-pause"){
	pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC40lEQVR4Xu3ZUU4DQQwE0eT+hwYJwQWmLJEdP/7bir2dqgXeLz+rL/Bevb3lXwqwvAQKoADLL7B8fQRQgOUXWL4+AijA8gssXx8BFGD5BZavjwAKsPwCy9dHAAVYfoHl6yOAAuQLfOUJbcB/l/jR+08c79EHaN37ST96fwXoDVCAfsM0YaLE5QMoQLneQFYBwhEnjvfob0C43V/00fsrQG+AAvQbpgkTJS4fQAHK9QayChCOOHG8R38Dwu28A/xeQAEGWhRGpC9xCiuAvwQ+/k+h4ZtHAQiAAAjgn0HP/m8YBfQL+C2g37BMSC/yKewdwDuAdwDvAN4BCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKKA0V/YDLjBBgA9Yw0c4vYACnF7ukpwCXPIgT9dQgNPLXZJTgEse5OkaCnB6uUtyCnDJgzxdQwFOL3dJTgEueZCnayjA6eUuySnAJQ/ydA0FOL3cJTkFuORBnq6hAKeXuySnAJc8yNM1vgFKXMCBAVz+CwAAAABJRU5ErkJggg==");
	pbutton.setAttribute("class","yp-play");
	showDialog("play");
}
else if(pbutton.getAttribute("class")=="yp-play"){
	pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADVklEQVR4Xu3d3VKrQBBF4eSp9VLv9KmVRFP5BWZgBrr3XlZ5R51ien0METzl8cCX9QSO1qtn8QcAmCMAAADMJ2C+fHYAAJhPwHz57AAACD+Bt+EMv8OfZdITzLAD/Ayz/Ry+P5LOOPRpZwFwGiIIOlDKBAAEADhPgJ2gIYRsO8Bl6SBohCArAHYCAHA7aGEg8w7A7aCBAAUA3A5WQFABAIKFCJQAgGABAjUAIKhEoAgABBUIVAGAoBCBMgAQFCBQBwCCGQQOAEAwgcAFAAhGEDgBAMELBG4AQPCAwBEACG4QuAIAwT8CZwAgGCbgDsAeAQD+tkLb3zEEwPUDkSUCANz/WGSHAADPD0esEADg9SNSGwQAGH9RYoEAANOvS+URAGD+lyakEQBgHoD0cwIAlAGQRQCAcgCSCABQB0AOAQDqAUghAMAyADIIALAcgAQCAKwDkB4BANYDSI0AAG0ApEUAgHYAUiIAQFsA6RAAoD2AVAgA0AdAGgQA6AcgBQIA9AUQHgEA+gMIjQAA2wAIiwAA2wEIiQAA2wIIhwAA2wMIhQAA+wAIgwAA+wEIgQAA+wI4/T3E9z1PAQD7TT/EfzgBwD4AQsQ/LR0A2wMIEx8A5vEBsC2AUFf+ZencArZBEDI+O4B5fAD0BxD2yucWQPzzBPgM0AdC+CufHaBP+BDP92uWxg5QM635Y9Nc+ewA8zFrj0gXn88AtYnHj08ZHwBtAKSND4D1AFLHB8A6AOnjA2A5AIn4AFgGQCY+AOoBSMUHQB0AufgAKAcgGR8AZQBk4wNgHoB0fABMA5CPDwDBZ/vzm9r9EbwOfp6YxZV/WTYA7gFYxecWYB4fAFcAdlc+twDinyfg/hnA9spnBzgc7OM77wDE/98CHG8BxL/56ccNAPEfHnw5ASD+i+fELgCIP/KSwAEA8SfeEKkDIP7M60FlAMQveDesCoD4BfFVHwQRvzC+IgDiV8RXA0D8yvhKAIi/IL4KAOIvjK8AgPgr4mcHQPyV8TMDIH6D+FkBEL9R/IwAiN8wfjYAxG8cPxMA4neInwXA13Ciu/5ptU6zD/HPZngbGGJQqicBANWyhesCQOGgVA8DgGrZwnUBoHBQqocBQLVs4boAUDgo1cMAoFq2cF2/sf7egcTO6tEAAAAASUVORK5CYII=");
	pbutton.setAttribute("class","yp-pause");
	showDialog("pause");
}

}
function drop(ev,args)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("text/HTML");
var url=ev.dataTransfer.getData("text/plain");
var inner = ev.target.innerHTML;
if(url.match(/http\u003A\u002F\u002Fwww\u002Eyoutube\u002Ecom\u002Fwatch/g)||url.match(/https\u003A\u002F\u002Fwww\u002Eyoutube\u002Ecom\u002Fwatch/g))
{
	ev.target.innerHTML=inner+"<br>"+data;
	//var data=ev.dataTransfer.getData();
	showDialog(div.innerHTML);
}
}
function showDialog(url) {
    window.postMessage({
        type: "FROM_PAGE",
        text: url
    }, "*");
}
function onYouTubePlayerReady(playerId) {
	showDialog("loaded");
	}

/*function onYouTubePlayerReady(playerId) {
	console.log("asdasdasd1111111111111111sdasdasdasdasdasd");
     currentVideo = document.getElementById("movie_player");
	 window.onPlayerStateChange = function() {};
	 if(currentVideo.getPlayerState()==1){
			pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC40lEQVR4Xu3ZUU4DQQwE0eT+hwYJwQWmLJEdP/7bir2dqgXeLz+rL/Bevb3lXwqwvAQKoADLL7B8fQRQgOUXWL4+AijA8gssXx8BFGD5BZavjwAKsPwCy9dHAAVYfoHl6yOAAuQLfOUJbcB/l/jR+08c79EHaN37ST96fwXoDVCAfsM0YaLE5QMoQLneQFYBwhEnjvfob0C43V/00fsrQG+AAvQbpgkTJS4fQAHK9QayChCOOHG8R38Dwu28A/xeQAEGWhRGpC9xCiuAvwQ+/k+h4ZtHAQiAAAjgn0HP/m8YBfQL+C2g37BMSC/yKewdwDuAdwDvAN4BCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKKA0V/YDLjBBgA9Yw0c4vYACnF7ukpwCXPIgT9dQgNPLXZJTgEse5OkaCnB6uUtyCnDJgzxdQwFOL3dJTgEueZCnayjA6eUuySnAJQ/ydA0FOL3cJTkFuORBnq6hAKeXuySnAJc8yNM1vgFKXMCBAVz+CwAAAABJRU5ErkJggg==");
			pbutton.setAttribute("class","yp-play");
	}
	 currentVideo.addEventListener("onStateChange", "StateChanged");
}*/
function playnext()
{
	//pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC40lEQVR4Xu3ZUU4DQQwE0eT+hwYJwQWmLJEdP/7bir2dqgXeLz+rL/Bevb3lXwqwvAQKoADLL7B8fQRQgOUXWL4+AijA8gssXx8BFGD5BZavjwAKsPwCy9dHAAVYfoHl6yOAAuQLfOUJbcB/l/jR+08c79EHaN37ST96fwXoDVCAfsM0YaLE5QMoQLneQFYBwhEnjvfob0C43V/00fsrQG+AAvQbpgkTJS4fQAHK9QayChCOOHG8R38Dwu28A/xeQAEGWhRGpC9xCiuAvwQ+/k+h4ZtHAQiAAAjgn0HP/m8YBfQL+C2g37BMSC/yKewdwDuAdwDvAN4BCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKKA0V/YDLjBBgA9Yw0c4vYACnF7ukpwCXPIgT9dQgNPLXZJTgEse5OkaCnB6uUtyCnDJgzxdQwFOL3dJTgEueZCnayjA6eUuySnAJQ/ydA0FOL3cJTkFuORBnq6hAKeXuySnAJc8yNM1vgFKXMCBAVz+CwAAAABJRU5ErkJggg==");
	//pbutton.setAttribute("class","yp-play");
	showDialog("playnext");
}
/*function StateChanged(e) {
        console.log('State is:', e);
		if(e==0)
		{
		pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC40lEQVR4Xu3ZUU4DQQwE0eT+hwYJwQWmLJEdP/7bir2dqgXeLz+rL/Bevb3lXwqwvAQKoADLL7B8fQRQgOUXWL4+AijA8gssXx8BFGD5BZavjwAKsPwCy9dHAAVYfoHl6yOAAuQLfOUJbcB/l/jR+08c79EHaN37ST96fwXoDVCAfsM0YaLE5QMoQLneQFYBwhEnjvfob0C43V/00fsrQG+AAvQbpgkTJS4fQAHK9QayChCOOHG8R38Dwu28A/xeQAEGWhRGpC9xCiuAvwQ+/k+h4ZtHAQiAAAjgn0HP/m8YBfQL+C2g37BMSC/yKewdwDuAdwDvAN4BCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKKA0V/YDLjBBgA9Yw0c4vYACnF7ukpwCXPIgT9dQgNPLXZJTgEse5OkaCnB6uUtyCnDJgzxdQwFOL3dJTgEueZCnayjA6eUuySnAJQ/ydA0FOL3cJTkFuORBnq6hAKeXuySnAJc8yNM1vgFKXMCBAVz+CwAAAABJRU5ErkJggg==");
		pbutton.setAttribute("class","yp-play");
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
*/
window.addEventListener("message", function (event) {
    // We only accept messages from ourselves
    if (event.source != window) { return; }

    // Make sure we're looking at the correct event:
    if (event.data.type && (event.data.type == "FROM_CONTENT")&&event.data.text!='pausevideo'&&event.data.text!='playvideo'&&event.data.text!='pause'&&event.data.text!='play') {
        div.innerHTML = event.data.text;
    }
	/*if (event.data.type && (event.data.type == "FROM_CONTENT")&&event.data.text=='pausevideo') {
		console.log('%s',currentVideo);
		pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADVklEQVR4Xu3d3VKrQBBF4eSp9VLv9KmVRFP5BWZgBrr3XlZ5R51ien0METzl8cCX9QSO1qtn8QcAmCMAAADMJ2C+fHYAAJhPwHz57AAACD+Bt+EMv8OfZdITzLAD/Ayz/Ry+P5LOOPRpZwFwGiIIOlDKBAAEADhPgJ2gIYRsO8Bl6SBohCArAHYCAHA7aGEg8w7A7aCBAAUA3A5WQFABAIKFCJQAgGABAjUAIKhEoAgABBUIVAGAoBCBMgAQFCBQBwCCGQQOAEAwgcAFAAhGEDgBAMELBG4AQPCAwBEACG4QuAIAwT8CZwAgGCbgDsAeAQD+tkLb3zEEwPUDkSUCANz/WGSHAADPD0esEADg9SNSGwQAGH9RYoEAANOvS+URAGD+lyakEQBgHoD0cwIAlAGQRQCAcgCSCABQB0AOAQDqAUghAMAyADIIALAcgAQCAKwDkB4BANYDSI0AAG0ApEUAgHYAUiIAQFsA6RAAoD2AVAgA0AdAGgQA6AcgBQIA9AUQHgEA+gMIjQAA2wAIiwAA2wEIiQAA2wIIhwAA2wMIhQAA+wAIgwAA+wEIgQAA+wI4/T3E9z1PAQD7TT/EfzgBwD4AQsQ/LR0A2wMIEx8A5vEBsC2AUFf+ZencArZBEDI+O4B5fAD0BxD2yucWQPzzBPgM0AdC+CufHaBP+BDP92uWxg5QM635Y9Nc+ewA8zFrj0gXn88AtYnHj08ZHwBtAKSND4D1AFLHB8A6AOnjA2A5AIn4AFgGQCY+AOoBSMUHQB0AufgAKAcgGR8AZQBk4wNgHoB0fABMA5CPDwDBZ/vzm9r9EbwOfp6YxZV/WTYA7gFYxecWYB4fAFcAdlc+twDinyfg/hnA9spnBzgc7OM77wDE/98CHG8BxL/56ccNAPEfHnw5ASD+i+fELgCIP/KSwAEA8SfeEKkDIP7M60FlAMQveDesCoD4BfFVHwQRvzC+IgDiV8RXA0D8yvhKAIi/IL4KAOIvjK8AgPgr4mcHQPyV8TMDIH6D+FkBEL9R/IwAiN8wfjYAxG8cPxMA4neInwXA13Ciu/5ptU6zD/HPZngbGGJQqicBANWyhesCQOGgVA8DgGrZwnUBoHBQqocBQLVs4boAUDgo1cMAoFq2cF2/sf7egcTO6tEAAAAASUVORK5CYII=");
		pbutton.setAttribute("class","yp-pause");
		currentVideo.pauseVideo();
		console.log("got here successfully %s",currentVideo); 		
    }
	if (event.data.type && (event.data.type == "FROM_CONTENT")&&event.data.text=='playvideo') {
		console.log('%s',currentVideo);
			pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC40lEQVR4Xu3ZUU4DQQwE0eT+hwYJwQWmLJEdP/7bir2dqgXeLz+rL/Bevb3lXwqwvAQKoADLL7B8fQRQgOUXWL4+AijA8gssXx8BFGD5BZavjwAKsPwCy9dHAAVYfoHl6yOAAuQLfOUJbcB/l/jR+08c79EHaN37ST96fwXoDVCAfsM0YaLE5QMoQLneQFYBwhEnjvfob0C43V/00fsrQG+AAvQbpgkTJS4fQAHK9QayChCOOHG8R38Dwu28A/xeQAEGWhRGpC9xCiuAvwQ+/k+h4ZtHAQiAAAjgn0HP/m8YBfQL+C2g37BMSC/yKewdwDuAdwDvAN4BCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKKA0V/YDLjBBgA9Yw0c4vYACnF7ukpwCXPIgT9dQgNPLXZJTgEse5OkaCnB6uUtyCnDJgzxdQwFOL3dJTgEueZCnayjA6eUuySnAJQ/ydA0FOL3cJTkFuORBnq6hAKeXuySnAJc8yNM1vgFKXMCBAVz+CwAAAABJRU5ErkJggg==");
			pbutton.setAttribute("class","yp-play");
		currentVideo.playVideo();
		console.log("got here successfully %s",currentVideo); 		
    }*/
	if (event.data.type &&event.data.text=='play') {
			console.log("ghjiyyu");
			pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC40lEQVR4Xu3ZUU4DQQwE0eT+hwYJwQWmLJEdP/7bir2dqgXeLz+rL/Bevb3lXwqwvAQKoADLL7B8fQRQgOUXWL4+AijA8gssXx8BFGD5BZavjwAKsPwCy9dHAAVYfoHl6yOAAuQLfOUJbcB/l/jR+08c79EHaN37ST96fwXoDVCAfsM0YaLE5QMoQLneQFYBwhEnjvfob0C43V/00fsrQG+AAvQbpgkTJS4fQAHK9QayChCOOHG8R38Dwu28A/xeQAEGWhRGpC9xCiuAvwQ+/k+h4ZtHAQiAAAjgn0HP/m8YBfQL+C2g37BMSC/yKewdwDuAdwDvAN4BCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKIACKIACCr8HsoniKUwBFEABFEABAxgvIxLFU5gCKKA0V/YDLjBBgA9Yw0c4vYACnF7ukpwCXPIgT9dQgNPLXZJTgEse5OkaCnB6uUtyCnDJgzxdQwFOL3dJTgEueZCnayjA6eUuySnAJQ/ydA0FOL3cJTkFuORBnq6hAKeXuySnAJc8yNM1vgFKXMCBAVz+CwAAAABJRU5ErkJggg==");
			pbutton.setAttribute("class","yp-play");
	}
	if (event.data.type&&event.data.text=='pause') {
		pbutton.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADVklEQVR4Xu3d3VKrQBBF4eSp9VLv9KmVRFP5BWZgBrr3XlZ5R51ien0METzl8cCX9QSO1qtn8QcAmCMAAADMJ2C+fHYAAJhPwHz57AAACD+Bt+EMv8OfZdITzLAD/Ayz/Ry+P5LOOPRpZwFwGiIIOlDKBAAEADhPgJ2gIYRsO8Bl6SBohCArAHYCAHA7aGEg8w7A7aCBAAUA3A5WQFABAIKFCJQAgGABAjUAIKhEoAgABBUIVAGAoBCBMgAQFCBQBwCCGQQOAEAwgcAFAAhGEDgBAMELBG4AQPCAwBEACG4QuAIAwT8CZwAgGCbgDsAeAQD+tkLb3zEEwPUDkSUCANz/WGSHAADPD0esEADg9SNSGwQAGH9RYoEAANOvS+URAGD+lyakEQBgHoD0cwIAlAGQRQCAcgCSCABQB0AOAQDqAUghAMAyADIIALAcgAQCAKwDkB4BANYDSI0AAG0ApEUAgHYAUiIAQFsA6RAAoD2AVAgA0AdAGgQA6AcgBQIA9AUQHgEA+gMIjQAA2wAIiwAA2wEIiQAA2wIIhwAA2wMIhQAA+wAIgwAA+wEIgQAA+wI4/T3E9z1PAQD7TT/EfzgBwD4AQsQ/LR0A2wMIEx8A5vEBsC2AUFf+ZencArZBEDI+O4B5fAD0BxD2yucWQPzzBPgM0AdC+CufHaBP+BDP92uWxg5QM635Y9Nc+ewA8zFrj0gXn88AtYnHj08ZHwBtAKSND4D1AFLHB8A6AOnjA2A5AIn4AFgGQCY+AOoBSMUHQB0AufgAKAcgGR8AZQBk4wNgHoB0fABMA5CPDwDBZ/vzm9r9EbwOfp6YxZV/WTYA7gFYxecWYB4fAFcAdlc+twDinyfg/hnA9spnBzgc7OM77wDE/98CHG8BxL/56ccNAPEfHnw5ASD+i+fELgCIP/KSwAEA8SfeEKkDIP7M60FlAMQveDesCoD4BfFVHwQRvzC+IgDiV8RXA0D8yvhKAIi/IL4KAOIvjK8AgPgr4mcHQPyV8TMDIH6D+FkBEL9R/IwAiN8wfjYAxG8cPxMA4neInwXA13Ciu/5ptU6zD/HPZngbGGJQqicBANWyhesCQOGgVA8DgGrZwnUBoHBQqocBQLVs4boAUDgo1cMAoFq2cF2/sf7egcTO6tEAAAAASUVORK5CYII=");
		pbutton.setAttribute("class","yp-pause");
	}
}, false);
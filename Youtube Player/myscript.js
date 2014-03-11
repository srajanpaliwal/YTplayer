var s = document.createElement('script');
s.src = chrome.extension.getURL("script.js");
var exdiv=document.createElement("div");
exdiv.setAttribute("id", "exqwejkl");
exdiv.setAttribute("class","yclose");
var asd='<div class="gwd-div-683h"></div>'+
    '<div class="gwd-div-arwn" id="yp_player">'+
     ' <div class="gwd-div-0p1e" id="yp_controls">'+
        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAC/klEQVR4Xu2cwW4aURAE7a/O0ckxX52AhKUcEjZmsbtnqrggS+CZ7q7tfSDLry8+0A68otUr/kUA4BAIgADAHYDLtwEEAO4AXL4NIABwB+DybQABgDsAl28DCADcAbh8G0AA4A7A5dsAAgB3AC7fBhAAuANw+TaAAMAdgMu3AQQA7gBcvg0gAHAH4PJtAAGAOwCXbwMIANwBuHwbQADgDsDl2wACgHbg2039T6oL5Ab4fgn97Rb8j8vz9WfcgwrAn+G/h46EgAjA38LHQkAD4F74SAhIAPxP+DgIKAB8JHwUBAQAHgkfA8F2AM6Ej4BgMwDPCH89BFsBeGb4qyHYCMBnhL8Wgm0AfGb4KyHYBMBXhL8Ogi0AfGX4qyDYAEAi/DUQTAcgGf4KCCYD0BD+eAimAtAU/mgIJgLQGP5YCKYB0Bz+SAgmATAh/HEQTAFgUvijIJgAwMTwx0AwAYB3Mx99/vXoG2/vW+3RanG3AAXgzhUgAMf1sNqj1eJsADjdAiAAVwc8A3gGOL4SqB55BjhmY7VHq8V5BoDTLQAC4CHwgAFvAfCLRAAE4NiB4a/wewDqZ1wPgceXrrcAuEdXALZXpPoObgEadL8F2lvyVH42wPxbgAAcZHjKoMvvtgGGf5kkAJ4Bjnt+8EflU4B7Bjhmw1uAt4BjSoKvsAGC5jeMFoCGFII7CEDQ/IbRAtCQQnAHAQia3zBaABpSCO4gAEHzG0YLQEMKwR0EIGh+w2gBaEghuIMABM1vGC0ADSkEdxCAoPkNowWgIYXgDgIQNL9htAA0pBDcIQ5AULujzzrwjD8JO7uD7w86IABB8xtGC0BDCsEdBCBofsNoAWhIIbiDAATNbxgtAA0pBHcQgKD5DaMFoCGF4A4CEDS/YbQANKQQ3EEAguY3jBaAhhSCOwhA0PyG0QLQkEJwh/b/fhG0hjFaABg5/1OlAAgA3AG4fBtAAOAOwOXbAAIAdwAu3wYQALgDcPk2gADAHYDLtwEEAO4AXL4NIABwB+DyfwPR1IdZcr+aGgAAAABJRU5ErkJggg==" class="gwd-img-qu1r" id="yp_minimize" onclick="presse()">'+
        '<img src="data:image/png;base64,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" class="gwd-img-0j9y" id="yp_previous">'+
        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADVklEQVR4Xu3d3VKrQBBF4eSp9VLv9KmVRFP5BWZgBrr3XlZ5R51ien0METzl8cCX9QSO1qtn8QcAmCMAAADMJ2C+fHYAAJhPwHz57AAACD+Bt+EMv8OfZdITzLAD/Ayz/Ry+P5LOOPRpZwFwGiIIOlDKBAAEADhPgJ2gIYRsO8Bl6SBohCArAHYCAHA7aGEg8w7A7aCBAAUA3A5WQFABAIKFCJQAgGABAjUAIKhEoAgABBUIVAGAoBCBMgAQFCBQBwCCGQQOAEAwgcAFAAhGEDgBAMELBG4AQPCAwBEACG4QuAIAwT8CZwAgGCbgDsAeAQD+tkLb3zEEwPUDkSUCANz/WGSHAADPD0esEADg9SNSGwQAGH9RYoEAANOvS+URAGD+lyakEQBgHoD0cwIAlAGQRQCAcgCSCABQB0AOAQDqAUghAMAyADIIALAcgAQCAKwDkB4BANYDSI0AAG0ApEUAgHYAUiIAQFsA6RAAoD2AVAgA0AdAGgQA6AcgBQIA9AUQHgEA+gMIjQAA2wAIiwAA2wEIiQAA2wIIhwAA2wMIhQAA+wAIgwAA+wEIgQAA+wI4/T3E9z1PAQD7TT/EfzgBwD4AQsQ/LR0A2wMIEx8A5vEBsC2AUFf+ZencArZBEDI+O4B5fAD0BxD2yucWQPzzBPgM0AdC+CufHaBP+BDP92uWxg5QM635Y9Nc+ewA8zFrj0gXn88AtYnHj08ZHwBtAKSND4D1AFLHB8A6AOnjA2A5AIn4AFgGQCY+AOoBSMUHQB0AufgAKAcgGR8AZQBk4wNgHoB0fABMA5CPDwDBZ/vzm9r9EbwOfp6YxZV/WTYA7gFYxecWYB4fAFcAdlc+twDinyfg/hnA9spnBzgc7OM77wDE/98CHG8BxL/56ccNAPEfHnw5ASD+i+fELgCIP/KSwAEA8SfeEKkDIP7M60FlAMQveDesCoD4BfFVHwQRvzC+IgDiV8RXA0D8yvhKAIi/IL4KAOIvjK8AgPgr4mcHQPyV8TMDIH6D+FkBEL9R/IwAiN8wfjYAxG8cPxMA4neInwXA13Ciu/5ptU6zD/HPZngbGGJQqicBANWyhesCQOGgVA8DgGrZwnUBoHBQqocBQLVs4boAUDgo1cMAoFq2cF2/sf7egcTO6tEAAAAASUVORK5CYII=" class="yp-pause" id="yp_play" onclick="play()">'+
        '<img src="data:image/png;base64,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" class="gwd-img-hcnt" id="yp_next" onClick="playnext()">'+
      '</div>'+
      '<div class="gwd-div-19te" id="yp_info" ondragover="allowDrop(event)" ondrop="drop(event)"></div>'+
    '</div>';
exdiv.innerHTML=asd;
s.onload = function() {
	 chrome.runtime.sendMessage({ message: "iamup"});
    this.parentNode.removeChild(this);
};
document.body.insertBefore(exdiv, document.body.firstChild);
document.head.insertBefore(s,document.head.firstChild);

//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(s, firstScriptTag);

function showDialog(url) {
   window.postMessage({
        type: "FROM_CONTENT",
        text: url
    }, "*");
}
window.addEventListener("message", function (event) {
    // We only accept messages from ourselves
    if (event.source != window) { return; }
	if(event.data.type && (event.data.type == "FROM_PAGE")&&event.data.text=="playnext")
	{
		console.log("%s asdasd",event.data.text);
		chrome.storage.local.set({'playstate': '2'});
	}
	if(event.data.type && (event.data.type == "FROM_PAGE")&&event.data.text=="play")
	{
		console.log("%s asdasd",event.data.text);
		chrome.storage.local.set({'playstate': '1'});
	}
	if(event.data.type && (event.data.type == "FROM_PAGE")&&event.data.text=="pause")
	{
		console.log("%s asdasd",event.data.text);
		chrome.storage.local.set({'playstate': '0'});
	}
	if(event.data.type && (event.data.type == "FROM_PAGE")&&event.data.text=="loaded")
	{
		chrome.runtime.sendMessage({ message: "playerup"});
	}
	if(event.data.type && (event.data.type == "FROM_PAGE")&&event.data.text=="qwejkl"){
		chrome.storage.local.get('value',function(object){
		showDialog(object['value']);
		console.log("%s asdasd",object['value']);
		return object['value'];});
	}
	
    // Make sure we're looking at the correct event:
    else if (event.data.type && (event.data.type == "FROM_PAGE")&&event.data.text!="play"&&event.data.text!="pause"&&event.data.text!="playnext"&&event.data.text!="loaded") {
        chrome.storage.local.set({'value': event.data.text});
    }
	
}, false);
chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
	if(key=='value'){
		showDialog(storageChange.newValue);
    }
	else if(key=='playstate')
	{
		if(storageChange.newValue=='1'){
			showDialog("play");
		}
		else if(storageChange.newValue=='0'){
			showDialog("pause");
		}
		else if(storageChange.newValue=='2'){
			showDialog("play");
		}
	}
	/*console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);*/
  }
});

chrome.runtime.onMessage.addListener(
 function(request, sender,sendResponse) {
 if(request.message=="pausevideo"){
	showDialog("pausevideo");
	}
 else if(request.message=="playvideo"){
	console.log("12312312312312312312312312312313123123123");
	sendResponse({message: 'imthere'});
	showDialog("playvideo");
	}
else if(request.message=="youaretheplayer"){
	console.log("iamtheplayer");
	var ps = document.createElement('script');
	ps.src = chrome.extension.getURL("playerscript.js");
	document.head.insertBefore(ps,document.head.firstChild);
	sendResponse({message: 'asd'});
	}
else if(request.message=="hereareparams"){
	if(request.playstate=='1'){
			showDialog("play");
		}
		else if(request.playstate=='0'||request.playstate=='10'){
			showDialog("pause");
		}
		else if(request.playstate=='2'||request.playstate=='3'){
			showDialog("play");
		}
	
}	
  });
  

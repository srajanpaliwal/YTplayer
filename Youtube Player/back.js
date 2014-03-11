/*chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  chrome.tabs.create({url:"https://www.youtube.com/feed/subscriptions"}
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
  */
 var currplayerid=0;
chrome.storage.local.set({'value': 'playlist'});
chrome.storage.local.set({'playstate': '10'});
chrome.storage.local.set({'tabid': '0'});
chrome.tabs.onRemoved.addListener(function(tabId,removeInfo) {
	/*chrome.storage.local.get('tabid',function(object){
		closed(tabId,object['tabid']);
		return object['tabid'];});	*/
		closed(tabId,currplayerid);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
	if(storageChange.newValue == '1'&& key=='playstate'){
		console.log("%s",key);
		chrome.storage.local.get(null,function(object){
		play(object['value'],object['tabid']);
		return object['value'];});
		
	}
	else if(storageChange.newValue == '0'&& key=='playstate'){
	chrome.storage.local.get('tabid',function(object){
		pause(object['tabid']);
		return object['tabid'];});
	}
	if(storageChange.newValue == '2'&& key=='playstate'){
		console.log("%s",key);
		chrome.storage.local.get(null,function(object){
		playnext(object['value'],object['tabid']);
		return object['value'];});
	}
		
    /*console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);*/
  }
});
function play(text,tabid){
console.log(tabid);
chrome.tabs.sendMessage(parseInt(tabid), {message: "playvideo"}, function(response) {
    if(!response&&response!='imthere')// change this to include message
	{
		console.log("%s",text);
		var hindex=text.indexOf("href");
		//var currurl=text.substr(hindex+6,hindex+48)+"?html5=1";
		var currurl=text.substr(hindex+6,hindex+48);
		var aindex=text.indexOf("</a>");
		var newin=text.slice(aindex+8);
		chrome.storage.local.set({'value': newin});
		if(currurl.match(/http\u003A\u002F\u002Fwww\u002Eyoutube\u002Ecom\u002Fwatch/g)||currurl.match(/https\u003A\u002F\u002Fwww\u002Eyoutube\u002Ecom\u002Fwatch/g))
		{
		chrome.tabs.create({url:currurl,active:false},
			function(tab) {
				currplayerid=tab.id;
				chrome.storage.local.set({'tabid': tab.id});
				}
		);
		}
	}
  });
  }
function playnext(text,tabid){
		var hindex=text.indexOf("href");
		//var currurl=text.substr(hindex+6,hindex+48)+"?html5=1";
		var currurl=text.substr(hindex+6,hindex+40);
		var aindex=text.indexOf("</a>");
		var newin=text.slice(aindex+8);
		chrome.storage.local.set({'value': newin});
		console.log("%s",newin);
		console.log("%s",currurl);
		chrome.storage.local.set({'playstate': '3'});
		if(currurl.match(/http\u003A\u002F\u002Fwww\u002Eyoutube\u002Ecom\u002Fwatch/g)||currurl.match(/https\u003A\u002F\u002Fwww\u002Eyoutube\u002Ecom\u002Fwatch/g))
		{
			chrome.tabs.update(tabid, {url: currurl});	
		}
		else
		{
			chrome.storage.local.set({'value': 'playlist'});
			chrome.storage.local.set({'tabid': '0'});
		}
		
}
function pause(tabid){
console.log("%s",tabid);
chrome.tabs.sendMessage(parseInt(tabid), {message:"pausevideo"});
}
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) 
{  
	console.log("%s",message.message);
	if(message.message=="playerup"){
		chrome.storage.local.get('tabid',function(object){
		console.log("a1");
		check(sender,object['tabid']);
		return object['tabid'];});
	}
	else if(message.message=="iamup")
	{
		chrome.storage.local.get('playstate',function(object){
		tabwakeup(sender.tab.id,object['playstate']);
		return object['playstate'];});
	}
	
	
	}
);
function check(sender,playerid){
console.log("%s",sender.tab.id);
console.log("%s",playerid);

	if(sender.tab.id==playerid.toString())
	{
	console.log("a2");
	chrome.tabs.sendMessage(sender.tab.id, {message: "youaretheplayer"});
	}
}
function closed(tabid,playerid){
	if(tabid==playerid)
	{
		console.log("he closed it");
		chrome.storage.local.set({'playstate': '0'});
		chrome.storage.local.set({'tabid': '0'});
	}

}

function tabwakeup(tabid,playstate){
	chrome.tabs.sendMessage(tabid, {message: "hereareparams",playstate:playstate});
}


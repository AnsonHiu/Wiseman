function InsertPlayer(url,playerid,jpg) {
	var swfObject = new SWFObject("/site/video/player.swf?flv_url=" + url , playerid, '320', '246', '7', '#FFFFFF');
	swfObject.addParam("swLiveConnect", "true");
	swfObject.addParam("wmode", "transparent");
	swfObject.addParam("flashvars", "videoFile=" + url + "&amp;autoBuffering=false&amp;splashImageFile=" + jpg);
	swfObject.write(playerid);
}
function InsertPlayer240_180(url,playerid,jpg) {
	var swfObject = new SWFObject("/site/video/player.swf?flv_url=" + url , playerid, '240', '186', '7', '#FFFFFF');
	swfObject.addParam("swLiveConnect", "true");
	swfObject.addParam("wmode", "transparent");
	swfObject.addParam("flashvars", "videoFile=" + url + "&amp;autoBuffering=false&amp;splashImageFile=" + jpg);
	swfObject.write(playerid);
}
function InsertPlayer320_180(url,playerid,jpg) {
	var swfObject = new SWFObject("/site/video/player.swf?flv_url=" + url , playerid, '320', '200', '7', '#FFFFFF');
	swfObject.addParam("swLiveConnect", "true");
	swfObject.addParam("wmode", "transparent");
	swfObject.addParam("flashvars", "videoFile=" + url + "&amp;autoBuffering=false&amp;splashImageFile=" + jpg);
	swfObject.write(playerid);
}
function InsertPlayerMainPage(url,playerid,jpg) {
	var swfObject = new SWFObject("/site/video/player.swf?flv_url=" + url , playerid, '400', '248', '7', '#FFFFFF');
	swfObject.addParam("swLiveConnect", "true");
	swfObject.addParam("wmode", "transparent");
	swfObject.addParam("flashvars", "videoFile=" + url + "&amp;loop=false&amp;autoBuffering=false&amp;splashImageFile=" + jpg);
	swfObject.write(playerid);
}
function InsertPlayer640_480(url,playerid,jpg) {
	var swfObject = new SWFObject("/site/video/player.swf?flv_url=" + url , playerid, '640', '500', '7', '#FFFFFF');
	swfObject.addParam("swLiveConnect", "true");
	swfObject.addParam("wmode", "transparent");
	swfObject.addParam("flashvars", "videoFile=" + url + "&amp;autostart=true&amp;loop=false&amp;autoBuffering=false&amp;splashImageFile=" + jpg);
	swfObject.write(playerid);
}
function YouTubePlayer(url,playerid) {
	//var swfObject = new SWFObject(url, playerid, '320', '213', '7', '#FFFFFF');
	var swfObject = new SWFObject(url, playerid, '425', '283', '7', '#FFFFFF');
	swfObject.addParam("swLiveConnect", "true");
	swfObject.addParam("wmode", "transparent");
	swfObject.addParam("flashvars", "videoFile=" + url + "&hl=zh_HK&amp;autoBuffering=false&amp;splashImageFile=/site/thinkagain/2008/video/video_splash.jpg");
	swfObject.write(playerid);
}

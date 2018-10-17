function bannerSwf(file)
{
	var width   = '715';
	var height  = '92';

	var swfObject = new SWFObject(file, 'banner', width, height, '7', 'FFFFFF');
	swfObject.addParam('wmode', 'transparent');
	swfObject.write('banner');
}
function bannerRandom()
{
	var swf = new Array(1);
	var index = Math.floor(Math.random() * swf.length);
	swf[0] = "/site/swf/easter.swf";
	//swf[0] = "/site/swf/inspire09.swf";
	//swf[1] = "/site/swf/inspire09.swf";
	bannerSwf(swf[index]);
}
function thinkseriesSwf(file)
{
	var width   = '250';
	var height  = '275';
	var swfObject = new SWFObject(file, 'thinkseries', width, height, '7', 'FFFFFF');
	swfObject.addParam("wmode", "transparent");
	swfObject.write("thinkseries");
}
function playTopicSwf(file, id)
{
	var width   = '246';
	var height  = '280';
	var swfObject = new SWFObject(file, id, width, height, '7', 'FFFFFF');
	swfObject.addParam("wmode", "transparent");
	swfObject.write(id);
}
function thinkseriesRandom()
{
	var swf = new Array(1);
	var index = Math.floor(Math.random() * swf.length);
	swf[0] = "/site/swf/thinkagain_callforentries.swf";
	thinkseriesSwf(swf[index]);
}
function insertRandomBanner05(banners) {
	var banner_number = Math.floor(Math.random() * (banners.length - 1));
	var banner = banners[banner_number];
	banner_topic05.innerHTML = '<a href="' + banner['link'] + '"><img border="0" src="' + banner['image'] + '"></a>';
	banner_topic05_title.innerHTML = banner['text'];
}
//EOF

/* IE7 version 0.7.3 (alpha) 2004/09/18 */
if(window.IE7)IE7.addModule("ie7-png",function(){if(appVersion<5.5)return;var FILTER="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=%1,sizingMethod='scale')";var NULL=(/\bSV1\b/.test(navigator.userAgent))?makePath("blank.gif",path):"javascript:'#define x_width 1\x5cn#define x_height 1\x5cnstatic char x_bits[]={0x00}'";var pngTest=new RegExp((window.IE7_PNG_SUFFIX||"-trans.png")+"$","i");function addFilter(element,src){element.runtimeStyle.filter=FILTER.replace(/%1/,src)};var MATCH=/background(-image)?\s*:([^(};]*)url\(([^\)]+)\)([^;}]*)/gi;CSSFixes.addFix(MATCH,function replace(match,image,prefix,url,suffix){url=getString(url);return pngTest.test(url)?"filter:"+FILTER.replace(/scale/,"crop").replace(/%1/,url)+";zoom:1;background"+(image||"")+":"+(prefix||"")+"none"+(suffix||""):match});if(HTMLFixes){function fixImg(element){if(pngTest.test(element.src)){var width=element.width,height=element.height;addFilter(element,element.src);element.src=NULL;element.width=width;element.height=height}else element.runtimeStyle.filter=""};HTMLFixes.add("img,input",function(element){if(element.tagName=="INPUT"&&element.type!="image")return;fixImg(element);addEventHandler(element,"onpropertychange",function(){if(event.propertyName=="src")fixImg(element)})})}});

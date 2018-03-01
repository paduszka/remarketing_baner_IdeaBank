// Setup namespace for ad.
var creative = {};

creative.init = function () {
creative.setupDOMElements();

  if (Enabler.isInitialized())
  {

    if (Enabler.isVisible())
	{
      creative.enablerInitHandler();
    }
	else
	{
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,creative.enablerInitHandler);
    }
  }
  else
  {
    Enabler.addEventListener(studio.events.StudioEvent.INIT,creative.enablerInitHandler);
  }
};

// Daclaration of objects

creative.setupDOMElements = function ()
{
  creative.domElements = {};
  creative.domElements.item_1 = document.getElementById('box1');
  creative.domElements.item_2 = document.getElementById('box2');
  creative.domElements.item_3 = document.getElementById('box3');
  creative.domElements.box_over1 = document.getElementById('box_over1');
  creative.domElements.box_over2 = document.getElementById('box_over2');
  creative.domElements.box_over3 = document.getElementById('box_over3');
  creative.domElements.img_1 = document.getElementById('img1');
  creative.domElements.img_2 = document.getElementById('img2');
  creative.domElements.img_3 = document.getElementById('img3');
  creative.domElements.title_1 = document.getElementById('title1');
  creative.domElements.title_2 = document.getElementById('title2');
  creative.domElements.title_3 = document.getElementById('title3');
  creative.domElements.sub_title_1 = document.getElementById('subtitle1');
  creative.domElements.sub_title_2 = document.getElementById('subtitle2');
  creative.domElements.sub_title_3 = document.getElementById('subtitle3');
  creative.domElements.bg = document.getElementById('bg');
  creative.domElements.btn = document.getElementById('btn');
};

// Daclaration of listeners

creative.enablerInitHandler = function (event)
{
 creative.dynamicDataAvailable();
 creative.domElements.bg.addEventListener('click', creative.ctaClick1);
 creative.domElements.btn.addEventListener('click', creative.ctaClick2);
 creative.domElements.box_over1.addEventListener('click', creative.ctaClick3);
 creative.domElements.box_over2.addEventListener('click', creative.ctaClick4);
 creative.domElements.box_over3.addEventListener('click', creative.ctaClick5);

 creative.domElements.box_over1.addEventListener('mouseover', creative.over1);
 creative.domElements.box_over2.addEventListener('mouseover', creative.over2);
 creative.domElements.box_over3.addEventListener('mouseover', creative.over3);
 creative.domElements.bg.addEventListener('mouseover', creative.over4);
 creative.domElements.btn.addEventListener('mouseover', creative.over5);


  creative.showAd();

  if (Enabler.isPageLoaded())
  {
    creative.pageLoadHandler();
  }
  else
  {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, creative.pageLoadHandler);
  }
};
// Daclaration of dynamic content

creative.dynamicDataAvailable = function ()
{
  Enabler.setProfileId(10028032);
var devDynamicContent = {};

devDynamicContent.IB_feed_kredyt_dla_firm_v1= [{},{},{}];
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0]._id = 0;
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].produkt = "Kredyt FAIR \u2013 kredyt firmowy dla nowych Klient\u00F3w";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].skrocona_nazwa_produktu = "Kredyt FAIR";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].skrocony_opis = "Kredyt firmowy dla nowych Klient\u00F3w";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].URL = {};
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].URL.Url = "https://www.ideabank.pl/tani-kredyt-online-fair";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].Image_url = {};
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].Image_url.Url = "https://www.ideabank.pl/uploads/img/kredyt-fair-kredyt-firmowy-dla-nowych-klientow-2.jpg";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].działalnosc_gospodarcza = true;
devDynamicContent.IB_feed_kredyt_dla_firm_v1[0].dsotepny = true;
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].produkt = "Kredyt FAIR \u2013 kredyt firmowy dla nowych Klient\u00F3w";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].skrocona_nazwa_produktu = "Kredyt FAIR";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].skrocony_opis = "Kredyt firmowy dla nowych Klient\u00F3w";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].URL = {};
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].URL.Url = "https://www.ideabank.pl/tani-kredyt-online-fair";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].Image_url = {};
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].Image_url.Url = "https://www.ideabank.pl/uploads/img/kredyt-fair-kredyt-firmowy-dla-nowych-klientow-2.jpg";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].działalnosc_gospodarcza = true;
devDynamicContent.IB_feed_kredyt_dla_firm_v1[1].dsotepny = true;
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].produkt = "Kredyt FAIR \u2013 kredyt firmowy dla nowych Klient\u00F3w";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].skrocona_nazwa_produktu = "Kredyt FAIR";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].skrocony_opis = "Kredyt firmowy dla nowych Klient\u00F3w";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].URL = {};
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].URL.Url = "https://www.ideabank.pl/tani-kredyt-online-fair";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].Image_url = {};
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].Image_url.Url = "https://www.ideabank.pl/uploads/img/kredyt-fair-kredyt-firmowy-dla-nowych-klientow-2.jpg";
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].działalnosc_gospodarcza = true;
devDynamicContent.IB_feed_kredyt_dla_firm_v1[2].dsotepny = true;
Enabler.setDevDynamicContent(devDynamicContent);

  creative.dd1 = dynamicContent.IB_feed_kredyt_dla_firm_v1[0];
  creative.dd2 = dynamicContent.IB_feed_kredyt_dla_firm_v1[1];
  creative.dd3 = dynamicContent.IB_feed_kredyt_dla_firm_v1[2];
};

/// Set dynamic data for object

creative.pageLoadHandler = function (event)
{
	creative.domElements.img_1.style.backgroundImage = "url('"+creative.dd1.Image_url.Url+"')";
	creative.domElements.img_2.style.backgroundImage = "url('"+creative.dd2.Image_url.Url+"')";
	creative.domElements.img_3.style.backgroundImage = "url('"+creative.dd3.Image_url.Url+"')";

	creative.domElements.title_1.innerHTML = creative.dd1.skrocona_nazwa_produktu;
	creative.domElements.title_2.innerHTML = creative.dd2.skrocona_nazwa_produktu;
	creative.domElements.title_3.innerHTML = creative.dd3.skrocona_nazwa_produktu;

	creative.domElements.sub_title_1.innerHTML = creative.dd1.skrocony_opis;
	creative.domElements.sub_title_2.innerHTML = creative.dd2.skrocony_opis;
	creative.domElements.sub_title_3.innerHTML = creative.dd3.skrocony_opis;


};
// Set events

//bg
creative.ctaClick1 = function (event)
{
	Enabler.exitOverride('rem klik w tlo','https://www.ideabank.pl/ranking-kredytow-dla-firm?utm_source=all&utm_medium=display&utm_content=studio&utm_campaign=9308964-kredyty&affid=N30306.123456STUDIO&vmp=vm');
};
//button
creative.ctaClick2 = function (event)
{
	Enabler.exitOverride('rem klik w button','https://www.ideabank.pl/ranking-kredytow-dla-firm?utm_source=all&utm_medium=display&utm_content=studio&utm_campaign=9308964-kredyty&affid=N30306.123456STUDIO&vmp=vm');
};

creative.ctaClick3 = function (event)
{
	Enabler.exitOverride('rem 1', creative.dd1.URL.Url+'?utm_source=all&utm_medium=display&utm_content=studio&utm_campaign=9308964-kredyty&affid=N30306.123456STUDIO&vmp=vm');
};

creative.ctaClick4 = function (event)
{
	Enabler.exitOverride('rem 2', creative.dd2.URL.Url+'?utm_source=all&utm_medium=display&utm_content=studio&utm_campaign=9308964-kredyty&affid=N30306.123456STUDIO&vmp=vm');
};

creative.ctaClick5 = function (event)
{
	Enabler.exitOverride('rem 3', creative.dd3.URL.Url+'?utm_source=all&utm_medium=display&utm_content=studio&utm_campaign=9308964-kredyty&affid=N30306.123456STUDIO&vmp=vm');
};

// Set auto rotation function

var visibleEnable = false;
var visibleCheck  = 1;
var myInter = setInterval(function() {creative.interval()}, 2000);

creative.interval = function()
{
	 if(visibleCheck == 1)
	 {
		 creative.domElements.box_over1.style.opacity = 1;
		 creative.domElements.box_over2.style.opacity = 0;
		 creative.domElements.box_over3.style.opacity = 0;
		 visibleCheck  = 2;
	 }

	 else if(visibleCheck == 2)
	 {
		 creative.domElements.box_over1.style.opacity = 0;
		 creative.domElements.box_over2.style.opacity = 1;
		 creative.domElements.box_over3.style.opacity = 0;
		 visibleCheck  = 3;
	 }

	 else if(visibleCheck == 3)
	 {
		 creative.domElements.box_over1.style.opacity = 0;
		 creative.domElements.box_over2.style.opacity = 0;
		 creative.domElements.box_over3.style.opacity = 1;
		 visibleCheck  = 1;
	 }
};

creative.over1 = function (event)
{
	clearInterval(myInter);
	creative.domElements.box_over1.style.opacity = 1;
	creative.domElements.box_over2.style.opacity = 0;
	creative.domElements.box_over3.style.opacity = 0;
};

creative.over2 = function (event)
{
	clearInterval(myInter);
	creative.domElements.box_over1.style.opacity = 0;
	creative.domElements.box_over2.style.opacity = 1;
	creative.domElements.box_over3.style.opacity = 0;
};

creative.over3 = function (event)
{
	clearInterval(myInter);
	creative.domElements.box_over1.style.opacity = 0;
	creative.domElements.box_over2.style.opacity = 0;
	creative.domElements.box_over3.style.opacity = 1;
};

creative.over4 = function (event)
{
	clearInterval(myInter);
	creative.domElements.box_over1.style.opacity = 0;
	creative.domElements.box_over2.style.opacity = 0;
	creative.domElements.box_over3.style.opacity = 0;
};


// Is triggered when the background image in polite.js was fully loaded.

creative.showAd = function ()
{
  document.getElementById('content').className = "show";
  document.getElementById('loader').className = "hide";
};

// Start creative once all elements in window are loaded.

window.addEventListener('load', creative.init.bind(creative));

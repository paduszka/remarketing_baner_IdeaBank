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
  creative.domElements.hotel_label1 = document.getElementById('hotel_label1');
  creative.domElements.hotel_label2 = document.getElementById('hotel_label2');
  creative.domElements.hotel_label3 = document.getElementById('hotel_label3');
  creative.domElements.hotel_label1b = document.getElementById('hotel_label1b');
  creative.domElements.hotel_label2b = document.getElementById('hotel_label2b');
  creative.domElements.hotel_label3b = document.getElementById('hotel_label3b');
  creative.domElements.img_1 = document.getElementById('img1');
  creative.domElements.img_2 = document.getElementById('img2');
  creative.domElements.img_3 = document.getElementById('img3');
  creative.domElements.price_1 = document.getElementById('price1');
  creative.domElements.price_2 = document.getElementById('price2');
  creative.domElements.price_3 = document.getElementById('price3');
  creative.domElements.title_1 = document.getElementById('title1');
  creative.domElements.title_2 = document.getElementById('title2');
  creative.domElements.title_3 = document.getElementById('title3');
  creative.domElements.sub_title_1 = document.getElementById('subtitle1');
  creative.domElements.sub_title_2 = document.getElementById('subtitle2');
  creative.domElements.sub_title_3 = document.getElementById('subtitle3');
  creative.domElements.bg = document.getElementById('bg');
};

// Daclaration of listeners

creative.enablerInitHandler = function (event)
{
 creative.dynamicDataAvailable();
 creative.domElements.box_over1.addEventListener('click', creative.ctaClick1);
 creative.domElements.box_over2.addEventListener('click', creative.ctaClick2);
 creative.domElements.box_over3.addEventListener('click', creative.ctaClick3);
 creative.domElements.bg.addEventListener('click', creative.ctaClick4);
 
 creative.domElements.box_over1.addEventListener('mouseover', creative.over1);
 creative.domElements.box_over2.addEventListener('mouseover', creative.over2);
 creative.domElements.box_over3.addEventListener('mouseover', creative.over3);
 creative.domElements.bg.addEventListener('mouseover', creative.over4);
 

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
    Enabler.setProfileId(1071768);
    var devDynamicContent = {};

    devDynamicContent.tui_doubleclick= [{},{},{}];
    devDynamicContent.tui_doubleclick[0]._id = 0;
    devDynamicContent.tui_doubleclick[0].id = ["VAR21052"];
    devDynamicContent.tui_doubleclick[0].name = "Erma";
    devDynamicContent.tui_doubleclick[0].summary = "\u015Aniadanie";
    devDynamicContent.tui_doubleclick[0].brand = "Erma";
    devDynamicContent.tui_doubleclick[0].price = 952;
    devDynamicContent.tui_doubleclick[0].all_inclusive = false;
    devDynamicContent.tui_doubleclick[0].url = {};
    devDynamicContent.tui_doubleclick[0].url.Url = "http://www.tui.pl/wypoczynek/bulgaria/riwiera-bulgarska/erma-var21052/OfferCodeWS/WAWBOJ20160915063520160915201609221030L07VAR21052DZZ1GA02";
    devDynamicContent.tui_doubleclick[0].image = {};
    devDynamicContent.tui_doubleclick[0].image.Url = "http://media.tui.pl/media/tuiimages/h9f/h90/9001917513758.jpg";
    devDynamicContent.tui_doubleclick[0].availability = true;
    devDynamicContent.tui_doubleclick[0].Country = ["Bu\u0142garia"];
    devDynamicContent.tui_doubleclick[0].Region = "Riwiera Bu\u0142garska";
    devDynamicContent.tui_doubleclick[0].City = "Z\u0142ote Piaski";
    devDynamicContent.tui_doubleclick[0].HotelName = "Erma";
    devDynamicContent.tui_doubleclick[0].RoomDescription = "";
    devDynamicContent.tui_doubleclick[0].Category = "Oferta katalogowa";
    devDynamicContent.tui_doubleclick[0].Duration = 7;
    devDynamicContent.tui_doubleclick[0].DeparturePlace = "Varna";
    devDynamicContent.tui_doubleclick[0].DepartureDate = "";
    devDynamicContent.tui_doubleclick[0].ServiceDescription = "\u015Aniadanie";
    devDynamicContent.tui_doubleclick[0].Rating = 3.0;
    devDynamicContent.tui_doubleclick[0].hotel_rodzinny = false;
    devDynamicContent.tui_doubleclick[0].hotel_premium = false;
    devDynamicContent.tui_doubleclick[1].id = ["VAR21052"];
    devDynamicContent.tui_doubleclick[1].name = "Erma";
    devDynamicContent.tui_doubleclick[1].summary = "\u015Aniadanie";
    devDynamicContent.tui_doubleclick[1].brand = "Erma";
    devDynamicContent.tui_doubleclick[1].price = 952;
    devDynamicContent.tui_doubleclick[1].all_inclusive = false;
    devDynamicContent.tui_doubleclick[1].url = {};
    devDynamicContent.tui_doubleclick[1].url.Url = "http://www.tui.pl/wypoczynek/bulgaria/riwiera-bulgarska/erma-var21052/OfferCodeWS/WAWBOJ20160915063520160915201609221030L07VAR21052DZZ1GA02";
    devDynamicContent.tui_doubleclick[1].image = {};
    devDynamicContent.tui_doubleclick[1].image.Url = "http://media.tui.pl/media/tuiimages/h9f/h90/9001917513758.png";
    devDynamicContent.tui_doubleclick[1].availability = true;
    devDynamicContent.tui_doubleclick[1].Country = ["Bu\u0142garia"];
    devDynamicContent.tui_doubleclick[1].Region = "Riwiera Bu\u0142garska";
    devDynamicContent.tui_doubleclick[1].City = "Z\u0142ote Piaski";
    devDynamicContent.tui_doubleclick[1].HotelName = "Erma";
    devDynamicContent.tui_doubleclick[1].RoomDescription = "";
    devDynamicContent.tui_doubleclick[1].Category = "Oferta katalogowa";
    devDynamicContent.tui_doubleclick[1].Duration = 7;
    devDynamicContent.tui_doubleclick[1].DeparturePlace = "Varna";
    devDynamicContent.tui_doubleclick[1].DepartureDate = "";
    devDynamicContent.tui_doubleclick[1].ServiceDescription = "\u015Aniadanie";
    devDynamicContent.tui_doubleclick[1].Rating = 3.0;
    devDynamicContent.tui_doubleclick[1].hotel_rodzinny = false;
    devDynamicContent.tui_doubleclick[1].hotel_premium = true;
    devDynamicContent.tui_doubleclick[2].id = ["VAR21052"];
    devDynamicContent.tui_doubleclick[2].name = "Erma";
    devDynamicContent.tui_doubleclick[2].summary = "\u015Aniadanie";
    devDynamicContent.tui_doubleclick[2].brand = "Erma";
    devDynamicContent.tui_doubleclick[2].price = 952;
    devDynamicContent.tui_doubleclick[2].all_inclusive = false;
    devDynamicContent.tui_doubleclick[2].url = {};
    devDynamicContent.tui_doubleclick[2].url.Url = "http://www.tui.pl/wypoczynek/bulgaria/riwiera-bulgarska/erma-var21052/OfferCodeWS/WAWBOJ20160915063520160915201609221030L07VAR21052DZZ1GA02";
    devDynamicContent.tui_doubleclick[2].image = {};
    devDynamicContent.tui_doubleclick[2].image.Url = "http://media.tui.pl/media/tuiimages/h9f/h90/9001917513758.jpg";
    devDynamicContent.tui_doubleclick[2].availability = true;
    devDynamicContent.tui_doubleclick[2].Country = ["Bu\u0142garia"];
    devDynamicContent.tui_doubleclick[2].Region = "Riwiera Bu\u0142garska";
    devDynamicContent.tui_doubleclick[2].City = "Z\u0142ote Piaski";
    devDynamicContent.tui_doubleclick[2].HotelName = "Erma";
    devDynamicContent.tui_doubleclick[2].RoomDescription = "";
    devDynamicContent.tui_doubleclick[2].Category = "Oferta katalogowa";
    devDynamicContent.tui_doubleclick[2].Duration = 7;
    devDynamicContent.tui_doubleclick[2].DeparturePlace = "Varna";
    devDynamicContent.tui_doubleclick[2].DepartureDate = "";
    devDynamicContent.tui_doubleclick[2].ServiceDescription = "\u015Aniadanie";
    devDynamicContent.tui_doubleclick[2].Rating = 3.0;
    devDynamicContent.tui_doubleclick[2].hotel_rodzinny = true;
    devDynamicContent.tui_doubleclick[2].hotel_premium = true;
    Enabler.setDevDynamicContent(devDynamicContent);

  creative.dd1 = dynamicContent.tui_doubleclick[0];
  creative.dd2 = dynamicContent.tui_doubleclick[1];
  creative.dd3 = dynamicContent.tui_doubleclick[2];
};

/// Set dynamic data for object

creative.pageLoadHandler = function (event)
{
	creative.domElements.img_1.style.backgroundImage = "url('"+creative.dd1.image.Url+"')";
	creative.domElements.img_2.style.backgroundImage = "url('"+creative.dd2.image.Url+"')";
	creative.domElements.img_3.style.backgroundImage = "url('"+creative.dd3.image.Url+"')";
	
	creative.domElements.price_1.innerHTML = creative.dd1.price+" zł / "+creative.dd1.Duration+" dni";
	creative.domElements.price_2.innerHTML = creative.dd2.price+" zł / "+creative.dd1.Duration+" dni";
	creative.domElements.price_3.innerHTML = creative.dd3.price+" zł / "+creative.dd1.Duration+" dni";
	
	creative.domElements.title_1.innerHTML = creative.dd1.name;
	creative.domElements.title_2.innerHTML = creative.dd2.name;
	creative.domElements.title_3.innerHTML = creative.dd3.name;
	
	creative.domElements.sub_title_1.innerHTML = creative.dd1.Country;
	creative.domElements.sub_title_2.innerHTML = creative.dd2.Country;
	creative.domElements.sub_title_3.innerHTML = creative.dd3.Country;
	
	// set label for hotel 1
	
	if(creative.dd1.hotel_rodzinny == true && creative.dd1.hotel_premium == true)
	{
		creative.domElements.hotel_label1.style.background="url(add2.png)"
		creative.domElements.hotel_label1b.style.background="url(add3.png)"
	}
	else if(creative.dd1.hotel_rodzinny == true)
	{
		creative.domElements.hotel_label1.style.background="url(add3.png)";
	}
	else if(creative.dd1.hotel_premium == true)
	{
		creative.domElements.hotel_label1.style.background="url(add2.png)";
	}
	else
	{
		creative.domElements.hotel_label1.style.background="url(add1.png)";
	}
	
	// set label for hotel 2
	
	if(creative.dd2.hotel_rodzinny == true && creative.dd2.hotel_premium == true)
	{
		creative.domElements.hotel_label2.style.background="url(add2.png)"
		creative.domElements.hotel_label2b.style.background="url(add3.png)"
	}
	else if(creative.dd2.hotel_rodzinny == true)
	{
		creative.domElements.hotel_label2.style.background="url(add3.png)";
	}
	else if(creative.dd2.hotel_premium == true)
	{
		creative.domElements.hotel_label2.style.background="url(add2.png)";
	}
	else
	{
		creative.domElements.hotel_label2.style.background="url(add1.png)";
	}
	
	// set label for hotel 3
	
	if(creative.dd3.hotel_rodzinny == true && creative.dd3.hotel_premium == true)
	{
		creative.domElements.hotel_label3.style.background="url(add2.png)"
		creative.domElements.hotel_label3b.style.background="url(add3.png)"
	}
	else if(creative.dd3.hotel_rodzinny == true)
	{
		creative.domElements.hotel_label3.style.background="url(add3.png)";
	}
	else if(creative.dd3.hotel_premium == true)
	{
		creative.domElements.hotel_label3.style.background="url(add2.png)";
	}
	else
	{
		creative.domElements.hotel_label3.style.background="url(add1.png)";
	}
	
};

// Set events

creative.ctaClick1 = function (event)
{
	Enabler.exitOverride('rem 1', creative.dd1.url.Url+'?utm_medium=valuemedia&utm_source=wp&utm_campaign=2017-12-26-remarketing&utm_term=ff-sg-sport-cb-xl&utm_content=970x600.html');
};

creative.ctaClick2 = function (event)
{
	Enabler.exitOverride('rem 2', creative.dd2.url.Url+'?utm_medium=valuemedia&utm_source=wp&utm_campaign=2017-12-26-remarketing&utm_term=ff-sg-sport-cb-xl&utm_content=970x600.html');
};

creative.ctaClick3 = function (event)
{
	Enabler.exitOverride('rem 3', creative.dd3.url.Url+'?utm_medium=valuemedia&utm_source=wp&utm_campaign=2017-12-26-remarketing&utm_term=ff-sg-sport-cb-xl&utm_content=970x600.html');
};

creative.ctaClick4 = function (event)
{
	Enabler.exitOverride('rem klik w tlo','http://www.tui.pl/last-minute?utm_medium=valuemedia&utm_source=wp&utm_campaign=2017-12-26-remarketing&utm_term=ff-sg-sport-cb-xl&utm_content=970x600.html');
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

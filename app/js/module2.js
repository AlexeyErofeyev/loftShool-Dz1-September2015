
	var BlueScreen =  (function ( ) {
		var blue = document.createElement('div');
		var blueLink = document.createElement('a');

		blueLink.style.position = 'absolute';
		blueLink.style.backgroundImage = 'url(../img/screenBG.png)';
		blueLink.style.width = '100%';
		blueLink.style.height = '100%';
		blueLink.style.top = '0px';
		blueLink.style.display = 'block';
		blueLink.href = '#';

		if((/msie 8./i).test(navigator.appVersion)){
		blueLink.setAttribute('class','opasity');
		};
			

		blue.innerHTML = "Название";
		blue.style.width = '70px';
		blue.style.height = '20px'
		blue.style.border = '2px solid #ffffff';
		blue.style.borderRadius = '4px';
		blue.style.padding = '1px 3px 0px 3px';
		blue.style.lineHeight = '20px';
		blue.style.color = '#ffffff';
		blue.style.margin = '50px auto 0px auto'

		blueLink.appendChild(blue);
		
    return {
    	active : function () {
		$('.screen').hover(function() {
			$(this).append(blueLink);
		}, function() {
			$(this).find('a').remove();
		});
    
    }
};
}());


var AddProject =  (function ( ) {
		var  screenProject = $('.screenProject'),
			 popup = $('.popup'),
			 popupBG = $('.popupBG'),
			 close = $('.close');
		var openPopup = function () {
			popupBG.fadeIn(500, function() {
				popup.fadeIn(700);
			});
		};
		var closePopup = function () {
			popupBG.fadeOut(500);
		}
		
    return {
    	active : function () {
		screenProject.click(openPopup);
		close.click(closePopup);
    
    }
};
}());

BlueScreen.active();
AddProject.active()


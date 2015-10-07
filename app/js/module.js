
	var BlueScreen =  (function ( ) {

		var Screen = document.getElementById('info').getElementsByTagName('div');
		var blue = document.createElement('div');
		var blueLink = document.createElement('a');

		function blueSreen () {		
		
		blueLink.style.position = 'absolute';
		blueLink.style.backgroundImage = 'url(../img/screenBG.png)'; 
		blueLink.style.width = '100%';
		blueLink.style.height = '100%';
		blueLink.style.top = '0px';
		blueLink.style.display = 'block';
		blueLink.href = '#';

		// var i = 0;
		//  var opacity = function () {
		// 	if(i<=1){
		// 		i = i + 0.1;
		// 		var x = (i+'0').slice(0, 3);
		// blueLink.style.opacity = x;
		// 		console.log(blueLink.style.opacity);
				
		// 	}
		// };

		// setInterval(opacity,50);
		// Не совсем так как надо!!!		

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
		this.appendChild(blueLink);

		};

		function deleteBlueScreen () {
			blueLink.parentNode.removeChild(blueLink);
		};

    return {
    	active : function () {
    for (var i = Screen.length - 1; i >= 0; i--) {
		if(Screen[i].className == 'screen'){
			Screen[i].addEventListener('mouseover',blueSreen,false);
			Screen[i].addEventListener('mouseleave',deleteBlueScreen,false);
			}
		};
    }
};
}());

BlueScreen.active();


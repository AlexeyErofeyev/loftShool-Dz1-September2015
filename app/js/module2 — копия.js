var Face =  (function ( ) {
		if((/msie 8./i).test(navigator.appVersion)){
	  	var face = document.getElementById('face');
		var foto = document.getElementById('foto');
		
		}
		
    return {
    	active : function () {
		if(face){
			face.style.border = 'none';
			foto.src = 'img/MyFace.png';
			};
    
    }
};
}());


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

		var HoverScreen = function() {
			$(this).append(blueLink);
		};

		var LiveScreen = function() {
			$(this).find('a').remove();
		};
		
    return {
    	active : function () {
		$('.screen').hover(HoverScreen, LiveScreen);
    
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
			$(':input:not(":submit")').val('').tooltipster('hide');
		}
		
    return {
    	active : function () {
		screenProject.click(openPopup);
		close.click(closePopup);
    
    }
};
}());


var FormValidate =  (function ( ) {
	var leftTool = {
		theme : 'loftToolTip',
		animation: 'grow',
		delay: 1000,
		touchDevices: false,
		trigger: 'none',
		speed: 1000,
		position: 'left'
	};

	var rightTool = {
		theme : 'loftToolTip',
		animation: 'swing',
		delay: 1000,
		touchDevices: false,
		trigger: 'none',
		speed: 1000,
		position: 'right'
	}

	var errorTips = function(e) {
					e.preventDefault();



			$(":input").each(function() {
				if($(this).attr('data-position') === 'right'){

					$(this).tooltipster(rightTool);

					if($(this).val() ===''){

					$(this).tooltipster('show');
					e.preventDefault();
					// if((/msie 8./i).test(navigator.appVersion)){
					// 	e.returnValue = false;
					// } else {
					// 	e.preventDefault();
					// }
				} else {

					$(this).tooltipster('hide');

				}
				} else if($(this).attr('data-position') === 'left')
				 {
					$(this).tooltipster(leftTool);

					if($(this).val() ===''){

					$(this).tooltipster('show');
					e.preventDefault();
					// if((/msie 8./i).test(navigator.appVersion)){
					// 	e.returnValue = false;
					// } else {
					// 	e.preventDefault();
					// }

				} else {

					$(this).tooltipster('hide');
				}
				}
				
			});

var emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

			/*****************************************************************/
			var myNewContent = 'Не корректно введен Email'
			if(emailRegExp.test($('.Email').val()) || $('.Email').val() === '' ) {
			console.log('Good Email');
		} else {
			if((/msie 8./i).test(navigator.appVersion)){
						e.returnValue = false;
					} else {
						e.preventDefault();
					}
			 	$('.Email').tooltipster('hide');
			 if($('.Email').attr('data-position') === 'right'){
			 	$('.Email').tooltipster(leftTool);
			 	$('.Email').tooltipster('show',function () {
			 		$('.Email').tooltipster('content', myNewContent);
			 	});
			} else {}

		}
    
    };

    var focusTips = function() {
			$(this).tooltipster('hide');
				$(this).blur(function() {
					if($(this).val() ===''){
						$(this).tooltipster(rightTool);
						$(this).tooltipster('show');
					} 
						
				});
			
				   
		};

		
    return {
    	active : function () {
		$('.MyForm').submit(errorTips);
		$(":input").focus(focusTips);
    }
};
}());


var FormClean =  (function ( ) {

		var reset = function () {
			$(":input").tooltipster('hide');
		};
		
    return {
    	active : function () {
		$(':reset').click(reset);
    
    }
};
}());





var FormSender =  (function ( ) {

	// 	function _setUpListners () {
	// 		$('.MyForm').submit(_showResult);
	// };

	function _showResult (e) {
		e.preventDefault();
		// if((/msie 8./i).test(navigator.appVersion)){
		// 				e.returnValue = false;
		// 			} else {
		// 				e.preventDefault();
		// 			}

		var form = $(this);
		


		var defObj = _ajaxForm(form); 
		defObj.done(function(FormData){

			for (var key in FormData) {
  			console.log(key + " = " + FormData[key]);
		}
		});
};

		function _ajaxForm (form) {

		var url = form.attr('action');
		var data = form.serialize();

			return $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data
		}).fail( function(){
			console.log('Проблемы на стороне сервера');
		});
		}
	


	


    return {
    	active : function () {
		$('.MyForm').submit(_showResult);

    
    }
};
}());

Face.active();
BlueScreen.active();
AddProject.active();
FormValidate.active();
FormClean.active();
FormSender.active();


jQuery(document).ready(function($) {
	

var Face =  (function ( ) {
		if((/msie 8./i).test(navigator.appVersion)){
	  	var face = document.getElementById('face');
		var foto = document.getElementById('foto');		
		};

var change = function () {
		if(face){
			face.style.border = 'none';
			foto.src = 'img/MyFace.png';
			};
    
    };		
		
    return {
    	active : change
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
		var hover = function () {
		$('.screen').hover(HoverScreen, LiveScreen);
    
    };
    return {
    	active : hover
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
		};
		var activePopup = function () {
		screenProject.click(openPopup);
		close.click(closePopup);
    
    };
		
    return {
    	active : activePopup
};
}());

var tooltipsterObj =  (function ( ) {
		var leftTool = {
		theme : 'loftToolTip',
		animation: 'grow',
		delay: 1000,
		touchDevices: false,
		trigger: 'none',
		speed: 1000,
		position: 'left',
		multiple: true
	};

	var rightTool = {
		theme : 'loftToolTip',
		animation: 'swing',
		delay: 1000,
		touchDevices: false,
		trigger: 'none',
		speed: 1000,
		position: 'right',
		multiple: true
	}
		
    return {
    	leftTool : leftTool,
    	rightTool : rightTool
};
}());



var FormValidate =  (function ( ) {

	var logic = {
	 activateValidate : function () {
		$('.MyForm').on('submit',logic.errorTips);
    		},


	 errorTips : function (e) {

			(typeof e.preventDefault() !== 'undefined')? e.returnValue = false : e.preventDefault();
			var emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	
			$(":input:not(.Email,.submit,.reset)").each(function() {
				if($(this).val() ===''){//1
					FocusFild.active();//Удаление Tooltip при фокусировке на input
					if($(this).attr('data-position') === 'right'){//2
						$(this).tooltipster(tooltipsterObj.rightTool);
						$(this).tooltipster('show');
					}else {//2
						$(this).tooltipster(tooltipsterObj.leftTool);
						$(this).tooltipster('show');
					}//2
				} else if($(this).val() !=='' && emailRegExp.test($('.Email').val())){//1
					console.log('good form');
					FormSender.active();
				}//1 
			});
    		

    		    }

    }
			
				   

		
    return {
    	active : logic.activateValidate
};
}());



var FocusFild =  (function ( ) {
		var activateFocus = function () {		
    $(":input:not(.submit,.reset)").focus(focusTips);
			
		
    }
		 var focusTips = function() {  
		 	

			$(this).tooltipster('hide');
				$(this).blur(function() {
					if($(this).val() ===''){
						$(this).tooltipster('show');
					} 
						
				});
		 	
    	
    	}
    return {
    	active : activateFocus
};
}());




var MailValid =  (function (e) {
			

	var emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	var notValidEmail = 'Не корректно введен Email';
	var enterEmail = 'Введите Email';


		var checkMail = function () {
			var permission;
		if(emailRegExp.test($('.Email').val())){
			(/msie 8./i).test(navigator.appVersion)?alert('Good Email') : console.log('Good Email');
		} else {
			if($('.Email').val() ===''){
				
				if($('.Email').attr('data-position') === 'left'){
					$('.Email').tooltipster(tooltipsterObj.leftTool);
					$('.Email').tooltipster('content', enterEmail).tooltipster('show');
				} else {
					$('.Email').tooltipster(tooltipsterObj.rightTool);
					$('.Email').tooltipster('content', enterEmail).tooltipster('show');
				}
				
			} else {
				
				if($('.Email').attr('data-position') === 'left'){
					$('.Email').tooltipster(tooltipsterObj.leftTool);
					$('.Email').tooltipster('content', notValidEmail).tooltipster('show');
				} else {
					$('.Email').tooltipster(tooltipsterObj.rightTool);
					$('.Email').tooltipster('content', notValidEmail).tooltipster('show');
				}
				
			}
				}
		}




			
		
		
    return {
    	active : function () {

		$('.MyForm').on('submit',checkMail);
    
    }
};
}());





var FormClean =  (function ( ) {
			

		var reset = function () {
		
			$(":input:not(.submit,.reset)").tooltipster('hide');
		}
		
			
			
	var	clean = function () {
		$(':reset').click(reset);
    
    }
		
    return {
    	active : clean
};
}());





var FormSender =  (function ( ) {


	function _showResult (e) {
		
		
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
			(/msie 8./i).test(navigator.appVersion)?alert('Проблемы на стороне сервера') : console.log('Проблемы на стороне сервера');
		});
		}

	


    return {
    	active : _showResult
};
}());

Face.active();// Замна фото на главной странице
BlueScreen.active();//Активация ссылок при наведении на фото проекта
AddProject.active();// Открытие и закрытие POPUP
FormValidate.active();// Валидация формы
MailValid.active();//Валидация поля Email
FormClean.active();//У даление Tooltip при нажатии кнопки очистить
});
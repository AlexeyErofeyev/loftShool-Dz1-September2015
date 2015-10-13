jQuery(document).ready(function($) {
	

var Face =  (function ( ) {
		if((/msie 8./i).test(navigator.appVersion)){
	  	var face = document.getElementById('face');
		var foto = document.getElementById('foto');		
		};
														//Замена Моего Фото, думаю пояснений не требует
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
		var blue = document.createElement('div');		// Динамическое создание элементов Ссылки и Дива в котором будет "Название"
		var blueLink = document.createElement('a');

		blueLink.style.position = 'absolute';
		blueLink.style.backgroundImage = 'url(../img/screenBG.png)';	// Навесил стили на Сылку
		blueLink.style.width = '100%';
		blueLink.style.height = '100%';
		blueLink.style.top = '0px';
		blueLink.style.display = 'block';
		blueLink.href = '#';

		if((/msie 8./i).test(navigator.appVersion)){
		blueLink.setAttribute('class','opasity');		// Т.К. ИЕ8 не поддерживает свойство OPASITY делаю через CSS
		};
			

		blue.innerHTML = "Название";
		blue.style.width = '70px';
		blue.style.height = '20px'
		blue.style.border = '2px solid #ffffff';
		blue.style.borderRadius = '4px';                    // Навесил стили на ДИВ
		blue.style.padding = '1px 3px 0px 3px';
		blue.style.lineHeight = '20px';
		blue.style.color = '#ffffff';
		blue.style.margin = '50px auto 0px auto'

		blueLink.appendChild(blue);

		var HoverScreen = function() {			        // Т.К. в ИЕ8 проблемы с THIS использую JQuery
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
			popupBG.fadeIn(500, function() {		// Открытие POPUP
				popup.fadeIn(700);
			});
		};
		var closePopup = function () {
			popupBG.fadeOut(500);
			$(':input.tooltipstered:not(":submit")').val('').tooltipster('hide'); // Закрытие POPUP
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
													// Настройки ТУЛТИПОВ у моего плагина нет такого метода который 
	var rightTool = {								// через атрибут понимает с какой стороны объекта показывать
		theme : 'loftToolTip',						// подсказку, но я сам его написал ниже будет видно
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



var FormValidate =  (function ( ) {		// Собственно сама валидация формы

	var logic = {
	 activateValidate : function () {
		$('.MyForm').on('submit',logic.errorTips);
    		},

	 errorTips : function (e) {

			(typeof e.preventDefault() !== 'undefined')? e.returnValue = false : e.preventDefault();  // Кросбраузерный  e.preventDefault()
			var prom;
	    	$(":input:not(.Email,.submit,.reset,.submitBTN,.subButn)").each(function() {  //  Выборка конечно что надо
				if($(this).val() ===''){//1
					FocusFild.active();// Активация модуля для удаление Tooltip при фокусировке на input
					if($(this).attr('data-position') === 'right'){//2
						$(this).tooltipster(tooltipsterObj.rightTool);
						$(this).tooltipster('show');
						
					}else {//2																	// Определяет для пустых полей с какой стороны показывать тултип  (КРОМЕ EМAIL, ОНИ ОСОБЕННЫЕ) 
						$(this).tooltipster(tooltipsterObj.leftTool);
						$(this).tooltipster('show');

					}//2
			  } else if(document.getElementById('Email') === null && $(".tooltipstered").length === 0 && document.getElementById('fileUpload') === null){//1					// Если все поля заполнены и поля с ID Email не существует на странице
			  		prom = true;
			  		
				 } else if(document.getElementById('fileUpload') !== null && document.getElementById('fileUpload').value !==''  ) {
				 	if($(".tooltipstered").length === 0 && $('.linkProject').val() !=='' && $('.ProjectDescription').val() !==''){
						prom = true;
				 		
				 	}
																			// то присваеваем этой переменной true
						}
				  
			});
    			prom ? FormSender.active() : 'Просто строка чтоб JS не ругался на отсутствие третьего аргумента' ; // Если она true то оправляем форму

    		    }

     }
			
				   

		
    return {
    	active : logic.activateValidate
};
}());



var FocusFild =  (function ( ) {
	var emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/; 
		var activateFocus = function () {		
    $(":input:not(.submit,.reset,.subButn)").focus(focusTips);
			
		
    }
		 var focusTips = function() {  
		 	
		 		if($(this).val() === ''){
			$(this).tooltipster('hide').removeClass("tooltipstered");								// Модуль удаляет тултипы у элементов на которых
				$(this).blur(function() {								// происходит фокусировка и выводит их обратно 
					if($(this).val() ===''){							// если поле осталось пустым
						$(this).tooltipster('show').addClass("tooltipstered");					// Активация модуля происходит после событя SUBMIT на любой из форм сайта
					} 
						
				});
		 	
    	} else if(!emailRegExp.test($('.Email').val())){
    		$('.Email').tooltipster('hide').removeClass("tooltipstered");								// Модуль удаляет тултипы у элементов на которых
				$('.Email').blur(function() {								// происходит фокусировка и выводит их обратно 
					if(!emailRegExp.test($('.Email').val())){							// если поле осталось пустым
						$('.Email').tooltipster('show').addClass("tooltipstered");					// Активация модуля происходит после событя SUBMIT на любой из форм сайта
					} 
						
				});
    	}
    	}
    return {
    	active : activateFocus
};
}());




var MailValid =  (function (e) {
			

	var emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/; 
	var notValidEmail = 'Не корректно введен Email';												// Регулярное выражение и текст тултипов
	var enterEmail = 'Введите Email';


		var checkMail = function () {
			
		if(emailRegExp.test($('.Email').val())){
				if($(".tooltipstered").length === 0){																										// Валидация
			FormSender.active();
			}
		} else {
			if($('.Email').val() === ''){
				
				if($('.Email').attr('data-position') === 'left'){
					$('.Email').tooltipster(tooltipsterObj.leftTool);
					$('.Email').tooltipster('content', enterEmail).tooltipster('show');
				} else {																	// В случае пустой строки
					$('.Email').tooltipster(tooltipsterObj.rightTool);
					$('.Email').tooltipster('content', enterEmail).tooltipster('show');
				}
				
			} else {																 
				
				if($('.Email').attr('data-position') === 'left'){
					$('.Email').tooltipster(tooltipsterObj.leftTool);
					$('.Email').tooltipster('content', notValidEmail).tooltipster('show');
				} else {																	// В случае не корректного Email
					$('.Email').tooltipster(tooltipsterObj.rightTool);
					$('.Email').tooltipster('content', notValidEmail).tooltipster('show');
				}
				
			}
				}
				//
		}



			var submit =function () {

		$('.MyForm').on('submit',checkMail);
    
    }
			
		
		
    return {
    	active : submit
};
}());





var FormClean =  (function ( ) {
			

		var reset = function () {
		
			$(":input.tooltipstered").tooltipster('hide');
		}
																// очистка формы
			
			
	var	clean = function () {
		$(':reset').click(reset);
    
    }
		
    return {
    	active : clean
};
}());





var FormSender =  (function ( ) {


	function _showResult (e) {
		
		
		var form = $('.MyForm');
		

		var defObj = _ajaxForm(form); 
				
		defObj.done(function(FormData){

			for (var key in FormData) {
  			console.log(key + " = " + FormData[key]);		// Отправка формы
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
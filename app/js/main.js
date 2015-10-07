(function  () {

	// var newProject = document.getElementById('screenProject');
	// var popupBG = document.getElementById('popupBG');
	// var close = document.getElementById('close');

/*****************/


/******************/	

		/**********POPUP**********************/
	function openPopup (e) {
		e.returnValue = false;
		popupBG.style.display = 'block';

		/************прверка формы*****************/
		var submitBTN = document.getElementById('submitBTN');
		var form = document.getElementById('form');
		var textArea = document.getElementsByTagName('textarea')[0];

		submitBTN.addEventListener('click',function (e) {
			for (var i = form.length - 1; i >= 0; i--) {
	 		if((/nameProject/i).test(form[i].className)){
	 			if(form[i].value ===''){
	 				e.preventDefault();
	 				var idError = document.getElementById('nameProject');
	 				idError.style.display = 'block';
	 			}
	 		} else if((/linkProject/i).test(form[i].className)){
	 			if(form[i].value ===''){
	 				e.preventDefault();
	 				var idError = document.getElementById('linkProject');
	 				idError.style.display = 'block';
	 			}
	 		}
	 	};
	 		 if((/ProjectDescription/i).test(textArea.className)){
	 		 	e.preventDefault();
	 				var idError = document.getElementById('ProjectDescription');
	 				idError.style.display = 'block';
	 		 };

	 	console.log(textArea);
		},false);
	 	
	/***********прверка формы*************/
	};
	function closePopup (e) {
		popupBG.style.display = 'none';
	};
	/**********POPUP**********************/
	/************Screen********************/

		

	/************Screen********************/

	if((/msie 8./i).test(navigator.appVersion)){// Для ie8
		/********* Замена фото****************/
	  	var face = document.getElementById('face');
		var foto = document.getElementById('foto');
		if(face){
			face.style.border = 'none';
			foto.src = 'img/MyFace.png';
			};
		/********* Замена фото****************/

		/**********POPUP**********************/		
		newProject.attachEvent('onclick',openPopup,false);
		close.attachEvent('onclick',closePopup,false);
		/**********POPUP**********************/	

		/************Screen********************/
    		for (var i = Screen.length - 1; i >= 0; i--) {
			if(Screen[i].className == 'screen'){
			Screen[i].attachEvent('onmouseover',function (event) {


			blue.style.position = 'absolute';
			blue.style.backgroundImage = 'url(../img/screenBG.png)'; 
			blue.style.width = '100%';
			blue.style.height = '100%';
			blue.style.top = '0px';
			// target.appendChild(blue);
			},false);
			Screen[i].attachEvent('onmouseleave',deleteBlueScreen,false);
		}
	};
			/************Screen********************/

		}//для ie8
		else{

			/**********POPUP**********************/
    		newProject.addEventListener('click',openPopup,false);
    		close.addEventListener('click',closePopup,false);
    		/**********POPUP**********************/

    		/************Screen********************/
    	
		}
	
			/************Screen********************/
    	

    	

})();
(function  () { 
	    	if((/msie 8./i).test(navigator.appVersion)){



    var pseudo = document.getElementById('navbar');
    var lastLi = pseudo.childNodes[pseudo.childNodes.length - 1];
    lastLi.className = 'myId';

	    		 var face = document.getElementById('face');
				 var foto = document.getElementById('foto');
				 face.style.border = 'none';
				 foto.src = 'img/MyFace.png';


    		};
        

})();
/*! lg-myrotate - v1.0.4 - 2017-12-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        rotate: true
    };

    
    var currentSlideIndex;
    var galleryId;
    var maxIndex;
    
    var Rotate = function(element) {

        this.core = $(element).data('lightGallery');
       
        
        this.$el = $(element);
        this.core.s = $.extend({}, defaults, this.core.s);
      
        this.init();
 
        return this;
    };

    Rotate.prototype.init = function() {
    	
    	 var rotateStr = '';
    	 var _this = this;
    	 
    	 if (this.core.s.rotate) {
    		

    		 rotateStr = '<span class="lg-showhidelgoptions lg-icon"><i class="fas fa-ellipsis-h"></i> </span> <div id="mylgfunctions" style="display:none;" ><span class="lg-myrotate1  lg-icon"><i class="fas fa-chevron-circle-right"></i></span><span class="lg-myrotate2  lg-icon"><i class="fas fa-chevron-circle-down"></i></span><span class="lg-myrotate3  lg-icon"><i class="fas fa-chevron-circle-left"></i></span><span class="lg-myrotate4  lg-icon"><i class="fas fa-chevron-circle-up"></i></span> ';
    		 
    		 rotateStr = rotateStr+	' <span class="lg-coloreffectsBrightnessPlus  lg-icon">  <i class="fa fa-sun"></i></span><span class="lg-coloreffectsBrightnessMinus ieOpacity lg-icon"><i class="fa fa-sun"></i></span> ';
    		 
    		 rotateStr = rotateStr+	' <span class="lg-coloreffectsContrastPlus  lg-icon"><i class="fas fa-adjust"></i></span><span class="lg-coloreffectsContrastMinus ieOpacity lg-icon"><i class="fas fa-adjust"></i></span> ';
    		 
    		 rotateStr = rotateStr+	' <span class="lg-coloreffectsSaturatePlus  lg-icon"><i class="fas fa-palette"></i></span><span class="lg-coloreffectsSaturateMinus ieOpacity lg-icon"><i class="fas fa-palette"></i></span> ';
     		
    		 rotateStr = rotateStr+	' <span class="lg-coloreffectsHuePlus  lg-icon fa-stack fa-3x"> <i class="fa fa-calendar-o fa-stack-2x"></i> <strong class="fa-stack-1x calendar-text">Hue</strong> </span>   <span class="lg-coloreffectsHueMinus ieOpacity  lg-icon fa-stack fa-3x"> <i class="fa fa-calendar-o fa-stack-2x"></i> <strong class="fa-stack-1x calendar-text">Hue</strong> </span>';
      		
    		 rotateStr = rotateStr+	' <span class="lg-coloreffectsInvertPlus  lg-icon fa-stack fa-3x"> <i class="fa fa-calendar-o fa-stack-2x"></i> <strong class="fa-stack-1x calendar-text">Inv</strong> </span>   <span class="lg-coloreffectsInvertMinus ieOpacity  lg-icon fa-stack fa-3x"> <i class="fa fa-calendar-o fa-stack-2x"></i> <strong class="fa-stack-1x calendar-text">Inv</strong> </span>';
       		
    		 rotateStr = rotateStr+	' <span class="lg-coloreffectsSepia ieYellow lg-icon"><i class="fas fa-square"></i></span> <span class="lg-coloreffectsGrayscale ieGray lg-icon"><i class="fas fa-square"></i></span> ';
    		
    		 rotateStr = rotateStr+	' <span class="lg-coloreffectsOriginal  lg-icon"><i class="far fa-square"></i></span> ';
        		
    		 rotateStr = rotateStr+	' <span class="lg-gotoslide lg-icon"><i class="far fa-share-square"></i></span> </div>';
    		 
    		 this.core.$outer.find('.lg-toolbar').append(rotateStr);
    		 this.rotate();
    		
    	 }
    	 
    	
        this.core.$el.on('onAfterSlide.lg', function(event, prevIndex, index) {
        	
        	galleryId = _this.core.s.galleryId;
            currentSlideIndex = index;
            
            maxIndex = _this.core.$items.length;
 
            var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
            img.attr('brightness', '100'); 
            img.attr('contrast', '100');
            img.attr('saturate', '100');
            img.attr('sepia', '0');
            img.attr('grayscale', '0');
            img.attr('hue', '0');
            img.attr('invert', '0');
           
            
           var thumbnails = _this.core.$outer.find('.lg-thumb-item');
           thumbnails.removeClass('active');
           thumbnails.eq(index).addClass('active');
            
        });
    };

    Rotate.prototype.destroy = function() {

    };

    Rotate.prototype.rotate = function() {
   
    	var _this = this;
    	var angle = 0;
    	
    	this.core.$outer.find('.lg-showhidelgoptions').on('click.lg', function() {
        	
    		var elem = document.getElementById('mylgfunctions');
    		
    		if( elem.style.display == "block") elem.style.display = "none";
    		else if( elem.style.display == "none") elem.style.display = "block";
        	
        });
    	
    	
        this.core.$outer.find('.lg-myrotate1').on('click.lg', function() {
        
        	var $image = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap');
  
        	angle = 90;
        	
        	$image.css('transform','rotate(' + angle + 'deg)');
        	$image.attr("rotationangle", angle);
        
        });
        
        this.core.$outer.find('.lg-myrotate2').on('click.lg', function() {
        	
        	var $image = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap');
        	
        	angle = 180;
        	$image.css('transform','rotate(' + angle + 'deg)');
       	
        });
        
        this.core.$outer.find('.lg-myrotate3').on('click.lg', function() {
        	
        	var $image = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap');
        	
      
        	angle = 270;
        	$image.css('transform','rotate(' + angle + 'deg)');
        	
        });
        
        this.core.$outer.find('.lg-myrotate4').on('click.lg', function() {
        	
        	var $image = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap');
 
        	angle = 360;
        	$image.css('transform','rotate(' + angle + 'deg)');
        
        });
 	 
		 
        /***
		var filter = 	'grayscale(' + grayscale+
		'%) blur(' + blur +
		'px) brightness(' + br +
		'%) contrast(' + ct +
		'%) hue-rotate(' + huer +
		'deg) opacity(' + opacity +
		'%) invert(' + invert +
		'%) saturate(' + saturate +
		'%) sepia(' + sepia + '%)';
		**/
		
        
        this.core.$outer.find('.lg-coloreffectsBrightnessPlus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
        	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		brightness = parseInt(brightness);
    		
    		brightness = brightness + 5;
  			
    		if(brightness > 300 ) brightness = 300;
    		
    		//if(brightness > 500 ) brightness = 500;
    		
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
  		    		
    		img.attr('brightness', brightness); 
    		
        });
        

        this.core.$outer.find('.lg-coloreffectsBrightnessMinus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
        	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		brightness = parseInt(brightness);
    		
    		brightness = brightness - 5;
   		
    		//if(brightness <= 0 ) brightness = 100;
    		
    		if(brightness <= 0 ) brightness = 0;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
  		    		
    		img.attr('brightness', brightness); 
    		
        });
        
        
        this.core.$outer.find('.lg-coloreffectsContrastPlus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');

        	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		contrast = parseInt(contrast);
    		
    		contrast = contrast + 5;
   		
    		//if(contrast > 200 ) contrast = 100;
    		
    		if(contrast > 200 ) contrast = 200;
    		
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('contrast', contrast); 
    		
        });
        

        this.core.$outer.find('.lg-coloreffectsContrastMinus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');

        	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		contrast = parseInt(contrast);
    		
    		contrast = contrast - 5;
   		
    		//if(contrast <= 0 ) contrast = 100;
    		if(contrast <= 0 ) contrast = 0;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('contrast', contrast); 
    		
        });
        
        this.core.$outer.find('.lg-coloreffectsSaturatePlus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
 
        	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		saturate = parseInt(saturate);
    		
    		saturate = saturate + 25;
    		
    		//if(saturate > 15) saturate = 1;
    		
    		//if(saturate > 1500) saturate = 1500;
    		
    		if(saturate > 1000) saturate = 1000;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('saturate', saturate); 
    		
        });
        

        this.core.$outer.find('.lg-coloreffectsSaturateMinus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
           	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		saturate = parseInt(saturate);
    		
    		saturate = saturate - 25;
    		
    		//if(saturate <= 0) saturate = 1;
    		if(saturate <= 0) saturate = 0;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('saturate', saturate); 
    		
        });
        

        this.core.$outer.find('.lg-coloreffectsHuePlus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
           	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		hue = parseInt(hue);
    		
    		hue = hue + 15;
    		
    		if(hue > 360) hue = 360;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('hue', hue); 
    		
        });
        

        this.core.$outer.find('.lg-coloreffectsHueMinus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
           	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		hue = parseInt(hue);
    		
    		hue = hue - 15;
    		
    		if(hue <= 0) hue = 0;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('hue', hue); 
    		
        });
        
        this.core.$outer.find('.lg-coloreffectsInvertPlus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
           	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		invert = parseInt(invert);
    		
    		invert = invert + 20;
    		
    		if(invert > 100) invert = 100;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('invert', invert); 
    		
        });
        

        this.core.$outer.find('.lg-coloreffectsInvertMinus').on('click.lg', function() {
        	
        	var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
           	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		invert = parseInt(invert);
    		
    		invert = invert - 20;
    		
    		if(invert <= 0) invert = 0;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		   		
    		img.attr('invert', invert); 
    		
        });
        
        
		this.core.$outer.find('.lg-coloreffectsGrayscale').on('click.lg', function() {
		        	
			var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
           	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		grayscale = parseInt(grayscale);
    		
    		grayscale = grayscale + 20;
    		
    		//if(grayscale > 100) grayscale = 0;
    		
    		if(grayscale > 100) grayscale = 100;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
   		
    		img.attr('grayscale', grayscale); 
    		
        });


		this.core.$outer.find('.lg-coloreffectsSepia').on('click.lg', function() {
			
			var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
        	
           	var brightness = img.attr('brightness');
        	var contrast = img.attr('contrast');
    		var saturate = img.attr('saturate');
    		var sepia = img.attr('sepia');
    		var grayscale = img.attr('grayscale');
    		var hue = img.attr('hue');
    		var invert = img.attr('invert');
    		
    		sepia = parseInt(sepia);
    		
    		sepia = sepia + 20;
    		
    		//if(sepia > 100) sepia = 0;
    		if(sepia > 100) sepia = 100;
    		
    		var filter = 'grayscale('+ grayscale+'%) brightness('+ brightness +'%) contrast('+ contrast +'%) saturate(' + saturate +'%) hue-rotate(' + hue +'deg) invert('+invert+'%) sepia('+ sepia +'%)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		
			img.attr('sepia', sepia); 
			
		});

		
        
		this.core.$outer.find('.lg-coloreffectsOriginal').on('click.lg', function() {
			
			var img = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap img');
			
			
			var filter = 'grayscale(0%) brightness(100%) contrast(100%) saturate(100%) sepia(0%) hue-rotate(0deg)';
    		
    		img.css('-webkit-filter',filter);
    		img.css('filter',filter);
    		
    		img.attr('brightness', '100'); 
            img.attr('contrast', '100');
            img.attr('saturate', '100');
            img.attr('sepia', '0');
            img.attr('grayscale', '0');
            img.attr('hue', '0');
            img.attr('invert', '0');
			
		});
		

		this.core.$outer.find('.lg-gotoslide').on('click.lg', function() {
       	
        	
        	//var $image = _this.core.$slide.eq(currentSlideIndex).find('.lg-img-wrap');
        	
			
        	var elem = dgebi('idGTS');
    		if(elem == null) return;
    		
    		
    		var msgACData = dgebi('msgACData');
    		var msgCAT = msgACData.getAttribute('CAT');
    		
    		var msgGTSData = dgebi('msgGTSData');
    		var msgGTS = msgGTSData.getAttribute('GTS');
    		var msgSN = msgGTSData.getAttribute('SN');
    
    		var fieldId = "taAlterSlideNumber";
    		var text = "";
    		if(dgebi(fieldId) != null )
    		{
    			//text = dgebi(captionFieldId).value;
    			text = dgebi(fieldId).getAttribute('slidenumber');
    		}
    		
    		text = currentSlideIndex + 1 ;
    		
        	var htmlText = "";
   		
    		//console.log('lg-gotoslide : galleryId = '+galleryId+' currentSlideIndex = '+currentSlideIndex+' maxIndex = '+maxIndex);
    		
    		htmlText = htmlText + "<div class=\"w3-modal-content w3-card-4 flexText\">";
    		htmlText = htmlText + "<header class=\"w3-container w3-teal\"> ";
    		htmlText = htmlText + "<span onclick=\"dgebi('idGTS').style.display='none'\" ";
    		htmlText = htmlText + "class=\"w3-button w3-large w3-display-topright\">&times;</span>";
    		htmlText = htmlText + "<h5>"+msgGTS+" ("+(currentSlideIndex + 1 )+", 1 - "+maxIndex+" )</h5> ";
    		htmlText = htmlText + "</header>";
    		htmlText = htmlText + "<div class=\"w3-container\">";
    		htmlText = htmlText + "<p>";
    		htmlText = htmlText + msgSN+" : ";
    		htmlText = htmlText + "<div style=\"width:100%;height:80%\"> <textarea id=\"taAlterSlideNumber\" slidenumber=\"1\"  rows=\"8\" style=\"width:100%; height:100%;\" maxlength=\"50\" >"+text+"</textarea></div>";
    		htmlText = htmlText + "</p>";
    		
    		
    		htmlText = htmlText + "<p>";
    		htmlText = htmlText + "<button class=\"w3-button w3-green\" onclick=\"gotoSlide_SearchData('"+galleryId+"','"+currentSlideIndex+"', '"+maxIndex+"'); \" title=\""+msgGTS+"\" style=\"margin-top:0px;margin-right:10px;\" >"+msgGTS+"</button>";
    		htmlText = htmlText + "<button class=\"w3-button w3-green\" onclick=\"closeGoToSlideSD_SearchData()\" title=\""+msgCAT+"\" style=\"margin-top:0px;margin-right:10px;\" >"+msgCAT+"</button>";
    		htmlText = htmlText + "</p>";
    		htmlText = htmlText + "</div>";
    		htmlText = htmlText + "<footer class=\"w3-container w3-teal\">";
    		htmlText = htmlText + "<p></p>";
    		htmlText = htmlText + "</footer>";
    		htmlText = htmlText + "</div>";

    		elem.innerHTML = htmlText;
    		
    		elem.setAttribute('formCreated','1');
    		dgebi('idGTS').style.display='block';
    		
    		
		});

		
		
    };

    $.fn.lightGallery.modules.rotate = Rotate;

})();


}));
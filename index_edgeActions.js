/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         sym.$("miga").hide();
         //$("#Stage_slide_1").append( "<iframe src='1/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         // Ocultar un elemento 
         
         //$(sym.lookupSelector("textCount")).html("1 - 10");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$("#Stage_slide_1").append( "<iframe src='composiciones/B02_01/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         
         
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         slideCount = 2;
         $(sym.lookupSelector("textCount")).html("1 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_2" ).append( "<iframe src='composiciones/S02_01/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         sym.$("miga").show();
         sym.getSymbol("miga").play(1);
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
        sym.stop();
        slideCount = 3;
        //$("#Stage_slide_"+(slideCount-1)).children().remove();
        $(sym.lookupSelector("textCount")).html("2 - 2");
        
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
        //$( "#Stage_slide_3" ).append( "<iframe src='composiciones/S02_02/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
        
        
        

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
        sym.stop();
        slideCount = 4;
        $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga 
        $( "#Stage_slide_4" ).append( "<iframe src='composiciones/S02_03/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" )
        
        //textos
        //$(sym.lookupSelector("momento")).html("Desarrollo");
        //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
        //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         slideCount = 5;
         $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_5" ).append( "<iframe src='composiciones/S02_04/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
      sym.stop();
      slideCount = 6;
      $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
      $( "#Stage_slide_6" ).append( "<iframe src='composiciones/S02_05/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
      
      //textos
      //$(sym.lookupSelector("momento")).html("Desarrollo");
      //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
      //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
      //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         slideCount = 7;
         $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_7" ).append( "<iframe src='composiciones/S02_06/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         slideCount = 8;
         $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_8" ).append( "<iframe src='composiciones/S02_07/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         slideCount = 9;
         $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_9" ).append( "<iframe src='composiciones/S02_08/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );

      });
      //Edge binding end
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         slideCount = 10;
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_10" ).append( "<iframe src='composiciones/S02_09/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         $( "#Stage_slide_11" ).append( "<iframe src='composiciones/S02_10/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         $( "#Stage_slide_12" ).append( "<iframe src='composiciones/S02_11/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $(sym.lookupSelector("textCount")).html("2 - 2");
          $( "#Stage_slide_13" ).append( "<iframe src='composiciones/S02_12/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();
         $(sym.lookupSelector("textCount")).html("12 - 13");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         $( "#Stage_slide_14" ).append( "<iframe src='composiciones/S02_14/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_15" ).append( "<iframe src='composiciones/03_15/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_16" ).append( "<iframe src='composiciones/03_16/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_17" ).append( "<iframe src='composiciones/03_17/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_18" ).append( "<iframe src='composiciones/03_18/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_19" ).append( "<iframe src='composiciones/03_19/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_20" ).append( "<iframe src='composiciones/03_20/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_21" ).append( "<iframe src='composiciones/03_21/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_22" ).append( "<iframe src='composiciones/03_22/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_23" ).append( "<iframe src='composiciones/03_23/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_24" ).append( "<iframe src='composiciones/03_24/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_25" ).append( "<iframe src='composiciones/03_25/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
	  
	    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_26" ).append( "<iframe src='composiciones/03_26/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_27" ).append( "<iframe src='composiciones/03_27/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_28" ).append( "<iframe src='composiciones/03_28/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_29" ).append( "<iframe src='composiciones/03_29/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );


      });
      //Edge binding end
	  
	   //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_29" ).append( "<iframe src='composiciones/03_30/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

       

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
            sym.$('.center-wrapper').css("overflow","hidden");
            slideCount = 1;
            //cambiar según el número de slides
            var numOfSlides = 3;
            
            if (slideCount <= 1){ 
            sym.setVariable("slideCount", 1);
            sym.$('bt_back').hide();
            }
            sym.getSymbol("slide_"+slideCount).play(0);
            //sym.getComposition().getStage().stop("slide_"+slideCount);
            
            sym.showSlide = function (slideDirection){
            	$("video").trigger("pause");
            	$("audio").trigger("pause");
            	slideCount = slideCount + slideDirection;
               sym.getComposition().getStage().stop("slide_"+slideCount);
               sym.getSymbol("slide_"+slideCount).play(0);
            	//Beyond 22, change to 1
            	if (slideCount < numOfSlides){ 
            		sym.$('bt_next').show();
            	}
            	if (slideCount == numOfSlides){
            		slideCount = numOfSlides;
            		sym.$('bt_next').hide();
            	} 
            	if (slideCount <= 1){ 
            		sym.setVariable("slideCount", 1);
            		sym.$('bt_back').hide();
            	}else{
            		sym.$('bt_back').show();
            	}
            	//	Silenciar el audio de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	$("iframe").contents().find("audio").prop("muted", true);
            	$("iframe").contents().find("audio").prop("currentTime",0);
            	//	Silenciar el video de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	//$("iframe").contents().find( "video" ).prop("muted", true);
            }
            //se definen las variables de los simbolos
            var btNext = sym.getSymbol("bt_next").$("hotspot_area_next");
            var btBack = sym.getSymbol("bt_back").$("hotspot_area_back");
            btBack.bind("click", function() {
            // Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            // Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            if (slideCount > 1){ 
            	sym.getComposition().getStage().showSlide(-1);
            }
            });
            btBack.bind("mouseup", function() {
            sym.getSymbol("bt_back").stop("up");
            });
            btBack.bind("mouseout", function() {
            sym.getSymbol("bt_back").stop("normal");
            });
            
            btBack.bind("mousedown", function() {
            sym.getSymbol("bt_back").stop("down");
            });
            
            btBack.bind("mouseover", function() {
            sym.getSymbol("bt_back").stop("over");
            });
            
            btNext.bind("click", function() {
            	// Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            	// Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            	sym.getComposition().getStage().showSlide(1);
            });
            btNext.bind("mouseup", function() {
            sym.getSymbol("bt_next").stop("up");
            });
            btNext.bind("mouseout", function() {
            sym.getSymbol("bt_next").stop("normal");
            });
            
            btNext.bind("mousedown", function() {
            sym.getSymbol("bt_next").stop("down");
            });
            
            btNext.bind("mouseover", function() {
            sym.getSymbol("bt_next").stop("over");
            });
            

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_30" ).append( "<iframe src='composiciones/03_30/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu}", "mouseover", function(sym, e) {
         sym.getSymbol("menu").play("down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu}", "mouseout", function(sym, e) {
         sym.getSymbol("menu").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu}", "click", function(sym, e) {
         //slideCount = 1;
         //sym.getComposition().getStage().stop("slide_1");
         //sym.getComposition().getStage().getSymbol("slide_1").play(1);
         //sym.$("guia_usuario").fadeOut("slow");
         location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_volver}", "click", function(sym, e) {
         var cookieDM =Cookies.get('S02_03_score');
         switch(slideCount){
         	case 4: 
         		if(Cookies.get('S02_03_score')!=null&&Cookies.get('S02_03_score')!=""){
         				sym.stop("slide_3");
         		}
         		else{
         			sym.$("warning1").show();
         		}
         		break;
         	case 5: 
         		if(Cookies.get('S02_04_score')!=null&&Cookies.get('S02_04_score')!=""){
         				sym.stop("slide_3");
         		}else{
         			sym.$("warning1").show();
         		}
         		break;
         	case 6: 
         		if(Cookies.get('S02_05_score')!=null&&Cookies.get('S02_05_score')!=""){
         				sym.stop("slide_3");
         		}else{
         			sym.$("warning1").show();
         		}
         		break;
         	default:
         		sym.stop("slide_3");
         		break;
         
         }
         /*
         Cookies.set('S02_03_score',(5-errores)+'');
         			console.log();*/
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_info}", "click", function(sym, e) {
         sym.$("guia_usuario").fadeIn("slow");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_info}", "mouseover", function(sym, e) {
         sym.getSymbol("info").stop("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_info}", "mouseout", function(sym, e) {
         sym.getSymbol("info").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_warning2}", "click", function(sym, e) {
         sym.$("warning2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_warning1}", "click", function(sym, e) {
         sym.$("warning1").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().stop("slide_3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

   })("slide_2");
   //Edge symbol end:'slide_2'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();

      });
      //Edge binding end

   })("slide_4");
   //Edge symbol end:'slide_4'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_1}", "click", function(sym, e) {
         sym.getSymbol("check_1").stop("down");
         sym.$("brillo_1").hide();
         sym.getComposition().getStage().stop("slide_4");
         sym.$("hotspot_1").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_2}", "click", function(sym, e) {
         sym.getSymbol("check_2").play("250");
         sym.$("brillo_2").hide();
         sym.getComposition().getStage().stop("slide_5");
         sym.$("hotspot_2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_3}", "click", function(sym, e) {
         sym.getSymbol("check_3").play("250");
         sym.$("brillo_3").hide();
         sym.getComposition().getStage().stop("slide_6");
         sym.$("hotspot_3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_4}", "click", function(sym, e) {
         sym.getSymbol("check_4").play("250");
         sym.$("brillo_4").hide();
         sym.getComposition().getStage().stop("slide_7");
         sym.$("hotspot_4").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_5}", "click", function(sym, e) {
         sym.getSymbol("check_5").play("250");
         sym.$("brillo_5").hide();
         sym.getComposition().getStage().stop("slide_8");
         sym.$("hotspot_5").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_6}", "click", function(sym, e) {
         sym.getSymbol("check_6").play("250");
         sym.$("brillo_6").hide();
         sym.getComposition().getStage().stop("slide_9");
         sym.$("hotspot_6").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_revisar}", "click", function(sym, e) {
         sym.getComposition().getStage().stop("slide_10");
         

      });
      //Edge binding end

   })("slide_3");
   //Edge symbol end:'slide_3'

   //=========================================================
   
   //Edge symbol: 'slide_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("slide_5");
   //Edge symbol end:'slide_5'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ingresar}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ingresar}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_ingresar").play("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ingresar}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_ingresar").play("up");
         Cookies.remove('S02_03_score');
         Cookies.remove('S02_04_score');
         Cookies.remove('S02_05_score');
         Cookies.remove('S02_06_score');
         Cookies.remove('S02_07_score');
         Cookies.remove('S02_08_score');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         sym.getComposition().getStage().stop("slide_2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2498, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_go}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'Hot_Spot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Hot_Spot");
   //Edge symbol end:'Hot_Spot'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_6");
   //Edge symbol end:'slide_6'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_7");
   //Edge symbol end:'slide_7'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_8");
   //Edge symbol end:'slide_8'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_9");
   //Edge symbol end:'slide_9'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_10");
   //Edge symbol end:'slide_10'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_11");
   //Edge symbol end:'slide_11'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_12");
   //Edge symbol end:'slide_12'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_13");
   //Edge symbol end:'slide_13'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_14");
   //Edge symbol end:'slide_14'

   //=========================================================
   
   //Edge symbol: 'slide_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_15");
   //Edge symbol end:'slide_15'

   //=========================================================
   
   //Edge symbol: 'slide_16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_16");
   //Edge symbol end:'slide_16'

   //=========================================================
   
   //Edge symbol: 'slide_17'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_17");
   //Edge symbol end:'slide_17'

   //=========================================================
   
   //Edge symbol: 'slide_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_18");
   //Edge symbol end:'slide_18'

   //=========================================================
   
   //Edge symbol: 'slide_19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_19");
   //Edge symbol end:'slide_19'

   //=========================================================
   
   //Edge symbol: 'slide_20'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_20");
   //Edge symbol end:'slide_20'

   //=========================================================
   
   //Edge symbol: 'slide_21'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_21");
   //Edge symbol end:'slide_21'

   //=========================================================
   
   //Edge symbol: 'slide_22'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_22");
   //Edge symbol end:'slide_22'

   //=========================================================
   
   //Edge symbol: 'slide_23'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_23");
   //Edge symbol end:'slide_23'

   //=========================================================
   
   //Edge symbol: 'slide_24'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_24");
   //Edge symbol end:'slide_24'

   //=========================================================
   
   //Edge symbol: 'slide_25'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_25");
   //Edge symbol end:'slide_25'

   //=========================================================
   
   //Edge symbol: 'slide_26'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_26");
   //Edge symbol end:'slide_26'

   //=========================================================
   
   //Edge symbol: 'slide_27'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_27");
   //Edge symbol end:'slide_27'

   //=========================================================
   
   //Edge symbol: 'slide_28'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_28");
   //Edge symbol end:'slide_28'

   //=========================================================
   
   //Edge symbol: 'slide_29'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_29");
   //Edge symbol end:'slide_29'

   //=========================================================
   
   //Edge symbol: 'slide_30'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_30");
   //Edge symbol end:'slide_30'

   //=========================================================
   
   //Edge symbol: 'bt_next'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

   })("bt_next");
   //Edge symbol end:'bt_next'

   //=========================================================
   
   //Edge symbol: 'bt_back'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("bt_back");
   //Edge symbol end:'bt_back'

   //=========================================================
   
   //Edge symbol: 'slide_40'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("slide_40");
   //Edge symbol end:'slide_40'

   //=========================================================
   
   //Edge symbol: 'menu'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("menu");
   //Edge symbol end:'menu'

   //=========================================================
   
   //Edge symbol: 'menu_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("mapa");
   //Edge symbol end:'mapa'

   //=========================================================
   
   //Edge symbol: 'robot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("robot");
   //Edge symbol end:'robot'

   //=========================================================
   
   //Edge symbol: 'robot_conpes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("robot_conpes");
   //Edge symbol end:'robot_conpes'

   //=========================================================
   
   //Edge symbol: 'robot_cabeza'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.play("feliz");

      });
      //Edge binding end

   })("robot_cabeza");
   //Edge symbol end:'robot_cabeza'

   //=========================================================
   
   //Edge symbol: 'escudo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("escudo");
   //Edge symbol end:'escudo'

   //=========================================================
   
   //Edge symbol: 'btn_ingresar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_ingresar");
   //Edge symbol end:'btn_ingresar'

   //=========================================================
   
   //Edge symbol: 'escudo_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("escudo_1");
   //Edge symbol end:'escudo_1'

   //=========================================================
   
   //Edge symbol: 'miga'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("miga");
   //Edge symbol end:'miga'

   //=========================================================
   
   //Edge symbol: 'check'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("check");
   //Edge symbol end:'check'

   //=========================================================
   
   //Edge symbol: 'brillo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("brillo");
   //Edge symbol end:'brillo'

   //=========================================================
   
   //Edge symbol: 'guia_usuario'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17418, function(sym, e) {
         sym.stop();
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $(sym.lookupSelector("textCount")).html("2 - 2");
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_9" ).append( "<iframe src='composiciones/S02_08/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("contenedor").append( "<iframe src='composiciones/S02_guia/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cerrar}", "click", function(sym, e) {
         sym.getComposition().getStage().$("guia_usuario").fadeOut("slow");

      });
      //Edge binding end

   })("guia_usuario");
   //Edge symbol end:'guia_usuario'

   //=========================================================
   
   //Edge symbol: 'info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("info");
   //Edge symbol end:'info'

})(jQuery, AdobeEdge, "EDGE-5531445");
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
      
      
      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //CAMBIAR SEGÚN EL NÚMERO CONDICIONES 
         TotalRadioButton = 10;
         //DEJAR IGUAL O CAMBIAR POR EL TOTAL DE ELEMENTOS
         CrearRadioButton = 10;
         //RESPUESTAS CAMBIAR POR 1 PARA LA PRIMERA OPCIÓN Y 2 PARA LA SEGUNDA
         sym.setVariable("Respuesta_1", 1);
         sym.setVariable("Respuesta_2", 1);
         sym.setVariable("Respuesta_3", 1);
         sym.setVariable("Respuesta_4", 1);
         sym.setVariable("Respuesta_5", 2);
         sym.setVariable("Respuesta_6", 2);

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_cc}", "click", function(sym, e) {
         sym.getSymbol("pop_cc").play(1);

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
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Mayor1");
   //Edge symbol end:'Mayor1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Menor1");
   //Edge symbol end:'Menor1'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         //TEXTAREA//
         
         sym.$("TextArea_01").append(document.createElement("TextArea"));
         $('input[type=text], textarea').css({
         	width:'1000px',
         	height:'250px',
         	border:'none',
         	background:'#FFFFFF',
         	fontSize:'26px',
         	lineHeight:'40px',
         	textAlign:'left',
         	margin:'20px',
         	fontFamily:'Cabin',
         	fontStyle:'normal',
         	color:'normal',
         	fontStyle:'#666666'
         });
         
         //TERMINA EL TEXT AREA//

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Mayor1_1'
   (function(symbolName) {   
   
      })("Mayor2");
   //Edge symbol end:'Mayor2'

   //=========================================================
   
   //Edge symbol: 'Menor1_1'
   (function(symbolName) {   
   
      })("Menor2");
   //Edge symbol end:'Menor2'

   //=========================================================
   
   //Edge symbol: 'ok'
   (function(symbolName) {   
   
   })("ok");
   //Edge symbol end:'ok'

   //=========================================================
   
   //Edge symbol: 'bad'
   (function(symbolName) {   
   
   })("bad");
   //Edge symbol end:'bad'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'etiqueta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().getSymbol("contenido").play(0);
         

      });
      //Edge binding end

   })("etiqueta");
   //Edge symbol end:'etiqueta'

   //=========================================================
   
   //Edge symbol: 'bt_ayuda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 655, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_ayuda");
   //Edge symbol end:'bt_ayuda'

   //=========================================================
   
   //Edge symbol: 'bt_reiniciar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 655, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_reiniciar");
   //Edge symbol end:'bt_reiniciar'

   //=========================================================
   
   //Edge symbol: 'bt_solucion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 655, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_solucion");
   //Edge symbol end:'bt_solucion'

   //=========================================================
   
   //Edge symbol: 'bt_validar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 655, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_validar");
   //Edge symbol end:'bt_validar'

   //=========================================================
   
   //Edge symbol: 'pop_cc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hotspot_cc}", "click", function(sym, e) {
         sym.playReverse(750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("pop_cc");
   //Edge symbol end:'pop_cc'

   //=========================================================
   
   //Edge symbol: 'contenido'
   (function(symbolName) {   
   
   })("contenido");
   //Edge symbol end:'contenido'

   //=========================================================
   
   //Edge symbol: 'brillo_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("brillo_1");
   //Edge symbol end:'brillo_1'

})(jQuery, AdobeEdge, "EDGE-1010687340");
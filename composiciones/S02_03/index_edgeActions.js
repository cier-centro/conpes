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
         TotalRadioButton = 5;
         //DEJAR IGUAL O CAMBIAR POR EL TOTAL DE ELEMENTOS
         CrearRadioButton = 10;
         //RESPUESTAS CAMBIAR POR 1 PARA LA PRIMERA OPCIÓN Y 2 PARA LA SEGUNDA
         sym.setVariable("Respuesta_1", 1);
         sym.setVariable("Respuesta_2", 1);
         sym.setVariable("Respuesta_3", 1);
         sym.setVariable("Respuesta_4", 1);
         sym.setVariable("Respuesta_5", 1);
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
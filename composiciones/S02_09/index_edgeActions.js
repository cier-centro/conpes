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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_licencias}", "click", function(sym, e) {
         sym.getSymbol("pop_2").play(1);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'brillo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("brillo");
   //Edge symbol end:'brillo'

   //=========================================================
   
   //Edge symbol: 'pop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var total = 0;  
                 for(i in [0,1,2,3,4,5]){
                     var scene_i = (parseInt(i) + 3);
                     var score = Cookies.get("S02_0" + scene_i + "_score")?parseInt(Cookies.get("S02_0" + scene_i + "_score")):0;
                     total += score;
                 }
                  $("#Stage_pop_1_Text").html("Has tenido en total " + total + " de 30 preguntas correctas.");

      });
      //Edge binding end

   })("pop_1");
   //Edge symbol end:'pop_1'

   //=========================================================
   
   //Edge symbol: 'brillo_s'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("brillo_s");
   //Edge symbol end:'brillo_s'

   //=========================================================
   
   //Edge symbol: 'licencias'
   (function(symbolName) {   
   
   })("licencias");
   //Edge symbol end:'licencias'

   //=========================================================
   
   //Edge symbol: 'pop_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_atras}", "click", function(sym, e) {
         sym.playReverse(1000);

      });
      //Edge binding end

   })("pop_2");
   //Edge symbol end:'pop_2'

   //=========================================================
   
   //Edge symbol: 'atras'
   (function(symbolName) {   
   
   })("atras");
   //Edge symbol end:'atras'

   //=========================================================
   
   //Edge symbol: 'billo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("billo");
   //Edge symbol end:'billo'

})(jQuery, AdobeEdge, "EDGE-9697239920");
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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'guia_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_next}", "click", function(sym, e) {
         sym.getSymbolElement().fadeOut("slow");
         sym.getComposition().getStage().$("guia_2").fadeIn("slow");
         sym.getComposition().getStage().getSymbol("guia_2").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_next}", "mouseover", function(sym, e) {
         sym.getSymbol("boton_next").stop("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_next}", "mouseout", function(sym, e) {
         sym.getSymbol("boton_next").stop("up");

      });
      //Edge binding end

   })("guia_1");
   //Edge symbol end:'guia_1'

   //=========================================================
   
   //Edge symbol: 'guia_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_back}", "click", function(sym, e) {
         sym.getSymbolElement().fadeOut("slow");
         sym.getComposition().getStage().$("guia_1").fadeIn("slow");
         //sym.getComposition().getStage().getSymbol("guia_1").stop(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_next}", "click", function(sym, e) {
         sym.getSymbolElement().fadeOut("slow");
         sym.getComposition().getStage().$("guia_3").fadeIn("slow");
         sym.getComposition().getStage().getSymbol("guia_3").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_back}", "mouseover", function(sym, e) {
         sym.getSymbol("boton_back").stop("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_back}", "mouseup", function(sym, e) {
         sym.getSymbol("boton_back").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_next}", "mouseover", function(sym, e) {
         sym.getSymbol("boton_next").stop("down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_next}", "mouseout", function(sym, e) {
         sym.getSymbol("boton_next").stop("up");

      });
      //Edge binding end

   })("guia_2");
   //Edge symbol end:'guia_2'

   //=========================================================
   
   //Edge symbol: 'guia_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_back}", "click", function(sym, e) {
         sym.getSymbolElement().fadeOut("slow");
         sym.getComposition().getStage().$("guia_2").fadeIn("slow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_back}", "mouseover", function(sym, e) {
         sym.getSymbol("boton_back").stop("down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_boton_back}", "mouseout", function(sym, e) {
         sym.getSymbol("boton_back").stop("up");
         

      });
      //Edge binding end

   })("guia_3");
   //Edge symbol end:'guia_3'

   //=========================================================
   
   //Edge symbol: 'botones'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("boton_next");
   //Edge symbol end:'boton_next'

   //=========================================================
   
   //Edge symbol: 'boton_next_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("boton_back");
   //Edge symbol end:'boton_back'

})(jQuery, AdobeEdge, "EDGE-9697239920");
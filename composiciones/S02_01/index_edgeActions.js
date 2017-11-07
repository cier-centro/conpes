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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_1}", "click", function(sym, e) {
         sym.getSymbol("pop_2").play(1);
         sym.$("brillo_1").hide();
         $("audio").prop("muted", true);
         sym.$("bt_audio_2").fadeIn("slow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_2}", "click", function(sym, e) {
         sym.getSymbol("pop_1").play(1);
         sym.$("brillo_2").hide();
         $("audio").prop("muted", true);
         sym.$("bt_audio_3").fadeIn("slow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_3}", "click", function(sym, e) {
         sym.getSymbol("pop_3").play(1);
         sym.$("brillo_3").hide();
         $("audio").prop("muted", true);
         sym.$("bt_audio_4").fadeIn("slow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_1}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_1").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_1}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_1").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_2}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_2").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_2}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_2").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_3}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_3").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_3}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_3").playReverse();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_1");
   //Edge symbol end:'btn_1'

   //=========================================================

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
   
   //Edge symbol: 'btn_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_2");
   //Edge symbol end:'btn_2'

   //=========================================================
   
   //Edge symbol: 'btn_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_3");
   //Edge symbol end:'btn_3'

   //=========================================================
   
   //Edge symbol: 'brillo_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("brillo_1");
   //Edge symbol end:'brillo_1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'bt_audio'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ht_spot}", "click", function(sym, e) {
         $("#Stage_bt_audio_ht_spot2").css("pointer-events","auto");
         		//sym.getComposition().getStage().getSymbol("personaje_2").getSymbol("cara_2").getSymbol("rostro_2").play("habla");
         var soundId = sym.getSymbolElement().attr( "title" );
         var currentAudio=sym.getComposition().getStage().$(soundId)[0].currentTime;
         var duracion= sym.getComposition().getStage().$(soundId).duration;
         if (duracion== currentAudio){
         	sym.stop("up");
         	//sym.getComposition().getStage().getSymbol("personaje_2").getSymbol("cara_2").getSymbol("rostro_2").stop("habla");
         }
         
         sym.getComposition().getStage().$(soundId).on('ended', function() {
         		sym.stop("up");
         		//sym.getComposition().getStage().getSymbol("personaje_2").getSymbol("cara_2").getSymbol("rostro_2").stop("habla");
         	$("#Stage_bt_audio_ht_spot2").css("pointer-events","none");
         });
         $("audio").prop("muted", true);
         if (sym.getComposition().getStage().$(soundId)[0].paused) {
         	//elimina el mute del audio
         	sym.getComposition().getStage().$(soundId)[0].muted = false;
         	sym.getComposition().getStage().$(soundId)[0].volume=0.7;
         	sym.getComposition().getStage().$(soundId)[0].play();
         	sym.stop("down");
         		//sym.getComposition().getStage().getSymbol("personaje_2").getSymbol("cara_2").getSymbol("rostro_2").play("habla");
         } else {
         //activar para pausar en vez de reiniciar
         	sym.getComposition().getStage().$(soundId)[0].pause();
         	sym.stop("up");
         	//sym.getComposition().getStage().getSymbol("personaje_2").getSymbol("cara_2").getSymbol("rostro_2").stop("habla");
         	$("#Stage_bt_audio_ht_spot2").css("pointer-events","auto");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ht_spot2}", "click", function(sym, e) {
         sym.stop("up");
         
         $("#Stage_bt_audio_ht_spot").css("pointer-events","auto");
         
         $("audio").prop("muted", true);
         $("audio").prop("currentTime",0);
         
         $("#Stage_bt_audio_ht_spot").trigger("click");
         
         $("#Stage_bt_audio_ht_spot2").css("pointer-events","none");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_audio");
   //Edge symbol end:'bt_audio'

   //=========================================================
   
   //Edge symbol: 'pop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cerrar}", "click", function(sym, e) {
         sym.playReverse(750);
         $("audio").prop("muted", true);
         sym.getComposition().getStage().$("bt_audio_3").fadeOut("slow");

      });
      //Edge binding end

   })("pop_1");
   //Edge symbol end:'pop_1'

   //=========================================================
   
   //Edge symbol: 'pop_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cerrar}", "click", function(sym, e) {
         sym.playReverse(750);
         $("audio").prop("muted", true);
         sym.getComposition().getStage().$("bt_audio_2").fadeOut("slow");

      });
      //Edge binding end

   })("pop_2");
   //Edge symbol end:'pop_2'

   //=========================================================
   
   //Edge symbol: 'pop_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cerrar}", "click", function(sym, e) {
         sym.playReverse(750);
         $("audio").prop("muted", true);
         sym.getComposition().getStage().$("bt_audio_4").fadeOut("slow");

      });
      //Edge binding end

   })("pop_3");
   //Edge symbol end:'pop_3'

   //=========================================================
   
   //Edge symbol: 'pop_instruccion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_cerrar}", "click", function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

   })("pop_instruccion");
   //Edge symbol end:'pop_instruccion'

})(jQuery, AdobeEdge, "EDGE-9697239920");
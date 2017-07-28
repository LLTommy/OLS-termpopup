require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ols-termpopup":[function(require,module,exports){


module.exports = termpopup = function(){

  var local_options={
    onclick : fetch,
    baseURL : "http://www.ebi.ac.uk/ols/ontologies/",
    webservice: "http://www.ebi.ac.uk/ols/api/ontologies/",
    display: {
          "showTitle" : true,
          "description" :true,
          "synonyms": true,
          "term_replaced_by" : true,
          "button_go_to_ols" : true
        }
    }


  termpopup.prototype.initialize=function(input_options){
    local_options = jQuery.extend(true, {}, local_options, input_options)
    }

    termpopup.prototype.setListener=function(target, action, ontology, iri)
    {
      $("#"+target).append('<div id="'+target+'_pop" class="popuptext"><span id="'+target+'_pop_span">Popup text</span></div>')
      $("#"+target+" p").on(action, function() {local_options.onclick.call(this, target, ontology, iri)})
    }

  termpopup.prototype.closePopUpOnMouseOut=function(target){
      $("#"+target).on("mouseout", function() {$("#"+target+" .popuptext").hide()})
   }

   termpopup.prototype.closePopUpOnClick=function(target){
      $("#"+target+"_pop").append("<div id='"+target+"_pop_close' class='pop_close'></div>")
      $("#"+target+"_pop_close").off("click")
      $("#"+target+"_pop_close").on("click", function() {$("#"+target+" .popuptext").hide()})
    }



  function fetch(target,ontology,iri){
    if ($("#"+target+" .popuptext").attr('cached')===undefined){
        console.log("Let's fetch "+iri)
        console.log("#"+target+" .popuptext")
        var url=local_options.webservice+ontology+"/terms?iri="+iri
        console.log(url);

        jQuery.getJSON(url, function (reply){
          var term=reply["_embedded"]["terms"][0]
          var htmlString='';

          if (local_options.display.showTitle===true) {
            htmlString+="<div id='popUp_label'><strong>"+term["label"]+"</strong> ("+term["iri"]+")</div>"
            }

          if (local_options.display.description===true) {
            if (term["description"]!==null) {
                htmlString+="<div id='description'><strong>Descriptions:</strong>"
                for (i=0; i<term["description"].length;i++)
                {
                  htmlString+="<div>"+(i+1)+": "+term["description"][i]
                }
                htmlString+="</div>"
            }
          }

          if (local_options.display.synonyms===true) {
            if (term["synonyms"]!==null){
                htmlString+="<div id='popUp_synonyms'><strong>Synonyms:</strong> "+term["synonyms"]+"</div>"
              }
            }

          if (local_options.display.term_replaced_by===true) {
              if (term["term_replaced_by"]!==null){
                htmlString+="<div id='popUp_replaced By'><strong>Replaced by:</strong> "+term["term_replaced_by"]+"</div>"
              }
          }

          if (local_options.display.button_go_to_ols===true) {
              if (term["button_go_to_ols"]!==null){
                htmlString+="<div id='popUp_ols_button'><a href='"+local_options.baseURL+ontology+"/terms?iri="+iri+"' class=pop_ols_button>Go to OLS</a></div>"

              }
          }


          $("#"+target+"_pop_span").html(htmlString)
          $("#"+target+" .popuptext").addClass("show")
          $("#"+target+" .popuptext").attr('cached', true)
          $("#"+target+" .popuptext").show();


      }).fail(function(reply){console.log("Webservice call failed! Could not reach "+url); console.log(reply)})
    }
    else{
        //We do not have to call the webservice, since we did this before and just switch on the popup
        $("#"+target+" .popuptext").show();
      }
    }

}

},{}]},{},[]);

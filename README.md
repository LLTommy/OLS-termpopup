
*NOTE*
This is the *very first version 0.0.1* - this is under development and might change significally in the future! The plugin is also not yet published on npm!


# Introduction
This is a popup for ontology terms powered by OLS. By passing the term iri and the ontology to the module, it will show a tooltip/popup window with additional information (description, etc.).  

# How to implement the plugin
There are multiple ways of implementing the plugin:
- You can download the javascript file stored in the build folder and include the file by using normal script tags. See the example html pages for more information. (<a href="https://github.com/LLTommy/OLS-termpopup">github</a>)

# How to start the plugin
var app = require("ols-termpopup");
var instance = new app();
options = {}
instance.initialize(options)
instance.setListener("term1","click","efo","http://www.ebi.ac.uk/efo/EFO_0000400")
instance.closePopUpOnClick("term1")


# Options
These are the current options for the plugin:
```var local_options={
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
```
# Contact
- Please <a href="https://github.com/LLTommy/OLS-termpopup">use github</a> to report **bugs**, discuss potential **new features** or **ask questions** in general concerning the module.
- To discuss the Ontology Lookup Service, its features or to report bugs concerning the rest of OLS, please <a href="https://github.com/EBISPOT/OLS/issues">use the OLS github page</a> or contact ols-support@ebi.ac.uk

# Dependencies
* **JQuery**: Is used by the plugin and so it has to be available (https://jquery.com). Download the files or include e.g. https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js as script tag in your html (see examples)

# If you are interested in this plugin...
...you might want to have a look at the *ols-graphview* package as well, see <a href="https://github.com/LLTommy/OLS-graphview">Github</a> or <a href="https://www.npmjs.com/package/ols-treeview">npm</a>


# markItUp! Universal markup editor

Adding markItUp in Codebase wiki edit.

## Chrome ##

Install extension "Personalized Web": https://chrome.google.com/extensions/detail/plcnnpdmhobdfbponjpedobekiogmbco

Rule Name: Cosebase wikitup
Match URLs: ^https://.*.codebasehq.com/.*/wiki/.*/edit
Add JavaScript: 

    var head = document.getElementsByTagName('head')[0];
    var el   = document.createElement("script");
    el.src   = "https://github.com/abril/markitup_codebase/raw/origin/codebase.js";
    head.insertBefore(el, head.firstChild);

**Home:**
[http://markitup.jaysalvat.com/](http://markitup.jaysalvat.com/)

**Documentation:**
[http://markitup.jaysalvat.com/documentation/](http://markitup.jaysalvat.com/documentation/)

**Examples:**
[http://markitup.jaysalvat.com/examples/](http://markitup.jaysalvat.com/examples/)
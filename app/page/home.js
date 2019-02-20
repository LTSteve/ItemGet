//TODO: add settings
define(['knockout','jquery','js/data', 'page/settings'], function(ko, $, data, settings){
  var d;

  var home = {
    genSubject: ko.observable(),
    genAction: ko.observable(),
    genObject: ko.observable(),
    settings: settings,
    configText: ko.observable("Config")
  };

  function _init(){
    home.genSubject(d.subject.text);
    home.genAction(d.action.text);
    home.genObject(d.object.text);
  }

  home.regen = function(){
    d = data.genRandom();
    _init();
  };

  home.openDrawer = function(){
    $(this).next().toggleClass("minimized");

    if(home.configText() == "Config"){
      home.configText("Close");
    }
    else{
      home.configText("Config");
    }
  };

  home.regen();

  return home;
});

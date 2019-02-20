define(['knockout'], function(ko){
  var settings = {
    subjectWeapons: ko.observable(true),
    subjectTrinkets: ko.observable(true),
    subjectArmors: ko.observable(true),
    subjectWeird: ko.observable(true),
    subjectLarge: ko.observable(true),

    actionDamage: ko.observable(true),
    actionElementalDamage: ko.observable(true),
    actionMagicEffect: ko.observable(true),
    actionNonCombat: ko.observable(true),

    objectRaces: ko.observable(true),
    objectObjects: ko.observable(true),
    objectWeird: ko.observable(true)
  };

  settings.getOffList = function(){
    return {
      subjects: [
        settings.subjectWeapons() ? 0 : -1,
        settings.subjectTrinkets() ? 1 : -1,
        settings.subjectArmors() ? 2 : -1,
        settings.subjectWeird() ? 3 : -1,
        settings.subjectLarge() ? 4 : -1
      ],
      actions: [
        settings.actionDamage() ? 0 : -1,
        settings.actionElementalDamage() ? 1 : -1,
        settings.actionMagicEffect() ? 2 : -1,
        settings.actionNonCombat() ? 3 : -1
      ],
      objects: [
        settings.objectRaces() ? 0 : -1,
        settings.objectObjects() ? 1 : -1,
        settings.objectWeird() ? 2 : -1
      ]
    };
  };

  return settings;
});

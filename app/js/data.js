//TODO: add settings
define(['underscore', 'js/data.json', 'page/settings'], function(_, dataJson, settings){
  var data = {};

  data.genRandom = function(){
    var toReturn = new Dataset(dataJson, settings);

    return toReturn;
  };

  return data;

  function Dataset(dataJson){
    var offList = settings.getOffList();

    this.subject = _chooseRandom(dataJson.subjects, offList.subjects);
    this.action = _chooseRandom(dataJson.actions, offList.actions);
    this.object = _chooseRandom(dataJson.objects, offList.objects);

    return this;
  }

  function _chooseRandom(list, offList){
    if(!Array.isArray(list)){
      return;
    }

    var rand;

    //all off = all on
    if(_.every(offList,function(item){ return item == -1; })){
        rand = Math.floor(Math.random()*list.length);

        return list[rand];
    }

    rand = Math.floor(Math.random() *
      _.countBy(offList,
        function(item){ return item != -1 ? 'count' : ''; }
      ).count);

    for(var i = 0 ; i < offList.length ; i++){
      if(offList[i] != -1){
        rand--;
      }

      if(rand < 0){
        rand = i;
        break;
      }
    }

    var subList = _.where(list, {type: rand});

    rand = Math.floor(Math.random()*subList.length);

    return subList[rand];
  }
});

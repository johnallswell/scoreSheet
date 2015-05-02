if (Meteor.isClient) {
  Template.scoreSheet.rendered = function(){
    $('.results').hide();
  }
  Template.scoreSheet.helpers({
    'getName': function(){
      return Apprentice.findOne({}).name;
    }
  });
  Template.results.helpers({
    'getName': function(){
      return Apprentice.findOne({}).name;
    }
  });

  Template.scoreSheet.events({
  "click .submitScore": function (e) {

    // Prevent default button click behavior
    e.preventDefault();

   
  var preparation=$("[name='preparation']").val();
  var clarity=$("[name='clarity']").val();
  var delivery=$("[name='delivery']").val();
  var organization=$("[name='organization']").val();
  var notes=$("[name='notes']").val();
  
   

    Score.insert({
              
                preparation:preparation,
                clarity:clarity,
                delivery:delivery,
                organization:organization,
                notes:notes

    });
    $('.sheet').hide();
    $('.results').show();
  },
  'click .addName':function(e){
    // Prevent default button click behavior
    e.preventDefault();
    var name=$("[name='name']").val(); 
     Apprentice.insert({
      name:name
    });
  }

});
Template.apprentice.helpers({
  'apprentice': function(){
    return Apprentice.find({});
  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

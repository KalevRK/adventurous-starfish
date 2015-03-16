var app = angular.module('glint', []);

app.controller('MainCtrl', function(){
  var self = this;

  // mocked up data for now
  self.ideas = [
    {
      title: 'Uber for cats',
      text: 'Imagine a world where cats can roam free and never have to walk again! Introducting Uber for cats.',
      votes: 134,
      created_by: 'Super Tom',
      created_at: 'Mon Mar 16 2015 14:46:59 GMT-0700 (PDT)',
    },
    {
      title: 'Uber for dogs',
      text: 'Imagine a world where dogs can roam free and never have to walk again! Introducting Uber for cats.',
      votes: 654,
      created_by: 'Super Fido',
      created_at: 'Sun Mar 15 2015 15:06:59 GMT-0700 (PDT)',
    }
  ];

  // db GET request
  self.getIdeas = function(){};

});

app.controller('SubmitIdeaCtrl', function(){
  var self = this;

  // db POST request
  // remember to escape input
  // submitIdea is called when submit button is clicked
	self.submitIdea = function(){
    window.alert(self.ideaEntry);
  };

});

app.controller('VotesCtrl', function(){
  var self = this;

  // call factory db POST function, and handle results
  // options: 
  //   1) doing this updates the number to reflect latest db count
  //      this may be confusing for user who sees the # go up/down lots
  //   2) doing this simply increments only by user added vote, keeping
  //      the results more like what user expects
  self.upvote = function(){
    Votes.updateVote()
      .then(function(response){
        //
      })
      .catch(function(error){
        //
      });
  };

  // if results handling here is different from upvote, then
  // specify difference here. Otherwise, remove.
  self.downvote = function(){};

});

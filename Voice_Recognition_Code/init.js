var initVoice =  function() {
  if (annyang) {
    var bigger = 1;
    Shiny.onInputChange('hello', 'Are you above 60 years of Age ? or need any special assistance please say yes');
    Shiny.onInputChange('color', 'black');
    Shiny.onInputChange('bigger', 1);
    Shiny.onInputChange('yes', 'no');
    var commands = {
      'hello *hello': function(hello) {
        Shiny.onInputChange('hello', hello);
      },
      'color :color': function(color) {
        Shiny.onInputChange('color', color);
      },
      'bigger': function() {
        bigger += 1;
        Shiny.onInputChange('bigger', bigger);
      },
      'smaller': function() {
        if (bigger >= 1.5) {
          bigger -= 1;
          Shiny.onInputChange('bigger', bigger);
        }
      },
      'regression': function() {
        Shiny.onInputChange('yes', Math.random());
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
};

$(function() {
  setTimeout(initVoice, 10);
});

$(document).ready(function() {

  var sCreen = $('#screen');

  $('span').click(function() {
    if ( !$(this).hasClass('operator') ) {
      var text = $(this).text();
      sCreen.text( sCreen.text() + text );
    } else if ( $(this).text() === 'C' ) {
      sCreen.text('');
    } else if ( $(this).text() === '+' ) {
      operandCheck();
      sCreen.text( sCreen.text() + '+' );
    } else if ( $(this).text() === '-' ) {
      operandCheck()
      sCreen.text( sCreen.text() + '-' );
    } else if ( $(this).text() === 'x' ) {
      operandCheck()
      sCreen.text( sCreen.text() + '*' );
    } else if ( $(this).text() === '=' ) {
      sCreen.text( eval( sCreen.text() ));
    } else {
      operandCheck()
      sCreen.text( sCreen.text() + '/' );
    }
  });

  /*
  I will have this function execute when any operand is clicked and it checks
  what the last item entered in was and if it was an operand then it will give
  an error for trying to click an operand twice
  */
  function operandCheck() {
    var operands = ['+', '-', '*', '/'];
    var lastItem = sCreen.text().slice(-1);
    for (var i = 0; i < operands.length; i++) {
      if ( lastItem === operands[i] ) {
        sCreen.text('Err');
      }
    }
  };

});

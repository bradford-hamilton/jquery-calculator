$(document).ready(function() {

  var sCreen = $('#screen');

  $('span').click(function() {
    if ( !$(this).hasClass('operator') ) {
      sCreen.text( sCreen.text() + $(this).text() );
    } else if ( $(this).text() === 'C' ) {
      sCreen.text('');
    } else if ( $(this).text() === '+' || $(this).text() === '-' ) {
      operandCheck();
      sCreen.text( sCreen.text() + $(this).text() );
    } else if ( $(this).text() === 'x' ) {
      operandCheck()
      sCreen.text( sCreen.text() + '*' );
    } else if ( $(this).text() === '=' ) {
      sCreen.text( eval( sCreen.text() ) );
    } else {
      operandCheck()
      sCreen.text( sCreen.text() + '/' );
    }
  });

  //checks to make sure you don't click an operator twice, or throws error
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

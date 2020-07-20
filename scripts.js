$( "#first" ).on('click', (function() {
    console.log( 'Yeah, you clicked me' );
  }));

$( "#second" ).on('click', (function() {
    $('#first').text('New Text');
}));


$( "#third" ).on('click', (function() {
    let backgroundColor = $('button').css('background-color', 'white');
}));

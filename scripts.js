let wasClicked = false;

$( "#first" ).on('click', (function() {
    console.log( 'Yeah, you clicked me' );
  }));

$( "#second" ).on('click', (function() {
    $('#first').text('New Text');
}));


$( "#third" ).on('click', (function() {
    if (!wasClicked) {
        let backgroundColor = $('button').css('background-color', document.getElementById("color").value);
        wasClicked = true;
    } 
}));

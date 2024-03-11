
$('h1').css('font-style','italic')
$('p').css('font-style','italic')
$('h1').css('text-align', 'center')
$(document).ready(function() {
   var imageWidth = 270; 
    var imageHeight = 270;
    $("img").each(function() {
        $(this).attr("width", imageWidth);
        $(this).attr("height", imageHeight);
    });
});
$("table img").each(function() {
    $(this).attr("width", imageWidth);
    $(this).attr("height", imageHeight);
});
$(document).ready(function() {
    var playerNames =  ["cristiano ronaldo", "son", "de bruyne", "mezul ozil", "ibrahimmovic", "alessandro de piero", "roberto baggio", "francesco totti"];
    var res = Math.floor(Math.random() * playerNames.length);
    var playerName = playerNames[res];
    $('img').attr('src', './images/guess' + (res + 1) + '.png');
   $('#checkbutton').on('click', function() {
      var guess = $('#guessinput').val();
      if (guess.toLowerCase() === playerName.toLowerCase()) {
        $('#result').text('Congratulations! You guessed it right.');
      } else {
        $('#result').text('Oops! Wrong guess. Try again.');
      }
    });
  });
 $('div').css('margin',200)
$('p').css('text-shadow', 2, 2, 5 ,red)
 


$('h1').css('font-style','italic')
$('p').css('font-style','italic')
$('h1').css('text-align', 'center')
function each(array,callback){
  for(var i=0;i<arrray.length;i++){
      callback(array[i],i)
  }
}
$(document).ready(function() {
   var imageWidth = 400; 
    var imageHeight = 400;
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

  var playerNames = ["cristiano ronaldo", "son", "kavin de bruyne"];
var num=playerNames.length*2
$('#score').text('Your score: ' + score); 

  function showNextImage(index) {
    if (index < 6) {
      $('img').hide();
      $('img').eq(index).show();
      $('#guessinput').val(""); 
    } else {
      
      $('#guessinput').hide();
      $('img').hide();
      $('#checkbutton').hide();
      $('#result').text('Game Over.');
      $('#score').text('Your score: ' + score); 

    }
  }

  
  var currentIndex = 0;
  var next = 0;
  var score = 0;

  showNextImage(currentIndex);

  
  $('#checkbutton').on('click', function() {
    var guess = $('#guessinput').val();
    var playerName = playerNames[currentIndex];
    if (guess.toLowerCase() === playerName.toLowerCase()) {
      $('#result').text('Congratulations! You guessed it right.');
      currentIndex++;
      score++; 
      $('#score').text('Your score: ' + score);
      next++;
    showNextImage(next);
    } else {
      $('#result').text('Oops! Wrong guess. Try again.');
      $('#guessinput').val("");
    }
    
  });

  
  $('#next').on('click', function() {
    next++;
    showNextImage(next);
  });
});
  
 $('div').css('margin',170)
 $('p').css('text-shadow', 2, 2, 5 ,red)
 


$('h1').css('font-style','italic')
$('p').css('font-style','italic')
$('h1').css('text-align', 'center')
function each(array,callback){
  for(var i=0;i<arrray.length;i++){
      callback(array[i],i)
  }
}
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
   var playerNames=[{ name: "cristiano ronaldo",images: ["./images/cristiano ronaldo-1.png  ","./images/cristiano ronaldo-2.png"]},
  {name: "son",images: ["./images/son-1.png  ","./images/son-2.png"]},
{name: "kavin de bruyne",images: ["./images/kavin de bruyne-1.png  ","./images/kavin de bruyne-2.png"]}]


    
   $('#checkbutton').on('click', function() {
      var guess = $('#guessinput').val();
      if (guess.toLowerCase() === playerName.toLowerCase()) {

        $('#result').text('Congratulations! You guessed it right.');
      } else {
        $('#result').text('Oops! Wrong guess. Try again.');
      }
    });
  });
  
 $('div').css('margin',170)
$('p').css('text-shadow', 2, 2, 5 ,red)
 

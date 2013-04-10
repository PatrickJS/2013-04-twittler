
  var $body = $('#twitter');
  var random = Math.round(Math.random()*10)
  $body.html('');

  // var index = streams.home.length - 1;
  // while(index >= 0){
  //   var tweet = streams.home[index];
  //   var $tweet = $('<div></div>');
  //   $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //   $tweet.appendTo($body);
  //   index -= 1;
  // }
  // var index = streams.home.length - 1;

    // var tweet = streams.home[index];
    // var $tweet = $('<div></div>');
    // $tweet.text('@' + tweet.user + ': ' + tweet.message);
    // $tweet.appendTo($body);
    // index -= 1;




    // var $body = $('body');
    // var index = streams.home.length - 1;
    // var tweet = streams.home[index];
    // var $tweet = $('<div></div>');
    // $tweet.text('@' + tweet.user + ': ' + tweet.message);
    // $tweet.appendTo($body);

    var randomTweet = function() {
      var tweet = streams.home[(streams.home.length - 1)];
      var twitterUser = tweet.user
      var twitterTime = tweet.created_at
      var $tweet = $('<div></div>');
      $tweet.text('@' + twitterUser + ': ' + tweet.message);
      $tweet.prependTo($('#twitter'));
    };

    var liveTweet = function(startTime) {

      var startTime = loopTime || 500
      var loopTime = startTime * Math.round(Math.random()*10)
      setInterval(function() {
        var loopTime = startTime * Math.round(Math.random()*10)
        randomTweet();
        scheduleNextTweet()
        console.log(loopTime);

      }, loopTime);

    };

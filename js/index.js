var channelName; 
var logo;
var title;
var currentlyPlaying;
var availability;
var viewerCount;
var preview;
var url;

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/featured?limit=10?stream_type=live', function(data) {
 
  //console.log(data);
  
  for (i = 0; i < 5; i++) {
      channelName = data.featured[i].stream.channel.display_name;
      logo = data.featured[i].stream.channel.logo;
      title = data.featured[i].title;
      currentlyPlaying = data.featured[i].stream.channel.game;
      viewerCount = data.featured[i].stream.viewers;
      preview = data.featured[i].stream.preview.medium;
      url = data.featured[i].stream.channel.url;
      availability = data.featured[i].stream.channel.game;
    

    
    
var thecircle = "'circle" + i + "'";
    
      // the variables get used in the html
    
    $("#mybox").append("<div class='box col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-1'><h3> <a href=" + url + ">" + channelName + "</a><div id=" + thecircle + "class='animated infinite pulse'></div></h3><br><img class='logos' src=" + logo +"><hr><br><h5><strong>" + title + "</strong></h5><p><strong>Currently Playing: </strong>" + currentlyPlaying + "<br><strong>Viewers: </strong>" + viewerCount + "</p><img class='previews img-responsive' src=" + preview + "></div>");
  
     }
  
});



$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp', function(data) {
 
 $("#mybox").append("<div class='box col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-1'><h3> <a href='https://www.twitch.tv/freecodecamp'>FreeCodeCamp</a><div class='animated infinite pulse'></div></h3><br><img class='logos' src='https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png'><hr><br><p id='note'></p><div id='noteHere'><h5><strong>" + title + "</strong></h5><p><strong>Currently Playing: </strong>" + currentlyPlaying + "<br><strong>Viewers: </strong>" + viewerCount + "</p><img class='previews img-responsive' src=" + preview + "></div></div>");
  
  
  
  var isLive = data.stream;
  
    if (isLive == null){
      
            $(".liveCircle").css({
              "display": "none"

            })
            $("#note").append("This channel is not live.");
            $("#noteHere").css({
              "display": "none"
            })  
      
    } else {
      
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp', function(data) {
  
     channelName = data.stream.channel.display_name;
      logo = data.stream.channel.logo;
      title = data.title;
      currentlyPlaying = data.stream.channel.game;
      viewerCount = data.stream.viewers;
      preview = data.stream.preview.medium;
      url = data.stream.channel.url;
      availability = data.stream.channel.game;
    
      // the variables get used in the html
    
    $("#mybox").append("<div class='box col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-1'><h3> <a href=" + url + ">" + channelName + "</a><div class='animated infinite pulse'></div></h3><br><img class='logos' src=" + logo +"><hr><br><h5><strong>" + title + "</strong></h5><p><strong>Currently Playing: </strong>" + currentlyPlaying + "<br><strong>Viewers: </strong>" + viewerCount + "</p><img class='previews img-responsive' src=" + preview + "></div>");
  
});
      
      }
  
});
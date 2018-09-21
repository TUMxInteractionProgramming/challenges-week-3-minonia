// get the channel name and update header, remove and update class selected
function switchChannel(channelName) {
  // channelName = this.innerText()
  var x = channelName;
  channelName = x.trim();
  console.log('Tuning into channel '+ channelName);
  document.getElementById('channelName').innerText = channelName;
  document.getElementById('channelLink').innerHTML = '<a href="https://map.what3words.com/upgrading.never.helps">&nbsp;upgrading.never.helps</a>';
  // add CSS to style link
  $("#chat>h1>img").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
  $("li.selected").removeClass();
  $("li:contains(" + channelName + ")").addClass("selected");
}

// function updates star in APP bar to unfilled by clicking on star;
function unstar() {
  $("#chat>h1>img").attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
}

// loggs current Buttonname to console, add Class to selected button
function selectTab(selectedTab) {
  console.log('Changing to tab ' + selectedTab);
  $("#tab-bar>button.selected").removeClass("selected");
  $("#"+ selectedTab).addClass("selected");
}

// opens menu of emoji-button
function toggleEmojis() {
    $("#emojis").toggle();
}

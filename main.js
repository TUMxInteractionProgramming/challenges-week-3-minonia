
function switchChannel(channelName) {
  // channelName = this.innerHTML()
  console.log(channelName);
  console.log('Tuning into channel'+channelName);
  document.getElementById('channelName').innerHTML = channelName
  document.getElementById('channelLink').innerHTML = '<a href="https://map.what3words.com/upgrading.never.helps">&nbsp;upgrading.never.helps</a>';
  $("#chat>h1>img").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
};

function unstar() {
  $("#chat>h1>img").attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
};

function selectTab(selectedTab) {
  console.log('Changing to tab '+ selectedTab);
  $("#tab-bar>button.selected").removeClass("selected");
  $("#"+ selectedTab).addClass("selected");
};

function toggleEmojis() {
    $("#emojis").toggle();
};

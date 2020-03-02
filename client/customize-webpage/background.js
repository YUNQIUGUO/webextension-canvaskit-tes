browser.contextMenus.create({
    id: "draw-text-page",
    title: "Draw text commands"
  });
  
  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "draw-text-page") {
      browser.tabs.executeScript({
        file: "draw-text.js"
      });
    }
  });





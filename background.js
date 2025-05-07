chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (window.show_help) {
          alert('קישור זה אינו מיועד לשימוש כאן, אלא באתר אחר כלשהו בו תרצה להקליד בערבית.');
        } else {
          if (!window.bm_entry) {
            let _my_script = document.createElement('script');
            _my_script.type = 'text/javascript';
            _my_script.src = 'http://www.typo.co.il/~mooffie/arabic/keyboard/bookmarklet-app.js?x=' + Math.random();
            document.head.appendChild(_my_script);
          } else {
            bm_entry();
          }
        }
      }
    });
  });
  
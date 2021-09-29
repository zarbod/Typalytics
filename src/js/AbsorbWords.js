var prnt = "";
chrome.tabs.executeScript({
    file: "src/js/content.js"
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'done') {

    }
});
chrome.storage.sync.get(["words"], function(result){
    if(result.words.length) {
        document.getElementById("count").innerHTML = result.words.length;
    }
});
window.onclick = function (event) {
    let target = event.target;
    if (target.matches('.clickableBtn')) {
        let clickedEle = document.activeElement.id;
        let ele = document.getElementById(clickedEle);
        if(ele === document.getElementById("practiceButton")){
            chrome.storage.sync.set({words: []}, function(){
                alert("clearing");
                document.getElementById("count").innerHTML = "0";
            });
        }
        if(ele === document.getElementById("refreshButton")){
            chrome.tabs.executeScript({
                file: "src/js/content.js"
            });
                    chrome.storage.sync.get(["words"], function(result){
                        if(result.words.length) {
                            document.getElementById("count").innerHTML = result.words.length;
                            for(let i = 0; i < result.words.length; i++) {
                                prnt = prnt + result.words[i] + " ";
                            }
                            //alert(prnt);
                        }
                    });

        }
    }
}
//printing in the console of the extension

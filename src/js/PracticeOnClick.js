window.onclick = function (event){
    let target = event.target;
    if(target.matches('#rdyButton')){
        alert("Lets goooo!!!");
        chrome.tabs.create({url: chrome.extension.getURL('src/html/Training.html')});
    }else if(target.matches('#clearButton')){
        if(confirm('Are you sure you want to clear your words?')){
            chrome.storage.sync.set({words: []}, function(){
                console.log("words were cleared.");
            });
            chrome.tabs.executeScript({
                file: "Practice.js"
            });
            chrome.tabs.reload();
        }else{
            console.log("words not cleared.")
        }
    }
}
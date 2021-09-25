chrome.tabs.executeScript({
    file: "js/content.js"
});
window.onclick = function (event) {
    let target = event.target;
    if (target.matches('.clickableBtn')) {
        let clickedEle = document.activeElement.id;
        let ele = document.getElementById(clickedEle);
        if(ele === document.getElementById("practiceButton")){
            alert("Starting Practice");
        }

    }
}

//printing in the console of the extension
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color: '#000000', pages: [] });
});

chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
    if (frameId !== 0) return;

    chrome.scripting.executeScript({
        target: { tabId },
        function: newPageLoad,
    });
    
});

const newPageLoad = async () => {
    if (document.location.href.startsWith('chrome://')) return;

    const popupDiv = document.createElement('div');
    popupDiv.style.position = 'absolute';
    popupDiv.style.top = '50%';
    popupDiv.style.left = '50%';
    popupDiv.style.transform = 'translate(-50%, -50%)';
    popupDiv.style.width = '200px';
    popupDiv.style.height = '150px';
    popupDiv.style.backgroundColor = '#ffffff';
    popupDiv.style.boxShadow = '0px 0px 5px 2px';
    popupDiv.style.borderRadius = '10px';
    popupDiv.style.marginLeft = '10px'
    popupDiv.style.marginRight = '10px'
    popupDiv.style.marginTop = '10px'
    popupDiv.style.marginBottom = '10px'

    const title = document.createElement("h3");
    title.innerText = "hiiiii";

    popupDiv.appendChild(title);
    document.body.appendChild(popupDiv);
    
    const { color } = await chrome.storage.sync.get('color');
    document.body.style.backgroundColor = color;
}
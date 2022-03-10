chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color: '#000000' });
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

    const { color } = await chrome.storage.sync.get('color');
    document.body.style.backgroundColor = color;
}

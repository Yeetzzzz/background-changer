const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener("click", () => {
    if (!/^#[0-6a-f]{6}$/gi.test(input.value)) return;

    chrome.storage.sync.set({ color: input.value });
});
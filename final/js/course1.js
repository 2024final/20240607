const diveLinker = new DiveLinker('dive1');

var messageSent = false;

function sendMessage(message) {
    console.log("Sending message to parent:", message);
    window.parent.postMessage(message, '*');
}

var checkComplete_Interval = setInterval(() => {
    checkComplete = diveLinker.checkComplete();
    console.log(checkComplete);
    if (checkComplete) {
        clearInterval(checkComplete_Interval);

        sendMessage({
            type: 'updateStatus',
            status: '已完成認識路徑與位移課程',
            field: 'td_progress1'
        });
    }
}, 50)

function sendMessageToPageB() {
    clearInterval(checkComplete_Interval); // 清除定时器
}
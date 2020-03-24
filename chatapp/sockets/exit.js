'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitMessageEvent', function (data) {
        const message = `${data.userName}さんが退室しました。`;
        socket.broadcast.emit('receiveExitMessageEvent', {'message': message});
    });
};

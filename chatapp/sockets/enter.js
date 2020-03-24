'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterMessageEvent', function (data) {
        const message = `${data.userName}さんが入室しました。`;
        socket.broadcast.emit('recieveEnterMessageEvent', {'message': message});
    });
};

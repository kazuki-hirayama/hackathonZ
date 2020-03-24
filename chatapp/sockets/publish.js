'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
        let message = `${data.userName}さん：${data.message}`
        io.sockets.emit('recieveMessageEvent', message) 
    });
};

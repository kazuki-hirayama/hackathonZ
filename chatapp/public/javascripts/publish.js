'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').text();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // 投稿内容を送信
    socket.emit('sendMessageEvent', {'userName': userName, 'message': message})

    return true;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('recieveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});

'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = userName + "さんのメモ：" + $('#message').val();
    // メモの内容を表示
    $('#thread').prepend('<p>' + message + '</p>');
    $('#message').val('');

    return true;
}

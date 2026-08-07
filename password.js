function checkPassword(input) {
    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();

    h = h % 12;
    h = h ? h : 12;

    var password = h + ":" + (m < 10 ? "0" + m : m);

    return input.trim() === password;
}

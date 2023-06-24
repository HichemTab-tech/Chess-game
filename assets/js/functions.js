function generateUniqueId() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = ""
    const charactersLength = characters.length;

    for (let i = 0; i < 25; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function isNotNull(variable) {
    return typeof variable !== 'undefined' && variable !== null;
}
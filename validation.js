export function checkEmail(email) {
    const emailExp = /[a-z0-9]+\@+[a-z]+\.+([a-z]?[a-z]?[a-z]?)/g;
    const check = emailExp.exec(email);
    console.log(check);
    if (check) {
        return check[0] === email;
    };
}




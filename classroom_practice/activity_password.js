function checkPassword(password) {
    let length = password.length >= 8;
    let uppercase = /[A-Z]/.test(password);
    let lowercase = /[a-z]/.test(password);
    let special = /[^A-Za-z0-9]/.test(password);

    if (length && uppercase && lowercase && special) {
        return true;
    } else {
        return false;
    }
}

let myPassword = "Hello@123";

if (checkPassword(myPassword)) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}





et password = "Hello@";

function checkPassword(password) {
    let upper = false;
    let lower = false;
    let special = false;
    let digit = false;

    if (password.length < 6) {
        return false; // 1. Length kam hai toh yahin stop
    }

    for (let i = 0; i < password.length; i++) {
        let ch = password.charAt(i);

        if (ch >= "A" && ch <= "Z") {
            upper = true;
        } else if (ch >= "0" && ch <= "9") {
            digit = true;
        } else if (ch >= "a" && ch <= "z") {
            lower = true;
        } else {
            special = true;
        }
    }

    if (lower && upper && digit && special) {
        return true; // 2. Saari conditions true hain
    }

    return false; // 3. Koi condition missing hai
}

console.log(checkPassword(password));

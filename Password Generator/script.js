// 15 chars

const val = Array.from(Array(94)).map((e, i) => i + 33);
const allChars = val.map((x) => String.fromCharCode(x));

var passwords = [];

function generatePasswords() {
    passwords = []
    for (let i = 0; i < 4; i++) {
        let password = ""
        for (let i = 0; i < 15; i++) {
            password += allChars[Math.floor(Math.random() * allChars.length)]
        }
        passwords.push(password)
    }
    console.log(passwords)

    // display the passwords
    let elements = document.querySelectorAll(".password")
    for (let i in passwords) {
        elements[i].textContent = passwords[i]
    }
};



// copying password to clipboard




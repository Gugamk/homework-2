let passwords = [];

passwords.push(`1Abc`, `2Defx`, `3GHijklmnoP`);

for (let i = 0; i < passwords.length; i++) {
  passwords[i] = passwords[i].toLowerCase();
}

console.log(passwords);

let strongPassword = [];

for (let i = 0; i < passwords.length; i++) {
  strongPassword[i] =
    passwords[i].length > 8 ? `Strong password` : `Weak password`;
}

console.log(strongPassword);

for (let i = 0; i < passwords.length; i++) {
  console.log(passwords[i].length);
}

passwords.shift();

console.log(passwords);

passwords.unshift(`WxYz0`);

console.log(passwords);

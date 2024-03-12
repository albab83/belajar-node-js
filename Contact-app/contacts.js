const { promises } = require('dns');
const fs = require('fs');

const readline = require('readline');
const { json } = require('stream/consumers');

const rl = readline.createInterface({ 
    input: process.stdin , 
    output: process.stdout });

//membuat folder data jika foldernya belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file json jika file nta belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama)
        })
    })
}

const simpanContact = (nama, noHp, email) => {
    const contact = {nama, noHp, email};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(`terimakasih ${nama} sudah menginputkan ${noHp}`);
    rl.close();
}

module.exports = { tulisPertanyaan, simpanContact }


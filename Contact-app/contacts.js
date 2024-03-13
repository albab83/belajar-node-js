const { promises } = require('dns');
const fs = require('fs');
const chalk = require('chalk');


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


const simpanContact = (nama, noHp, email) => {
    const contact = {nama, noHp, email};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    //cek apakah namanya duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat) {
        console.log(chalk.red.inverse.bold('contact sudah terdaftar, gunakan nama lain!'))
        return false
    }

    // cek email
    

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(`terimakasih ${nama} sudah menginputkan data`);
}

module.exports = { simpanContact }


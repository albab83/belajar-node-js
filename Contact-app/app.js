const fs = require('fs');

const readline = require('readline');
const { json } = require('stream/consumers');

const rl = readline.createInterface({ 
    input: process.stdin , 
    output: process.stdout });

    //membuat folder data
    const dirPath = './data'
    if(fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
    }

rl.question('masukan nama anda: ', (nama) => {
    // TODO: Log the answer in a database
    rl.question('masukan no hp anda: ', (noHp) => {
        const contact = {nama, noHp};
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log(`terimakasih ${nama} sudah menginputkan ${noHp}`);
        rl.close();
    })
  
  });

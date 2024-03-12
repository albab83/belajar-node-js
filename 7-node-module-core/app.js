const { error } = require('console');
const fs = require('fs');

//menuliskan string ke file secara synchrounus

// try {
    //     fs.writeFileSync('data/test.txt', 'Hello World');
    // } catch(e) {
        //     console.log('error boss')
        // }
        
//menuliskan string ke file secara asynchrounus

// fs.writeFile('data/test.txt', 'menulis secara asynchronous', (err) => {
//     console.log(err)
// })

// membaca isi file (synchronous)

// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data);

// membaca isi file (asynchronous)

// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data);
// })

//  Read line 

const readline = require('readline');
const { json } = require('stream/consumers');

const rl = readline.createInterface({ 
    input: process.stdin , 
    output: process.stdout });

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

<<<<<<< HEAD























// const contacts = require('./contacts')


// const main = async() => {
//     const nama = await contacts.tulisPertanyaan('Masukan nama anda: ')
//     const noHp = await contacts.tulisPertanyaan('Masukan No Hp anda: ')
//     const email = await contacts.tulisPertanyaan('Masukan email anda: ')


//     contacts.simpanContact(nama, noHp, email)
// }

// main();
=======
const contacts = require('./contacts')


const main = async() => {
    const nama = await contacts.tulisPertanyaan('Masukan nama anda: ')
    const noHp = await contacts.tulisPertanyaan('Masukan No Hp anda: ')
    const email = await contacts.tulisPertanyaan('Masukan email anda: ')


    contacts.simpanContact(nama, noHp, email)
}

main();
>>>>>>> 80c18e2bdf95dbfeca06ef87fdb77478c51e6dcc

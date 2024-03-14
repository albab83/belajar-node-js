const yargs = require("yargs");
const contacts = require("./contacts");


yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder: {
        nama: {
            discribe: "nama",
            demanOpion: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demanOpion: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor Handphone',
            demanOpion: true,
            type: 'string'
        },
    },
    handler(argv){
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    }
})

yargs.parse()



















// const contacts = require('./contacts')


// const main = async() => {
//     const nama = await contacts.tulisPertanyaan('Masukan nama anda: ')
//     const noHp = await contacts.tulisPertanyaan('Masukan No Hp anda: ')
//     const email = await contacts.tulisPertanyaan('Masukan email anda: ')


//     contacts.simpanContact(nama, noHp, email)
// }

// main();

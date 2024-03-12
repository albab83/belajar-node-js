function cetakNama(nama) {
    return `Hallo nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'albab',
    alamat: 'cingcin kolot',
    Ctkmhs() {
        return `hallo nama saya ${this.nama} dan alamat saya di ${this.alamat}`
    }
}

class Orang {
    constructor(){
        console.log('object tlah di buat')
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI:PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// }

module.exports ={cetakNama, PI, mahasiswa, Orang}
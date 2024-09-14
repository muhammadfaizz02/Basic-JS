// versi prototype
// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi;
//   return `halo ${this.nama} selamat makan`;
// }

// mahasiswa.prototype.main = function(jam) {
//   this.energi -= jam;
//   return `halo ${this.nama} selamat bermain`;
// }

// mahasiswa.prototype.tidur = function(jam) {
//   this.energi += jam * 2;
//   return `halo ${this.nama} selamat tidur`;
// }

// let faiz = new mahasiswa('faiz', 10);

// versi Class
class mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
  this.energi += porsi;
  return `halo ${this.nama} selamat makan`;
}
  main(jam) {
    this.energi -= jam;
    return `halo ${this.nama} selamat bermain`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `halo ${this.nama} selamat tidur`;
  }
}

let faiz = new mahasiswa('faiz', 10);

// arrow function
// const tampilpesan = (nama) => {
//   alert(`halo ${nama}`);
// }
// tampilpesan('faiz');
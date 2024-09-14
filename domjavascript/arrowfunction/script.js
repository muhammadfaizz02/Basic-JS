// konsep this pada arrow function
// const mahasiswa = function() {
//   this.nama = `faiz`
//   this.umur = 19
//   this.stayhello = () => {
//     console.log(`halo, nama saya ${this.nama}, saya ${this.umur} tahun.`)
//   }
// }
// const faiz = new mahasiswa()

const box = document.querySelector('.box')
box.addEventListener('click', function() {
  let satu = 'size'
  let dua = 'caption'

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu]
  }


  this.classList.toggle(satu)
  setTimeout(() =>{
    this.classList.toggle(dua)
  }, 600)
})
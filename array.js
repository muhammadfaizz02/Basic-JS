var binatang = [];
binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];
console.log(binatang[4]);

// menampilkan isi array
// length = mengetahui jumlah
var arr = ["faiz","akbar","kamil"];

for (var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// join
var arr = ['faiz','akbar','kamil'];
console.log(arr.join());

// push = untuk menambah elemen baru array di akhir
var arr = ['faiz','akbar','kamil'];
arr.push('faizz');
// pop = untuk menghapus elemen array yang berada di akhir
arr.pop();

// unshift = menambah elemen baru di awal
arr.unshift('faizz');
// shift = menghapus elemen yang berada di awal
arr.shift();

// splice 
arr.splice(1, 2, 'faizz');
console.log(arr.join());

// slice
var arr = ['faiz','akbar','kamil','ulbi','poltek'];
var arr2 = arr.slice(1, 3);
console.log(arr2.join());

// forEach
var angka = [1,2,3,4,5,6,7,8];
  // for (var i = 0; i < angka.length; i++){
  //   console.log([i]);
  // }
  angka.forEach(function(e, i){
    console.log('mahasiswa ke ' + i + 'adalah' + e);
  });

  // map
  var angka = [1,2,5,7,6,4];
  var angka2 = angka.map(function(e) {
    return e;
  });
  console.log(angka2.join());

  // sort = mengurutkan angka
  var angka = [1,2,3,4,5,6,7,8];
  angka.sort(function(a, b){
    return a-b;
  });
  console.log(angka.join());
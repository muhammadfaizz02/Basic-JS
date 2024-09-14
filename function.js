function jumlahVolumeDuaKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(10, 15));

// expresion contoh
var tampilkanPesan = function (nama) {
  alert('halo' + nama);
}
tampilkanPesan('faiz');

// declaration contoh
tampilkanPesan('faiz');
function tampilkanPesan (nama) {
  alert('halo' + nama);
}
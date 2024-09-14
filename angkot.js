var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
  // jika angkotnya kosong
  if ( penumpang.length == 0 ){
    // tanmah penumpang diawal array
    penumpang.push (namaPenumpang);
    // keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for ( var i = 0; i < penumpang.length; i++ ){
      // jika kursi kosong
      if ( penumpang[i] == undefined ){
        // tambah penumpang dikursi tersebut
        penumpang[i] = namaPenumpang;
        // keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if ( penumpang[i] == namaPenumpang ){
        // tampilkan kesalahanya
        console.log(namaPenumpang + ' sudah ada didalam angkot');
        // keluar dari function
        return penumpang;
      }
      else if( i == penumpang.length - 1 ){
        // tambah penumpang diakhir array
        penumpang.push(namaPenumpang);
        // keluar dari function
        return penumpang;
      }
    }
  }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
  if ( penumpang.length == 0 ){
    console.log('penumpang masih kosong');
    return penumpang;
  }else {
    for ( var i = 0; i < penumpang.length; i++ ){
      if ( penumpang[i] == namaPenumpang ){
        penumpang[i] = undefined;
        return penumpang;
      }else if ( i == penumpang.length - 1 ){
        console.log(namaPenumpang + ' tidak ada didalam angkot');
        return penumpang;
      }
    }
  }
}
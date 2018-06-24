function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    if (arrPenumpang.length === 0) {
        return []

    }else {

        var result= []

            for (var i=0; i < arrPenumpang.length; i++) {
                var Obj= {}
                var jarak= rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]) 
                var ongkos= jarak*2000
                
                Obj.penumpang= arrPenumpang[i][0]
                Obj.naikDari= arrPenumpang[i][1]
                Obj.tujuan= arrPenumpang[i][2]
                Obj.bayar= ongkos

                result.push (Obj)
            }
        
        return result
    }   
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
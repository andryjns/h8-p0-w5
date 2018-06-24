function highestScore (students) {
    
    if (students.length === 0) {
        return {}

    } else {

        // Buat list Kelas yg terfiltered //
        var kelas= []                                    

        for (var i=0; i<students.length; i++) {
            if (kelas.indexOf(students[i]['class']) === -1) {
                kelas.push(students[i]['class'])
            }
        }
        //console.log (kelas)


        // Cari Angka tertinggi per kelas  // 
        var angka= []                                            
        
        for (var i=0; i<kelas.length; i++) {
            var deret= []

            for (var j=0; j< students.length; j++) {
                
                if (kelas[i]===students[j]['class']) {
                    deret.push(students[j]['score'])
                }
            }
            //console.log (deret)
            angka.push(Math.max(...deret))
        } 
        //console.log (angka)


        // Cari Nama yg punya score tertinggi //
        var nama= []                               

        for (var i=0; i<kelas.length; i++) {
            
            for (var j=0; j< students.length; j++) {
                
                if (kelas[i]===students[j]['class'] && angka[i]===students[j]['score']) {
                    nama.push(students[j]['name'])
                }
            }        
        } 
        //console.log (nama)


        // Persiapkan output result-nya! :) //
        var result= {}      

        for (var i=0; i<kelas.length; i++) {

            var Obj= {}
            Obj.name= nama[i]
            Obj.score= angka[i]
            //console.log (Obj)

            result [kelas[i]]= Obj
        }
        
        return result
    }
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}  
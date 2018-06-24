function graduates (students) {
    
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


        // Remove student yg score <= 75 //
        
        for (var i=0; i<students.length; i++) {
            if (students[i]['score'] <= 75) {
                students.splice(i,1)
                i--
            }
        }
        //console.log (students)

        
        // Prepare RESULT //
        var result= {}

        for (var i=0; i<kelas.length; i++) {
            var arr= []

            for (var j=0; j< students.length; j++) {

                if (kelas[i] === students[j]['class']) {
                    delete students[j]['class']
                    arr.push(students[j])
                }

            }
            //console.log(arr)
            
            result [kelas[i]]= arr
        }            
    
        return result
    }

}
  


// TEST CASES
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{} 
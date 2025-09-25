let numerosGrandes =  [12, -7, 25, -3, 0, 18, -15, 9, -22, 5, -1, 30, -12, 8, -9];


  //console.log(numerosGrandes);


  function numerosPositivos(array) {
    let c= 0;
    for (const element of array) {
        if (0 > element) {
         c++;
        }
    }
    return c;
  }

  
 console.log(numerosPositivos(numerosGrandes));
  
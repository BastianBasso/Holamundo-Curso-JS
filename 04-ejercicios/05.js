let numerosGrandes =  [7, 42, 3, 99, 18, 56, 21, 5, 88, 13, 60, 2, 77, 34, 25, 81, 50, 11, 73, 29];

  //console.log(numerosGrandes);


  function getMenorMayor(array) {
    let may= 0;
    let men= array[1];
    for (const element of array) {
        //console.log(element);
        if (men > element) {
            men = element;
        }
        if (may < element){
            may = element;
        }
    }
    return {
        mayor: may,
        menor: men,
    };
  }

  
 console.log(getMenorMayor(numerosGrandes));
  
function capitalizeFirstLetters(input) {
    let output = '';
    let inter = [];
    input = input.split(" ");
  for (let i = 0; i < input.length; i++){
    inter = input[i].split("");
    for (let j = 0; j < inter.length; j++){
      if (j ===0){
        input[i] = inter[j].toUpperCase();
      } else {
        input[i] += inter[j];
      }
    }
  }
  output = input.join(' ') + " ";
  return output;
}



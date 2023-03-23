// вторая часть задачь из RSschool

// 1) Which color is the brightest?

function brightest(colors){
  let colorIndex = 0;
  let maxValue = 0;
  for (let i = 0; i < colors.length; i++) {
    let r = parseInt(colors[i].slice(1, 3), 16);
    let g = parseInt(colors[i].slice(3, 5), 16);
    let b = parseInt(colors[i].slice(5), 16);
    
    let value = Math.max(r, g, b);

    if(value > maxValue) {
      maxValue = value;
      colorIndex = i;  
    }
  }
  return colors[colorIndex]
}


console.log(brightest(["#FFFFFF", "#123456", "#000000"]));

// 2) Handshake problem

function getParticipants(handshakes){
  for (let i = 0; i < h; i+=k++); 
  return k; 
}























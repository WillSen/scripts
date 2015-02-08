var alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890'

var output = []

for (var i = 0; i < alphabet.length; i++) {
  var local = '<div>'+ alphabet[i]+'outube.com'+' \n' +'</div>'
  output.push(local)
};

// for (var i = 0; i < alphabet.length; i++) {
//   for (var j = 0; j < alphabet.length; j++) {
//     var local = '<div>'+ alphabet[i]+alphabet[j]+'youtube.com'+' \n' +'</div>'

//     output.push(local)
//   };
// };


for (var i = 0; i < output.length; i++) {
  console.log(output[i])
  $('.output').append(output[i])  
};

console.log('yo')


console.log(output)
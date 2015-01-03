var alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890'

var output = []

for (var i = 0; i < alphabet.length; i++) {
  var local = '<div>'+ alphabet[i]+'youtube.com'+' \n' +'</div>'
  output.push(local)
};
for (var i = 0; i < alphabet.length; i++) {
  for (var j = 0; j < alphabet.length; j++) {
    var local = '<div>'+ alphabet[i]+alphabet[j]+'youtube.com'+' \n' +'</div>'

    output.push(local)
  };
};


for (var i = 500; i < 1000; i++) {
  $('.output').append(output[i])  
};




console.log(output)
var arr = [];




for (var i = 0; i < 5; i++) {
	
  var n=prompt('Введите имя?', '');
  arr.push(n);
}

console.log('arr', arr);

	
	
var key= prompt('Введите имя пользователя', '');

function found_key() {
  if (arr.indexOf(key) == -1) {
  return false;
  }
  return true;
}


if(found_key()) {
	alert (key+', вы успешно вошли' );
} else {
  alert('Ошибка');
}

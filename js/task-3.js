const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Введите пароль!')

if (password === null) {
  message = 'Отменено пользователем!';
}
else if (ADMIN_PASSWORD === password ) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!'
}
console.log(message);
alert( message)
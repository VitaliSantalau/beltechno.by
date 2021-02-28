const valid = (name, email, feedback) => {
  if(!name || !email || !feedback) {
    return "Пожалуйста, заполните все поля"
  }
  
  if(!validateEmail(email)) {
    return "Пожалуйста, укажите корректный email"
  } 
}
  
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
  
export default valid
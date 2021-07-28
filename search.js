const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const paradisplay = document.getElementById('display');
const input = document.getElementById('searchname');
const btn = document.getElementById('searchnamebtn');


btn.addEventListener('click', result);
function result() {
  let searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  paradisplay.textContent = 'Contact not found.';
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      paradisplay.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } 
    //else {
      //paradisplay.textContent = 'Contact not found.';
    //}
  }
}


// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

let contactPage = document.getElementById('contact-page');
let form = document.querySelector('form'); 
let h2 = document.querySelector('h2');
let newPara = document.createElement('p');
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
  submitContent();
}); 


function submitContent(){
  contactPage.removeChild(h2);
  contactPage.removeChild(form);
  newPara.innerHTML = "Thank you for your message";
  newPara.style.fontSize = 'large';
  contactPage.append(newPara);
}
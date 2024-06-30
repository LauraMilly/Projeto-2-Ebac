document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = this.querySelector('#name').value;
      const phone = this.querySelector('#phone').value;
  

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td><span>&#x1F4F2;</span> ${name}</td>
        <td>${phone}</td>
      `;
      

      newRow.classList.add('new-row');
  
      
      contactList.appendChild(newRow);
  
     
      setTimeout(function() {
        newRow.classList.remove('new-row');
      }, 1500); 
      
      this.reset();
    });
  });
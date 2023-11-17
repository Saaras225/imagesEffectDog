const dogs = document.querySelectorAll('.dogs');

  dogs.forEach(dog => {
      dog.addEventListener('click', () => {
        removeActive();
        dog.classList.add('active');
      })
  });

  function removeActive(){
    dogs.forEach(dog => {
      dog.classList.remove('active')
    })
  }
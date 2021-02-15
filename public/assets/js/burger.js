document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    // Update
    const changeGoodBtns = document.querySelectorAll('.change-good');
    if (changeGoodBtns) {
      changeGoodBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          
          const id = e.target.getAttribute('data-id');
          const newGood = e.target.getAttribute('data-newgood');
  
          const newGoodState = {
            good: newGood,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },

            body: JSON.stringify(newGoodState),
          }).then((response) => {
            if (response.ok) {
              console.log(`changed good to: ${newGood}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const newBurger = {
          name: document.getElementById('bu').value.trim(),
          good: document.getElementById('good').checked,
        };
  
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(newBurger),
        }).then(() => {
          document.getElementById('bu').value = '';
  
          console.log('Created a new Burger!');
          location.reload();
        });
      });
    }
  });
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-form-input');

  const handleFormSubmit = function(evt){
    evt.preventDefault();

    // first name
    const newFirstName = document.createElement('p');
    const resultFirstName = evt.target.firstName.value;
    newFirstName.textContent = resultFirstName;

    // second name
    const newSecondName = document.createElement('p');
    const resultSecondName = evt.target.secondName.value;
    newSecondName.textContent = resultSecondName;

    //drop down
    const newDropDown = document.createElement('p');
    const resultDropDown = evt.target.dropDown.value;
    newDropDown.textContent = resultDropDown;

    // dogs name
    const newDogsName = document.createElement('p');
    const resultDogsName = evt.target.dogsName.value;
    newDogsName.textContent = resultDogsName;

    // combined details
    const newAdoption = document.createElement('div');
    newAdoption.appendChild(newFirstName);
    newAdoption.appendChild(newSecondName);
    newAdoption.appendChild(newDropDown);
    newAdoption.appendChild(newDogsName);

    // sender
    const list = document.querySelector('#adoption-list');
    list.appendChild(newAdoption);
    form.reset();

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click',
    handleDeleteAll);
  };

form.addEventListener('submit', handleFormSubmit)
});

const handleDeleteAll = function(evt) {
  const list = document.querySelector('#adoption-list');
  list.innerHTML = '';
}

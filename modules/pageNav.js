const navigate = () => {
  const bookListSection = document.querySelector('.books-container');
  const contactSection = document.querySelector('.contact');
  const addBookSection = document.querySelector('.add-new-books');
  const List = document.querySelector('.list');
  const Contact = document.querySelector('.contact');
  const AddNew = document.querySelector('.add-new');

  List.addEventListener('click', () => {
    bookListSection.classList.remove('hide');
    contactSection.classList.add('hide');
    addBookSection.classList.add('hide');
  });

  Contact.addEventListener('click', () => {
    bookListSection.classList.add('hide');
    contactSection.classList.remove('hide');
    addBookSection.classList.add('hide');
  });

  AddNew.addEventListener('click', () => {
    bookListSection.classList.add('hide');
    contactSection.classList.add('hide');
    addBookSection.classList.remove('hide');
  });
};
export default navigate;

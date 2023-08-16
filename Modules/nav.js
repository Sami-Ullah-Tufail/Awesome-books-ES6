const list = document.getElementById('list');
const Newaddition = document.getElementById('addNew');
const contact = document.getElementById('contact');

// list.addEventListener('click', () => showsection('listSection'));
// Newaddition.addEventListener('click', () => showsection('addSection'));
// contact.addEventListener('click', () => showsection('contactSection'));

const showsection = (sectionid) => {
  const sections = ['listSection', 'addSection', 'contactSection'];
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (id === sectionid) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
};
export {
  list, Newaddition, contact, showsection,
};
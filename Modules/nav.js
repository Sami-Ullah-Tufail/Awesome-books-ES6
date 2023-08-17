const list = document.getElementById('list');
const Newaddition = document.getElementById('addNew');
const contact = document.getElementById('contact');

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
import {
  list, Newaddition, contact, showsection,
} from './Modules/nav.js';
import { renderbooks, addbooks, addButton } from './Modules/books.js';

import CLOCK from './Modules/clock.js';

CLOCK();

list.addEventListener('click', () => showsection('listSection'));
Newaddition.addEventListener('click', () => showsection('addSection'));
contact.addEventListener('click', () => showsection('contactSection'));

addButton.addEventListener('click', () => addbooks());

function initializeApp() {
  renderbooks();
}
document.addEventListener('DOMContentLoaded', initializeApp);

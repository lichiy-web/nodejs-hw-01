import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number = 1) => {
  const contactList = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  writeContacts([...contactList, ...newContacts]);
};

generateContacts(20);

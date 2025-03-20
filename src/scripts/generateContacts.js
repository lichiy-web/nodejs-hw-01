import { argv } from "node:process";
import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const generateContacts = async (number = 1) => {
    const contactList = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    writeContacts([...contactList, ...newContacts]);
};

const CliNumParam = argv.find(param => param.includes('num='));
const number = CliNumParam && CliNumParam.replace(/num=(\d*)/, '$1');
if(number) generateContacts(number);

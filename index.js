//* Include packages needed for this application
import { inquirerPrompts } from './utils/inquirerPrompts.js';
import { generateLogo } from './utils/generateLogo.js';
import { writeToFile } from './utils/writeToFile.js';

const init = async () => {
   //
   const answers = await inquirerPrompts(); //* present prompts to user
   const fileData = await generateLogo(answers); //* create svg file
   const fileName = `./examples/${answers.logoShape}.svg';
   writeToFile(fileName, fileData); //* write file to disk
};

init(); //* runs program

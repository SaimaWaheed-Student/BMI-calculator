//BMI calculator using inquirer prompt
import inquirer from "inquirer";
const questions = [
    {
        type: 'number', name: 'weight', message: 'weight(kg):'
    },
    {
        type: 'number', name: 'height', message: 'height(m):'
    },
];
const calculator = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    console.log(`BMI: ${calculator(weight, height).toFixed(2)}`);
};
main();

import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {   

   
    console.log(colors.bold.green('Welcome to a NodeJS ChatGPT Program!'));
    const userName = readlineSync.question('Your name?');
    console.log(`Hello ${userName}`);

    while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));
    
        try {
        // Call the API with the user input
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: userInput }],
            model: "gpt-4o-mini",
        });

        // get completion text/content
        const completionText = chatCompletion.choices[0].message.content

        if (userInput.toLowerCase() === 'exit') {
            return;
    
        }
        // console log bots answer :
	    console.log(colors.green('Bot: ') + completionText);
        } catch (error) {
          console.error(colors.red(error));
        }
    }
}

main();

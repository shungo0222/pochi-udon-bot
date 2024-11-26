import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

// Retrieve the bot token and mini app URL from environment variables
const token = process.env.BOT_TOKEN;
const miniAppUrlBase = process.env.MINI_APP_URL;

// Check if the required environment variables are set
if (!token || !miniAppUrlBase) {
  console.error("Error: The BOT_TOKEN or MINI_APP_URL environment variables are not set.");
  process.exit(1);
}

console.log("Successfully loaded environment variables.");

// Create a new Telegram bot instance using polling
const bot = new TelegramBot(token, { polling: true });

// Handle polling errors
bot.on("polling_error", (error: any) => {
  console.error(`Polling error: ${error.code} - ${error.message}`);
});

console.log("Bot has started and is now polling the Telegram server.");

// Define a regular expression to match the /start command with an optional parameter
const startCommand = /\/start(?:\s+(.+))?/;

// Listen for the /start command
bot.onText(startCommand, (msg, match) => {
  const chatId = msg.chat.id; // Get the chat ID to send messages
  const parameter = match && match[1] ? match[1] : null; // Extract the parameter if it exists
  
  if (parameter) {
    // If a parameter is provided, construct the mini app URL with the parameter as a query string
    const miniAppUrl = `${miniAppUrlBase}?r=${encodeURIComponent(parameter)}`;

    // Define the inline keyboard with a button to open the mini app
    const keyboard = {
      inline_keyboard: [
        [
          {
            text: "OPEN THE APP",
            web_app: { url: miniAppUrl }, // Specify the URL of the mini app
          },
        ],
      ],
    };

    // Send a message with the inline keyboard to the user
    bot.sendMessage(chatId, "Please tap this button to open the app.", {
      reply_markup: keyboard,
    });
  } else {
    // If no parameter is provided, send a default greeting message
    bot.sendMessage(chatId, "Hello! I'm pochi_udon_bot.");
  }
});
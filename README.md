# pochi-udon-bot  
  
A Telegram bot that utilizes deep linking to pass parameters to a mini app.  
  
## Overview  
  
`pochi-udon-bot` is a Telegram bot built with Node.js and TypeScript. It supports deep linking to receive parameters from users via the `/start` command and passes them to a mini app.  
  
## Features  
  
- **Deep Linking Support**: Handles `/start` commands with parameters.  
- **Mini App Integration**: Sends users a button to open a mini app with the passed parameter.  
- **Environment Variables**: Uses environment variables to manage sensitive information.  
  
## Setup  
  
### Prerequisites  
  
- **Node.js**: Version 14 or higher  
- **npm**: Version 6 or higher  
- **Telegram Account**: To create and manage your bot  
- **Git**: For cloning the repository  
  
### Installation  
  
1. **Clone the repository**  
  
```bash  
git clone https://github.com/shungo0222/pochi-udon-bot.git 
cd pochi-udon-bot  
```  
  
2. **Install dependencies**  
  
```bash  
npm install  
```  
  
3. **Set up environment variables**  
  
Copy the example environment file and fill in your own values:  
  
```bash  
cp .env.example .env  
```  
  
Edit the `.env` file and set your Telegram bot token and mini app URL:  
  
```dotenv  
# .env  
  
# Telegram Bot API Token  
BOT_TOKEN=your-telegram-bot-token  
  
# Base URL for the Mini App  
MINI_APP_URL=https://your-mini-app-url  
```  
  
## Running the Bot  
  
Start the bot using the following command:  
  
```bash  
npx ts-node src/bot.ts  
```  
  
You should see logs indicating that the bot has started:  
  
```  
Successfully loaded environment variables.  
Bot has started and is now polling the Telegram server.  
```  
  
## Usage  
  
1. **Deep Linking**  
  
Share a link with the format:  
  
```  
https://t.me/your_bot_username?start=your_parameter  
```  
  
Replace `your_bot_username` with your bot's username and `your_parameter` with the parameter you want to pass.  
  
2. **Interacting with the Bot**  
  
When a user clicks the link:  
  
- The bot receives the parameter from the `/start` command.  
- It sends back a message with a button labeled "OPEN THE APP."  
- The button opens the mini app with the parameter included in the URL.  
  
3. **Mini App**  
  
- The mini app should be able to receive the parameter via the URL query string.  
- It can use the parameter to display personalized content or perform specific actions.  
  
## Project Structure  
  
```  
pochi-udon-bot/  
├── src/  
│ └── bot.ts # Main bot code  
├── .env.example # Example environment variables file  
├── package.json  
├── tsconfig.json  
└── README.md # This file  
```  
  
## License  
  
This project is licensed under the MIT License.  
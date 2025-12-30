# ADVANCED DISCORD OWO TOOL FARM

```
>>> Captcha from owobot.com/captcha is now supported
```

> [!TIP]
> **Check out this discussion: https://github.com/Kyou-Izumi/discord-owo-selfbot/discussions/45**

### Tool installation

[Download and extract the module](https://github.com/Kyou-Izumi/advanced-discord-owo-tool-farm/archive/refs/heads/main.zip) or clone/pull it using [Git](https://git-scm.com/downloads):
```bash
git clone https://github.com/Kyou-Izumi/advanced-discord-owo-tool-farm.git
```

[Open the terminal inside folder](https://www.groovypost.com/howto/open-command-window-terminal-window-specific-folder-windows-mac-linux/) where you downloaded the tool
```bash
cd advanced-discord-owo-tool-farm
```
and run the following command:

```bash
npm install
```
This will install all the requirements (libraries) for the tool to run correctly.

### Get token

Method 1: Follow [this instruction](https://pcstrike.com/how-to-get-discord-token/) to get your account token.

Method 2: Press __Ctrl + Shift + I__ and paste the following function.

```javascript
window.webpackChunkdiscord_app.push([
    [Symbol()],
    {},
    req => {
        if (!req.c) return;
        for (let m of Object.values(req.c)) {
            try {
                if (!m.exports || m.exports === window) continue;
                if (m.exports?.getToken) return copy(m.exports.getToken());
                for (let ex in m.exports) {
                    if (m.exports?.[ex]?.getToken && m.exports[ex][Symbol.toStringTag] !== 'IntlMessagesProxy') return copy(m.exports[ex].getToken());
                }
            } catch {}
        }
    },
]);

window.webpackChunkdiscord_app.pop();
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

## Usage

### Normal usage (Interactive Command Line User Interfaces)

For running the tool, please use the following command (inside tool folder)

```bash
npm start
```

If you see the following warning 

![Imgur](https://i.imgur.com/jSTfrOr.png)

Congratulation, you have installed our `Advanced discord OwO tool farm` successfully.

Type "Y", enter and enjoy your time! (The tool will exit if you press enter only)

#### Account Login

We support 2 ways to login: via **token** and **QR Code**

![Imgur](https://i.imgur.com/UwU9Z9B.png)

##### Via token: 

__- Step 1: Get your discord account token__

See [How to get your discord token](#get-token)

__- Step 2: Simply paste your token into the terminal, this will take a while__

![Imgur](https://i.imgur.com/v7LlsSg.png)

##### Via QR Code
Simply scan the QR Code on the screen by your discord mobile and wait patiently...

![Imgur](https://i.imgur.com/xm8F3Cy.png)

### CLI usage (Command Line Interface)

```bash
node . [command] [options]
npm start [command] [options]
npm start -- -- [options]

# Example
npm start generate config-sample.json # generate config-sample.json
npm start import config.json # Trigger auto import and run with given config.json
```

#### CLI Options:
```sh
    -s, --skip-check-update # Skip the update check
    -u, --update # Update without asking
    -v, --verbose # Enable debug
```

## Configuration Guide

### Basic Setup
```js
{
    "username": "", // Optional: Display name (can be ignored)
    "token": "your.discord.token", // Required: Your Discord account token
    "guildID": "123456789", // Optional: Server ID where the bot operates
    "channelID": [ // Required: Array of channel IDs for farming (at least one)
        "channel-id-1",
        "channel-id-2",
        "channel-id-3"
    ]
}
```

### Notification Settings
```js
{
    "wayNotify": [ // Choose notification methods: "webhook", "dms", "call", "music", "popup"
        "webhook",
        "dms"
    ],
    "webhookURL": "https://discord.com/api/webhooks/...", // Required if using webhook
    "adminID": "your-user-id", // Required if using dms/call notifications
    "musicPath": "./path/to/music.mp3", // Required if using music notifications
    "prefix": "!" // Command prefix for bot commands
}
```

### Captcha Solving
```js
{
    "captchaAPI": "2captcha", // Options: "2captcha", "yescaptcha"
    "apiKey": "your-api-key" // Required if captchaAPI is set
}
```

### Huntbot Configuration
```js
{
    "autoHuntbot": true, // Enable/disable huntbot automation
    "autoTrait": "efficiency", // Options: "efficiency", "duration", "cost", "gain", "experience", "radar"
    "useAdotfAPI": true // Use Advanced Discord OwO Tool Farm API
}
```

### Auto Commands
```js
{
    "autoPray": [ // Auto pray/curse commands
        "pray",
        "pray user-id-here", // You can target specific users
        "curse user-id-here"
    ],
    "autoQuote": [ // Auto quote commands
        "owo", // Send owo/uwu randomly
        "quote" // Send random quotes
    ],
    "autoRPP": [ // Other auto commands
        "run",
        "pup", 
        "piku"
    ]
}
```

### Gem Management
```js
{
    "autoGem": 1, // 0: disabled, 1: upgrade fabled→common, -1: downgrade common→fabled
    "gemTier": [ // Gem tiers to use (when autoGem is enabled)
        "common",
        "uncommon", 
        "rare",
        "epic",
        "mythical"
        // Available: "legendary", "fabled"
    ],
    "useSpecialGem": false // Use special gems
}
```

### Lootbox & Daily Actions
```js
{
    "autoLootbox": true, // Auto use regular lootboxes
    "autoFabledLootbox": false, // Auto use fabled lootboxes
    "autoDaily": true, // Auto claim daily rewards
    "autoCookie": true, // Auto use cookies
    "autoClover": true, // Auto use clovers
    "autoSell": true // Auto sell animals when cash runs out
}
```

### System Settings
```js
{
    "autoSleep": true, // Create random pause gaps (5-20 mins)
    "autoReload": true, // Auto reload config daily
    "autoResume": true, // Auto resume after solving captcha
    "showRPC": true // Show Discord Rich Presence
}
```
### Complete Example
```js
{
    "token": "your.discord.token.here",
    "guildID": "123456789012345678",
    "channelID": ["987654321098765432"],
    "wayNotify": ["webhook"],
    "webhookURL": "https://discord.com/api/webhooks/your/webhook/url",
    "adminID": "your-user-id-here",
    "prefix": "!",
    "captchaAPI": "2captcha",
    "apiKey": "your-2captcha-api-key",
    "autoHuntbot": true,
    "autoTrait": "efficiency",
    "useAdotfAPI": true,
    "autoPray": ["pray"],
    "autoGem": 1,
    "gemTier": ["common", "uncommon", "rare", "epic", "mythical"],
    "useSpecialGem": false,
    "autoLootbox": true,
    "autoFabledLootbox": false,
    "autoQuote": ["owo"],
    "autoRPP": ["run", "pup"],
    "autoDaily": true,
    "autoCookie": true,
    "autoClover": true,
    "autoSell": true,
    "autoSleep": true,
    "autoReload": true,
    "autoResume": true,
    "showRPC": true
}
```

### Configuration Tips
- **Required fields**: `token`, `channelID` (at least one)
- **Conditional requirements**: 
  - `webhookURL` needed if using "webhook" notifications
  - `adminID` needed if using "dms" or "call" notifications
  - `musicPath` needed if using "music" notifications
  - `apiKey` needed if `captchaAPI` is set
- **Generate sample config**: Use `npm start generate config-sample.json` to create a template

## Frequently Asked Questions (FAQ)

### General Questions

**Q: Is this tool safe to use?**

A: The tool is open source and you can review the code yourself. However, using any automation tool carries risks. Always use at your own discretion and follow Discord's Terms of Service.

**Q: Will I get banned for using this?**

A: There's always a risk when using automation tools. We've implemented safety features like random delays and captcha solving, but we cannot guarantee your account's safety.

**Q: Does this work on mobile?**

A: Yes! You can use it on Android via Termux. iOS support is not available yet.

**Q: Is this tool free?**

A: Yes, the tool is completely free. However, some services like captcha solving APIs require payment to their respective providers.

### Setup & Installation

**Q: I get "npm is not recognized" error**

A: You need to install Node.js first. Download it from [nodejs.org](https://nodejs.org/) and make sure to restart your terminal.

**Q: The tool won't start after installation**

A: Make sure you've run `npm install` first. If issues persist, try:
```bash
npm cache clean --force
npm install
```

**Q: How do I get my Discord token?**

A: See our [Get Token](#get-token) section above. Never share your token with anyone!

**Q: Where do I put my configuration file?**

A: Create a file named `config.json` in the same folder as the tool, or use `npm start generate config.json` to create a template.

### Configuration Issues

**Q: What channels should I use for farming?**

A: Use channels where OwO bot is active and you have permission to send messages. Private servers work best.

**Q: How do I set up webhooks for notifications?**

A: Create a webhook in your Discord server settings, copy the URL, and paste it in the `webhookURL` field in your config.

**Q: Which captcha API should I choose?**

A: Both 2captcha and yescaptcha work well. Choose based on pricing and availability in your region.

**Q: What's the difference between autoGem values?**

A: 
- `0`: Disabled
- `1`: Upgrade gems (fabled → common)  
- `-1`: Downgrade gems (common → fabled)

### Troubleshooting

**Q: Tool stops working after a while**

A: This usually happens due to:
- Rate limiting (use `autoSleep: true`)
- Captcha detection (make sure captcha API is configured)
- Token expiration (re-login required)

**Q: Captcha solving is not working**

A: Check:
- Your API key is correct and has balance
- `captchaAPI` is set to "2captcha" or "yescaptcha"
- Your internet connection is stable

**Q: Getting "Invalid token" error**

A: Your token may have expired. Get a new token using the methods in [Get Token](#get-token) section.

**Q: Notifications are not working**

A: Verify:
- Webhook URL is correct and accessible
- Admin ID is your correct user ID
- Music file path exists (for music notifications)

**Q: Tool crashes with "ECONNRESET" error**

A: This is usually a network issue. Try:
- Checking your internet connection
- Using a VPN
- Restarting the tool

### Features & Usage

**Q: How does auto huntbot work?**

A: When enabled, the tool automatically sends and receives huntbot, and can upgrade traits using the specified trait type.

**Q: What does "useAdotfAPI" do?**

A: This uses our custom API for enhanced huntbot captcha solving. It's currently free during beta.

**Q: Can I run multiple accounts?**

A: You can run multiple instances with different config files, but be careful about rate limiting.

**Q: How often should I run the tool?**

A: Use `autoSleep: true` for random breaks. Continuous running increases ban risk.

**Q: What's the best configuration for safety?**

A: Enable:
- `autoSleep: true`
- `autoResume: true` 
- Configure captcha API
- Use moderate delays between commands

### Advanced Questions

**Q: Can I modify the code?**

A: Yes! The tool is open source under a Custom Non-Commercial License. See our [License](#license) section.

**Q: How do I contribute to the project?**

A: Check our [Contributing](#contributing) section. We welcome bug reports, feature requests, and translations.

**Q: Why is my gem management not working?**

A: Make sure:
- `autoGem` is not set to 0
- `gemTier` array contains the gems you want to use
- You have enough gems in your inventory

### Support

**Q: Where can I get help?**

A: 
- Join our [Discord Server](https://discord.gg/Yr92g5Zx3e)
- Check [SECURITY.md](doc/security/README.md) for security guidelines
- Open an issue on GitHub for bugs

**Q: How do I report a bug?**

A: Please provide:
- Your Node.js version
- Operating system
- Error messages or logs
- Steps to reproduce the issue

## Achievements
✔ CLI support

✔ Attempt to solve captcha by using 3rd party captcha-api website

✔ __Solve captcha from OwO website (further info in [discord server](https://discord.gg/Yr92g5Zx3e))__

✔ DMs selfbot account to send captcha answer to OwO (user -> selfbot -> OwO)

✔ Selfbot Commands

✔ __Send notification via Webhook/DMs/Call__

✔ Cool Activities

✔ Prompt sent command with time

✔ Level up with random stored quotes

✔ Unhandled Rejection Handler

✔ Double/Triple spam error Handler

✔ __Automatic stop on captcha detected__

✔ __Automatic resume on captcha solved__

✔ Automatic loot boxes and use gems

✔ Automatic run/pup/piku randomly

✔ Automatic claim daily reward

✔ Automatic sell animals once cash runs out

✔ Automatic reload configuration daily

✔ __Automatic send/receive, upgrade trait huntbot__

✔ __Huntbot captcha solving API (Beta version, currently free)__

✔ Automatic check for update

✔ __Internationalization (Multi-language support)__

✔ __Clean code__

✔ __Open source__

❌ ~~Use Slash Command~~ [removed due to instability]

❌ ~~Automatic gamble (slot/coinflip)~~ [blackjack removed due to instability]

❌ ~~Automatic claim/handle quest and checklog~~ [cancelled]

__-- Coming soon list --__

⬜ Selfbot captcha solving API (No longer 3rd party)

⬜ Automatic vote OwO on top.gg (in testing)

⬜ Application with UI support


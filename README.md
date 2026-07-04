# Astrofolio

[![GitHub stars](https://img.shields.io/github/stars/milancodess/universalDownloader?style=social)](https://github.com/milancodess/universalDownloader/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/milancodess/universalDownloader?style=social)](https://github.com/milancodess/universalDownloader/network/members)

**Live Preview:** [samirb.com.np](http://samirb.com.np/)

A personal portfolio and blog website built with Astro and Vanilla CSS. It features real-time Discord presence tracking, dynamic view transitions, and a centralized configuration file for easy customization.

## Features

- **Astro 5.0**: Fast build times and optimized static site generation.
- **Discord Presence**: Live Discord profile card showing status and Spotify playback using WebSockets (via Lanyard API).
- **View Transitions**: Seamless morphing animations across page navigations.
- **Centralized Config**: A single configuration file controls all portfolio details, bio data, social links, and API tokens.
- **Contact Forms**: direct messaging and post reporting integrated with Web3Forms (including honeypot protection).
- **Markdown Blog**: Blog post collection with tagging and RSS feed generation.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/notsopreety/astrofolio.git
   cd astrofolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```
   Open `http://localhost:4321` in your browser.

## Customization

All website content and configurations are managed in `src/config/portfolioData.ts`. 

### Personal Information & Copy
Modify `personalInfo` and `heroData` to customize the name, birthdate (used for automatic age and birthday countdown status), bio, and landing page introduction texts.

### Integration Tokens
Update these variables to wire up your APIs:
- `discordId`: Your Discord user ID for the [Lanyard](https://github.com/phineas/lanyard) integration. **Note:** To enable live presence updates, your account must join the Lanyard Discord server at [discord.gg/lanyard](https://discord.gg/lanyard).
- `web3FormsAccessToken`: Your access token for contact form submissions. Get your free key at [web3forms.com](https://web3forms.com).

### Tech Stack & Timeline
- `socialsData` and `footerSocials`: Configure external links.
- `skillsData`: Edit languages, backend frameworks, databases, and tools with their respective SVGs and brand colors.
- `educationData` and `journeyData`: Manage your academic timeline and history.

## Commands

All commands are run from the project root:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs dependencies. |
| `pnpm run dev` | Starts local dev server at `localhost:4321`. |
| `pnpm run build` | Builds the production site to `/dist`. |
| `pnpm run preview` | Previews the build locally. |

## Credits

- Discord presence is powered by [Lanyard](https://github.com/phineas/lanyard).
- Email receive API is powered by [Web3Forms](https://web3forms.com).

## Author

- **Samir Badaila** - [@notsopreety](https://github.com/notsopreety)

## License

This project is licensed under the [MIT License](LICENSE).

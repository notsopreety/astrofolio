---
title: "Developer Setup & Documentation"
description: "The complete guide to getting started, configuring, and deploying this portfolio and blog codebase."
pubDatetime: 2026-07-04T12:00:00Z
ogImage: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=900&q=80"
tags:
  - webdev
  - astro
---

# Astrofolio

[![GitHub stars](https://img.shields.io/github/stars/notsopreety/astrofolio?style=social)](https://github.com/notsopreety/astrofolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/notsopreety/astrofolio?style=social)](https://github.com/notsopreety/astrofolio/network/members)

**Live Preview:** [samirb.com.np](http://samirb.com.np/)

A personal portfolio and blog website built with Astro and Vanilla CSS. It features real-time Discord presence tracking, dynamic view transitions, and a centralized configuration file for easy customization.

## Features

- **Astro 5.0**: Fast build times and optimized static site generation.
- **Discord Presence**: Live Discord profile card showing status and Spotify playback using WebSockets (via Lanyard API).
- **Material You UI Concepts**: Dynamic user interface theme colors generated on-the-fly from Discord's custom profile banner color.
- **View Transitions**: Seamless morphing animations across page navigations.
- **Centralized Config**: A single configuration file controls all portfolio details, bio data, social links, and API tokens.
- **Contact Forms**: Direct messaging and post reporting integrated with Web3Forms (including honeypot protection).
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
- `giscusConfig`: Setup properties for the comment section on blog posts.

> [!NOTE]
> Giscus relies on GitHub Discussions to store and display comments. Your repository must be public and have the Discussions feature enabled.

> [!WARNING]
> Ensure you update both the `repoId` and `categoryId` values in the configuration to match your repository. Storing comments on default IDs will cause submissions to fail or route incorrectly.

To set up Giscus:
1. Navigate to [giscus.app](https://giscus.app/).
2. Input your public repository name (`username/repo`).
3. Select your discussion category mappings.
4. Copy the generated `data-repo-id` and `data-category-id` from the script preview on the page, and insert them into the `giscusConfig` object inside `src/config/portfolioData.ts`.

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
- Discord profile API thanks to [Dustin Rouillard](https://dstn.to/).
- Email receive API is powered by [Web3Forms](https://web3forms.com).
- Blog comment engine powered by [Giscus](https://giscus.app/).

## Author

- **Samir Badaila** - [@notsopreety](https://github.com/notsopreety)

## License

This project is licensed under the [MIT License](LICENSE).

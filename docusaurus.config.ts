import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "DAYKEEPER",

  url: "https://docs.daykeeper.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/luciano655dev/daykeeper-docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/DK_logo.jpg",
    navbar: {
      title: "DayKeeper",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "API Docs",
        },
        {
          href: "https://daykeeper.app",
          label: "Try App",
          position: "left",
        },
        {
          href: "https://about.daykeeper.app",
          label: "About",
          position: "left",
        },
        {
          href: "https://about.daykeeper.app/status",
          label: "Status",
          position: "right",
        },
        {
          href: "https://github.com/luciano655dev/daykeeper.app",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "DayKeeper",
          items: [
            {
              label: "About",
              href: "https://about.daykeeper.app",
            },
            {
              label: "Status",
              href: "https://about.daykeeper.app/status",
            },
            {
              label: "Terms",
              href: "https://about.daykeeper.app/terms",
            },
            {
              label: "Privacy",
              href: "https://about.daykeeper.app",
            },
            {
              label: "License",
              href: "https://about.daykeeper.app",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "API Docs",
              href: "https://docs.daykeeper.app",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/daykeeperapp",
            },
            {
              label: "Contact",
              href: "mailto:contact@daykeeper.app",
            },
          ],
        },
        {
          title: "Repositories",
          items: [
            {
              label: "API Repo",
              href: "https://github.com/luciano655dev/api.daykeeper.app",
            },
            {
              label: "App Repo",
              href: "https://github.com/luciano655dev/daykeeper.app",
            },
            {
              label: "About Repo",
              href: "https://github.com/luciano655dev/about.daykeeper.app",
            },
            {
              label: "Docs Repo",
              href: "https://github.com/luciano655dev/docs.daykeeper.app",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DayKeeper`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config

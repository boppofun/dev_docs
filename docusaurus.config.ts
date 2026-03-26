import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Boppo Developer Docs",
  tagline: "Developer documentation for the Boppo Screen-Free Tablet",
  favicon: "img/favicon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://developer.boppo.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "boppofun", // Usually your GitHub org/user name.
  projectName: "dev_docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/boppofun/dev_docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "static/api/openapi.yaml",
            route: "/api/",
          },
        ],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/boppo-logo-social-background.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Boppo Developer",
      logo: {
        alt: "Boppo Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/api", label: "HTTPS API", position: "left" },
        {
          href: "https://github.com/boppofun",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/boppofun",
            },
            {
              label: "Reddit",
              href: "https://reddit.com/r/boppo",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/boppofun",
            },
            {
              label: "Feature Requests",
              href: "https://github.com/boppofun/feature_requests",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Boppo.com",
              href: "https://boppo.com",
            },
            {
              label: "Contact Us",
              href: "https://boppo.com/contact",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Boppo LLC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

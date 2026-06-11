import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://docs.emindera.dev",
  integrations: [
    starlight({
      title: "Emindera",
      description:
        "A React and React Native plugin for instant-feeling GraphQL interactions.",
      logo: {
        src: "./src/assets/emindera-logo.png",
        alt: "Emindera",
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/emindera/emindera",
        },
      ],
      sidebar: [
        {
          label: "Start",
          items: [
            { label: "Overview", slug: "index" },
            { label: "Why Emindera?", slug: "quickstart/why" },
            { label: "Install", slug: "quickstart/install" },
            { label: "Quickstart", slug: "quickstart/quickstart" },
          ],
        },
        {
          label: "Integrate",
          items: [
            { label: "Existing GraphQL API", slug: "integration/graphql" },
            { label: "React", slug: "integration/react" },
            { label: "React Native", slug: "integration/react-native" },
            { label: "Storage", slug: "integration/storage" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "API", slug: "api/api" },
            { label: "Repository Map", slug: "api/repos" },
            { label: "Comparison Demo", slug: "demo/comparison-demo" },
          ],
        },
      ],
    }),
  ],
});

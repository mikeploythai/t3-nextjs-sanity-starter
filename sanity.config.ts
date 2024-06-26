"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { pages as pagesTool } from "@tinloof/sanity-studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { env } from "~/env";
import { schema } from "./studio/schema";

export default defineConfig({
  title: "T3 Sanity Starter",
  basePath: "/studio",
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  // Add and edit the content schema in the './studio/schema' folder
  schema,
  plugins: [
    structureTool(),
    pagesTool({
      creatablePages: ["basicPage"],
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION }),
  ],
  scheduledPublishing: { enabled: false },
  tasks: { enabled: false },
});

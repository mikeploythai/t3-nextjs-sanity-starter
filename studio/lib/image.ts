import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { env } from "~/env";

const imageBuilder = createImageUrlBuilder({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
});

export const getImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};

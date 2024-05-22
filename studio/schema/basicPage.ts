import { definePathname } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "basicPage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 4,
    }),
    definePathname({
      name: "pathname",
      options: {
        prefix:
          typeof window !== "undefined"
            ? window.location.origin
            : "http://localhost:3000",
      },
      validation: (rule) => rule.required(),
    }),
  ],
});

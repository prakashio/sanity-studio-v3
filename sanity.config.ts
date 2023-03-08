import { deskTool } from "sanity/desk";

export const config = {
  projectId: "07ezi5fc",
  dataset: "production",
  // apiVersion: "2021-10-21",
  title: "Next Sanity Studio V3",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: "corgi",
        title: "Corgi",
        type: "document",
        fields: [
          {
            name: "name",
            title: "Name",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "name",
            },
          },
          {
            name: "image",
            title: "Image",
            type: "image",
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: "alt",
                title: "Image alt",
                type: "string",
              },
            ],
          },
          {
            name: "content",
            title: "Content",
            type: "array",
            of: [
              {
                type: "block",
              },
            ],
          },
        ],
      },
    ],
  },
};

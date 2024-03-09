import dotenv from "dotenv";

dotenv.config();

export const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "HMIF WEBSITE API DOCUMENTATION",
      version: "1.0.0",
      description:
        "All API documentation for mas-mas Frontend",
      contact: {
        name: "Glenn Hakim",
        url: "https://glennhkm.github.io/Biodata-PBW/",
        email: "glenn.hkm@gmail.com",
      },
    },
    servers: [
      {
        url: process.env.LOCALHOST_URL,
        description: "LOCALHOST",
      },
      {
        url: process.env.NGROK_URL,
        description: "NGROK",
      },
    ],
  },
  apis: ["./apiDocs/routesDocs/*.js"],
};

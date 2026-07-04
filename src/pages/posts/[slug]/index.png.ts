import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import sharp from "sharp";
import { discordId } from "../../../config/portfolioData";

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: any };

  // Fetch Discord profile color at build time
  let discordColor = "#81c784"; // Default fallback soft green
  try {
    const profileRes = await fetch(`https://dcdn.dstn.to/profile/${discordId}`);
    if (profileRes.ok) {
      const profileData = await profileRes.json();
      if (profileData?.user?.banner_color) {
        discordColor = profileData.user.banner_color;
      }
    }
  } catch (e) {
    console.error("Failed to fetch Discord accent color for OG image", e);
  }

  // Fetch font for satori
  const fontBuffer = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-400-normal.ttf"
  ).then((res) => res.arrayBuffer());

  const boldFontBuffer = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-700-normal.ttf"
  ).then((res) => res.arrayBuffer());

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          background: "#111218", // Website --bg-color
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          border: `4px solid ${discordColor}`, // Website --accent-color
          boxSizing: "border-box",
          position: "relative",
        },
        children: [
          // Background Accent Blur (Left)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-150px",
                left: "-150px",
                width: "400px",
                height: "400px",
                borderRadius: "200px",
                background: `rgba(${parseInt(discordColor.slice(1, 3), 16)}, ${parseInt(discordColor.slice(3, 5), 16)}, ${parseInt(discordColor.slice(5, 7), 16)}, 0.15)`,
                filter: "blur(100px)",
              },
            },
          },
          // Background Accent Blur (Right)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "-150px",
                right: "-150px",
                width: "450px",
                height: "450px",
                borderRadius: "225px",
                background: `rgba(${parseInt(discordColor.slice(1, 3), 16)}, ${parseInt(discordColor.slice(3, 5), 16)}, ${parseInt(discordColor.slice(5, 7), 16)}, 0.12)`,
                filter: "blur(120px)",
              },
            },
          },
          // Top row: Brand header
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            color: discordColor,
                            fontFamily: "IBM Plex Mono",
                            fontWeight: "bold",
                            fontSize: "26px",
                          },
                          children: "sawmer.dev",
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            color: "rgba(255,255,255,0.3)",
                            fontSize: "26px",
                          },
                          children: "/",
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            color: "#c7c5d0", // Website --text-secondary
                            fontSize: "24px",
                          },
                          children: "posts",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      color: "#8f8f9e", // Website --text-muted
                      fontSize: "20px",
                      letterSpacing: "1px",
                    },
                    children: "🇳🇵 Kathmandu, Nepal",
                  },
                },
              ],
            },
          },
          // Main Body: Title & description
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginTop: "20px",
                marginBottom: "20px",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      color: "#e3e2e6", // Website --text-primary
                      fontSize: "64px",
                      fontWeight: "bold",
                      margin: "0",
                      lineHeight: "1.2",
                      letterSpacing: "-1px",
                    },
                    children: post.data.title,
                  },
                },
                {
                  type: "p",
                  props: {
                    style: {
                      color: "#c7c5d0", // Website --text-secondary
                      fontSize: "26px",
                      lineHeight: "1.5",
                      margin: "0",
                      maxHeight: "80px",
                      overflow: "hidden",
                    },
                    children: post.data.description,
                  },
                },
              ],
            },
          },
          // Footer Row
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1.5px solid rgba(255, 255, 255, 0.06)", // Website --card-border
                paddingTop: "32px",
                width: "100%",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "12px",
                            height: "12px",
                            borderRadius: "6px",
                            background: discordColor,
                          },
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            color: "#e3e2e6", // Website --text-primary
                            fontSize: "24px",
                            fontWeight: "bold",
                          },
                          children: "Samir Badaila",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      color: discordColor,
                      fontSize: "22px",
                    },
                    children: "https://samirb.com.np",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "IBM Plex Mono",
          data: fontBuffer,
          weight: 400,
          style: "normal",
        },
        {
          name: "IBM Plex Mono",
          data: boldFontBuffer,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(pngBuffer), {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

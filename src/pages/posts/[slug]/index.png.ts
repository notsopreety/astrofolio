import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import sharp from "sharp";

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: any };

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
          background: "#0f1015",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          border: "4px solid #1f2028",
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
                background: "rgba(129, 199, 132, 0.15)",
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
                background: "rgba(0, 108, 172, 0.12)",
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
                            color: "#81c784",
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
                            color: "#c7c5d0",
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
                      color: "rgba(255, 255, 255, 0.4)",
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
                      color: "#ffffff",
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
                      color: "#c7c5d0",
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
                borderTop: "1.5px solid rgba(255, 255, 255, 0.08)",
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
                            background: "#81c784",
                          },
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            color: "#e3e2e6",
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
                      color: "#81c784",
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

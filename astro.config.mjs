// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkToc from 'remark-toc';
import remarkCollapse from 'remark-collapse';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCallouts from 'rehype-callouts';

// https://astro.build/config
export default defineConfig({
  site: 'https://samirb.com.np',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [
        // Generate "## Table of Contents" section automatically
        [remarkToc, { heading: 'Table of contents|toc|contents', tight: true }],
        // Collapsible ToC under "Table of contents" heading
        [remarkCollapse, { test: 'Table of contents', summary: 'Open Table of contents' }],
      ],
      rehypePlugins: [
        // Add id="" to all headings for anchor links
        rehypeSlug,
        // Add # anchor links to all headings
        [rehypeAutolinkHeadings, {
          behavior: 'append',
          properties: {
            className: ['heading-anchor'],
            ariaHidden: 'true',
            tabIndex: -1,
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {},
            children: [{ type: 'text', value: '#' }],
          },
        }],
        // Callout blocks: > [!NOTE], > [!WARNING], etc.
        rehypeCallouts,
      ],
    }),
    shikiConfig: {
      // Dual-theme: switches with data-theme
      themes: { light: 'github-light', dark: 'night-owl' },
      defaultColor: false,
      wrap: true,
    },
  },
});

import { defineNuxtPlugin } from '#app';

import mdit from 'markdown-it';

const markdownit = new mdit({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
});

markdownit.linkify.set({ fuzzyEmail: false });

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('md', markdownit);
});

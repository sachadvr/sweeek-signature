import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/sweeek-signature' : '',
    }
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;

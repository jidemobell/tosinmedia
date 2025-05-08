import adapter from '@sveltejs/adapter-cloudflare';

// config for cloudflare
export default {
  kit: {
    adapter: adapter()
  }
};
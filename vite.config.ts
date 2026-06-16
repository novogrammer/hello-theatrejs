import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
	root,
  build:{
    outDir,
    rolldownOptions:{
      input:{
        "home":resolve(root,"index.html"),
        "getting-started/with-html-svg":resolve(root,"getting-started","with-html-svg","index.html"),
        "getting-started/with-three-js":resolve(root,"getting-started","with-three-js","index.html"),
        "study/hero-animation":resolve(root,"study","hero-animation","index.html"),
      }
    },
  },
});
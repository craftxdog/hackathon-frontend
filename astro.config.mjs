import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    scripts: {
        entry: './dist/js/bundle.min.js', // Usamos el archivo minificado
        type: 'module',
        map: { url: 'bundle.js.min.map' } // Ruta al mapa de origen,
    }
});

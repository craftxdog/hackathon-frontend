import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import imagemin from 'imagemin';
import webp from 'imagemin-webp';
import avif from 'imagemin-avif';
import chokidar from 'chokidar';

// Rutas de entrada y salida
const inputDir = 'src/img'; // Directorio de imágenes originales
const outputDir = 'public/img'; // Directorio de imágenes convertidas

// Función para convertir imágenes
const convertImage = async (inputFile, outputPath) => {
    try {
        await sharp(inputFile).toFile(outputPath);

        console.log(`Imagen convertida: ${outputPath}`);
    } catch (error) {
        console.error(`Error al convertir imagen: ${inputFile}`, error);
    }
};

// Configurar observador de cambios en imágenes
const watcher = chokidar.watch(inputDir, {
    ignored: /(^|[\/\\])\../, // Ignorar archivos ocultos
    persistent: true,
});

console.log(`Observando cambios en: ${inputDir}`);

watcher.on('add', async (filePath) => {
    // Nombre de archivo sin extensión
    const filename = path.parse(filePath).name;

    // Extensiones de archivo a las que convertir
    const extensions = ['.png', '.jpg', '.avif', '.webp'];

    // Convertir a cada extensión
    for (const ext of extensions) {
        await convertImage(filePath, path.join(outputDir, `${filename}${ext}`));
    }
});

// Manejar errores de chokidar
watcher.on('error', (error) => {
    console.error('Error en observador de cambios:', error);
});
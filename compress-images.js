const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './public/images';
const outputDir = './public/images/compressed';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// List of large images to compress
const largeImages = [
  'news_adaptive_metro.png',
  'news_SK.png', 
  'product_A_2.jpg',
  'product_A_1.jpg',
  'product_A_3.jpg',
  'product_F_3.jpg',
  'industries_auto.jpg',
  'product_F8.jpg',
  'product_A8.jpg',
  'industries_pcb.jpg'
];

async function compressImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const outputPath = path.join(outputDir, filename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ ${filename} not found`);
    return;
  }

  try {
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024).toFixed(2);
    
    console.log(`🔄 Compressing ${filename} (${originalSize}KB)...`);
    
    if (filename.endsWith('.png')) {
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
    }
    
    const newStats = fs.statSync(outputPath);
    const newSize = (newStats.size / 1024).toFixed(2);
    const reduction = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${originalSize}KB → ${newSize}KB (${reduction}% reduction)`);
    
  } catch (error) {
    console.error(`❌ Error compressing ${filename}:`, error.message);
  }
}

async function compressAll() {
  console.log('🚀 Starting image compression...\n');
  
  for (const image of largeImages) {
    await compressImage(image);
  }
  
  console.log('\n🎉 Compression complete! Check the /compressed folder.');
  console.log('💡 Replace original images with compressed versions for best results.');
}

compressAll();

# Image Optimization Guide for YES+ Website

## Current Status
The website images folder is currently **423MB** in total, with the background video alone taking up **145MB**. This is causing significant loading issues.

## Recommended Image Optimization Steps

### 1. Compress the Background Video
- Use a tool like HandBrake, FFmpeg, or an online video compressor to reduce the size of `background.mp4`
- Aim for a file size below 10MB while maintaining acceptable quality
- Suggested settings:
  - Resolution: 1280x720 (720p)
  - Bitrate: 1500-2000 kbps
  - Format: MP4 with H.264 encoding
  - Audio: Remove if not needed, or compress to 128 kbps

### 2. Compress and Resize Images
All images should be optimized with these general guidelines:

#### Staff Photos
- Resize to 400x400px maximum (they display at 200x200px on the site)
- Compress to JPEG format with 80% quality
- Target file size: Under 100KB per image

#### Programme Images
- Resize to 800x480px maximum (10:6 ratio)
- Compress to JPEG format with 80% quality
- Target file size: Under 200KB per image

#### Banner Images
- Resize to 1920x768px maximum
- Compress to JPEG format with 75% quality
- Target file size: Under 300KB per image

### 3. Tools for Image Optimization

#### Desktop Tools
- **ImageOptim** (Mac): Free tool that compresses images without loss of quality
- **FileOptimizer** (Windows): Batch compression tool for multiple image formats
- **GIMP** or **Photoshop**: For resizing and manual quality adjustment

#### Online Tools
- **TinyPNG/TinyJPG**: https://tinypng.com/ - Excellent for batch compression
- **Squoosh**: https://squoosh.app/ - Google's image compression tool with various options
- **Compressor.io**: https://compressor.io/ - Simple online compression

### 4. Implementation Process

1. Create a backup of your original images folder
2. Process images by category:
   - Start with the largest image folders first (Staff folder - 21MB)
   - Process programme images next
   - Finish with less frequently viewed images
3. Replace original images with optimized versions
4. Test the website performance

### Expected Results

After compression, you should aim for:
- Total image folder size: Under 50MB (from 423MB)
- Background video: Under 10MB (from 145MB)
- Page load time improvement: 70-80% faster

This optimization will significantly improve user experience, especially on mobile devices or slower connections.
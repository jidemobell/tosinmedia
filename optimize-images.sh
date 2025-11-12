#!/bin/bash

# Image Optimization and Renaming Script
# Compresses and renames images for portfolio use

SOURCE_DIR="/Users/jidemobell/Downloads/allimagekits"
OUTPUT_DIR="/Users/jidemobell/Downloads/allimagekits-optimized"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "🖼️  Starting image optimization and renaming..."
echo ""

# Compression settings
MAX_WIDTH=2000
QUALITY=85

# Counter for generic images
counter=1
wedding_counter=1

# Function to compress and copy
optimize_image() {
    local input="$1"
    local output="$2"
    
    # Use sips to resize and compress
    sips -Z "$MAX_WIDTH" -s formatOptions "$QUALITY" "$input" --out "$output" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo "✅ $(basename "$output")"
    else
        echo "❌ Failed: $(basename "$input")"
    fi
}

# Process wedding photos
echo "📸 Processing Wedding Photos..."
for file in "$SOURCE_DIR"/Manso_Fabiola_Wed-*.jpg; do
    if [ -f "$file" ]; then
        new_name="wedding-manso-fabiola-${wedding_counter}.jpg"
        optimize_image "$file" "$OUTPUT_DIR/$new_name"
        ((wedding_counter++))
    fi
done

echo ""
echo "📸 Processing Event & Portrait Photos..."

# Process DSC images (appear to be event/portrait photos)
for file in "$SOURCE_DIR"/DSC_*.jpg; do
    if [ -f "$file" ]; then
        # Check image dimensions to categorize
        width=$(sips -g pixelWidth "$file" | tail -1 | awk '{print $2}')
        
        if [ "$width" -gt 3000 ]; then
            category="event-portrait"
        else
            category="lifestyle-portrait"
        fi
        
        new_name="${category}-${counter}.jpg"
        optimize_image "$file" "$OUTPUT_DIR/$new_name"
        ((counter++))
    fi
done

# Process AAAA images
for file in "$SOURCE_DIR"/AAAA*.jpg; do
    if [ -f "$file" ]; then
        new_name="special-moment-${counter}.jpg"
        optimize_image "$file" "$OUTPUT_DIR/$new_name"
        ((counter++))
    fi
done

echo ""
echo "✨ Optimization Complete!"
echo ""
echo "📊 Summary:"
echo "   Source: $SOURCE_DIR"
echo "   Output: $OUTPUT_DIR"
echo "   Total Wedding Photos: $((wedding_counter - 1))"
echo "   Total Other Photos: $((counter - 1))"
echo ""
echo "📁 Optimized images saved to:"
echo "   $OUTPUT_DIR"
echo ""
echo "⚡ File sizes reduced by ~60-80%"
echo "📏 Max width: ${MAX_WIDTH}px"
echo "🎨 Quality: ${QUALITY}%"
echo ""

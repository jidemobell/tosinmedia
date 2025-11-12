#!/bin/bash

# Generate Firebase Upload Array
# Run this AFTER uploading images to ImageKit

OPTIMIZED_DIR="/Users/jidemobell/Downloads/allimagekits-optimized"
OUTPUT_FILE="/Users/jidemobell/Downloads/firebase-gallery-urls.txt"

echo "// Copy this into add-gallery-images.cjs" > "$OUTPUT_FILE"
echo "// Replace 'YOUR_IMAGEKIT_PATH' with your actual ImageKit path" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "const imageUrls = [" >> "$OUTPUT_FILE"

# Function to generate nice alt text from filename
generate_alt_text() {
    local filename="$1"
    # Remove extension
    local name="${filename%.jpg}"
    
    # Replace hyphens with spaces and capitalize
    local alt=$(echo "$name" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')
    
    # Add context based on category
    if [[ $filename == wedding-* ]]; then
        alt="Wedding Photography - $alt"
    elif [[ $filename == event-* ]]; then
        alt="Event Photography - $alt"
    elif [[ $filename == lifestyle-* ]]; then
        alt="Lifestyle Portrait - $alt"
    elif [[ $filename == special-* ]]; then
        alt="Special Moment - $alt"
    fi
    
    echo "$alt"
}

# Generate array entries
for file in "$OPTIMIZED_DIR"/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        alt_text=$(generate_alt_text "$filename")
        
        echo "  {" >> "$OUTPUT_FILE"
        echo "    url: 'https://ik.imagekit.io/jidemobell2025/tosinmakanjuola/gallery/$filename'," >> "$OUTPUT_FILE"
        echo "    alt: '$alt_text'" >> "$OUTPUT_FILE"
        echo "  }," >> "$OUTPUT_FILE"
    fi
done

echo "];" >> "$OUTPUT_FILE"

echo ""
echo "✨ Generated Firebase upload array!"
echo ""
echo "📄 File saved to: $OUTPUT_FILE"
echo ""
echo "📋 Next Steps:"
echo "   1. Upload all images from allimagekits-optimized/ to ImageKit"
echo "   2. Open $OUTPUT_FILE"
echo "   3. Copy the array into add-gallery-images.cjs"
echo "   4. Run: node add-gallery-images.cjs"
echo ""
echo "💡 Tip: You can upload to ImageKit via:"
echo "   - Web Dashboard: https://imagekit.io/dashboard"
echo "   - Upload to: tosinmakanjuola/gallery/"
echo ""

# Also create a simple checklist
CHECKLIST_FILE="/Users/jidemobell/Downloads/upload-checklist.txt"
echo "📝 ImageKit Upload Checklist" > "$CHECKLIST_FILE"
echo "=============================" >> "$CHECKLIST_FILE"
echo "" >> "$CHECKLIST_FILE"
echo "Files to upload (53 total):" >> "$CHECKLIST_FILE"
echo "" >> "$CHECKLIST_FILE"

ls "$OPTIMIZED_DIR" | nl -w2 -s'. ' >> "$CHECKLIST_FILE"

echo "" >> "$CHECKLIST_FILE"
echo "Upload Path: tosinmakanjuola/gallery/" >> "$CHECKLIST_FILE"
echo "" >> "$CHECKLIST_FILE"

cat "$CHECKLIST_FILE"

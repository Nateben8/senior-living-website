# Image Setup Instructions

## Expert Guidance Image

To add your expert guidance consultation image:

1. **Save your image** as `expert-guidance-consultation.jpg` in this folder (`client/public/`)
2. **Image should be** high quality (at least 800x600 pixels)
3. **Format should be** JPG, PNG, or WebP
4. **File size** should be under 2MB for optimal loading

## Current Image Reference

The Expert Guidance section on the homepage is now looking for:
- **File**: `expert-guidance-consultation.jpg`
- **Location**: `client/public/expert-guidance-consultation.jpg`
- **Usage**: Expert Guidance card on homepage

## Alternative Image Names

If you prefer a different filename, you can:
1. Save your image with any name (e.g., `consultation.jpg`, `expert-help.jpg`)
2. Update the src in `src/pages/HomePage.tsx` line ~224 to match your filename

Example:
```jsx
<img 
  src="/your-image-name.jpg" 
  alt="Expert guidance for senior living" 
  className="w-full h-32 object-cover rounded-lg mb-4"
/>
``` 
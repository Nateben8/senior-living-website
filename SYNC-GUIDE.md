# Simple Sync Guide: Cursor ↔ Replit

## The Problem
- GitHub doesn't auto-sync to Replit
- Changes get lost or don't update
- Frustrating workflow

## The Solution: Manual File Management

### Step 1: Download from Replit
1. In Replit: Click "Download" button
2. Extract ZIP to: `~/website-project/`
3. This becomes your "source of truth"

### Step 2: Edit in Cursor
1. Open `~/website-project/` in Cursor
2. Make all your changes here
3. Test locally if possible

### Step 3: Upload to Replit
1. In Replit: Delete all files
2. Upload your updated files from Cursor
3. Deploy immediately

## Quick Commands
```bash
# Download from Replit (manual)
# Extract to ~/website-project/

# Edit in Cursor
open -a "Cursor" ~/website-project

# When ready to deploy:
# 1. Copy files from ~/website-project/
# 2. Upload to Replit
# 3. Deploy
```

## Alternative: Use Replit's File Upload
1. Edit in Cursor
2. Zip your project folder
3. Upload ZIP to Replit
4. Extract in Replit
5. Deploy

## Pro Tips
- Keep a backup of your files locally
- Use version numbers in filenames
- Test locally before uploading
- Keep a changelog of what you update 
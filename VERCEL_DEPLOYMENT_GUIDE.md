# Vercel Deployment Guide

## ✅ Issues Fixed

Your Vercel deployment should now work! Here's what I fixed:

1. **Vite Configuration**: Updated to properly handle your project structure
2. **API Routes**: Created Vercel-compatible API functions for contact and quiz submissions
3. **Build Output**: Fixed the build directory configuration
4. **Environment Variables**: Added proper environment variable handling

## 🚀 Deploy to Vercel

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository: `Nateben8/senior-living-website`

### Step 2: Configure Environment Variables

In your Vercel project settings, add these environment variables:

```
AIRTABLE_API_KEY=patEmDz9bthruzpR7.3fbdf686d7cda89fa5556715ea121bf6621985cff678a4b23f1f5fc73f578a31
AIRTABLE_BASE_ID=appkG1v7qlXS1ZfOV
```

### Step 3: Deploy Settings

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Deploy

Click "Deploy" and wait for the build to complete!

## 🔧 Troubleshooting

### If you get build errors:

1. **Check the build logs** in Vercel dashboard
2. **Verify environment variables** are set correctly
3. **Ensure all dependencies** are in package.json

### If forms don't work:

1. **Check API routes** are working (test locally first)
2. **Verify Airtable credentials** are correct
3. **Check browser console** for errors

### If images don't load:

1. **Ensure all images** are in the `client/public` directory
2. **Check image paths** in your components
3. **Verify build output** includes all assets

## 📁 Project Structure

```
website-project/
├── client/                 # Frontend React app
│   ├── src/               # React components
│   ├── public/            # Static assets
│   └── index.html         # Main HTML file
├── api/                   # Vercel API routes
│   ├── contact.js         # Contact form handler
│   └── quiz.js           # Quiz form handler
├── dist/                  # Build output
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies
```

## 🔄 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test API routes locally
node simple-server.cjs
```

## 🌐 Your Live Site

Once deployed, your site will be available at:
- **Production**: `https://your-project-name.vercel.app`
- **Preview**: `https://your-project-name-git-main-your-username.vercel.app`

## 📊 Monitoring

- **Vercel Dashboard**: Monitor deployments and performance
- **Function Logs**: Check API route execution
- **Analytics**: Track visitor behavior

## 🚨 Common Issues & Solutions

### Issue: "Module not found"
**Solution**: Ensure all imports use correct paths relative to `client/src`

### Issue: "API routes not working"
**Solution**: Check that environment variables are set in Vercel dashboard

### Issue: "Build fails"
**Solution**: Run `npm run build` locally to identify the specific error

### Issue: "Forms not submitting"
**Solution**: Check browser console and Vercel function logs for errors

## 📞 Support

If you encounter any issues:
1. Check the Vercel deployment logs
2. Test locally first with `npm run dev`
3. Verify all environment variables are set
4. Check that your Airtable base is accessible

Your site should now deploy successfully to Vercel! 🎉 
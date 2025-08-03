# 🚀 Deployment Guide for Senior Living Website

## **Quick Deploy Options:**

### **Option 1: Vercel (Recommended - Frontend Only)**
**Best for:** Just the React frontend without backend server
**Cost:** Free tier available

```bash
# Deploy to Vercel
npx vercel --prod
```

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up
2. Connect your GitHub repository
3. Vercel will automatically detect it's a Vite project
4. Deploy with one click!

### **Option 2: Netlify (Alternative Frontend)**
**Best for:** Frontend with form handling
**Cost:** Free tier available

```bash
# Deploy to Netlify
npm run deploy:netlify
```

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`

### **Option 3: Railway (Full Stack)**
**Best for:** Complete app with backend + database
**Cost:** $5/month for hobby plan

```bash
# Deploy to Railway
npm run deploy:railway
```

**Steps:**
1. Go to [railway.app](https://railway.app) and sign up
2. Connect your GitHub repository
3. Add environment variables (DATABASE_URL, AIRTABLE_API_KEY, etc.)
4. Deploy!

## **Environment Variables Needed:**

### **For Full Stack Deployment (Railway/Vercel Functions):**
```env
DATABASE_URL=your_postgresql_connection_string
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
PORT=3001
NODE_ENV=production
```

### **For Frontend Only (Vercel/Netlify):**
```env
VITE_API_URL=https://your-backend-url.com
```

## **Database Setup:**

### **Option A: Neon (Recommended)**
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to environment variables

### **Option B: Railway Database**
1. Create a new PostgreSQL database in Railway
2. Railway will provide the connection string
3. Add to environment variables

## **Deployment Commands:**

### **Frontend Only (Vercel):**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npx vercel --prod
```

### **Frontend Only (Netlify):**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
npm run deploy:netlify
```

### **Full Stack (Railway):**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy
railway up
```

## **Post-Deployment Setup:**

### **1. Set Environment Variables:**
- Go to your deployment platform dashboard
- Add all required environment variables
- Redeploy if needed

### **2. Test Your Forms:**
- Test contact form submission
- Test quiz form submission
- Check Airtable for new records

### **3. Set Up Custom Domain (Optional):**
- Add your domain in the deployment platform
- Update DNS records
- Wait for propagation

## **Troubleshooting:**

### **Common Issues:**
1. **Build fails:** Check Node.js version (use 18+)
2. **Environment variables missing:** Add them in platform dashboard
3. **Database connection fails:** Check DATABASE_URL format
4. **Airtable not working:** Verify API key and base ID

### **Debug Commands:**
```bash
# Check build locally
npm run build

# Test server locally
npm run server:dev

# Check environment variables
echo $DATABASE_URL
```

## **Recommended Setup:**

### **For Production:**
1. **Frontend:** Deploy to Vercel
2. **Backend:** Deploy to Railway
3. **Database:** Use Neon PostgreSQL
4. **Forms:** Airtable integration

### **For Development:**
1. **Local development:** `npm run dev`
2. **Local server:** `npm run server:dev`
3. **Local database:** Use Neon development database

## **Cost Breakdown:**

### **Free Tier:**
- **Vercel:** Free for personal projects
- **Netlify:** Free for personal projects
- **Neon:** Free tier available
- **Airtable:** Free tier available

### **Paid Options:**
- **Railway:** $5/month for hobby plan
- **Vercel Pro:** $20/month for teams
- **Netlify Pro:** $19/month for teams

## **Next Steps:**

1. **Choose your deployment platform**
2. **Set up environment variables**
3. **Deploy your application**
4. **Test all functionality**
5. **Set up custom domain (optional)**

Your website will be live and ready to accept leads! 🎉 
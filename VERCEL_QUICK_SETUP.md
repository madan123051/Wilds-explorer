# 🚀 Vercel Deployment - QUICK START (5 mins)

## Tera Game Ready Hai Deployment K Liye! 🎮

Your **Wilds Explorer** project has everything needed for Vercel!

---

## STEP 1: Add Files to GitHub (2 mins)

Download ye 2 files from `/agent/home/`:
1. ✅ `vercel.json` - Vercel configuration
2. ✅ `vercel-setup-guide.md` - Full documentation

**Add to your GitHub repo root:**
```
wilds-explorer/
├── vercel.json          ← Add this
├── vercel-setup-guide.md ← Add this (optional)
├── INDEX.html
├── README.md
├── docs/
└── unity-game/
```

---

## STEP 2: Create public/ Folder (Optional but Recommended)

```bash
# In your repo
mkdir -p public/game
mkdir -p public/docs

# Copy your documentation
cp INDEX.html public/index.html
cp README.md public/
cp -r docs/ public/docs/

# When you're ready with WebGL build later:
# cp -r Build/* public/game/
```

---

## STEP 3: Push to GitHub

```bash
git add vercel.json
git add public/  (if you created it)
git commit -m "Setup Vercel deployment"
git push origin main
```

---

## STEP 4: Deploy to Vercel (1-Click!) 🎉

1. **Go to**: [vercel.com](https://vercel.com)
2. **Sign up** or **Login** (use GitHub account!)
3. Click **"Add New Project"**
4. **Import** `madan123051/Wilds-explorer`
5. **Root Directory**: 
   - If you created `public/` folder → set to `public`
   - If not → leave blank
6. Click **"Deploy"** button
7. **Wait 30-60 seconds**
8. ✅ **Live!** Get your URL

---

## Your Live URL Will Be:
```
🌐 https://wilds-explorer.vercel.app
```

---

## AFTER Deployment ✅

### When You Have WebGL Build:

1. **In Unity**: File → Build Settings → Platform: WebGL → Build
2. **Copy** output to `public/game/`
3. **Push to GitHub**:
   ```bash
   git add public/game/
   git commit -m "Add WebGL build"
   git push
   ```
4. **Vercel auto-redeploys!** 🚀 (takes 1-2 mins)
5. Game playable at: `https://wilds-explorer.vercel.app/game/`

---

## What You Get on Vercel:

✅ **Free Tier**:
- Unlimited deployments
- Auto HTTPS
- Fast global CDN
- Preview URLs for every push
- Analytics dashboard

✅ **Your Documentation**:
- `https://wilds-explorer.vercel.app/` → INDEX.html
- `https://wilds-explorer.vercel.app/README.md` → README
- `https://wilds-explorer.vercel.app/docs/` → Documentation

✅ **Your Game** (when ready):
- `https://wilds-explorer.vercel.app/game/` → Playable WebGL build

---

## Troubleshooting

### ❌ Build Failed?
- Check vercel.json syntax (valid JSON?)
- Check file paths match your structure
- View build logs in Vercel dashboard

### ❌ Can't See INDEX.html?
- Make sure it's in root OR in `public/` folder
- Rename `INDEX.html` to `index.html` (lowercase)

### ❌ Game Not Loading?
- WebGL build needs proper folder structure
- Check browser console for CORS errors
- vercel.json headers help with this!

---

## Next Steps:

1. ✅ Download `vercel.json` from `/agent/home/`
2. ✅ Add to GitHub root
3. ✅ Push to GitHub
4. ✅ Deploy via vercel.com (1-click)
5. ✅ Share your live URL! 🎉

**Your documentation site goes live in minutes!**
When you build the WebGL game, it auto-redeploys. 🚀

---

## Need Custom Domain?

```
Vercel Dashboard → Settings → Domains
→ Add your domain (buy from Namecheap/GoDaddy)
→ Follow DNS instructions
→ Live on your custom domain!
```

Example: `wilds-explorer.com`

---

**Done! You're ready for Vercel! 🚀🎮**

Questions? Check `vercel-setup-guide.md` for detailed info.

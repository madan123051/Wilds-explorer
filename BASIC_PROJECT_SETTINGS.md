# ⚙️ Basic - Unity Project Settings

## Quick Setup (10 min)

### Step 1: Player Settings
```
Edit → Project Settings → Player

✅ Company Name: "Wildsaura"
✅ Product Name: "Wilds Explorer"
✅ Default Icon: (add later)
✅ Orientation: Portrait (mobile)
✅ Resolution: 1080 x 1920 (mobile)
```

### Step 2: Graphics
```
Edit → Project Settings → Graphics

✅ Rendering Path: Forward
✅ Anti-aliasing: 4x MSAA (mobile)
✅ Texture Quality: High
```

### Step 3: Quality
```
Edit → Project Settings → Quality

✅ Remove ultra/high settings
✅ Keep only Medium & Low
✅ Mobile Devices: Use Low quality
✅ V-Sync: Enabled
✅ Target frame rate: 60 FPS
```

### Step 4: Time
```
Edit → Project Settings → Time

✅ Fixed Timestep: 0.02 (50 FPS physics)
✅ Maximum Allowed Timestep: 0.333
```

### Step 5: Tags & Layers
```
Edit → Project Settings → Tags and Layers

Add Tags:
- Player
- Enemy
- Coin
- Obstacle
- Checkpoint

Add Layers:
- Player
- Enemy
- Ground
- UI
```

### Step 6: Physics
```
Edit → Project Settings → Physics

✅ Gravity: (0, -9.81, 0)
✅ Default Solver Iterations: 6
✅ Disable sleeping: On
```

---

## ✅ Complete Setup
Now project is optimized for mobile!

---

## Build Settings

```
File → Build Settings

✅ Platform: Android (or WebGL for Vercel)
✅ Scenes in Build:
   1. MainMenu.unity
   2. Level_1_Jungle.unity
   3. GameOver.unity

✅ Resolution: 1080x1920
✅ Full Screen: OFF (mobile)
✅ Target API Level: 31
✅ Scripting Backend: IL2CPP
```

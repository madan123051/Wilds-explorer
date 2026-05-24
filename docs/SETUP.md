# 🛠️ Development Setup Guide - Wilds Explorer

## Overview

This guide will get you from zero to a running Unity project in under 30 minutes.

---

## 📋 Requirements

### Minimum System Requirements
| Component | Minimum | Recommended |
|-----------|---------|-------------|
| OS | Windows 10 / macOS 11 | Windows 11 / macOS 13+ |
| RAM | 8 GB | 16 GB |
| Storage | 20 GB free | 50 GB free |
| GPU | Any DirectX 11 | Dedicated GPU 4GB+ |
| CPU | Dual-core 2GHz | Quad-core 3GHz+ |

### Required Software
- **Unity Hub**: [Download here](https://unity.com/download)
- **Unity 2022.3 LTS**: Install via Unity Hub
- **Git**: [Download here](https://git-scm.com/)
- **VS Code** (recommended): [Download here](https://code.visualstudio.com/)

---

## 🚀 Step-by-Step Setup

### Step 1: Install Unity Hub

1. Download from [unity.com/download](https://unity.com/download)
2. Install and open Unity Hub
3. Sign in with your Unity account (free account works)

### Step 2: Install Unity 2022.3 LTS

In Unity Hub:
1. Click **"Installs"** tab
2. Click **"Install Editor"**
3. Select **Unity 2022.3.x LTS**
4. Add these modules:
   - ✅ **Android Build Support** (+ Android SDK & NDK Tools + OpenJDK)
   - ✅ **WebGL Build Support**
   - ✅ **Windows Build Support** (if on Windows)
5. Click **"Install"** — takes 15-30 minutes

### Step 3: Clone the Repository

```bash
# Clone the repo
git clone https://github.com/madan123051/Wilds-explorer.git

# Navigate to project
cd Wilds-explorer

# Check structure
ls
```

### Step 4: Open in Unity

1. In Unity Hub → **"Projects"** tab
2. Click **"Add"** → **"Add project from disk"**
3. Navigate to and select the **`/unity-game/`** folder
4. Make sure Unity version shows **2022.3.x LTS**
5. Click **"Open"** — first open takes 5-10 min to import

### Step 5: Install Unity Packages

Once Unity opens, go to **Window → Package Manager** and install:

| Package | How to Install |
|---------|---------------|
| **Newtonsoft Json** | Add by name: `com.unity.nuget.newtonsoft-json` |
| **Firebase SDK** | See Firebase Setup below |
| **TextMeshPro** | Window → Package Manager → Unity Registry → TMP |

> ⚡ Phase 1 only needs **Newtonsoft Json** + **TextMeshPro**. Firebase is Phase 2.

### Step 6: Set Up VS Code (Recommended)

1. Install VS Code
2. Install extension: **C# Dev Kit**
3. In Unity: **Edit → Preferences → External Tools**
4. Set **External Script Editor** to: Visual Studio Code
5. Click **"Regenerate project files"**

---

## 🔥 Firebase Setup (Phase 2 Only)

> ⚠️ Skip this section for Phase 1. Firebase is needed only for Phase 2 online features.

### 1. Create Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"**
3. Name: `wilds-explorer`
4. Enable Google Analytics (optional)

### 2. Set Up Services

In Firebase Console:
- **Authentication**: Enable Google Sign-in and Email/Password
- **Firestore**: Create database in "test mode"
- **Storage**: Create storage bucket

### 3. Download Config File

1. Firebase Console → Project Settings → Your Apps
2. Add **Unity app** (Android + WebGL)
3. Download `google-services.json` (Android)
4. Download `GoogleService-Info.plist` (iOS - if needed)

### 4. Install Firebase Unity SDK

1. Download [Firebase Unity SDK](https://firebase.google.com/docs/unity/setup)
2. In Unity: **Assets → Import Package → Custom Package**
3. Import these from the SDK:
   - `FirebaseAuth.unitypackage`
   - `FirebaseFirestore.unitypackage`
   - `FirebaseStorage.unitypackage`
4. Place config files in `Assets/StreamingAssets/`

### 5. Configure in Unity

Create `firebase_config.json` in `Assets/Resources/Config/`:
```json
{
  "apiKey": "YOUR_API_KEY",
  "authDomain": "wilds-explorer.firebaseapp.com",
  "projectId": "wilds-explorer",
  "storageBucket": "wilds-explorer.appspot.com",
  "messagingSenderId": "YOUR_SENDER_ID",
  "appId": "YOUR_APP_ID"
}
```

---

## 📱 Build Setup

### Android Build

1. **File → Build Settings → Android**
2. Click **"Switch Platform"** (wait 2-5 min)
3. **Player Settings** → configure:
   - Company Name: `Wildsaura`
   - Product Name: `Wilds Explorer`
   - Package Name: `com.wildsaura.wildsexplorer`
   - Minimum API Level: Android 7.0 (API 24)
   - Target API Level: Android 13 (API 33)
4. Enable **"Development Build"** for testing
5. Click **"Build"** → choose output folder

#### Enable USB Debugging on Android Device
1. Settings → About Phone → Tap "Build Number" 7 times
2. Settings → Developer Options → Enable USB Debugging
3. Connect phone via USB
4. Click **"Build and Run"** in Unity

### WebGL Build

1. **File → Build Settings → WebGL**
2. Click **"Switch Platform"**
3. **Player Settings → Publishing Settings**:
   - Compression Format: Gzip
   - Enable Decompression Fallback: ✅
4. Add required headers for Unity WebGL (already in `vercel.json`):
   - `Cross-Origin-Opener-Policy: same-origin`
   - `Cross-Origin-Embedder-Policy: require-corp`
5. Click **"Build"** → select output folder
6. Copy build output to `public/game/` in the repo
7. Push to GitHub → Vercel auto-deploys!

---

## 🗂️ Project Structure (Unity Assets)

```
unity-game/Assets/
├── Scenes/
│   ├── MainMenu.unity       ← Start here!
│   └── Jungle_Level_1.unity ← Main game scene
│
├── Scripts/
│   ├── Core/                ← GameManager, SaveManager
│   ├── Gameplay/            ← PlayerController, Camera
│   ├── Missions/            ← Mission system
│   ├── Rewards/             ← Rewards & coins
│   └── UI/                  ← All UI scripts
│
├── Resources/
│   └── Data/
│       ├── missions.json    ← Mission definitions
│       └── game_config.json ← Game settings
│
└── Prefabs/
    ├── Player/              ← Player prefab
    ├── World/               ← Coins, animals, etc.
    └── UI/                  ← UI elements
```

---

## 🐛 Common Setup Issues

### Unity won't open the project
```
Solution 1: Delete Library/ folder and reopen
Solution 2: Check Unity version matches (must be 2022.3 LTS)
Solution 3: Run Unity as Administrator
```

### Red errors on first open
```
Solution 1: Wait for all packages to import
Solution 2: Window → Package Manager → Update outdated packages
Solution 3: Edit → Preferences → External Tools → Regen project files
```

### Android SDK not found
```
Unity Hub → Installs → Your Unity version → Add Modules
Check: Android Build Support + Android SDK & NDK Tools + OpenJDK
```

### WebGL build fails
```
Solution 1: Check WebGL Build Support is installed
Solution 2: Reduce texture sizes (mobile textures)
Solution 3: Check for unsupported .NET APIs
```

### Firebase won't connect
```
Solution 1: Check config file is in Assets/StreamingAssets/
Solution 2: Check Firebase Firestore rules allow read/write in test mode
Solution 3: Check internet connection
```

---

## ✅ Verify Your Setup

After setup, you should be able to:

- [ ] Open `unity-game/` in Unity without errors
- [ ] Enter Play mode in Unity Editor
- [ ] See MainMenu scene load
- [ ] Navigate to Jungle_Level_1 scene
- [ ] Player moves with WASD keys
- [ ] No errors in Console

---

## 📚 Useful Resources

| Resource | Link |
|----------|------|
| Unity Manual | [docs.unity3d.com](https://docs.unity3d.com) |
| Unity Learn (Free tutorials) | [learn.unity.com](https://learn.unity.com) |
| Firebase for Unity | [firebase.google.com/docs/unity](https://firebase.google.com/docs/unity/setup) |
| C# Documentation | [docs.microsoft.com/dotnet/csharp](https://docs.microsoft.com/en-us/dotnet/csharp/) |
| Git Guide | [git-scm.com/book](https://git-scm.com/book/en/v2) |

---

## 🆘 Need Help?

1. Check `docs/` folder for detailed guides
2. Search existing GitHub Issues
3. Open a new GitHub Issue with label `question`
4. Contact: madan123051@gmail.com

---

**Last Updated**: May 2026  
**Version**: 1.0  
**Unity Version**: 2022.3 LTS

# 🚀 Quick Start - Basic Setup

## 5 Simple Steps to Start

### Step 1: Clone Repository (2 min)
```bash
git clone https://github.com/madan123051/Wilds-explorer.git
cd Wilds-explorer
```

### Step 2: Create Unity Project (5 min)
- Open Unity Hub
- Click "New Project"
- Select **3D (URP)** template
- Unity version: **2022.3 LTS**
- Location: Inside cloned folder

### Step 3: Copy Scripts (2 min)
```
From: Wilds-explorer/Scripts/
To:   YourProject/Assets/Scripts/
```

### Step 4: Create 3 Scenes (10 min)
1. **MainMenu.unity**
2. **Level_1_Jungle.unity**
3. **GameOver.unity**

### Step 5: Add GameManager to MainMenu (5 min)
- Create empty GameObject named "GameManager"
- Add GameManager.cs script
- Save scene

---

## ✅ Done! You're Ready

Next: Follow `BASIC_FIRST_SCENE.md` to create first playable scene

---

## 🆘 Troubleshooting

**Scripts show errors?**
- Check Assets/Scripts folder exists
- Reimport all

**GameManager missing?**
- Make sure GameManager.cs is in Assets/Scripts/Core/

**Can't create scene?**
- File → New Scene → Save in Assets/Scenes/ folder

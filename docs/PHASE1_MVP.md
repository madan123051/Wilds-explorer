# 🎮 **PHASE 1: MVP (Minimum Viable Product)**

**Status**: 📋 Design Complete | 🔨 Development Ready
**Target Duration**: 8-12 weeks
**Intelligence Level**: Advanced ($$)
**Game Engine**: Unity 2022.3 LTS

---

## 🎯 **Phase 1 Goals**

### **Core Objectives**
✅ Playable game loop (start → play → end)  
✅ Player movement & camera controls  
✅ 3 fully playable levels (Jungle, Mountain, Temple Ruins)  
✅ Mission system (5-7 missions per level)  
✅ Coin collection & reward system  
✅ Simple combat (enemies, obstacles)  
✅ UI/Menu system (main menu, pause, HUD)  
✅ Offline save system (PlayerPrefs)  
✅ Mobile-optimized (low-poly, performance)  
✅ WebGL build ready for Vercel deploy  

---

## 📦 **MVP Features**

### **Gameplay Systems**

| Feature | Details | Status |
|---------|---------|--------|
| **Player Movement** | WASD + Mobile joystick | ✅ Scripts Ready |
| **Camera System** | Third-person follow | ✅ Scripts Ready |
| **Coin Collection** | Auto-pickup, points | ✅ Scripts Ready |
| **Missions** | 5-7 per level, rewards | ✅ Scripts Ready |
| **Combat** | Basic enemies + obstacles | ✅ Scripts Ready |
| **Health System** | Health/Stamina bars | ✅ Scripts Ready |
| **Save System** | PlayerPrefs offline save | ✅ Scripts Ready |
| **NPC/Dialogue** | Simple NPC interaction | ✅ Scripts Ready |
| **Rewards** | Popup system | ✅ Scripts Ready |
| **Checkpoints** | Level save points | ✅ Scripts Ready |

### **UI/UX**
- [ ] Main Menu (Play, Settings, About)
- [ ] Pause Menu (Resume, Restart, Settings)
- [ ] HUD (Coins, Health, Level, Objectives)
- [ ] Mission Popup (Mission details, rewards)
- [ ] Reward Popup (Coins earned, XP gained)
- [ ] Settings (Audio, Graphics, Controls)
- [ ] Game Over Screen

### **Levels**
- [ ] **Level 1: Jungle** (Introduction + 5 missions)
- [ ] **Level 2: Mountain** (Intermediate + 6 missions)
- [ ] **Level 3: Temple Ruins** (Advanced + 7 missions)

---

## 🗂️ **Project Folder Structure**

```
Unity Project Root/
├── Assets/
│   ├── Scripts/
│   │   ├── Core/
│   │   │   ├── GameManager.cs ✅
│   │   │   ├── Constants.cs ✅
│   │   │   ├── SaveSystem.cs ✅
│   │   │   └── GameConfig.json ✅
│   │   ├── Player/
│   │   │   ├── PlayerController.cs ✅
│   │   │   ├── PlayerCamera.cs ✅
│   │   │   ├── PlayerStats.cs ✅
│   │   │   └── HUD.cs ✅
│   │   ├── Gameplay/
│   │   │   ├── CoinCollector.cs ✅
│   │   │   ├── MissionSystem.cs ✅
│   │   │   ├── RewardSystem.cs ✅
│   │   │   ├── LevelManager.cs ✅
│   │   │   ├── Enemy.cs ✅
│   │   │   ├── Obstacle.cs ✅
│   │   │   ├── Projectile.cs ✅
│   │   │   └── Checkpoint.cs ✅
│   │   ├── UI/
│   │   │   ├── UIManager.cs ✅
│   │   │   ├── MainMenuController.cs 🔲
│   │   │   ├── PauseMenuController.cs 🔲
│   │   │   ├── MissionPopup.cs 🔲
│   │   │   └── SettingsPanel.cs 🔲
│   │   ├── NPC/
│   │   │   ├── NPC.cs ✅
│   │   │   └── DialogueSystem.cs 🔲
│   │   ├── Audio/
│   │   │   ├── SoundManager.cs 🔲
│   │   │   └── MusicManager.cs 🔲
│   │   ├── Animation/
│   │   │   └── AnimationController.cs 🔲
│   │   └── Utils/
│   │       ├── SceneLoader.cs ✅
│   │       └── PrefabSetup.cs ✅
│   ├── Scenes/
│   │   ├── MainMenu.unity 🔲
│   │   ├── Level_1_Jungle.unity 🔲
│   │   ├── Level_2_Mountain.unity 🔲
│   │   ├── Level_3_TempleRuins.unity 🔲
│   │   └── GameOver.unity 🔲
│   ├── Prefabs/
│   │   ├── Player.prefab 🔲
│   │   ├── Coin.prefab 🔲
│   │   ├── Enemy.prefab 🔲
│   │   ├── Obstacle.prefab 🔲
│   │   ├── NPC.prefab 🔲
│   │   ├── MissionPopup.prefab 🔲
│   │   └── RewardPopup.prefab 🔲
│   ├── Models/
│   │   ├── Character/
│   │   │   ├── Player.fbx 🔲
│   │   │   └── Player_Animations.anim 🔲
│   │   ├── Environment/
│   │   │   ├── Coin.fbx 🔲
│   │   │   ├── Enemy.fbx 🔲
│   │   │   ├── Tree.fbx 🔲
│   │   │   ├── Rock.fbx 🔲
│   │   │   └── TempleRuins.fbx 🔲
│   │   └── Props/
│   │       ├── Backpack.fbx 🔲
│   │       ├── Camera.fbx 🔲
│   │       └── Torch.fbx 🔲
│   ├── Materials/
│   │   ├── Character.mat 🔲
│   │   ├── Coin.mat 🔲
│   │   ├── Environment.mat 🔲
│   │   └── UI.mat 🔲
│   ├── Textures/
│   │   ├── Character/
│   │   ├── Environment/
│   │   └── UI/
│   ├── Audio/
│   │   ├── Music/
│   │   ├── SFX/
│   │   └── Ambient/
│   ├── UI/
│   │   ├── Canvas/
│   │   └── Sprites/
│   └── Resources/
│       └── GameData/
│           └── MissionData.json 🔲
├── ProjectSettings/
├── .gitignore ✅
└── README.md ✅

✅ = Ready (Code pushed)
🔲 = To Do (Next phase)
```

---

## 📋 **Development Workflow**

### **Phase 1a: Setup & Core Systems (Weeks 1-2)**
```
✅ Repository setup
✅ Script architecture ready
🔲 Create Unity project
🔲 Import scripts
🔲 Test core systems
🔲 Create GameManager scene
```

### **Phase 1b: Player & Movement (Weeks 3-4)**
```
🔲 Create Player prefab
🔲 Implement movement (WASD + mobile)
🔲 Implement camera system
🔲 Add animations
🔲 Test controls
```

### **Phase 1c: Gameplay Systems (Weeks 5-6)**
```
🔲 Coin system implementation
🔲 Mission system UI
🔲 Enemy AI
🔲 Obstacle mechanics
🔲 Damage/Health system
🔲 Test gameplay loop
```

### **Phase 1d: UI & Menus (Weeks 7)**
```
🔲 Main menu scene
🔲 Pause menu
🔲 Settings panel
🔲 HUD implementation
🔲 Popup systems
```

### **Phase 1e: Levels & Content (Weeks 8-9)**
```
🔲 Design Level 1 (Jungle)
🔲 Design Level 2 (Mountain)
🔲 Design Level 3 (Temple Ruins)
🔲 Place enemies, obstacles, coins
🔲 Create missions
```

### **Phase 1f: Audio & Polish (Week 10)**
```
🔲 Sound effects
🔲 Background music
🔲 Animations
🔲 Visual effects
🔲 Performance optimization
```

### **Phase 1g: Testing & Build (Weeks 11-12)**
```
🔲 QA testing
🔲 Bug fixes
🔲 Mobile optimization
🔲 WebGL build
🔲 Performance profiling
🔲 Vercel deployment
```

---

## 🎮 **Gameplay Loop**

```
Main Menu
   ↓
Level Select
   ↓
Level Load (Jungle/Mountain/Temple Ruins)
   ↓
┌─────────────────────────────────┐
│   GAMEPLAY LOOP                 │
│ • Player movement               │
│ • Collect coins                 │
│ • Complete missions             │
│ • Battle enemies                │
│ • Dodge obstacles               │
│ • Reach checkpoints             │
│ • Auto-save progress            │
└─────────────────────────────────┘
   ↓
Level Complete?
   ├─→ YES: Show rewards → Next Level
   └─→ NO: Continue/Die → Restart
   ↓
Game Over Screen
   ↓
Back to Main Menu
```

---

## 📊 **Mission Examples**

### **Level 1: Jungle (5 Missions)**
1. **Collect 10 Coins** - Intro mission
2. **Reach Checkpoint A** - Navigation
3. **Defeat 5 Enemies** - Combat intro
4. **Meet NPC Elder** - Story mission
5. **Escape Jungle** - Final mission

### **Level 2: Mountain (6 Missions)**
1. **Climb to Peak** - Climbing mechanic
2. **Collect Ancient Artifacts** - Collection
3. **Defeat Boss Enemy** - Hard combat
4. **Unlock Secret Passage** - Exploration
5. **Complete Photo Quest** - Photography mechanic
6. **Escape Avalanche** - Timed mission

### **Level 3: Temple Ruins (7 Missions)**
1. **Solve Temple Puzzle** - Puzzle mechanic
2. **Collect Relics** - Final collection
3. **Defeat Temple Guardian** - Final boss
4. **Restore Ancient Shrine** - Story conclusion
5. **Unlock Secret Ending** - Hidden mission
6. **Collect All Artifacts** - Challenge mission
7. **Complete Photo Collection** - Photography

---

## 💾 **Save System Details**

### **PlayerPrefs Keys**
```json
{
  "player_level": 1,
  "player_coins": 0,
  "player_health": 100,
  "player_stamina": 100,
  "player_xp": 0,
  "level1_completed": false,
  "level2_completed": false,
  "level3_completed": false,
  "missions_completed": "[1,2,3]",
  "checkpoint_position": "0,5,0",
  "last_save_time": "2026-05-22"
}
```

---

## 🎨 **Art Style Guide**

### **Polygon Count Target**
- Player: 2000-3000 polygons
- Enemy: 1500-2000 polygons
- Environment: 500-1500 per object
- Coin: 100-200 polygons

### **Texture Resolution**
- Character: 1024x1024
- Environment: 512x512
- UI: 256x256
- Mobile optimized: 50% scale option

### **Color Palette**
- Jungle: Greens, browns, blues
- Mountain: Grays, whites, browns
- Temple: Golds, reds, stone colors

---

## 🚀 **Deployment (Phase 1 End)**

### **WebGL Build for Vercel**
```bash
# Unity Build Settings:
# Platform: WebGL
# Compression Format: Gzip
# Enable Exceptions: None
# Optimize Build Time: Enabled
# Template: Minimal

# Build Output: /Build/
# Upload to GitHub: /web-build/
# Deploy on Vercel: Auto-deploy from GitHub
```

### **Live URL**
```
https://wilds-explorer.vercel.app
```

---

## ⚡ **Performance Targets**

| Metric | Target | Platform |
|--------|--------|----------|
| FPS | 60 | PC/Web |
| FPS | 30-45 | Mobile |
| Load Time | < 5s | Web |
| Build Size | < 150MB | WebGL |
| Memory | < 500MB | Runtime |

---

## 📚 **Documentation Files**

- ✅ `PHASE1_MVP.md` (this file)
- ✅ `CONCEPT.md` - Game design document
- ✅ `ARCHITECTURE.md` - Technical architecture
- ✅ `SETUP_INSTRUCTIONS.md` - Setup guide
- ✅ `README_GAMEPLAY.md` - Gameplay systems
- 🔲 `ASSETS_GUIDE.md` - Art & 3D assets
- 🔲 `AUDIO_GUIDE.md` - Sound design
- 🔲 `TESTING_GUIDE.md` - QA testing
- 🔲 `DEPLOYMENT_GUIDE.md` - Vercel deployment

---

## ✅ **Phase 1 Checklist**

### **Code/Scripts**
- [x] Core systems (GameManager, SaveSystem)
- [x] Player systems (Controller, Camera, Stats)
- [x] Gameplay systems (Coins, Missions, Enemies)
- [x] UI systems (HUD, UIManager)
- [x] NPC systems
- [ ] Audio systems
- [ ] Animation systems
- [ ] Additional UI (Menus, Popups)

### **Assets**
- [ ] 3D Models (Player, Enemies, Environment)
- [ ] Textures & Materials
- [ ] Animations
- [ ] Sound effects
- [ ] Music tracks
- [ ] UI Sprites

### **Scenes**
- [ ] MainMenu.unity
- [ ] Level_1_Jungle.unity
- [ ] Level_2_Mountain.unity
- [ ] Level_3_TempleRuins.unity
- [ ] GameOver.unity

### **Testing**
- [ ] Gameplay loop
- [ ] All 3 levels
- [ ] All missions
- [ ] Save/Load system
- [ ] Mobile controls
- [ ] Performance
- [ ] WebGL build

### **Deployment**
- [ ] WebGL build
- [ ] GitHub push
- [ ] Vercel deployment
- [ ] Live testing

---

## 📞 **Support & Questions**

**Repository**: https://github.com/madan123051/Wilds-explorer  
**Issues**: Open GitHub issues for bugs/features  
**Documentation**: See `/docs/` folder  
**Discussions**: Use GitHub Discussions tab

---

**Status**: Phase 1 Planning ✅ Complete
**Next**: Begin Phase 1a - Setup & Core Systems
**Ready to Code!** 🚀🎮

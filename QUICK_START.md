# 🚀 Quick Start Guide

## For Project Managers

### Understand the Project in 5 Minutes

**What is this?**
- Single-player adventure game for Wildsaura ecosystem
- Wildlife photographer exploring Nepal-inspired world
- Missions earn rewards that boost Drishya/Marketplace engagement

**Why is it special?**
- Not just a game - it's an engagement funnel
- Offline-first (works anywhere)
- Connects players to creators ecosystem

**Timeline:**
- Phase 1 (MVP): 3-4 months
- Phase 2 (Ecosystem): 2 months
- Phase 3 (Expansion): 4+ months

---

## For Developers

### Setup (Next 30 minutes)

1. **Read Documentation** (in order)
   ```
   1. README.md (overview)
   2. docs/CONCEPT.md (vision)
   3. docs/ARCHITECTURE.md (structure)
   4. docs/GAMEPLAY.md (mechanics)
   ```

2. **Install Unity**
   ```
   Download: Unity 2022.3 LTS (Long Term Support)
   https://unity.com/download
   ```

3. **Clone Project**
   ```bash
   git clone https://github.com/madan123051/king-of-jungle-.git
   cd king-of-jungle-
   ```

4. **Open in Unity**
   ```
   File → Open Project
   Select: /unity-game/
   ```

5. **Install Dependencies**
   ```
   In Package Manager:
   - Firebase SDK (via Firestore plugin)
   - Newtonsoft.Json
   - DOTween (animations)
   ```

---

### Quick File Reference

| File | Purpose | Read When |
|------|---------|-----------|
| README.md | Project overview | First |
| CONCEPT.md | Full game design | Planning |
| ARCHITECTURE.md | Code structure | Before coding |
| PROJECT_STRUCTURE.md | Where to add files | While developing |
| GAMEPLAY.md | Detailed mechanics | Implementing features |

---

## For Designers

### Asset Directories

```
Assets/
├── Models/          ← 3D Models go here
├── Textures/        ← Textures & images
├── Materials/       ← Material definitions
├── Audio/           ← Music & SFX
└── UI/Sprites/      ← UI graphics
```

### Creating New Assets

1. **Create in external tool** (Blender, Aseprite, etc.)
2. **Save to appropriate folder** (Models/, Textures/, etc.)
3. **Import to Unity** (drag & drop)
4. **Create prefab** (if reusable)

### Naming Convention
```
Use descriptive names with format:
- 3D Models: character_type_quality.fbx
  Example: tiger_animated_rigged.fbx
  
- Textures: context_type_detail.png
  Example: jungle_foliage_diffuse.png
  
- Materials: context_material.mat
  Example: jungle_foliage_material.mat
```

---

## For Testers

### Test Scenarios (Phase 1)

**Core Gameplay**
- [ ] Player moves smoothly
- [ ] Camera follows correctly
- [ ] Coins can be collected
- [ ] Missions trigger properly

**UI**
- [ ] Mission popup appears correctly
- [ ] Reward screen displays rewards
- [ ] HUD shows current stats
- [ ] Menu navigation works

**Save/Load**
- [ ] Game saves progress
- [ ] Game loads saved progress
- [ ] Offline play works
- [ ] Stats persist after reload

**Performance**
- [ ] 60 FPS on target device
- [ ] No memory leaks
- [ ] Smooth animations
- [ ] Quick load times

---

## For Project Phases

### Phase 1: MVP (Start Here)
**Goal**: Playable prototype

**Create:**
1. Main character controller
2. Jungle_Level_1 scene (500m × 500m)
3. Coin collection system
4. 10-15 simple missions
5. PlayerPrefs save system

**Test:**
- Can move around and collect coins
- Missions trigger and complete
- Save/load works offline

**Deliverable**: Playable APK or WebGL build

---

### Phase 2: Ecosystem
**Goal**: Connect to Wildsaura ecosystem

**Create:**
1. Firebase authentication
2. Firestore sync system
3. Mission → Drishya integration
4. Reward redemption system

**Test:**
- Cloud sync works
- API calls succeed
- Rewards properly redeemed

**Deliverable**: Live online features

---

### Phase 3: Expansion
**Goal**: Full game with multiple maps

**Create:**
1. Additional biomes (Mountain, Ruins, etc.)
2. Seasonal events
3. Leaderboards
4. Advanced missions

**Deliverable**: Full featured game

---

## Common Tasks

### Adding a New Mission

1. **Create mission data** in `Resources/Data/missions.json`:
   ```json
   {
     "missionId": "mission_001",
     "title": "Collect 5 Coins",
     "rewards": {"coins": 100, "xp": 50}
   }
   ```

2. **Create mission prefab** from `Prefabs/UI/MissionPopup.prefab`

3. **Trigger in scene** at desired location

4. **Test completion** and reward

### Adding a New Level

1. **Create scene** in `Scenes/NewLevel.unity`

2. **Set up:**
   - Terrain
   - Player spawn point
   - Coins & collectibles
   - Mission points
   - Camera area

3. **Add to build settings**:
   ```
   File → Build Settings → Add Open Scenes
   ```

### Adding New Audio

1. **Place audio file** in `Assets/Audio/` (Music/ or SFX/)

2. **Configure in AudioManager**:
   ```csharp
   AudioManager.Instance.PlaySFX("coin_pickup");
   ```

3. **Test volume levels**

---

## Key Scripts to Know

| Script | Purpose | Location |
|--------|---------|----------|
| GameManager | Central game controller | Scripts/Core/ |
| PlayerManager | Track player progress | Scripts/Core/ |
| SaveManager | Handle save/load | Scripts/Core/ |
| MissionManager | Handle missions | Scripts/Missions/ |
| RewardManager | Distribute rewards | Scripts/Rewards/ |
| PlayerController | Player movement | Scripts/Gameplay/ |
| UIManager | Manage UI screens | Scripts/UI/ |

---

## Troubleshooting

### Unity won't open project
```
→ Check Unity version (needs 2022.3 LTS)
→ Delete Library/ folder and reopen
→ Check Assets have no errors
```

### Scripts have compilation errors
```
→ Check for missing dependencies
→ Check for typos in class names
→ Check import statements
→ Restart Unity Editor
```

### Game crashes on startup
```
→ Check for null references
→ Check scene setup (has GameManager?)
→ Check Firebase configuration
→ Check console for errors
```

---

## Resources

### Learning
- [Unity Manual](https://docs.unity3d.com/)
- [C# Programming Guide](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Firebase for Unity](https://firebase.google.com/docs/unity/setup)

### Tools
- [Visual Studio Code](https://code.visualstudio.com/) - Code editor
- [Blender](https://www.blender.org/) - 3D modeling
- [Aseprite](https://www.aseprite.org/) - Pixel art
- [Audacity](https://www.audacityteam.org/) - Audio editing

### Community
- Unity Forums: https://forum.unity.com/
- r/Unity3D: https://reddit.com/r/Unity3D/
- Discord Communities

---

## Next Steps

1. **Read full documentation** (especially ARCHITECTURE.md)
2. **Clone the repository**
3. **Set up local environment**
4. **Join development team**
5. **Start Phase 1 development**

---

## Questions?

Check the documentation or ask the team!

**Main Documentation**: See docs/ folder  
**Architecture Questions**: Read docs/ARCHITECTURE.md  
**API Integration**: Read docs/API.md  
**Gameplay Details**: Read docs/GAMEPLAY.md  

---

**Last Updated**: May 2026  
**Version**: 1.0

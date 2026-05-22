# Game of Wilds Explorer - Unity Setup Guide

## Phase 1 Scripts Ready ✅

All core game systems are now in the repository.

### 📁 File Structure

```
Unity/Assets/Scripts/
├── Core/
│   ├── GameManager.cs          (Main game controller)
│   ├── Constants.cs             (Game constants)
│   └── SaveSystem.cs            (Save/Load system)
├── Player/
│   ├── PlayerController.cs      (Movement)
│   ├── PlayerCamera.cs          (Camera follow)
│   └── PlayerStats.cs           (Health, XP, coins)
├── Gameplay/
│   ├── CoinCollector.cs         (Coin pickup)
│   ├── MissionSystem.cs         (Mission management)
│   ├── LevelManager.cs          (Level initialization)
│   ├── RewardSystem.cs          (Popup rewards)
│   ├── Obstacle.cs              (Damage obstacles)
│   ├── Enemy.cs                 (AI enemies)
│   ├── Projectile.cs            (Weapons)
│   └── Checkpoint.cs            (Save points)
├── NPC/
│   └── NPC.cs                   (NPCs & dialogue)
├── UI/
│   └── HUD.cs                   (UI display)
├── Scene/
│   └── SceneLoader.cs           (Scene management)
└── Editor/
    └── PrefabSetup.cs           (Prefab creation tools)
```

### 🎮 What's Included

#### Core Systems
- ✅ Game Manager (Singleton, DontDestroyOnLoad)
- ✅ Player Stats (Health, Stamina, XP, Coins)
- ✅ Mission System (3 sample missions)
- ✅ Save/Load System (PlayerPrefs)
- ✅ Reward System (Popup notifications)

#### Gameplay
- ✅ Coin Collection
- ✅ Enemy AI (patrol, chase, attack)
- ✅ Obstacles (damage on contact)
- ✅ Projectiles (basic combat)
- ✅ Checkpoints (progress save)
- ✅ NPC System (dialogue, quests)

#### UI
- ✅ HUD Display (coins, health, stamina, level)
- ✅ Pause Menu
- ✅ Reward Popups

### 🔧 Setup Steps

1. **Create New Unity Project**
   - Version: 2022.3 LTS (or later)
   - Template: 3D

2. **Clone Repository**
   ```bash
   git clone https://github.com/madan123051/Wilds-explorer.git
   cd Wilds-explorer/Unity
   ```

3. **Open in Unity**
   - File → Open Project
   - Select `/Unity` folder
   - Wait for import

4. **Setup Layers & Tags**
   ```
   Layers: Player, Enemy, Coin, Obstacle
   Tags: Player, Enemy, Coin, Obstacle
   ```

5. **Create Prefabs**
   - Tools → Setup Game Prefabs (creates coin, enemy, obstacle, NPC)

6. **Scene Setup**
   - Create scenes: MainMenu, Level_1, GameOver
   - Add GameManager prefab to each scene
   - Add PlayerStats prefab
   - Add Canvas for HUD

7. **Configure HUD**
   - Create Canvas
   - Add UI elements (TextMeshPro):
     - Coins text
     - Level text
     - Health bar + text
     - Stamina bar
     - Current mission text
     - Pause button
   - Assign to HUD.cs in inspector

### 📝 Configuration

**GameConfig.json** - Game settings (can be loaded at runtime)

```json
{
  "game": { "title": "Game of Wilds Explorer" },
  "gameplay": {
    "initialSpeed": 5.0,
    "maxSpeed": 12.0,
    "playerStartHealth": 100
  },
  "levels": { ... }
}
```

### 🎯 Next Steps

1. **Import & Configure** - Follow setup steps above
2. **Create Base Scenes** - MainMenu, Level_1, GameOver
3. **Build Prefabs** - Use PrefabSetup.cs menu tool
4. **Test Gameplay** - Run Level_1 scene
5. **Iterate** - Add models, animations, sounds

### 🐛 Common Issues

**Scripts not compiling?**
- Check TextMeshPro is imported
- Ensure .NET Framework 4.x is set in Player Settings

**Prefabs not appearing?**
- Run: Tools → Setup Game Prefabs
- Ensure Layers & Tags are created

**HUD not updating?**
- Attach HUD.cs to Canvas
- Assign UI elements in inspector
- Ensure PlayerStats is in scene

### 📚 Key Classes Reference

**GameManager** - Handles game state, pausing, level loading
```csharp
GameManager.Instance.StartGame();
GameManager.Instance.GameOver();
GameManager.Instance.PauseGame();
```

**PlayerStats** - Manages player resources
```csharp
PlayerStats.Instance.AddCoins(10);
PlayerStats.Instance.TakeDamage(5);
PlayerStats.Instance.AddExperience(25);
```

**MissionSystem** - Quest management
```csharp
MissionSystem.Instance.CompleteMission(0);
MissionSystem.Instance.GetCurrentMission();
```

**RewardSystem** - Show popups & rewards
```csharp
RewardSystem.Instance.ShowReward(position, "text", amount);
RewardSystem.Instance.MissionCompleted("name", coins, xp);
```

---

## 🚀 Quick Test

1. Create a simple Level_1 scene
2. Add a Player (with PlayerController + PlayerStats)
3. Add some Coins in the scene
4. Add an Enemy
5. Add HUD Canvas
6. Press Play - Should work!

---

**Questions?** Check individual script comments or ask for Phase 2 (Firebase integration)!

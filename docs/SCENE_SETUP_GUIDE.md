# Scene Setup Guide - Phase 1

## Quick Start

```
1. Open Unity Project
2. Go to Assets/Scenes/
3. Follow scene setup for each scene below
4. Test in Editor
```

---

## Scene 1: MainMenu

### Hierarchy
```
MainMenu (Scene)
├── MainCamera (Camera, Tag: MainCamera)
├── Canvas (UI Root)
│   ├── Panel_Background
│   ├── Button_Play
│   ├── Button_Settings
│   └── Button_Quit
├── AudioListener
└── EventSystem
```

### Setup Steps
1. Create new scene: `Assets/Scenes/MainMenu.unity`
2. Add Camera (Main)
3. Create Canvas
   - Set Canvas Scaler to 1920x1080
   - Add Image (background)
   - Add 3 Buttons: Play, Settings, Quit
4. Attach UIManager script to Canvas
5. Wire up button clicks to UIManager methods
6. Save & test

---

## Scene 2: Level_1_Jungle

### Hierarchy
```
Level_1_Jungle (Scene)
├── Lighting
│   ├── Directional Light
│   └── Sky (Skybox)
├── Environment
│   ├── Ground (Plane)
│   ├── Trees (Prefabs)
│   └── Rocks (Props)
├── Player
│   └── Player (Prefab) - Spawns at (0, 1, 0)
├── Coins (Parent)
│   ├── Coin_1 (Prefab)
│   ├── Coin_2 (Prefab)
│   └── ... (50 total)
├── Enemies (Parent)
│   ├── Enemy_1 (Prefab)
│   └── Enemy_2 (Prefab)
├── Managers
│   ├── GameManager (empty gameobject with GameManager script)
│   ├── LevelManager (with LevelManager script)
│   └── UIManager (Canvas with HUD)
└── Checkpoints
    ├── Checkpoint_1
    └── Checkpoint_2
```

### Setup Steps
1. Create new scene: `Assets/Scenes/Level_1_Jungle.unity`
2. Add Directional Light + Skybox
3. Create Ground (Plane, scale 50x1x50)
4. Add Player Prefab at (0, 1, 0)
5. Spawn coins using LevelManager script
   - Call `SpawnCoins(50)` in OnStart
6. Add HUD Canvas (see HUD section below)
7. Add GameManager, LevelManager empty objects
8. Test player movement

---

## Scene 3: GameOver

### Hierarchy
```
GameOver (Scene)
├── Camera (UI Camera)
├── Canvas
│   ├── Panel_GameOver
│   ├── Text_Score
│   ├── Text_CoinsCollected
│   ├── Text_Time
│   ├── Button_Restart
│   ├── Button_MainMenu
│   └── Button_Quit
└── AudioListener
```

### Setup Steps
1. Create new scene: `Assets/Scenes/GameOver.unity`
2. Create Canvas with Game Over UI
3. Display:
   - Final Score
   - Coins collected
   - Time survived
4. Add Restart & MainMenu buttons
5. Attach click handlers

---

## HUD Canvas Setup (Level_1)

### Hierarchy
```
Canvas_HUD
├── Panel_Top
│   ├── Image_Coins
│   ├── Text_CoinCount
│   ├── Image_Health
│   └── Slider_Health
├── Panel_Middle
│   ├── Text_MissionName
│   └── Text_MissionProgress
├── Panel_Bottom
│   ├── Image_XP
│   └── Slider_XP
├── Button_Pause (Top Right)
└── Panel_PauseMenu (Initially Inactive)
    ├── Button_Resume
    ├── Button_Settings
    └── Button_MainMenu
```

### Setup Steps
1. Create Canvas in Level_1 scene
2. Set Canvas Scaler:
   - Reference Resolution: 1920x1080
   - Screen Match Mode: Expand
3. Create UI elements above
4. Position anchors:
   - Top panel: Top, Center X
   - Middle: Center
   - Bottom: Bottom, Center X
5. Add Text elements for stats display
6. Attach HUD script

---

## Player Prefab Setup

### GameObject Hierarchy
```
Player
├── Model (Capsule visual)
├── CapsuleCollider (for physics)
├── Rigidbody
│   - Mass: 1
│   - Drag: 0
│   - Angular Drag: 0.05
│   - Constraints: Freeze Rotation
├── PlayerController (script)
├── PlayerStats (script)
├── CoinCollector (script, TriggerCollider)
├── PlayerCamera (child object)
│   └── MainCamera
└── Animator (for animations - Week 3)
```

### Rigidbody Settings
```
Mass: 1
Drag: 0
Angular Drag: 0.05
Use Gravity: True
Is Kinematic: False
Constraints:
  - Freeze Rotation X: True
  - Freeze Rotation Y: False
  - Freeze Rotation Z: True
```

---

## Coin Prefab Setup

### GameObject Hierarchy
```
Coin
├── Mesh (Sphere)
├── Material (Yellow, shiny)
├── SphereCollider (Trigger: True)
├── Coin (script)
└── Light (optional glow effect)
```

### Coin Script References
- Attach `Coin.cs` script
- Set coin value in script: 10 points
- Glow effect (optional): Add Point Light

---

## Build Settings

### Scenes in Build
```
Index 0: MainMenu
Index 1: Level_1_Jungle
Index 2: Level_2_Mountain (placeholder)
Index 3: GameOver
```

### Player Settings
- **API Level**: Android 9.0 (API 28)
- **Graphics API**: OpenGL ES 3.0
- **Rendering**: Forward
- **Quality**: High (for mobile)
- **Resolution**: 1920x1080 (portrait)

---

## Testing Checklist

- [ ] MainMenu scene loads
- [ ] Play button transitions to Level_1
- [ ] Player spawns in Level_1
- [ ] Camera follows player
- [ ] Coins appear in level
- [ ] Coins can be collected
- [ ] HUD displays coins collected
- [ ] Pause button works
- [ ] Game Over scene displays correctly
- [ ] All scenes load without errors
- [ ] Frame rate is 60 FPS

---

## Performance Tips

1. **Use LOD Groups** for environment objects
2. **Batch static geometry** (trees, rocks)
3. **Use object pooling** for coins (will implement Week 2)
4. **Limit dynamic lights** (max 2 per scene)
5. **Profile on mobile device** before optimization

---

## Common Issues

### Player falls through ground
- Check Rigidbody gravity enabled
- Check collider size matches mesh
- Increase physics timestep if needed

### Coins not collecting
- Check SphereCollider is set to Trigger: True
- Check layer masks in CoinCollector script
- Verify OnTriggerEnter is called (add Debug.Log)

### Camera clipping through player
- Increase near clip plane (0.01 minimum)
- Move camera pivot point away from player

### UI not visible
- Check Canvas camera setting
- Verify Canvas Render Mode: Screen Space - Camera
- Check layer sorting order

---

## Next Steps

After scenes are set up:
1. Test all scenes load correctly
2. Test player movement
3. Test coin collection
4. Debug any issues
5. Commit to GitHub
6. Move to Week 1 - Day 3 (complete Player setup)

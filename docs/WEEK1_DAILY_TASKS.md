# Phase 1 - Week 1 Daily Tasks Checklist

## Day 1: Project Setup (5 hours)

### Morning (09:00 - 12:00)
- [ ] Download Unity 2022.3 LTS
- [ ] Create new 3D project
- [ ] Clone GitHub repo: `git clone https://github.com/madan123051/Wilds-explorer.git`
- [ ] Copy all scripts from `Unity/Assets/Scripts/` to new project
- [ ] Open Project Settings
  - [ ] Set Quality: High
  - [ ] Set Target: Android + WebGL
  - [ ] Set Resolution: 1920x1080

### Afternoon (13:00 - 17:00)
- [ ] Test GameManager singleton
  - Create empty scene
  - Add empty GameObject with GameManager script
  - Check console for no errors
  - Check GameManager is singleton
- [ ] Test SaveSystem
  - Call SaveSystem.SaveGame()
  - Check PlayerPrefs saved
  - Call SaveSystem.LoadGame()
  - Verify loaded correctly
- [ ] Commit: "[Day 1] Project setup complete"

**Success Criteria**: Project opens, all scripts imported, GameManager works, no errors

---

## Day 2: Scene Creation (6 hours)

### Morning (09:00 - 12:00)
- [ ] Create 4 scenes in `Assets/Scenes/`:
  - [ ] MainMenu.unity
  - [ ] Level_1_Jungle.unity
  - [ ] Level_2_Mountain.unity
  - [ ] GameOver.unity
- [ ] Setup MainMenu scene
  - [ ] Add Main Camera
  - [ ] Create Canvas
  - [ ] Add UI buttons: Play, Settings, Quit
  - [ ] Add EventSystem
- [ ] Test scene in Editor

### Afternoon (13:00 - 17:00)
- [ ] Setup Level_1_Jungle scene
  - [ ] Add Directional Light
  - [ ] Create Ground (Plane, 50x50)
  - [ ] Add Sky (use default skybox)
  - [ ] Add simple environment (cube trees, placeholder)
- [ ] Setup GameOver scene
  - [ ] Add Camera
  - [ ] Create Game Over UI
  - [ ] Add Restart button
- [ ] Configure Build Settings
  - [ ] Add all 4 scenes in correct order
  - [ ] Set MainMenu as Scene 0
- [ ] Commit: "[Day 2] Scenes created and configured"

**Success Criteria**: All 4 scenes exist, load without errors, MainMenu shows UI

---

## Day 3: Player Setup (6 hours)

### Morning (09:00 - 12:00)
- [ ] Create Player prefab
  - [ ] Create empty GameObject: "Player"
  - [ ] Add Capsule as child (visual representation)
  - [ ] Add CapsuleCollider to Player
  - [ ] Add Rigidbody
    - [ ] Mass: 1
    - [ ] Drag: 0
    - [ ] Gravity: ON
    - [ ] Freeze Rotation X, Z
  - [ ] Add PlayerController script
  - [ ] Add PlayerStats script
- [ ] Implement WASD movement
  - [ ] Edit PlayerController.cs
  - [ ] Add Input.GetAxis for WASD
  - [ ] Add velocity calculations
  - [ ] Test in Level_1 scene

### Afternoon (13:00 - 17:00)
- [ ] Implement Jump
  - [ ] Add Space key input
  - [ ] Apply jump force via Rigidbody
  - [ ] Add ground check (raycast)
  - [ ] Test jump works
- [ ] Add PlayerCamera
  - [ ] Create Camera as child of Player
  - [ ] Position behind/above player
  - [ ] Add PlayerCamera script
  - [ ] Test camera follows player
- [ ] Test complete movement
  - [ ] Move forward/back/left/right
  - [ ] Jump
  - [ ] Camera rotation
- [ ] Commit: "[Day 3] Player movement complete"

**Success Criteria**: Player moves with WASD, jumps, camera follows

---

## Day 4: Coin System (5 hours)

### Morning (09:00 - 12:00)
- [ ] Create Coin prefab
  - [ ] Create GameObject: "Coin"
  - [ ] Add Sphere mesh
  - [ ] Create yellow material
  - [ ] Add SphereCollider (Trigger: True)
  - [ ] Add Coin script
  - [ ] Make prefab: `Assets/Prefabs/Coin.prefab`
- [ ] Spawn coins in Level_1
  - [ ] Open Level_1_Jungle scene
  - [ ] Create empty GameObject: "Coins"
  - [ ] Drag Coin prefab into scene 10 times
  - [ ] Position coins around level

### Afternoon (13:00 - 17:00)
- [ ] Implement coin collection
  - [ ] Add CoinCollector script to Player
  - [ ] Implement OnTriggerEnter detection
  - [ ] Destroy coin on collect
  - [ ] Add coin to PlayerStats
  - [ ] Test collection
- [ ] Update HUD
  - [ ] Create Canvas_HUD in Level_1
  - [ ] Add Text for coin counter
  - [ ] Wire up PlayerStats.coinsCollected to HUD
  - [ ] Test counter updates
- [ ] Test complete system
  - [ ] Collect coins
  - [ ] HUD updates
  - [ ] Verify all coins collected
- [ ] Commit: "[Day 4] Coin system complete"

**Success Criteria**: Coins visible, collectible, HUD updates correctly

---

## Day 5: HUD & Save System (5 hours)

### Morning (09:00 - 12:00)
- [ ] Complete HUD Canvas
  - [ ] Add coin counter (text)
  - [ ] Add health bar (slider)
  - [ ] Add XP bar (slider)
  - [ ] Add mission text
  - [ ] Position all elements
  - [ ] Test visibility
- [ ] Implement Pause menu
  - [ ] Create Panel_Pause (Canvas overlay)
  - [ ] Add Resume button
  - [ ] Add Settings button
  - [ ] Add MainMenu button
  - [ ] Hide pause menu initially

### Afternoon (13:00 - 17:00)
- [ ] Implement pause functionality
  - [ ] Add Pause button to HUD
  - [ ] Show pause menu on button click
  - [ ] Set Time.timeScale = 0 when paused
  - [ ] Hide pause menu on resume
  - [ ] Set Time.timeScale = 1 on resume
- [ ] Test SaveSystem
  - [ ] Save game on pause
  - [ ] Load game on scene reload
  - [ ] Verify player position saved
  - [ ] Verify coins collected saved
  - [ ] Test multiple save/load cycles
- [ ] Final testing
  - [ ] Play Level_1 for 2 minutes
  - [ ] Collect some coins
  - [ ] Pause game
  - [ ] Resume
  - [ ] Quit to MainMenu
  - [ ] Restart Level_1
  - [ ] Verify coins still collected
- [ ] Commit: "[Day 5] HUD and save system complete"

**Success Criteria**: Pause works, HUD displays correctly, game saves/loads properly

---

## Week 1 Commit Messages

```bash
# Day 1
git commit -m "[Day 1] Project setup with scripts imported"

# Day 2
git commit -m "[Day 2] Created MainMenu, Level_1, GameOver scenes"

# Day 3
git commit -m "[Day 3] Implemented player movement and camera"

# Day 4
git commit -m "[Day 4] Added coin collection system"

# Day 5
git commit -m "[Day 5] Complete HUD and save system"
```

---

## Testing Log

### Day 1 Testing
```
- [ ] GameManager initializes
- [ ] No console errors
- [ ] SaveSystem works
```

### Day 2 Testing
```
- [ ] MainMenu scene loads
- [ ] Level_1 scene loads
- [ ] GameOver scene loads
- [ ] No scene loading errors
```

### Day 3 Testing
```
- [ ] Player spawns in Level_1
- [ ] WASD moves player forward/backward/left/right
- [ ] Space jumps
- [ ] Camera follows player
- [ ] Player doesn't fall through ground
```

### Day 4 Testing
```
- [ ] Coins visible in Level_1
- [ ] Player can walk through coins
- [ ] Coins disappear when walked into
- [ ] HUD coin counter increments
- [ ] Multiple coins can be collected
```

### Day 5 Testing
```
- [ ] Pause button visible
- [ ] Pause menu appears on click
- [ ] Game time stops when paused
- [ ] Resume button works
- [ ] Save works on pause
- [ ] Load works on scene start
- [ ] Player position restored
- [ ] Coins collected restored
```

---

## Notes

- Use placeholder/primitive models (Cube, Sphere, Capsule) for Week 1
- Focus on GAMEPLAY, not graphics
- Test frequently - commit daily
- Use Debug.Log extensively for troubleshooting
- Profile performance on mobile emulator
- Document any blockers immediately

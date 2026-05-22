# 🎮 Basic - Create Your First Scene

## Scene: MainMenu (15 min)

### Step 1: Create Canvas (3 min)
```
Right-click in Hierarchy
→ UI → Canvas
→ Name it "MainCanvas"
```

### Step 2: Add Start Button (5 min)
```
Right-click on MainCanvas
→ UI → Button - TextMeshPro
→ Rename to "StartButton"
→ Change text to "START GAME"
→ Change button size: Width 200, Height 80
```

### Step 3: Add GameManager (3 min)
```
Right-click in Hierarchy (outside Canvas)
→ Create Empty → Name "GameManager"
→ Drag GameManager.cs script onto it
```

### Step 4: Setup Button Click (4 min)
```
Select StartButton
→ Inspector → Button component
→ On Click → Add
→ Drag GameManager into object field
→ Function → SceneLoader → LoadScene("Level_1_Jungle")
```

### Step 5: Save & Test (3 min)
```
File → Save Scene as MainMenu.unity
Click Play ▶️
```

---

## ✅ What You Have
- ✅ Main menu scene
- ✅ Start button working
- ✅ GameManager active
- ✅ Scene loading works

---

## 🎮 Scene: Level_1_Jungle (20 min)

### Step 1: Setup Ground (3 min)
```
Right-click → 3D Object → Plane
→ Name: "Ground"
→ Scale: (10, 1, 10)
→ Position: (0, 0, 0)
```

### Step 2: Add Player (5 min)
```
Right-click → 3D Object → Capsule
→ Name: "Player"
→ Position: (0, 1, 0)
→ Drag PlayerController.cs onto it
```

### Step 3: Add Camera (2 min)
```
Right-click → 3D Object → Cube (small)
→ Name: "Player_Camera"
→ Parent to: Player
→ Position: (0, 0.6, 0.5)
→ Drag PlayerCamera.cs onto Player
```

### Step 4: Spawn 10 Coins (5 min)
```
In script folder, open LevelManager.cs
Edit SpawnCoins() to spawn 10 coins
Run script in Editor Play mode
```

### Step 5: Add HUD (5 min)
```
Right-click → UI → Canvas
→ Name: "HUD"
→ Add Text → Name: "CoinsText"
→ Drag HUD.cs to GameManager
```

### Step 6: Save & Test (3 min)
```
File → Save Scene as Level_1_Jungle.unity
Click Play ▶️
→ Move with WASD
→ Collect coins
```

---

## ✅ What You Have Now
- ✅ Player can move (WASD)
- ✅ Camera follows player
- ✅ 10 coins spawned
- ✅ Coins collect on contact
- ✅ HUD shows coin count
- ✅ Scene transitions work

---

## 🎯 Next
Follow BASIC_PLAYER_SETUP.md for combat + enemies

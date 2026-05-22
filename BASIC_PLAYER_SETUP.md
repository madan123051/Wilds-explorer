# 🎮 Basic - Player Setup Complete

## Player Features to Setup

### 1️⃣ Movement (Already Done)
```
✅ WASD movement
✅ Jump with Space
✅ Gravity working
✅ Camera follow
```

### 2️⃣ Health System (15 min)

**Step 1:** Create PlayerStats.cs (already in scripts)

**Step 2:** Setup in Scene
```
Select Player GameObject
→ Inspector → Add Component
→ Search "PlayerStats"
→ Drag PlayerStats.cs
```

**Step 3:** Configure Health
```
In Inspector:
Max Health: 100
Stamina: 50
XP: 0
Coins: 0
```

### 3️⃣ Damage/Health UI (10 min)

**Step 1:** Add Health Bar
```
In HUD Canvas
→ Right-click → UI → Image
→ Name: "HealthBar"
→ Size: (200, 20)
→ Color: Red
```

**Step 2:** Link to PlayerStats
```
Open HUD.cs script
Add: public Image healthBar;
Set health bar reference in Inspector
```

### 4️⃣ Simple Combat (20 min)

**Step 1:** Add Enemy
```
Right-click → 3D Object → Capsule
→ Name: "Enemy_1"
→ Add Enemy.cs script
```

**Step 2:** Configure Enemy
```
Health: 30
Damage: 10
AttackRange: 2
WalkSpeed: 3
```

**Step 3:** Test
```
Play game
→ Walk near enemy
→ Enemy chases you
→ Take damage
→ Check health bar decreases
```

---

## ✅ Complete Player System
- ✅ Movement + Jump
- ✅ Health display
- ✅ Coin collection
- ✅ Damage from enemies
- ✅ Game over when health = 0

---

## 🎯 Timeline for Week 1

| Day | Task | Time | Status |
|-----|------|------|--------|
| 1 | Setup + MainMenu | 1h | ⬜ |
| 2 | Level_1 Scene | 1h | ⬜ |
| 3 | Player Movement | 1h | ⬜ |
| 4 | Coins + HUD | 1h | ⬜ |
| 5 | Enemies + Damage | 1h | ⬜ |

**Total: ~5 hours**

---

## 🚀 After Week 1
You'll have:
- ✅ Working game loop
- ✅ Player movement
- ✅ Coin collection
- ✅ Enemy AI
- ✅ Health system
- ✅ Scene transitions

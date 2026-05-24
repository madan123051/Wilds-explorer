# 🎮 Gameplay Mechanics - Wilds Explorer

## Overview

Wilds Explorer is an **Adventure + Endless Runner Hybrid** where players control a Wildlife Photographer exploring a Nepal-inspired world. The core loop is: **Explore → Complete Missions → Collect Rewards → Unlock Content → Continue**.

---

## 🕹️ Core Controls

### Mobile (Android)
| Action | Control |
|--------|---------|
| Move Forward | Auto-run |
| Turn Left/Right | Swipe Left/Right |
| Jump | Swipe Up |
| Slide/Duck | Swipe Down |
| Interact/Collect | Tap |
| Open Camera | Tap Camera Icon |
| Pause | Tap Pause Button |

### WebGL (Browser)
| Action | Key |
|--------|-----|
| Move | WASD / Arrow Keys |
| Jump | Space |
| Sprint | Shift |
| Interact | E |
| Camera | F |
| Pause | Escape |

---

## 🧭 Game Modes

### 1. Exploration Mode
- **Free roam** through large open areas
- Discover hidden paths, collectibles, and secrets
- No time limit — explore at your own pace
- Find mission triggers placed around the world

### 2. Mission Mode
- Triggered by entering mission zones
- Time-limited objectives
- Rewards on completion
- Can be replayed for better scores

### 3. Photo Mode
- Enter with Camera button
- Capture wildlife and scenery
- Better photos = more XP
- Upload to Drishya for ecosystem rewards

---

## 🗺️ World Map

### Available Biomes (Phase 1 → Phase 3)

| Biome | Phase | Size | Key Features |
|-------|-------|------|-------------|
| **Jungle (Chitwan)** | Phase 1 | 500m × 500m | Dense trees, river, temples |
| **Mountain Trail** | Phase 3 | 400m × 600m | Cliffs, snow, eagles |
| **Ancient Ruins** | Phase 3 | 300m × 300m | Artifacts, puzzles |
| **River Delta** | Phase 3 | 600m × 200m | Boats, crocodiles |
| **Village** | Phase 2 | 200m × 200m | NPCs, market |

---

## 🎯 Mission System

### Mission Types

#### 1. Collection Missions
- Collect a specific number of coins or items
- Example: "Collect 10 Golden Coins"
- Reward: Coins + XP

#### 2. Photography Missions
- Photograph specific animals or scenes
- Example: "Photograph a Tiger in the Wild"
- Reward: XP + Creator Points + Drishya Upload

#### 3. Exploration Missions
- Reach specific locations on the map
- Example: "Find the Ancient Temple"
- Reward: Map unlock + Coins

#### 4. Timed Missions
- Complete objective before timer runs out
- Example: "Reach the river in 60 seconds"
- Reward: Bonus coins + Speed badge

#### 5. Daily Missions
- Reset every 24 hours
- 3 missions per day
- Streak bonus for consecutive days

### Mission Triggers
```
MissionZone → OnTriggerEnter → ShowMissionPopup → Accept/Skip
     ↓ (Accept)
MissionActive → TrackProgress → OnComplete → ShowRewardPopup → Collect
```

---

## 💰 Reward System

### Currency Types

| Currency | Earned By | Used For |
|----------|-----------|---------|
| **Coins** 🪙 | Collecting, missions | Shop, upgrades |
| **XP** ⭐ | All activities | Level up, unlock content |
| **Creator Points** 📸 | Photography, Drishya uploads | Ecosystem rewards |
| **Gems** 💎 | Special events, purchases | Premium items |

### Level Progression

| Level | XP Required | Unlock |
|-------|-------------|--------|
| 1 | 0 | Starting gear |
| 5 | 1,000 | Mountain biome access |
| 10 | 5,000 | New character skin |
| 15 | 15,000 | Eagle companion |
| 20 | 30,000 | Elite photographer badge |
| 25 | 60,000 | Creator mode unlock |

### Daily Rewards
- **Day 1**: 50 Coins
- **Day 3**: 100 Coins + 1 Gem
- **Day 7**: 500 Coins + 5 Gems + Rare item
- **Day 30**: Legendary badge

---

## 🐾 Wildlife System

### Animals in the Game

| Animal | Biome | Photo Reward | Behavior |
|--------|-------|-------------|---------|
| 🐯 Tiger | Jungle | 200 XP | Runs away from player |
| 🦌 Deer | Jungle | 50 XP | Peaceful, easy to photograph |
| 🦅 Eagle | Mountain | 150 XP | Flies overhead |
| 🐊 Crocodile | River | 100 XP | Aggressive near water |
| 🐒 Monkey | Jungle | 75 XP | Playful, steals items |
| 🦏 Rhino | Grassland | 250 XP | Charges if too close |

### Photography Scoring
```
Distance Score (0-40 pts):   Closer = Better
Angle Score (0-30 pts):      Front > Side > Back
Lighting Score (0-20 pts):   Golden hour > Day > Night
Rarity Score (0-10 pts):     Rare animals score higher

Total: 0-100 pts → Converted to XP
```

---

## 🏃 Character System

### Player Character: The Wildlife Photographer

**Appearance:**
- Camera backpack always equipped
- Changes clothes based on biome/season
- Can unlock different skin variants

**Stats:**
| Stat | Base | Max | Effect |
|------|------|-----|--------|
| Speed | 5 | 10 | Movement speed |
| Stamina | 3 | 10 | Sprint duration |
| Camera Quality | 1 | 5 | Photo XP multiplier |
| Stealth | 2 | 5 | Animal behavior near player |

**Upgrades:** Purchase with Coins in the Shop

---

## 🎒 Inventory System

### Item Categories

1. **Consumables** - Single use items (energy drink, film roll)
2. **Equipment** - Gear upgrades (better camera, backpack)
3. **Collectibles** - Badges and rare finds
4. **Photos** - Captured wildlife photos (uploadable)
5. **Keys** - Unlock special areas or missions

### Storage
- **Phase 1**: Local (PlayerPrefs) — 50 item slots
- **Phase 2**: Cloud (Firebase) — Unlimited

---

## 💾 Save System

### Saved Data (PlayerPrefs - Phase 1)
```json
{
  "player": {
    "name": "Explorer",
    "level": 5,
    "xp": 1250,
    "coins": 3400,
    "gems": 2
  },
  "progress": {
    "missionsCompleted": ["m001", "m002", "m005"],
    "areasUnlocked": ["jungle_1"],
    "currentStreak": 3,
    "lastLoginDate": "2026-05-21"
  },
  "settings": {
    "volume": 0.8,
    "graphics": "medium",
    "language": "en"
  }
}
```

### Auto-Save Triggers
- After completing a mission
- After collecting 10+ coins
- When entering a new area
- When player pauses

---

## 🎵 Audio Design

### Music Zones
- **Main Menu**: Peaceful Nepali-inspired ambient
- **Jungle**: Dense, atmospheric nature sounds
- **Mission Active**: Upbeat exploration music
- **Mission Complete**: Victory jingle
- **Night**: Cricket sounds, distant wildlife

### SFX
- Footstep variations per surface (grass, stone, water)
- Camera shutter sound on photo
- Coin pickup chime
- Mission popup notification
- Level up fanfare

---

## 📱 Performance Targets

| Platform | Target FPS | Polygon Budget | Draw Calls |
|----------|-----------|---------------|-----------|
| Android (Low) | 30 FPS | 50K tris | < 50 |
| Android (High) | 60 FPS | 150K tris | < 100 |
| WebGL | 60 FPS | 200K tris | < 150 |

### Optimization Techniques
- LOD (Level of Detail) on all 3D models
- Object pooling for coins and particles
- Occlusion culling in dense areas
- Compressed textures (ETC2 for Android)
- Asynchronous scene loading

---

## 🔄 Game Loop Diagram

```
START
  ↓
Main Menu → Load Game / New Game
  ↓
World Map Selection
  ↓
Enter Biome (Jungle Level 1)
  ↓
Free Exploration ←──────────────────┐
  ↓                                  │
Encounter Mission Zone               │
  ↓                                  │
Accept Mission                       │
  ↓                                  │
Complete Objectives                  │
  ↓                                  │
Mission Complete! Collect Rewards    │
  ↓                                  │
XP/Coins Added to Profile           │
  ↓                                  │
Level Up? → Unlock new content      │
  ↓                                  │
Continue Exploring ─────────────────┘
  ↓
Upload Photos to Drishya (optional)
  ↓
Ecosystem Rewards
```

---

**Last Updated**: May 2026  
**Version**: 1.0  
**Status**: Phase 1 MVP

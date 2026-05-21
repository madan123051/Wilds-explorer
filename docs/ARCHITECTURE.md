# 🏗️ Game Architecture

## System Design Overview

```
┌─────────────────────────────────────────────────────────────┐
│              Game of Wilds Explorer - Architecture          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────┐
│   Unity Game (C#)   │
│   - Gameplay Loop   │
│   - UI & Graphics   │
│   - Local Storage   │
└──────────┬──────────┘
           │
    ┌──────┴──────┐
    │             │
┌───▼────┐  ┌────▼────┐
│ Offline │  │  Online  │
│ Storage │  │ Firebase │
│ (PrefsF)│  │ (Sync)   │
└─────────┘  └────┬─────┘
             │
    ┌────────┴─────────┐
    │                  │
┌───▼──────┐  ┌───────▼───┐
│ Drishya  │  │ Wildsaura  │
│ Platform │  │ Ecosystem  │
└──────────┘  └────────────┘
```

---

## Core Systems

### 1. Game Manager (Singleton)
**Purpose**: Central game state controller

```
GameManager
├── PlayerManager
│   ├── Coins
│   ├── XP
│   ├── Level
│   ├── Inventory
│   └── Profile
├── MissionManager
│   ├── Current Missions
│   ├── Completed Missions
│   └── Rewards
├── SaveManager
│   ├── Save to Device
│   └── Load from Device
└── EventManager
    └── Mission Events
```

### 2. Player System
**Purpose**: Track player progress & rewards

```
Player Data Structure:
{
  userId: "unique_id",
  profile: {
    name: "Explorer Name",
    level: 1,
    avatar: "character_skin"
  },
  currency: {
    coins: 0,
    xp: 0
  },
  inventory: {
    items: [],
    upgrades: []
  },
  progress: {
    currentMission: 1,
    completedMissions: [],
    unlockedAreas: []
  }
}
```

### 3. Mission System
**Purpose**: Define & track missions

```
Mission Data:
{
  missionId: "mission_001",
  title: "Collect Wildlife Photos",
  description: "Find and photograph 5 animals",
  type: "collection", // collection, exploration, social
  rewards: {
    coins: 100,
    xp: 50,
    unlockables: ["new_area"]
  },
  requirements: {
    itemsToCollect: 5,
    location: "jungle_1"
  },
  ecosystemTask: "upload_to_drishya"
}
```

### 4. Reward System
**Purpose**: Handle reward logic

```
Rewards Can Be:
├── Currency
│   ├── Coins
│   └── XP
├── Unlockables
│   ├── New Areas
│   ├── Camera Skins
│   └── Character Upgrades
└── Badges
    └── Achievements
```

### 5. Ecosystem Integration
**Purpose**: Connect with Drishya & Market

```
Integration Points:
├── Drishya API
│   ├── Photo Uploads
│   ├── Social Shares
│   └── Daily Login Tracking
├── Market API
│   ├── Photo Sales
│   └── Premium Items
└── Community API
    ├── Event Participation
    └── Challenge Tracking
```

### 6. Offline Storage (Phase 1)
**Purpose**: Local save without internet

```
PlayerPrefs Data Structure:
├── player_coins
├── player_xp
├── player_level
├── completed_missions (JSON)
├── unlocked_areas (JSON)
└── last_sync_time
```

### 7. Firebase Sync (Phase 2)
**Purpose**: Cloud persistence & online features

```
Firestore Structure:
/users/{userId}
├── profile
├── progress
├── rewards
├── achievements
└── ecosystem_activity

Real-time Sync:
├── Auto-sync on internet
├── Conflict resolution
└── Offline queue
```

---

## Folder Structure (Unity)

```
Assets/
├── Scripts/
│   ├── Core/
│   │   ├── GameManager.cs
│   │   ├── PlayerManager.cs
│   │   └── SaveManager.cs
│   │
│   ├── Gameplay/
│   │   ├── PlayerController.cs
│   │   ├── CameraController.cs
│   │   ├── CharacterAnimator.cs
│   │   └── Coin.cs
│   │
│   ├── Missions/
│   │   ├── MissionManager.cs
│   │   ├── Mission.cs
│   │   └── MissionUI.cs
│   │
│   ├── Rewards/
│   │   ├── RewardManager.cs
│   │   ├── Reward.cs
│   │   └── RewardUI.cs
│   │
│   ├── Ecosystem/
│   │   ├── DrishyaAPI.cs
│   │   ├── MarketplaceAPI.cs
│   │   └── CommunityAPI.cs
│   │
│   ├── UI/
│   │   ├── HUD.cs
│   │   ├── MissionPopup.cs
│   │   ├── RewardPopup.cs
│   │   └── MainMenu.cs
│   │
│   ├── Utilities/
│   │   ├── ObjectPool.cs
│   │   ├── AudioManager.cs
│   │   └── EventSystem.cs
│   │
│   └── Data/
│       ├── PlayerData.cs
│       ├── MissionData.cs
│       └── RewardData.cs
│
├── Scenes/
│   ├── MainMenu.unity
│   ├── Jungle_Level_1.unity
│   ├── Jungle_Level_2.unity
│   └── RewardScreen.unity
│
├── Prefabs/
│   ├── Player/
│   │   └── Player.prefab
│   ├── UI/
│   │   ├── MissionPopup.prefab
│   │   └── RewardPopup.prefab
│   └── World/
│       ├── Coin.prefab
│       ├── Animal.prefab
│       └── Tree.prefab
│
├── Models/
│   ├── Characters/
│   │   └── Player_Photographer.fbx
│   └── Environment/
│       ├── Trees/
│       ├── Rocks/
│       └── Ruins/
│
├── Materials/
│   ├── Environment/
│   └── Character/
│
├── UI/
│   ├── Fonts/
│   ├── Icons/
│   └── Sprites/
│
└── Resources/
    ├── Data/
    │   ├── missions.json
    │   ├── rewards.json
    │   └── areas.json
    └── Config/
        └── game_config.json
```

---

## Data Flow Diagram

### Save/Load Flow
```
PlayerManager
    ↓
GameManager.SaveGame()
    ↓
SaveManager
    ↓
PlayerPrefs (Local Device)
    ↓
Application.persistentDataPath/
```

### Mission Completion Flow
```
Player Completes Action
    ↓
MissionManager.CheckMission()
    ↓
Mission Conditions Met?
    ├─ YES → RewardManager.AwardReward()
    │          ↓
    │       Update PlayerManager
    │          ↓
    │       Show RewardUI Popup
    │          ↓
    │       Save Progress
    │
    └─ NO → Continue Gameplay
```

### Ecosystem Task Flow (Phase 2)
```
Player Completes Mission
    ↓
Check if Ecosystem Task exists
    ├─ YES → Open Ecosystem Link
    │          ↓
    │       User completes task (upload photo, etc)
    │          ↓
    │       API Verification
    │          ↓
    │       Reward confirmed in game
    │
    └─ NO → Standard Reward
```

---

## Game States

```
┌──────────────┐
│  MainMenu    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   Playing    │─────→ PausedMenu
└──┬───────┬──┘
   │       │
   ↓       ↓
Mission  Exploring
   ↓       ↓
   └───┬───┘
       │
       ↓
┌──────────────┐
│   Reward     │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│  Playing     │
└──────────────┘
```

---

## Performance Optimization

### Graphics
- Low-poly 3D models (max 5k triangles per asset)
- LOD groups for distant objects
- Culling for off-screen objects
- Mobile target resolution

### Gameplay
- Object pooling for coins & items
- Event system (no Update calls for everything)
- Efficient pathfinding
- Minimal draw calls

### Memory
- Load scenes additively
- Unload unused assets
- Compress audio & textures
- Efficient JSON parsing

---

## API Integration Points

### Drishya API
```
POST /api/photos/upload
POST /api/posts/share
GET /api/user/daily-reward
```

### Marketplace API
```
POST /api/photos/sell
GET /api/items/premium
POST /api/profile/unlock-badge
```

### Community API
```
GET /api/events/active
POST /api/events/join
GET /api/challenges/leaderboard
```

---

## Security Considerations

### Data Protection
- Encrypt local player data
- HTTPS for API calls
- Firebase security rules
- Token-based authentication

### Cheat Prevention
- Server-side reward verification
- Rate limiting on API calls
- Validate mission completion server-side
- Monitor suspicious activity

---

## Testing Strategy

### Unit Tests
- PlayerManager logic
- MissionManager calculations
- RewardManager distribution

### Integration Tests
- Save/Load flow
- Mission → Reward pipeline
- API communication

### Performance Tests
- Frame rate on target devices
- Memory profiling
- Load times

---

## Deployment Pipeline

```
Dev → Testing → Beta (Firebase) → Production
```

**Version Control**: Git  
**Build System**: Unity Cloud Build  
**Distribution**: Google Play Store, App Center, Web

---

## Dependencies

```
Unity 2022.3 LTS
Firebase SDK (Unity)
Newtonsoft.Json (JSON parsing)
DOTween (Animations)
```

---

**Last Updated**: May 2026  
**Status**: Architecture Design Complete

# 📂 Project Structure Guide

## Directory Tree

```
king-of-jungle/
│
├── 📄 README.md                    # Landing page & overview
├── 📄 PROJECT_STRUCTURE.md         # This file
├── 📄 .gitignore                   # Git ignore rules
│
├── 📁 docs/                        # Documentation
│   ├── CONCEPT.md                  # Full game concept
│   ├── ARCHITECTURE.md             # System design & structure
│   ├── GAMEPLAY.md                 # Detailed gameplay mechanics
│   ├── API.md                      # Ecosystem API integration
│   ├── SETUP.md                    # Development setup guide
│   └── CONTRIBUTING.md             # Contributing guidelines
│
├── 📁 unity-game/                  # Main Unity project
│   ├── Assets/
│   │   ├── Scripts/
│   │   │   ├── Core/
│   │   │   │   ├── GameManager.cs
│   │   │   │   ├── PlayerManager.cs
│   │   │   │   ├── SaveManager.cs
│   │   │   │   └── EventManager.cs
│   │   │   │
│   │   │   ├── Gameplay/
│   │   │   │   ├── PlayerController.cs
│   │   │   │   ├── CameraController.cs
│   │   │   │   ├── CharacterAnimator.cs
│   │   │   │   └── MovementSystem.cs
│   │   │   │
│   │   │   ├── Missions/
│   │   │   │   ├── MissionManager.cs
│   │   │   │   ├── Mission.cs
│   │   │   │   ├── MissionUI.cs
│   │   │   │   └── MissionObjective.cs
│   │   │   │
│   │   │   ├── Rewards/
│   │   │   │   ├── RewardManager.cs
│   │   │   │   ├── Reward.cs
│   │   │   │   ├── RewardUI.cs
│   │   │   │   └── CoinCollector.cs
│   │   │   │
│   │   │   ├── Ecosystem/
│   │   │   │   ├── EcosystemManager.cs
│   │   │   │   ├── DrishyaAPI.cs
│   │   │   │   ├── MarketplaceAPI.cs
│   │   │   │   └── CommunityAPI.cs
│   │   │   │
│   │   │   ├── UI/
│   │   │   │   ├── HUD.cs
│   │   │   │   ├── MainMenu.cs
│   │   │   │   ├── PauseMenu.cs
│   │   │   │   ├── MissionPopup.cs
│   │   │   │   ├── RewardPopup.cs
│   │   │   │   ├── ProfileScreen.cs
│   │   │   │   └── UIManager.cs
│   │   │   │
│   │   │   ├── Utilities/
│   │   │   │   ├── ObjectPool.cs
│   │   │   │   ├── AudioManager.cs
│   │   │   │   ├── Constants.cs
│   │   │   │   ├── Helpers.cs
│   │   │   │   └── Logger.cs
│   │   │   │
│   │   │   └── Data/
│   │   │       ├── PlayerData.cs
│   │   │       ├── MissionData.cs
│   │   │       ├── RewardData.cs
│   │   │       ├── GameConfig.cs
│   │   │       └── Serialization.cs
│   │   │
│   │   ├── Scenes/
│   │   │   ├── MainMenu.unity
│   │   │   ├── Jungle_Level_1.unity
│   │   │   ├── Jungle_Level_2.unity
│   │   │   ├── RewardScreen.unity
│   │   │   └── Settings.unity
│   │   │
│   │   ├── Prefabs/
│   │   │   ├── Player/
│   │   │   │   ├── Player.prefab
│   │   │   │   ├── PlayerCamera.prefab
│   │   │   │   └── PlayerAnimations.prefab
│   │   │   │
│   │   │   ├── UI/
│   │   │   │   ├── MissionPopup.prefab
│   │   │   │   ├── RewardPopup.prefab
│   │   │   │   ├── Button.prefab
│   │   │   │   └── Panel.prefab
│   │   │   │
│   │   │   ├── World/
│   │   │   │   ├── Coin.prefab
│   │   │   │   ├── Animal.prefab
│   │   │   │   ├── Plant.prefab
│   │   │   │   ├── Obstacle.prefab
│   │   │   │   └── Interactable.prefab
│   │   │   │
│   │   │   ├── Effects/
│   │   │   │   ├── CoinPickup.prefab
│   │   │   │   ├── RewardParticles.prefab
│   │   │   │   └── Footsteps.prefab
│   │   │   │
│   │   │   └── Environment/
│   │   │       ├── Tree.prefab
│   │   │       ├── Rock.prefab
│   │   │       └── Bridge.prefab
│   │   │
│   │   ├── Models/
│   │   │   ├── Characters/
│   │   │   │   ├── Player_Photographer.fbx
│   │   │   │   ├── Player_Idle.anim
│   │   │   │   ├── Player_Run.anim
│   │   │   │   ├── Player_Jump.anim
│   │   │   │   └── Skins/
│   │   │   │
│   │   │   ├── Environment/
│   │   │   │   ├── Jungle/
│   │   │   │   │   ├── Trees/
│   │   │   │   │   ├── Plants/
│   │   │   │   │   └── Props/
│   │   │   │   │
│   │   │   │   ├── Mountain/
│   │   │   │   │   ├── Rocks/
│   │   │   │   │   └── Cliffs/
│   │   │   │   │
│   │   │   │   ├── Ruins/
│   │   │   │   │   ├── Temples/
│   │   │   │   │   └── Artifacts/
│   │   │   │   │
│   │   │   │   └── Props/
│   │   │   │
│   │   │   └── Animals/
│   │   │       ├── Tiger.fbx
│   │   │       ├── Deer.fbx
│   │   │       ├── Eagle.fbx
│   │   │       └── Animations/
│   │   │
│   │   ├── Materials/
│   │   │   ├── Environment/
│   │   │   │   ├── Jungle_Foliage.mat
│   │   │   │   ├── Terrain.mat
│   │   │   │   ├── Stone.mat
│   │   │   │   └── Water.mat
│   │   │   │
│   │   │   ├── Character/
│   │   │   │   └── Player.mat
│   │   │   │
│   │   │   └── UI/
│   │   │       └── DefaultUI.mat
│   │   │
│   │   ├── Textures/
│   │   │   ├── Character/
│   │   │   │   ├── player_base.png
│   │   │   │   └── player_normal.png
│   │   │   │
│   │   │   ├── Environment/
│   │   │   │   ├── jungle_diffuse.png
│   │   │   │   ├── terrain.png
│   │   │   │   └── water.png
│   │   │   │
│   │   │   └── UI/
│   │   │       ├── Icons/
│   │   │       ├── Buttons/
│   │   │       └── Backgrounds/
│   │   │
│   │   ├── Audio/
│   │   │   ├── Music/
│   │   │   │   ├── MainMenu.ogg
│   │   │   │   ├── Jungle_Ambient.ogg
│   │   │   │   └── CombatMusic.ogg
│   │   │   │
│   │   │   ├── SFX/
│   │   │   │   ├── CoinPickup.wav
│   │   │   │   ├── Footstep.wav
│   │   │   │   ├── Jump.wav
│   │   │   │   ├── MissionComplete.wav
│   │   │   │   └── Reward.wav
│   │   │   │
│   │   │   └── Voice/ (Optional)
│   │   │       └── Narrator/
│   │   │
│   │   ├── UI/
│   │   │   ├── Fonts/
│   │   │   │   └── OpenSans-Regular.ttf
│   │   │   │
│   │   │   ├── Sprites/
│   │   │   │   ├── Buttons/
│   │   │   │   ├── Icons/
│   │   │   │   ├── UI_Elements/
│   │   │   │   └── HUD/
│   │   │   │
│   │   │   └── Prefabs/ (refrenced above)
│   │   │
│   │   ├── Resources/
│   │   │   ├── Data/
│   │   │   │   ├── missions.json
│   │   │   │   ├── rewards.json
│   │   │   │   ├── areas.json
│   │   │   │   ├── animals.json
│   │   │   │   └── levels.json
│   │   │   │
│   │   │   └── Config/
│   │   │       ├── game_config.json
│   │   │       ├── balance_config.json
│   │   │       └── ecosystem_config.json
│   │   │
│   │   ├── Scenes/
│   │   │   └── (as listed above)
│   │   │
│   │   ├── Animations/
│   │   │   ├── Player/
│   │   │   ├── Animals/
│   │   │   └── UI/
│   │   │
│   │   └── Editor/
│   │       ├── CustomEditors/
│   │       └── EditorTools/
│   │
│   ├── ProjectSettings/
│   ├── Packages/
│   ├── .gitignore
│   └── README.md
│
├── 📁 backend/                     # Backend setup (Phase 2)
│   ├── firebase/
│   │   ├── firestore.rules
│   │   ├── database.rules
│   │   ├── storage.rules
│   │   └── .firebaserc
│   │
│   ├── functions/
│   │   ├── package.json
│   │   ├── index.js
│   │   ├── missions.js
│   │   ├── rewards.js
│   │   ├── ecosystem.js
│   │   └── auth.js
│   │
│   └── README.md
│
├── 📁 web/                         # Web assets & landing page
│   ├── index.html
│   ├── styles.css
│   ├── assets/
│   │   ├── logo.png
│   │   ├── screenshots/
│   │   └── game-art/
│   │
│   └── README.md
│
└── 📁 design/                      # Design assets (Optional)
    ├── concept-art/
    ├── ui-mockups/
    ├── game-design-document.pdf
    └── asset-list.md
```

---

## File Organization Philosophy

### 1. Scripts Organization (Assets/Scripts/)
- **Core**: Game managers & singletons
- **Gameplay**: Player & world interaction
- **Missions**: Mission system & logic
- **Rewards**: Reward handling & distribution
- **Ecosystem**: Integration with external services
- **UI**: User interface controllers
- **Utilities**: Helper functions & tools
- **Data**: Data structures & serialization

### 2. Assets Organization (Assets/*)
- **Prefabs**: By category (Player, UI, World, Effects, Environment)
- **Models**: By biome/category
- **Materials**: By usage (Environment, Character, UI)
- **Textures**: By type (Character, Environment, UI)
- **Audio**: By category (Music, SFX, Voice)
- **Resources**: JSON data for missions, rewards, config

### 3. Documentation (docs/)
- **CONCEPT.md**: Complete game vision
- **ARCHITECTURE.md**: Technical structure
- **GAMEPLAY.md**: Detailed mechanics
- **API.md**: Integration details
- **SETUP.md**: Developer setup
- **CONTRIBUTING.md**: Contribution guidelines

### 4. Backend (backend/)
- **firebase/**: Firebase configuration & rules
- **functions/**: Cloud functions (Phase 2)

### 5. Web (web/)
- **index.html**: Landing page
- **assets/**: Images & screenshots
- **styles.css**: Styling

---

## File Naming Conventions

### C# Scripts
```
PascalCase.cs
Example: PlayerController.cs, MissionManager.cs
```

### Data Files (JSON)
```
snake_case.json
Example: missions.json, player_config.json
```

### Assets
```
snake_case_purpose
Example: coin_collect_sfx.wav, jungle_tree_01.fbx
```

### Scenes
```
PascalCase_Context.unity
Example: MainMenu.unity, Jungle_Level_1.unity
```

### Prefabs
```
PascalCase.prefab (same as GameObject name)
Example: Player.prefab, MissionPopup.prefab
```

---

## Key Directories Explanation

### /unity-game/Assets/Scripts/
**Contains all C# code** organized by system. This is the core logic.

### /unity-game/Assets/Resources/
**Contains JSON configuration files** that can be loaded at runtime without referencing them in scenes.

### /unity-game/Assets/Prefabs/
**Contains reusable GameObject templates** for quick instantiation.

### /docs/
**All documentation** for developers and designers. Start here to understand the project.

### /backend/
**Firebase setup & cloud functions** for Phase 2 ecosystem integration.

### /web/
**Public landing page** explaining the game and linking to downloads.

---

## Development Workflow

### Phase 1: MVP Development
1. Create **Jungle_Level_1.unity** scene
2. Build scripts in **Scripts/Core/** and **Scripts/Gameplay/**
3. Create prefabs in **Prefabs/World/**
4. Test offline gameplay

### Phase 2: Ecosystem Integration
1. Add scripts in **Scripts/Ecosystem/**
2. Deploy **backend/functions/**
3. Integrate Firebase SDK
4. Test API connections

### Phase 3: Expansion
1. Add new scenes in **Scenes/**
2. Add more models in **Models/**
3. Create new UI in **Prefabs/UI/**
4. Implement seasonal events

---

## Git Workflow

### Branching Strategy
```
main (stable releases)
├── develop (integration branch)
│   ├── feature/gameplay
│   ├── feature/ecosystem
│   ├── feature/ui
│   └── bugfix/mission-system
```

### Commit Naming
```
[Type] Description

Types:
- [Feature] New gameplay/system
- [Fix] Bug fix
- [Refactor] Code improvement
- [Docs] Documentation
- [Asset] New art/audio asset
```

---

**Last Updated**: May 2026  
**Version**: 1.0 - Initial Structure

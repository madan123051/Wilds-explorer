# Game of Wilds Explorer - Gameplay Systems Documentation

## Core Gameplay Loop

```
1. Player enters level
2. Collects coins (+coins, +XP)
3. Completes missions (bonus rewards)
4. Defeats enemies (dodge & fight)
5. Avoids obstacles (take damage)
6. Reaches checkpoint (save progress)
7. Completes level (XP, coins)
8. Levels up → unlock new areas
```

## System Interactions

### PlayerStats → GameManager
- Player takes damage → triggers Game Over if health = 0
- Player levels up → GameManager notifies MissionSystem

### CoinCollector → PlayerStats + RewardSystem
- Coin touched → AddCoins() + ShowReward()

### MissionSystem → RewardSystem + PlayerStats
- Mission complete → ShowReward() + AddCoins()

### Enemy → PlayerStats
- Enemy attack → TakeDamage()

### Obstacle → PlayerStats  
- Obstacle touch → TakeDamage()

### HUD → All Systems
- Listens to all events and updates UI

## Key Features

### Coins System
- Scattered in levels
- Enemies drop coins on death
- Rewards from missions
- Tracked in PlayerStats
- Persisted via SaveSystem

### Mission System
- 3 missions per level
- Types: Collect (coins), Defeat (enemies), Reach (location)
- Completion triggers rewards
- Tracks progress

### Reward System
- World-space popups showing rewards
- Auto-destroy after duration
- Triggers when collecting coins or completing missions

### Enemy AI
- **Patrol**: Wander around
- **Chase**: Follow player if nearby
- **Attack**: Deal damage when in range
- **Death**: Drop coins + particles

### Obstacle System
- Damage on contact
- Cooldown between hits
- Particle effects on impact

### Checkpoint System
- Activate on touch
- Save checkpoint ID in PlayerPrefs
- Used for continue/retry logic

## Extensibility

### Adding New Mission Types
1. Create new class inheriting from Mission base
2. Override CheckCompletion() method
3. Register in MissionSystem.CreateMissions()

### Adding New Rewards
1. Call RewardSystem.ShowReward() or MissionCompleted()
2. Customize reward text and animations

### Adding New Enemies
1. Create new class inheriting from Enemy
2. Override Update() for custom AI
3. Adjust health, damage, speed in inspector

---

Each system is loosely coupled via events/static instances.
Feel free to modify for your game design!

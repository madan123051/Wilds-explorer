# Phase 1 - Week 1: Core Setup

## Overview
**Duration**: Days 1-5  
**Goals**: Scene setup, player movement, camera system working  
**Output**: Playable character in MainMenu + Level 1  

---

## Daily Breakdown

### Day 1: Project Setup
- [ ] Create new Unity 2022.3 LTS project
- [ ] Import all scripts from GitHub
- [ ] Create folder structure
- [ ] Set up Build Settings (scenes order)
- [ ] Configure Player Settings (mobile)
- [ ] Test GameManager singleton

**Deliverable**: Empty project with scripts imported, no errors

---

### Day 2: Scene Creation & Camera
- [ ] Create MainMenu scene
  - Add Main Camera
  - Add Canvas (UI)
  - Add EventSystem
  - Add AudioListener
- [ ] Create Level_1_Jungle scene
  - Add ground plane
  - Add PlayerCamera prefab
  - Add lighting
  - Add sky
- [ ] Test camera switching between scenes

**Deliverable**: 2 scenes with proper cameras

---

### Day 3: Player Setup
- [ ] Create Player prefab
  - Add Capsule (body)
  - Add Rigidbody (physics)
  - Add Collider
  - Add PlayerController script
  - Add PlayerStats script
- [ ] Implement WASD movement
- [ ] Test movement in Level_1
- [ ] Add gravity + jump

**Deliverable**: Moving player in Level 1

---

### Day 4: Coin System
- [ ] Create Coin prefab
  - Add sphere mesh
  - Add material (yellow)
  - Add Collider (trigger)
  - Add Coin script
- [ ] Spawn 10 coins in Level 1
- [ ] Implement coin collection
- [ ] Update HUD coin counter
- [ ] Test pickup system

**Deliverable**: Collectible coins with UI update

---

### Day 5: HUD & Save
- [ ] Create HUD Canvas in Level 1
  - Coin counter
  - Health bar
  - XP bar
  - Pause button
- [ ] Implement pause menu (overlay canvas)
- [ ] Test SaveSystem with PlayerPrefs
- [ ] Save player position + coins
- [ ] Test load on restart

**Deliverable**: Complete HUD + working save system

---

## Testing Checklist

- [ ] Player spawns in Level 1
- [ ] WASD movement works
- [ ] Jump works
- [ ] Coins can be collected
- [ ] HUD updates correctly
- [ ] Game can be paused
- [ ] Data saves on pause
- [ ] Data loads on restart
- [ ] Scene transitions work
- [ ] No console errors

---

## Assets Needed

### 3D Models
- Player model (can use capsule for now)
- Coin mesh (can use sphere)
- Ground plane texture
- Sky

### Materials
- Player material
- Coin material (shiny yellow)
- Ground material
- Sky material

### Audio (Optional for Week 1)
- UI click sound
- Coin pickup sound
- Background music

---

## Week 1 Success Criteria

✅ Character can move with WASD  
✅ Coins can be collected  
✅ HUD displays stats  
✅ Game can be paused  
✅ Data persists after restart  
✅ MainMenu → Level 1 transition works  
✅ No critical bugs  
✅ Runs at 60 FPS on mobile target  

---

## Notes

- Use placeholder models (unity primitives) for Week 1
- Focus on GAMEPLAY first, not graphics
- Test frequently on mobile device or emulator
- Commit to GitHub daily
- Document any blockers

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Rigidbody issues | Use Rigidbody best practices, test movement early |
| Prefab problems | Create prefabs incrementally, test immediately |
| Scene loading errors | Test scene transitions on Day 2 |
| Performance issues | Profile on mobile target, optimize early |
| Save system bugs | Test with multiple saves, log debug info |

---

## Resources

- Scripts: `Unity/Assets/Scripts/`
- Configs: `Unity/Assets/Config/`
- Documentation: `docs/`
- Timeline: `docs/PHASE1_TIMELINE.md`

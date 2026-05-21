# Unity Project Setup - Phase 1

## Prerequisites
- Unity 2022.3 LTS or higher
- Visual Studio Code or Visual Studio
- Git

## Folder Structure Setup

```bash
# Create folder structure
mkdir -p Assets/Scripts/{Core,Player,Gameplay,UI}
mkdir -p Assets/Scenes
mkdir -p Assets/Prefabs
mkdir -p Assets/Resources
mkdir -p Assets/Materials
```

## Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/madan123051/Wilds-explorer.git
   cd Wilds-explorer/unity-game
   ```

2. **Open in Unity**
   - Unity Hub → Open Project
   - Select `unity-game` folder
   - Wait for import to complete

3. **Verify Scripts**
   - Assets/Scripts should contain all .cs files
   - No errors in Console

4. **Create Scenes**
   - MainMenu.unity (empty)
   - Level_1.unity (playable level)

5. **Setup GameObjects**
   - Create Player GameObject
   - Attach PlayerController script
   - Add CharacterController component

6. **Test**
   - Press Play
   - Check Console for initialization messages
   - Verify no errors

## Next Steps

- [ ] Create player prefab
- [ ] Create coin prefab
- [ ] Design Level 1
- [ ] Setup UI Canvas
- [ ] Test gameplay

---
✅ Ready for Phase 1 Development

# ✅ Basic - Testing Checklist

## Day-by-Day Testing

### Day 1: Setup Testing
- [ ] Unity project opens without errors
- [ ] All scripts imported successfully
- [ ] No red errors in Console
- [ ] GameManager visible in Hierarchy
- [ ] Can open MainMenu scene

### Day 2: MainMenu Testing
- [ ] Canvas visible
- [ ] StartButton clickable
- [ ] Button loads Level_1 scene
- [ ] No lag on menu
- [ ] UI text readable

### Day 3: Player Movement Testing
- [ ] Player visible in Level_1
- [ ] WASD movement works
- [ ] Space bar jumps
- [ ] Player falls with gravity
- [ ] Camera follows player
- [ ] 60 FPS on Play
- [ ] No jitter or lag

### Day 4: Coins Testing
- [ ] 10 coins visible in scene
- [ ] Coins have colliders
- [ ] Player collects coins
- [ ] HUD updates coin count
- [ ] Collected coins disappear
- [ ] No physics glitches

### Day 5: Enemy Testing
- [ ] Enemy appears in scene
- [ ] Enemy moves toward player
- [ ] Player takes damage on contact
- [ ] Health bar updates
- [ ] Game ends when health = 0
- [ ] Can reach GameOver scene

---

## Performance Testing

```
Window → Analysis → Profiler

✅ Check:
- CPU: < 30ms per frame
- GPU: < 20ms per frame
- Memory: < 200MB
- FPS: 60+ on target device
```

---

## Quick Fix Tips

**Player doesn't move?**
- Check PlayerController.cs added
- Check Input is WASD
- Check Rigidbody attached

**Coins don't collect?**
- Check Coin layer is set
- Check isTrigger = true on coin collider
- Check CoinCollector.cs on player

**Enemies don't spawn?**
- Check Enemy.cs script added
- Check spawn position in LevelManager
- Check Console for errors

**FPS low?**
- Reduce coin count to 5
- Reduce enemy count to 1
- Check quality settings (set to Low)
- Profile with Profiler window

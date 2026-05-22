# 📝 Basic - Git Workflow

## Daily Commit Workflow

### Each Day After Work

```bash
# 1. Check what changed
git status

# 2. Stage all changes
git add .

# 3. Commit with message
git commit -m "[Week 1 - Day X] Task completed - Brief description"

# 4. Push to GitHub
git push origin main
```

---

## Commit Message Format

**Format:**
```
[Week X - Day Y] Feature Name - Brief Description
```

**Examples:**
```
[Week 1 - Day 1] Project Setup - Initial scene creation
[Week 1 - Day 2] MainMenu - Start button implemented
[Week 1 - Day 3] Player Movement - WASD and jump working
[Week 1 - Day 4] Coin System - Collection and HUD display
[Week 1 - Day 5] Enemy AI - Basic patrol and chase behavior
```

---

## What to Commit

✅ Commit these:
- All C# scripts
- Scene files (.unity)
- Configuration files
- Updated documentation

❌ Don't commit these:
- Library/ folder
- Temp/ folder
- .vs/ folder
- .vscode/ folder
- *.log files
- node_modules/ (if using npm)

**Note:** `.gitignore` is already setup

---

## Branch Strategy

**main** = Stable, working code

If you want to experiment:
```bash
git checkout -b feature/experiment
git push origin feature/experiment
```

Then create Pull Request when ready.

---

## Pull Latest Changes

If someone else pushes changes:

```bash
git pull origin main
```

This updates your local files.

---

## Undo Changes

If something breaks:

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Discard all local changes
git checkout -- .
```

---

## View Commit History

```bash
# See last 5 commits
git log -5

# See changes in last commit
git show

# See all branches
git branch -a
```

---

## Daily Checklist

- [ ] Test game in Play mode
- [ ] Check Console for errors
- [ ] Stage changes: `git add .`
- [ ] Commit: `git commit -m "...."`
- [ ] Push: `git push origin main`
- [ ] Verify on GitHub website

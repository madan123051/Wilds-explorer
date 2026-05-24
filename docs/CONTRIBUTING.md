# 🤝 Contributing to Wilds Explorer

Welcome to the Wilds Explorer development team! This guide will help you contribute effectively to the project.

---

## 📋 Table of Contents
1. [Getting Started](#getting-started)
2. [Branching Strategy](#branching-strategy)
3. [Commit Guidelines](#commit-guidelines)
4. [Code Standards](#code-standards)
5. [Pull Request Process](#pull-request-process)
6. [Team Roles](#team-roles)
7. [Communication](#communication)

---

## 🚀 Getting Started

### Prerequisites
- **Unity 2022.3 LTS** (required)
- **Git** installed
- **VS Code** or **Visual Studio** (recommended)
- **GitHub account** with repo access

### Setup Steps

1. **Fork & Clone the Repository**
```bash
git clone https://github.com/madan123051/Wilds-explorer.git
cd Wilds-explorer
```

2. **Open Unity Project**
```
Unity Hub → Add → Select /unity-game/ folder
Wait for Unity to import assets (~5-10 min first time)
```

3. **Create Your Branch**
```bash
git checkout -b feature/your-feature-name
```

4. **Start Contributing!** ✅

---

## 🌿 Branching Strategy

```
main                    ← Stable, production-ready code
├── develop             ← Integration branch (all features merge here first)
│   ├── feature/*       ← New features
│   ├── bugfix/*        ← Bug fixes
│   ├── asset/*         ← New art/audio assets
│   └── docs/*          ← Documentation updates
```

### Branch Naming Rules
| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/description` | `feature/mission-system` |
| Bug Fix | `bugfix/issue-description` | `bugfix/coin-pickup-crash` |
| Asset | `asset/asset-name` | `asset/jungle-trees` |
| Docs | `docs/doc-name` | `docs/gameplay-guide` |
| Hotfix | `hotfix/critical-fix` | `hotfix/save-data-loss` |

### ⚠️ Rules
- **Never commit directly to `main`**
- **Never commit directly to `develop`**
- Always create a feature branch
- Keep branches focused (one feature per branch)
- Delete branch after merge

---

## 📝 Commit Guidelines

### Commit Message Format
```
[Type] Short description (max 72 chars)

Optional: Longer explanation if needed.
- What was done
- Why it was done
- Any important notes
```

### Commit Types
| Type | Use For | Example |
|------|---------|---------|
| `[Feature]` | New game feature | `[Feature] Add coin collection system` |
| `[Fix]` | Bug fix | `[Fix] Player falls through floor in jungle` |
| `[Asset]` | New art/audio | `[Asset] Add tiger 3D model and animations` |
| `[Docs]` | Documentation | `[Docs] Update GAMEPLAY.md with photo mechanics` |
| `[Refactor]` | Code improvement | `[Refactor] Simplify MissionManager logic` |
| `[Test]` | Tests | `[Test] Add unit tests for SaveManager` |
| `[Config]` | Configuration | `[Config] Update Firebase settings` |

### Good Commit Examples ✅
```
[Feature] Add wildlife photography system with scoring
[Fix] Resolve null reference in MissionManager.Complete()
[Asset] Add Chitwan jungle ambient music track
[Docs] Add API integration guide for Drishya
```

### Bad Commit Examples ❌
```
fix stuff
update
WIP
asdfasdf
```

---

## 💻 Code Standards

### C# Coding Style

#### Naming Conventions
```csharp
// Classes - PascalCase
public class MissionManager { }

// Methods - PascalCase
public void StartMission() { }

// Variables - camelCase
private int coinCount;

// Constants - UPPER_SNAKE_CASE
private const int MAX_COINS = 999;

// Public Properties - PascalCase
public int CurrentLevel { get; private set; }

// Private fields - _camelCase prefix
private float _moveSpeed = 5f;
```

#### Script Structure Template
```csharp
using UnityEngine;
using System.Collections;

/// <summary>
/// Brief description of what this script does.
/// </summary>
public class ClassName : MonoBehaviour
{
    // ─────────────────────────────────
    // CONSTANTS
    // ─────────────────────────────────
    private const int MAX_VALUE = 100;

    // ─────────────────────────────────
    // SERIALIZED FIELDS (Inspector)
    // ─────────────────────────────────
    [Header("Settings")]
    [SerializeField] private float _speed = 5f;
    
    // ─────────────────────────────────
    // PRIVATE FIELDS
    // ─────────────────────────────────
    private bool _isActive;

    // ─────────────────────────────────
    // UNITY LIFECYCLE
    // ─────────────────────────────────
    private void Awake()
    {
        // One-time initialization
    }

    private void Start()
    {
        // Initialize after all Awakes complete
    }

    private void Update()
    {
        // Per-frame logic
    }

    // ─────────────────────────────────
    // PUBLIC METHODS
    // ─────────────────────────────────
    public void DoSomething()
    {
        // Public interface
    }

    // ─────────────────────────────────
    // PRIVATE METHODS
    // ─────────────────────────────────
    private void InternalLogic()
    {
        // Internal implementation
    }
}
```

#### Code Quality Rules
- ✅ Comment complex logic
- ✅ Use `[SerializeField]` instead of `public` for Inspector fields
- ✅ Use `null` checks before accessing components
- ✅ Use `TryGetComponent<>()` instead of `GetComponent<>()`
- ✅ Avoid `FindObjectOfType<>()` at runtime — use references
- ❌ No magic numbers — use named constants
- ❌ No empty catch blocks
- ❌ No TODO comments in final PRs

---

## 🔀 Pull Request Process

### Before Creating a PR
- [ ] Code compiles without errors in Unity
- [ ] Feature works as described
- [ ] No new console errors or warnings
- [ ] Self-review your code (read every line)
- [ ] Delete unnecessary debug logs

### PR Title Format
```
[Type] Feature/Fix description
```
Example: `[Feature] Wildlife photography scoring system`

### PR Description Template
```markdown
## What does this PR do?
Brief description of the changes.

## Changes Made
- Added `PhotoScoring.cs` with scoring algorithm
- Updated `PlayerController.cs` to trigger photo mode
- Added camera UI elements to HUD

## Testing Done
- [ ] Tested in Unity Editor
- [ ] Tested on Android device
- [ ] Tested in WebGL browser

## Screenshots / Video
(Attach a screenshot or screen recording if it's a visual change)

## Related Issues
Closes #123
```

### Review Process
1. Create PR targeting `develop` branch
2. Request review from at least 1 team member
3. Address all review comments
4. Get approval → Merge
5. Delete branch after merge

---

## 👥 Team Roles

### 🎮 Game Developer (Unity/C#)
**Responsibilities:**
- Write C# scripts for gameplay systems
- Implement missions, rewards, save system
- Optimize performance
- Fix bugs

**Key Files:**
- `unity-game/Assets/Scripts/`
- `unity-game/Assets/Scenes/`

### 🎨 3D Artist / Designer
**Responsibilities:**
- Create low-poly 3D models
- Create textures and materials
- Design UI/UX
- Create animations

**Key Folders:**
- `unity-game/Assets/Models/`
- `unity-game/Assets/Textures/`
- `unity-game/Assets/UI/`

### 🎵 Audio Designer
**Responsibilities:**
- Create ambient music
- Create sound effects
- Implement audio in Unity

**Key Folder:**
- `unity-game/Assets/Audio/`

### 📋 Project Manager
**Responsibilities:**
- Track development progress
- Manage GitHub Issues and Milestones
- Coordinate team communication
- Review documentation

### 🔧 Backend Developer (Phase 2)
**Responsibilities:**
- Set up Firebase
- Write Cloud Functions
- Build Drishya/Marketplace APIs

**Key Folder:**
- `backend/`

---

## 💬 Communication

### GitHub Issues
- Use for bug reports, features, and tasks
- Label correctly: `bug`, `feature`, `asset`, `docs`
- Assign to responsible person
- Link issues to PRs

### Issue Template: Bug Report
```markdown
**Bug Description**
Clear description of the bug.

**Steps to Reproduce**
1. Go to...
2. Click on...
3. See error

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Environment**
- Unity Version: 2022.3.x
- Platform: Android / WebGL / Editor
- Device: (if mobile)
```

### Issue Template: Feature Request
```markdown
**Feature Description**
What should be added?

**Why is this needed?**
Justification for the feature.

**Acceptance Criteria**
- [ ] Criterion 1
- [ ] Criterion 2
```

---

## 🧪 Testing Guidelines

### Before Every Commit
1. Play test the feature in Unity Editor
2. Check Console for errors/warnings
3. Test edge cases (empty inventory, level 1 player, etc.)

### Performance Testing
- Monitor FPS with Unity Profiler
- Test on low-end Android device (target: 30 FPS)
- Check memory usage doesn't increase over time

---

## 🙏 Thank You!

Every contribution matters — whether it's code, art, audio, or documentation. Together we're building something amazing! 🎮🌿

**Questions?** Open an issue or contact: madan123051@gmail.com

---

**Last Updated**: May 2026  
**Version**: 1.0

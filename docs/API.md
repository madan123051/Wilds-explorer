# 🔌 API & Ecosystem Integration - Wilds Explorer

## Overview

Wilds Explorer integrates with three core Wildsaura ecosystem services:
1. **Drishya** - Wildlife photography platform
2. **Marketplace** - Creator economy & item sales
3. **Community** - Events, challenges & social features

> ⚠️ **Phase Note**: API integrations are planned for **Phase 2**. Phase 1 uses offline PlayerPrefs only.

---

## 🔥 Firebase Setup

### Configuration (firebase_config.json)
```json
{
  "apiKey": "YOUR_API_KEY",
  "authDomain": "wilds-explorer.firebaseapp.com",
  "projectId": "wilds-explorer",
  "storageBucket": "wilds-explorer.appspot.com",
  "messagingSenderId": "YOUR_SENDER_ID",
  "appId": "YOUR_APP_ID"
}
```

### Firestore Collections

#### `/users/{userId}`
```json
{
  "uid": "user123",
  "displayName": "Madan Explorer",
  "email": "madan@example.com",
  "createdAt": "2026-05-21T00:00:00Z",
  "level": 5,
  "xp": 1250,
  "coins": 3400,
  "gems": 2,
  "lastLogin": "2026-05-21T13:00:00Z",
  "streak": 3
}
```

#### `/users/{userId}/missions`
```json
{
  "missionId": "m001",
  "completedAt": "2026-05-21T12:00:00Z",
  "score": 85,
  "rewards": {
    "coins": 100,
    "xp": 50
  }
}
```

#### `/users/{userId}/photos`
```json
{
  "photoId": "p001",
  "animalType": "tiger",
  "score": 92,
  "biome": "jungle",
  "capturedAt": "2026-05-21T11:00:00Z",
  "uploadedToDrishya": false,
  "imageUrl": "gs://wilds-explorer.appspot.com/photos/user123/p001.jpg"
}
```

#### `/missions` (Global)
```json
{
  "missionId": "m001",
  "title": "First Steps",
  "description": "Collect 5 coins in the jungle",
  "type": "collection",
  "rewards": {
    "coins": 100,
    "xp": 50
  },
  "requirements": {
    "item": "coin",
    "count": 5
  },
  "isDaily": false,
  "isActive": true
}
```

#### `/leaderboard` (Phase 2)
```json
{
  "userId": "user123",
  "displayName": "Madan Explorer",
  "level": 10,
  "totalXP": 5000,
  "rank": 42
}
```

---

## 📸 Drishya API Integration

### Purpose
Upload in-game wildlife photos to the Drishya platform and earn creator rewards.

### Endpoints

#### POST /api/game/photo-upload
Upload a photo taken in-game.

**Request:**
```json
{
  "userId": "user123",
  "gameSessionId": "session_abc",
  "photo": {
    "imageBase64": "data:image/jpeg;base64,...",
    "animalType": "tiger",
    "location": "jungle_level_1",
    "score": 92,
    "capturedAt": "2026-05-21T11:00:00Z"
  }
}
```

**Response:**
```json
{
  "success": true,
  "drishyaPostId": "post_xyz",
  "rewards": {
    "creatorPoints": 50,
    "xpBonus": 25
  },
  "message": "Photo uploaded successfully to Drishya!"
}
```

#### GET /api/game/user-stats/{userId}
Get a user's Drishya creator stats from the game.

**Response:**
```json
{
  "userId": "user123",
  "totalUploads": 15,
  "totalViews": 450,
  "creatorLevel": 3,
  "earnedPoints": 750,
  "topPhoto": {
    "id": "post_xyz",
    "score": 98,
    "animal": "rhino"
  }
}
```

### Unity Implementation (C#)
```csharp
// DrishyaAPI.cs
public class DrishyaAPI : MonoBehaviour
{
    private const string BASE_URL = "https://api.drishya.app";
    
    public async Task<DrishyaResponse> UploadPhoto(PhotoData photo)
    {
        string userId = FirebaseAuth.DefaultInstance.CurrentUser.UserId;
        
        var requestData = new
        {
            userId = userId,
            photo = photo
        };
        
        string json = JsonConvert.SerializeObject(requestData);
        
        using (UnityWebRequest request = new UnityWebRequest($"{BASE_URL}/api/game/photo-upload", "POST"))
        {
            byte[] bodyRaw = Encoding.UTF8.GetBytes(json);
            request.uploadHandler = new UploadHandlerRaw(bodyRaw);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            request.SetRequestHeader("Authorization", $"Bearer {await GetAuthToken()}");
            
            await request.SendWebRequest();
            
            if (request.result == UnityWebRequest.Result.Success)
            {
                return JsonConvert.DeserializeObject<DrishyaResponse>(request.downloadHandler.text);
            }
            
            Debug.LogError($"Drishya upload failed: {request.error}");
            return null;
        }
    }
    
    private async Task<string> GetAuthToken()
    {
        var user = FirebaseAuth.DefaultInstance.CurrentUser;
        return await user.TokenAsync(false);
    }
}
```

---

## 🛒 Marketplace API Integration

### Purpose
Allow players to sell their best in-game photos in the Wildsaura Marketplace and unlock premium items.

### Endpoints

#### POST /api/marketplace/list-photo
List a photo for sale in the marketplace.

**Request:**
```json
{
  "userId": "user123",
  "photoId": "p001",
  "price": 500,
  "currency": "coins",
  "title": "Rare Tiger - Golden Hour",
  "tags": ["tiger", "golden-hour", "jungle"]
}
```

**Response:**
```json
{
  "success": true,
  "listingId": "listing_abc",
  "status": "live",
  "url": "https://marketplace.wildsaura.com/listing/listing_abc"
}
```

#### GET /api/marketplace/items
Get available premium items for the player.

**Response:**
```json
{
  "items": [
    {
      "id": "item_001",
      "name": "Pro Camera Lens",
      "description": "2x photo quality boost",
      "price": 1000,
      "currency": "coins",
      "category": "equipment",
      "imageUrl": "https://cdn.wildsaura.com/items/pro-lens.png"
    }
  ]
}
```

#### POST /api/marketplace/purchase
Purchase a marketplace item.

**Request:**
```json
{
  "userId": "user123",
  "itemId": "item_001",
  "currency": "coins"
}
```

**Response:**
```json
{
  "success": true,
  "transactionId": "txn_xyz",
  "newBalance": {
    "coins": 2400
  },
  "item": {
    "id": "item_001",
    "addedToInventory": true
  }
}
```

---

## 👥 Community API Integration

### Purpose
Connect players to Wildsaura community events, challenges, and social features.

### Endpoints

#### GET /api/community/events
Get active community events and challenges.

**Response:**
```json
{
  "events": [
    {
      "id": "event_001",
      "title": "Tiger Month Challenge",
      "description": "Photograph 10 tigers to win exclusive rewards",
      "startDate": "2026-05-01T00:00:00Z",
      "endDate": "2026-05-31T23:59:59Z",
      "rewards": {
        "coins": 2000,
        "badge": "tiger_champion"
      },
      "progress": {
        "required": 10,
        "completed": 3
      }
    }
  ]
}
```

#### POST /api/community/join-event
Join a community event.

**Request:**
```json
{
  "userId": "user123",
  "eventId": "event_001"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Joined Tiger Month Challenge!",
  "eventDetails": {
    "id": "event_001",
    "title": "Tiger Month Challenge"
  }
}
```

#### GET /api/community/leaderboard
Get the community leaderboard.

**Response:**
```json
{
  "leaderboard": [
    {
      "rank": 1,
      "userId": "user456",
      "displayName": "Wildlife King",
      "score": 15000,
      "badge": "top_explorer"
    },
    {
      "rank": 2,
      "userId": "user123",
      "displayName": "Madan Explorer",
      "score": 12500,
      "badge": null
    }
  ],
  "myRank": 2,
  "totalPlayers": 1250
}
```

---

## 🔐 Authentication

### Firebase Authentication Flow

```
App Launch
  ↓
Check local auth token
  ↓ (No token)
Show Login Screen
  ↓
Google Sign In / Email Sign Up
  ↓
Firebase Auth → Get UID + Token
  ↓
Create/Load user profile in Firestore
  ↓
Sync offline progress (if any)
  ↓
Enter Game
```

### Unity Auth Code (C#)
```csharp
// AuthManager.cs
public class AuthManager : MonoBehaviour
{
    private FirebaseAuth auth;
    
    void Start()
    {
        auth = FirebaseAuth.DefaultInstance;
        
        // Check if already signed in
        if (auth.CurrentUser != null)
        {
            OnUserSignedIn(auth.CurrentUser);
        }
    }
    
    public void SignInWithGoogle()
    {
        // Google sign-in flow
        GoogleSignIn.Configuration = new GoogleSignInConfiguration
        {
            RequestIdToken = true,
            WebClientId = "YOUR_WEB_CLIENT_ID"
        };
        
        GoogleSignIn.DefaultInstance.SignIn().ContinueWith(task =>
        {
            if (!task.IsFaulted)
            {
                Credential credential = GoogleAuthProvider.GetCredential(
                    task.Result.IdToken, null
                );
                auth.SignInWithCredentialAsync(credential);
            }
        });
    }
    
    private void OnUserSignedIn(FirebaseUser user)
    {
        Debug.Log($"Signed in: {user.DisplayName}");
        GameManager.Instance.LoadPlayerProfile(user.UserId);
    }
}
```

---

## 📡 Offline → Online Sync

### Sync Strategy

```
Offline Play
  ↓
Store actions in local queue (PlayerPrefs)
  ↓ (Internet available)
Connect to Firebase
  ↓
Process offline queue
  ↓
Merge local + cloud data (latest wins)
  ↓
Update UI with synced data
```

### Sync Data Structure (PlayerPrefs)
```json
{
  "offline_queue": [
    {
      "type": "mission_complete",
      "missionId": "m001",
      "timestamp": "2026-05-20T10:00:00Z",
      "rewards": {"coins": 100, "xp": 50}
    },
    {
      "type": "photo_captured",
      "photoId": "p001",
      "animal": "tiger",
      "score": 88,
      "timestamp": "2026-05-20T10:30:00Z"
    }
  ]
}
```

---

## ⚠️ Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "AUTH_REQUIRED",
    "message": "Authentication required to access this resource",
    "statusCode": 401
  }
}
```

### Common Error Codes
| Code | Meaning | Solution |
|------|---------|---------|
| `AUTH_REQUIRED` | Not logged in | Redirect to login |
| `INSUFFICIENT_COINS` | Not enough currency | Show shop |
| `MISSION_ALREADY_COMPLETE` | Duplicate completion | Show already complete UI |
| `PHOTO_UPLOAD_FAILED` | Drishya upload error | Retry or save offline |
| `NETWORK_ERROR` | No internet | Queue for offline sync |
| `RATE_LIMIT` | Too many requests | Wait and retry |

### Unity Error Handler
```csharp
public void HandleAPIError(string errorCode)
{
    switch (errorCode)
    {
        case "AUTH_REQUIRED":
            UIManager.Instance.ShowLoginScreen();
            break;
        case "NETWORK_ERROR":
            SaveManager.Instance.QueueForOfflineSync();
            UIManager.Instance.ShowOfflineNotice();
            break;
        default:
            UIManager.Instance.ShowGenericError();
            break;
    }
}
```

---

## 🧪 Testing the APIs

### Phase 1 (No APIs - Offline Only)
- All data saved in PlayerPrefs locally
- No network calls
- Test with Unity Editor Play mode

### Phase 2 (Firebase Integration)
- Use Firebase Emulator Suite for local testing:
```bash
npm install -g firebase-tools
firebase emulators:start
```
- Test Firestore: http://localhost:4000/firestore
- Test Auth: http://localhost:9099

### Phase 2 (Ecosystem APIs)
- Use staging/sandbox API endpoints
- Run unit tests in `Scripts/Tests/APITests.cs`

---

**Last Updated**: May 2026  
**Version**: 1.0  
**Status**: Phase 2 (Planned - not yet implemented)

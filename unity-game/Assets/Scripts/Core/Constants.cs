using UnityEngine;

public static class Constants
{
    // Player Settings
    public const float PLAYER_SPEED = 5f;
    public const float CAMERA_DISTANCE = 5f;
    public const float CAMERA_HEIGHT = 2f;
    public const float JUMP_FORCE = 5f;
    
    // Game Settings
    public const int COINS_PER_LEVEL = 15;
    public const int COINS_PER_MISSION = 5;
    public const float SPAWN_DELAY = 0.5f;
    
    // Physics
    public const float GRAVITY = -9.81f;
    public const float GROUND_DRAG = 5f;
    
    // Save System
    public const string SAVE_KEY_COINS = "WildsExplorer_Coins";
    public const string SAVE_KEY_LEVEL = "WildsExplorer_Level";
    public const string SAVE_KEY_MISSIONS = "WildsExplorer_Missions";
    public const string SAVE_KEY_XP = "WildsExplorer_XP";
    
    // UI
    public const float UI_FADE_DURATION = 0.5f;
}

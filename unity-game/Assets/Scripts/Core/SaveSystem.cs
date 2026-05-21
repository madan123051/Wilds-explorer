using UnityEngine;

public class SaveSystem : MonoBehaviour
{
    public void SaveGameData(int coins, int level, int xp)
    {
        PlayerPrefs.SetInt(Constants.SAVE_KEY_COINS, coins);
        PlayerPrefs.SetInt(Constants.SAVE_KEY_LEVEL, level);
        PlayerPrefs.SetInt(Constants.SAVE_KEY_XP, xp);
        PlayerPrefs.SetString("LastSaveTime", System.DateTime.Now.ToString());
        PlayerPrefs.Save();
        Debug.Log("[SaveSystem] Game data saved!");
    }
    
    public void LoadGameData()
    {
        int coins = PlayerPrefs.GetInt(Constants.SAVE_KEY_COINS, 0);
        int level = PlayerPrefs.GetInt(Constants.SAVE_KEY_LEVEL, 1);
        int xp = PlayerPrefs.GetInt(Constants.SAVE_KEY_XP, 0);
        
        GameManager.Instance.totalCoins = coins;
        GameManager.Instance.currentLevel = level;
        GameManager.Instance.currentXP = xp;
        
        string lastSave = PlayerPrefs.GetString("LastSaveTime", "Never");
        Debug.Log($"[SaveSystem] Loaded - Coins: {coins}, Level: {level}, Last Save: {lastSave}");
    }
    
    public void ClearAllData()
    {
        PlayerPrefs.DeleteAll();
        Debug.Log("[SaveSystem] All data cleared!");
    }
}

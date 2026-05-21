using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    [Header("Game State")]
    public int currentLevel = 1;
    public int totalCoins = 0;
    public int currentXP = 0;
    public bool isGameActive = false;
    public bool isGamePaused = false;
    
    [Header("References")]
    private SaveSystem saveSystem;
    private UIManager uiManager;
    private LevelManager levelManager;
    
    // Singleton
    public static GameManager Instance { get; private set; }
    
    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }
    
    private void Start()
    {
        InitializeSystems();
        LoadGame();
    }
    
    private void InitializeSystems()
    {
        Debug.Log("[GameManager] Initializing game systems...");
        
        saveSystem = gameObject.AddComponent<SaveSystem>();
        uiManager = FindObjectOfType<UIManager>();
        levelManager = FindObjectOfType<LevelManager>();
    }
    
    public void AddCoins(int amount)
    {
        totalCoins += amount;
        if (uiManager != null)
            uiManager.UpdateCoinsUI(totalCoins);
        Debug.Log($"[GameManager] Coins: {totalCoins}");
    }
    
    public void AddXP(int amount)
    {
        currentXP += amount;
        Debug.Log($"[GameManager] XP: {currentXP}");
    }
    
    public void StartGame()
    {
        isGameActive = true;
        isGamePaused = false;
        Time.timeScale = 1f;
        Debug.Log("[GameManager] Game Started!");
    }
    
    public void PauseGame()
    {
        isGamePaused = true;
        Time.timeScale = 0f;
    }
    
    public void ResumeGame()
    {
        isGamePaused = false;
        Time.timeScale = 1f;
    }
    
    public void GameOver(bool victory)
    {
        isGameActive = false;
        Time.timeScale = 0f;
        
        if (victory)
        {
            Debug.Log("[GameManager] VICTORY!");
            SaveGame();
        }
        else
        {
            Debug.Log("[GameManager] GAME OVER!");
        }
    }
    
    public void SaveGame()
    {
        if (saveSystem != null)
            saveSystem.SaveGameData(totalCoins, currentLevel, currentXP);
    }
    
    public void LoadGame()
    {
        if (saveSystem != null)
            saveSystem.LoadGameData();
    }
}

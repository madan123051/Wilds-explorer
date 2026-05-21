using UnityEngine;

public class LevelManager : MonoBehaviour
{
    [Header("Level Settings")]
    [SerializeField] int levelNumber = 1;
    [SerializeField] Transform spawnPoint;
    [SerializeField] int coinsToSpawn = Constants.COINS_PER_LEVEL;
    
    [Header("Prefabs")]
    [SerializeField] GameObject coinPrefab;
    [SerializeField] GameObject playerPrefab;
    
    private GameObject player;
    
    private void Start()
    {
        InitializeLevel();
    }
    
    private void InitializeLevel()
    {
        Debug.Log($"[LevelManager] Initializing Level {levelNumber}...");
        
        // Spawn player if not exists
        if (player == null)
        {
            if (spawnPoint != null)
                player = Instantiate(playerPrefab, spawnPoint.position, Quaternion.identity);
        }
        
        // Spawn coins
        SpawnCoins();
        
        GameManager.Instance.StartGame();
    }
    
    private void SpawnCoins()
    {
        for (int i = 0; i < coinsToSpawn; i++)
        {
            Vector3 randomPos = new Vector3(
                Random.Range(-10f, 10f),
                1f,
                Random.Range(-10f, 10f)
            );
            
            Instantiate(coinPrefab, randomPos, Quaternion.identity);
        }
        Debug.Log($"[LevelManager] Spawned {coinsToSpawn} coins");
    }
    
    public void CompleteLevel()
    {
        Debug.Log($"[LevelManager] Level {levelNumber} Completed!");
        GameManager.Instance.GameOver(true);
    }
}

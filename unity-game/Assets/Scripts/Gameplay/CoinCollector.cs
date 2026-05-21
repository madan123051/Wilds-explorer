using UnityEngine;

public class CoinCollector : MonoBehaviour
{
    [Header("Collection Settings")]
    [SerializeField] int coinsCollected = 0;
    [SerializeField] float collectRadius = 2f;
    
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Coin"))
        {
            CollectCoin(other.gameObject);
        }
    }
    
    private void CollectCoin(GameObject coinObject)
    {
        coinsCollected++;
        GameManager.Instance.AddCoins(1);
        Destroy(coinObject);
        Debug.Log($"[CoinCollector] Coin collected! Total: {coinsCollected}");
    }
    
    public int GetCoinsCollected() => coinsCollected;
    public void ResetCoins() => coinsCollected = 0;
}

using UnityEngine;
using System.Collections;

public class RewardSystem : MonoBehaviour
{
    public static RewardSystem Instance { get; private set; }

    [SerializeField] private GameObject rewardPopupPrefab;
    [SerializeField] private Canvas worldCanvas;
    [SerializeField] private float popupDuration = 2f;
    [SerializeField] private Vector3 popupOffset = new Vector3(0, 2, 0);

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }

    public void ShowReward(Vector3 position, string rewardText, int amount)
    {
        if (rewardPopupPrefab == null || worldCanvas == null)
        {
            Debug.LogWarning("Reward popup prefab or canvas not assigned!");
            return;
        }

        GameObject popupInstance = Instantiate(rewardPopupPrefab, worldCanvas.transform);
        RectTransform rectTransform = popupInstance.GetComponent<RectTransform>();
        
        if (rectTransform != null)
        {
            Vector3 screenPos = Camera.main.WorldToScreenPoint(position + popupOffset);
            rectTransform.position = screenPos;
        }

        RewardPopup popup = popupInstance.GetComponent<RewardPopup>();
        if (popup != null)
        {
            popup.Initialize(rewardText, amount);
        }

        StartCoroutine(DestroyPopupAfterDelay(popupInstance, popupDuration));
    }

    public void MissionCompleted(string missionName, int coinReward, int xpReward)
    {
        Debug.Log($"Mission Completed: {missionName} | Coins: +{coinReward} | XP: +{xpReward}");
        
        if (PlayerStats.Instance != null)
        {
            PlayerStats.Instance.AddCoins(coinReward);
            PlayerStats.Instance.AddExperience(xpReward);
        }

        ShowReward(PlayerStats.Instance.transform.position, $"Mission Complete!\n+{coinReward} Coins\n+{xpReward} XP", coinReward);
    }

    public void CoinCollected(int amount, Vector3 position)
    {
        ShowReward(position, "+" + amount, amount);
    }

    private IEnumerator DestroyPopupAfterDelay(GameObject popup, float delay)
    {
        yield return new WaitForSeconds(delay);
        if (popup != null)
            Destroy(popup);
    }
}

public class RewardPopup : MonoBehaviour
{
    private TextMesh textMesh;
    private float elapsedTime = 0f;
    private float duration = 2f;
    private Vector3 startPosition;

    private void Start()
    {
        startPosition = transform.localPosition;
    }

    public void Initialize(string text, int amount)
    {
        textMesh = GetComponent<TextMesh>();
        if (textMesh != null)
            textMesh.text = text;
        duration = 2f;
    }

    private void Update()
    {
        elapsedTime += Time.deltaTime;
        
        // Float up
        transform.localPosition += Vector3.up * Time.deltaTime;
        
        // Fade out
        CanvasGroup canvasGroup = GetComponent<CanvasGroup>();
        if (canvasGroup != null)
            canvasGroup.alpha = 1f - (elapsedTime / duration);
    }
}

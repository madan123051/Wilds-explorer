using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    [Header("UI References")]
    [SerializeField] Text coinText;
    [SerializeField] Text levelText;
    [SerializeField] Text xpText;
    [SerializeField] Button pauseButton;
    [SerializeField] GameObject pausePanel;
    
    private bool isPauseMenuOpen = false;
    
    private void Start()
    {
        if (pauseButton != null)
            pauseButton.onClick.AddListener(TogglePauseMenu);
        
        UpdateUI();
    }
    
    public void UpdateCoinsUI(int coins)
    {
        if (coinText != null)
            coinText.text = $"Coins: {coins}";
    }
    
    public void UpdateLevelUI(int level)
    {
        if (levelText != null)
            levelText.text = $"Level: {level}";
    }
    
    public void UpdateXPUI(int xp)
    {
        if (xpText != null)
            xpText.text = $"XP: {xp}";
    }
    
    private void UpdateUI()
    {
        UpdateCoinsUI(GameManager.Instance.totalCoins);
        UpdateLevelUI(GameManager.Instance.currentLevel);
        UpdateXPUI(GameManager.Instance.currentXP);
    }
    
    private void TogglePauseMenu()
    {
        isPauseMenuOpen = !isPauseMenuOpen;
        
        if (pausePanel != null)
            pausePanel.SetActive(isPauseMenuOpen);
        
        if (isPauseMenuOpen)
            GameManager.Instance.PauseGame();
        else
            GameManager.Instance.ResumeGame();
    }
}

using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class HUD : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI coinsText;
    [SerializeField] private TextMeshProUGUI levelText;
    [SerializeField] private TextMeshProUGUI healthText;
    [SerializeField] private Image healthBar;
    [SerializeField] private Image staminaBar;
    [SerializeField] private TextMeshProUGUI currentMissionText;
    [SerializeField] private Button pauseButton;
    [SerializeField] private Button missionButton;
    [SerializeField] private CanvasGroup pausePanel;
    [SerializeField] private Button resumeButton;
    [SerializeField] private Button quitButton;

    private bool isPaused = false;

    private void Start()
    {
        InitializeUI();
        SubscribeToEvents();
        pausePanel.alpha = 0;
        pausePanel.blocksRaycasts = false;
    }

    private void InitializeUI()
    {
        if (pauseButton != null)
            pauseButton.onClick.AddListener(TogglePause);
        
        if (resumeButton != null)
            resumeButton.onClick.AddListener(Resume);
        
        if (quitButton != null)
            quitButton.onClick.AddListener(QuitGame);
    }

    private void SubscribeToEvents()
    {
        if (PlayerStats.Instance != null)
        {
            PlayerStats.Instance.OnCoinsChanged += UpdateCoins;
            PlayerStats.Instance.OnHealthChanged += UpdateHealth;
            PlayerStats.Instance.OnStaminaChanged += UpdateStamina;
            PlayerStats.Instance.OnLevelUp += UpdateLevel;
        }

        if (MissionSystem.Instance != null)
        {
            MissionSystem.Instance.OnMissionUpdated += UpdateMissionDisplay;
        }
    }

    private void UpdateCoins(int coins)
    {
        if (coinsText != null)
            coinsText.text = "Coins: " + coins;
    }

    private void UpdateHealth(int health)
    {
        if (healthText != null)
            healthText.text = "HP: " + health + "/" + PlayerStats.Instance.GetMaxHealth();
        
        if (healthBar != null && PlayerStats.Instance != null)
            healthBar.fillAmount = (float)health / PlayerStats.Instance.GetMaxHealth();
    }

    private void UpdateStamina(float stamina)
    {
        if (staminaBar != null)
            staminaBar.fillAmount = stamina;
    }

    private void UpdateLevel(int level)
    {
        if (levelText != null)
            levelText.text = "Level: " + level;
    }

    private void UpdateMissionDisplay(Mission mission)
    {
        if (currentMissionText != null && mission != null)
            currentMissionText.text = "Mission: " + mission.missionName;
    }

    private void TogglePause()
    {
        if (isPaused)
            Resume();
        else
            Pause();
    }

    private void Pause()
    {
        isPaused = true;
        Time.timeScale = 0f;
        
        if (pausePanel != null)
        {
            pausePanel.alpha = 1f;
            pausePanel.blocksRaycasts = true;
        }
    }

    private void Resume()
    {
        isPaused = false;
        Time.timeScale = 1f;
        
        if (pausePanel != null)
        {
            pausePanel.alpha = 0f;
            pausePanel.blocksRaycasts = false;
        }
    }

    private void QuitGame()
    {
        Time.timeScale = 1f;
        #if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
        #else
            Application.Quit();
        #endif
    }

    private void OnDestroy()
    {
        if (PlayerStats.Instance != null)
        {
            PlayerStats.Instance.OnCoinsChanged -= UpdateCoins;
            PlayerStats.Instance.OnHealthChanged -= UpdateHealth;
            PlayerStats.Instance.OnStaminaChanged -= UpdateStamina;
            PlayerStats.Instance.OnLevelUp -= UpdateLevel;
        }
    }
}

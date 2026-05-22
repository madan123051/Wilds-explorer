using UnityEngine;
using System;

public class PlayerStats : MonoBehaviour
{
    public static PlayerStats Instance { get; private set; }

    [SerializeField] private int maxHealth = 100;
    [SerializeField] private int maxStamina = 100;
    [SerializeField] private float staminaRegenRate = 20f;
    [SerializeField] private float staminaDrainRate = 15f;

    private int currentHealth;
    private float currentStamina;
    private int coinsCollected = 0;
    private int experiencePoints = 0;
    private int currentLevel = 1;

    public event Action<int> OnHealthChanged;
    public event Action<float> OnStaminaChanged;
    public event Action<int> OnCoinsChanged;
    public event Action<int> OnLevelUp;

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
        currentHealth = maxHealth;
        currentStamina = maxStamina;
        LoadStats();
    }

    private void Update()
    {
        RegenerateStamina();
    }

    public void DrainStamina(float amount)
    {
        currentStamina = Mathf.Max(0, currentStamina - amount * Time.deltaTime);
        OnStaminaChanged?.Invoke(currentStamina / maxStamina);
    }

    private void RegenerateStamina()
    {
        if (currentStamina < maxStamina)
        {
            currentStamina = Mathf.Min(maxStamina, currentStamina + staminaRegenRate * Time.deltaTime);
            OnStaminaChanged?.Invoke(currentStamina / maxStamina);
        }
    }

    public void TakeDamage(int damage)
    {
        currentHealth = Mathf.Max(0, currentHealth - damage);
        OnHealthChanged?.Invoke(currentHealth);

        if (currentHealth <= 0)
        {
            Die();
        }
    }

    public void Heal(int amount)
    {
        currentHealth = Mathf.Min(maxHealth, currentHealth + amount);
        OnHealthChanged?.Invoke(currentHealth);
    }

    public void AddCoins(int amount)
    {
        coinsCollected += amount;
        OnCoinsChanged?.Invoke(coinsCollected);
        SaveStats();
    }

    public void AddExperience(int amount)
    {
        experiencePoints += amount;
        CheckLevelUp();
        SaveStats();
    }

    private void CheckLevelUp()
    {
        int requiredXP = currentLevel * 100;
        if (experiencePoints >= requiredXP)
        {
            currentLevel++;
            experiencePoints -= requiredXP;
            OnLevelUp?.Invoke(currentLevel);
        }
    }

    private void Die()
    {
        Debug.Log("Player died!");
        GameManager.Instance.GameOver();
    }

    public void SaveStats()
    {
        PlayerPrefs.SetInt("PlayerCoins", coinsCollected);
        PlayerPrefs.SetInt("PlayerXP", experiencePoints);
        PlayerPrefs.SetInt("PlayerLevel", currentLevel);
        PlayerPrefs.SetInt("PlayerHealth", currentHealth);
        PlayerPrefs.Save();
    }

    public void LoadStats()
    {
        coinsCollected = PlayerPrefs.GetInt("PlayerCoins", 0);
        experiencePoints = PlayerPrefs.GetInt("PlayerXP", 0);
        currentLevel = PlayerPrefs.GetInt("PlayerLevel", 1);
        currentHealth = PlayerPrefs.GetInt("PlayerHealth", maxHealth);
    }

    public int GetCoins() => coinsCollected;
    public int GetHealth() => currentHealth;
    public int GetMaxHealth() => maxHealth;
    public float GetStamina() => currentStamina / maxStamina;
    public int GetLevel() => currentLevel;
    public int GetXP() => experiencePoints;
}

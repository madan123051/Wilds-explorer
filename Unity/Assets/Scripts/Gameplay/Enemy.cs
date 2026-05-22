using UnityEngine;

public class Enemy : MonoBehaviour
{
    [SerializeField] private int health = 30;
    [SerializeField] private int damageToPlayer = 15;
    [SerializeField] private float patrolSpeed = 3f;
    [SerializeField] private float detectRange = 10f;
    [SerializeField] private float attackRange = 2f;
    [SerializeField] private float attackCooldown = 1f;
    [SerializeField] private int coinDropAmount = 10;
    [SerializeField] private ParticleSystem deathEffect;

    private int currentHealth;
    private float lastAttackTime = 0f;
    private Transform playerTransform;
    private bool isAlive = true;

    private void Start()
    {
        currentHealth = health;
        if (GameObject.FindGameObjectWithTag("Player") != null)
            playerTransform = GameObject.FindGameObjectWithTag("Player").transform;
    }

    private void Update()
    {
        if (!isAlive) return;

        if (playerTransform != null)
        {
            float distanceToPlayer = Vector3.Distance(transform.position, playerTransform.position);

            if (distanceToPlayer <= attackRange)
            {
                AttackPlayer();
            }
            else if (distanceToPlayer <= detectRange)
            {
                ChasePlayer();
            }
            else
            {
                Patrol();
            }
        }
    }

    private void Patrol()
    {
        // Placeholder patrol logic
        transform.Translate(Vector3.forward * patrolSpeed * Time.deltaTime);
    }

    private void ChasePlayer()
    {
        Vector3 direction = (playerTransform.position - transform.position).normalized;
        transform.Translate(direction * patrolSpeed * 1.5f * Time.deltaTime);
    }

    private void AttackPlayer()
    {
        if (Time.time - lastAttackTime >= attackCooldown)
        {
            lastAttackTime = Time.time;
            PlayerStats stats = playerTransform.GetComponent<PlayerStats>();
            if (stats != null)
            {
                stats.TakeDamage(damageToPlayer);
                Debug.Log("Enemy attacked player!");
            }
        }
    }

    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
        Debug.Log($"Enemy health: {currentHealth}");

        if (currentHealth <= 0)
        {
            Die();
        }
    }

    private void Die()
    {
        isAlive = false;
        
        if (deathEffect != null)
            Instantiate(deathEffect, transform.position, Quaternion.identity);

        if (PlayerStats.Instance != null)
            PlayerStats.Instance.AddCoins(coinDropAmount);

        Destroy(gameObject);
    }

    public int GetHealth() => currentHealth;
    public bool IsAlive() => isAlive;
}

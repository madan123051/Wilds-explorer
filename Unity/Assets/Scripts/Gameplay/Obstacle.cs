using UnityEngine;

public class Obstacle : MonoBehaviour
{
    [SerializeField] private int damageAmount = 10;
    [SerializeField] private float damageCooldown = 1f;
    [SerializeField] private ParticleSystem hitEffect;

    private float lastDamageTime = 0f;

    private void OnTriggerEnter(Collider collision)
    {
        if (collision.CompareTag("Player"))
        {
            DealDamage(collision.gameObject);
        }
    }

    private void OnTriggerStay(Collider collision)
    {
        if (collision.CompareTag("Player"))
        {
            if (Time.time - lastDamageTime >= damageCooldown)
            {
                DealDamage(collision.gameObject);
            }
        }
    }

    private void DealDamage(GameObject player)
    {
        lastDamageTime = Time.time;
        PlayerStats stats = player.GetComponent<PlayerStats>();
        
        if (stats != null)
        {
            stats.TakeDamage(damageAmount);
            Debug.Log($"Obstacle dealt {damageAmount} damage to player");
            
            if (hitEffect != null)
                Instantiate(hitEffect, transform.position, Quaternion.identity);
        }
    }

    public void SetDamage(int damage)
    {
        damageAmount = damage;
    }
}

using UnityEngine;

public class Checkpoint : MonoBehaviour
{
    [SerializeField] private int checkpointID = 0;
    [SerializeField] private ParticleSystem activationEffect;
    private bool isActivated = false;

    private void OnTriggerEnter(Collider collision)
    {
        if (collision.CompareTag("Player") && !isActivated)
        {
            ActivateCheckpoint();
        }
    }

    private void ActivateCheckpoint()
    {
        isActivated = true;
        Debug.Log($"Checkpoint {checkpointID} activated!");

        if (activationEffect != null)
            Instantiate(activationEffect, transform.position, Quaternion.identity);

        // Save checkpoint
        PlayerPrefs.SetInt("LastCheckpoint", checkpointID);
        PlayerPrefs.Save();
    }

    public bool IsActivated() => isActivated;
    public int GetCheckpointID() => checkpointID;
}

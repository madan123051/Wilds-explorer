using UnityEngine;
using System.Collections.Generic;

public class NPC : MonoBehaviour
{
    [SerializeField] private string npcName = "NPC";
    [SerializeField] private List<string> dialogueLines = new List<string>();
    [SerializeField] private int dialogueIndex = 0;
    [SerializeField] private float interactionRange = 3f;
    [SerializeField] private bool hasQuest = false;
    [SerializeField] private int questReward = 50;

    private bool isPlayerNear = false;
    private bool hasSpokenToPlayer = false;

    private void Start()
    {
        if (dialogueLines.Count == 0)
            dialogueLines.Add("Hello, traveler!");
    }

    private void OnTriggerEnter(Collider collision)
    {
        if (collision.CompareTag("Player"))
        {
            isPlayerNear = true;
            Debug.Log($"{npcName} is nearby. Press F to interact.");
        }
    }

    private void OnTriggerExit(Collider collision)
    {
        if (collision.CompareTag("Player"))
        {
            isPlayerNear = false;
        }
    }

    private void Update()
    {
        if (isPlayerNear && Input.GetKeyDown(KeyCode.F))
        {
            Interact();
        }
    }

    public void Interact()
    {
        Debug.Log($"{npcName}: {GetCurrentDialogue()}");
        
        if (hasQuest && !hasSpokenToPlayer)
        {
            hasSpokenToPlayer = true;
            if (PlayerStats.Instance != null)
            {
                PlayerStats.Instance.AddCoins(questReward);
                Debug.Log($"Received quest reward: {questReward} coins");
            }
        }

        dialogueIndex = (dialogueIndex + 1) % dialogueLines.Count;
    }

    public string GetCurrentDialogue()
    {
        if (dialogueLines.Count > 0)
            return dialogueLines[dialogueIndex];
        return "...";;
    }

    public void SetDialogue(List<string> newDialogue)
    {
        dialogueLines = newDialogue;
    }

    public bool HasQuest() => hasQuest;
    public int GetQuestReward() => questReward;
}

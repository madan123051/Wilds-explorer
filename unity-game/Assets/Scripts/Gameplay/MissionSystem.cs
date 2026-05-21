using UnityEngine;
using System.Collections.Generic;

public class MissionSystem : MonoBehaviour
{
    [System.Serializable]
    public struct Mission
    {
        public int id;
        public string title;
        public string description;
        public int reward;
        public bool completed;
    }
    
    [SerializeField] List<Mission> missions = new List<Mission>();
    
    private void Start()
    {
        InitializeMissions();
    }
    
    private void InitializeMissions()
    {
        // Sample missions
        missions.Add(new Mission { id = 1, title = "Collect 10 Coins", description = "Explore and collect coins", reward = 50, completed = false });
        missions.Add(new Mission { id = 2, title = "Reach the Temple", description = "Navigate to the temple ruins", reward = 100, completed = false });
        missions.Add(new Mission { id = 3, title = "Find the Hidden Cache", description = "Discover the treasure cache", reward = 150, completed = false });
    }
    
    public Mission GetMission(int missionId)
    {
        foreach (Mission m in missions)
        {
            if (m.id == missionId)
                return m;
        }
        return missions[0];
    }
    
    public void CompleteMission(int missionId)
    {
        for (int i = 0; i < missions.Count; i++)
        {
            if (missions[i].id == missionId)
            {
                Mission m = missions[i];
                m.completed = true;
                missions[i] = m;
                GameManager.Instance.AddXP(m.reward);
                Debug.Log($"[MissionSystem] Mission Completed: {m.title}");
                break;
            }
        }
    }
    
    public List<Mission> GetAllMissions() => missions;
}

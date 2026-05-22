using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;

public class PrefabSetup : MonoBehaviour
{
    [MenuItem("Tools/Setup Game Prefabs")]
    public static void SetupPrefabs()
    {
        Debug.Log("Setting up game prefabs...");

        // Create Coin prefab
        CreateCoinPrefab();
        // Create Enemy prefab
        CreateEnemyPrefab();
        // Create Obstacle prefab
        CreateObstaclePrefab();
        // Create NPC prefab
        CreateNPCPrefab();

        Debug.Log("Prefab setup complete!");
    }

    private static void CreateCoinPrefab()
    {
        GameObject coin = new GameObject("Coin");
        coin.tag = "Coin";
        coin.AddComponent<SphereCollider>();
        coin.AddComponent<CoinCollector>();
        coin.AddComponent<Rigidbody>();
        coin.GetComponent<Rigidbody>().isKinematic = true;

        // Add visual
        GameObject sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere.transform.SetParent(coin.transform);
        sphere.transform.localPosition = Vector3.zero;
        sphere.transform.localScale = new Vector3(0.3f, 0.3f, 0.3f);
        
        // Change material to yellow
        Material goldMaterial = new Material(Shader.Find("Standard"));
        goldMaterial.color = new Color(1f, 0.84f, 0f);
        sphere.GetComponent<Renderer>().material = goldMaterial;

        Debug.Log("Coin prefab created!");
    }

    private static void CreateEnemyPrefab()
    {
        GameObject enemy = new GameObject("Enemy");
        enemy.tag = "Enemy";
        enemy.AddComponent<CapsuleCollider>();
        enemy.AddComponent<Enemy>();
        enemy.AddComponent<Rigidbody>();

        // Add visual
        GameObject capsule = GameObject.CreatePrimitive(PrimitiveType.Capsule);
        capsule.transform.SetParent(enemy.transform);
        capsule.transform.localPosition = Vector3.zero;
        capsule.transform.localScale = new Vector3(0.8f, 1.5f, 0.8f);
        
        // Change material to red
        Material redMaterial = new Material(Shader.Find("Standard"));
        redMaterial.color = new Color(1f, 0f, 0f);
        capsule.GetComponent<Renderer>().material = redMaterial;

        Debug.Log("Enemy prefab created!");
    }

    private static void CreateObstaclePrefab()
    {
        GameObject obstacle = new GameObject("Obstacle");
        obstacle.AddComponent<BoxCollider>();
        obstacle.AddComponent<Obstacle>();

        // Add visual
        GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        cube.transform.SetParent(obstacle.transform);
        cube.transform.localPosition = Vector3.zero;
        
        // Change material to dark
        Material darkMaterial = new Material(Shader.Find("Standard"));
        darkMaterial.color = new Color(0.3f, 0.3f, 0.3f);
        cube.GetComponent<Renderer>().material = darkMaterial;

        Debug.Log("Obstacle prefab created!");
    }

    private static void CreateNPCPrefab()
    {
        GameObject npc = new GameObject("NPC");
        npc.AddComponent<CapsuleCollider>();
        npc.AddComponent<NPC>();

        // Add visual
        GameObject capsule = GameObject.CreatePrimitive(PrimitiveType.Capsule);
        capsule.transform.SetParent(npc.transform);
        capsule.transform.localPosition = Vector3.zero;
        capsule.transform.localScale = new Vector3(0.7f, 1.2f, 0.7f);
        
        // Change material to green
        Material greenMaterial = new Material(Shader.Find("Standard"));
        greenMaterial.color = new Color(0f, 1f, 0f);
        capsule.GetComponent<Renderer>().material = greenMaterial;

        Debug.Log("NPC prefab created!");
    }
}
#endif

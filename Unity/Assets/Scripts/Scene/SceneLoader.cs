using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoader : MonoBehaviour
{
    public static void LoadScene(string sceneName)
    {
        Time.timeScale = 1f; // Ensure time is running
        SceneManager.LoadScene(sceneName);
    }

    public static void LoadMainMenu()
    {
        LoadScene("MainMenu");
    }

    public static void LoadLevel(int levelNumber)
    {
        LoadScene($"Level_{levelNumber}");
    }

    public static void RestartCurrentScene()
    {
        LoadScene(SceneManager.GetActiveScene().name);
    }

    public static void Quit()
    {
        #if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
        #else
            Application.Quit();
        #endif
    }
}

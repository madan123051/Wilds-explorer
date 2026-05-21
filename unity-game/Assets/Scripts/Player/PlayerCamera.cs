using UnityEngine;

public class PlayerCamera : MonoBehaviour
{
    [Header("Camera Settings")]
    [SerializeField] Transform playerTransform;
    [SerializeField] float distance = Constants.CAMERA_DISTANCE;
    [SerializeField] float height = Constants.CAMERA_HEIGHT;
    [SerializeField] float smoothSpeed = 5f;
    [SerializeField] float rotationSensitivity = 100f;
    
    private Vector3 offset;
    private float rotationX = 0f;
    private float rotationY = 0f;
    
    private void Start()
    {
        if (playerTransform == null)
            playerTransform = GetComponentInParent<Transform>();
        
        offset = new Vector3(0, height, -distance);
    }
    
    private void LateUpdate()
    {
        if (playerTransform == null) return;
        
        Vector3 targetPosition = playerTransform.position + offset;
        transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * smoothSpeed);
        transform.LookAt(playerTransform.position + Vector3.up * height);
    }
    
    public void SetDistance(float newDistance)
    {
        distance = newDistance;
        offset = new Vector3(0, height, -distance);
    }
}

using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement")]
    [SerializeField] float moveSpeed = Constants.PLAYER_SPEED;
    [SerializeField] float groundDrag = Constants.GROUND_DRAG;
    [SerializeField] CharacterController characterController;
    
    [Header("Ground Check")]
    [SerializeField] float groundDrag_grounded = 3f;
    [SerializeField] float groundDrag_air = 0.4f;
    [SerializeField] bool isGrounded = true;
    
    private Vector3 moveDirection;
    private Vector3 velocity;
    private float horizontalInput;
    private float verticalInput;
    
    private void Start()
    {
        if (characterController == null)
            characterController = GetComponent<CharacterController>();
    }
    
    private void Update()
    {
        if (!GameManager.Instance.isGameActive) return;
        
        HandleInput();
        HandleMovement();
        HandleGravity();
    }
    
    private void HandleInput()
    {
        horizontalInput = Input.GetAxisRaw("Horizontal");
        verticalInput = Input.GetAxisRaw("Vertical");
    }
    
    private void HandleMovement()
    {
        moveDirection = new Vector3(horizontalInput, 0f, verticalInput).normalized;
        
        if (moveDirection.magnitude >= 0.1f)
        {
            Vector3 moveVelocity = moveDirection * moveSpeed;
            moveVelocity.y = velocity.y;
            characterController.Move(moveVelocity * Time.deltaTime);
        }
    }
    
    private void HandleGravity()
    {
        if (characterController.isGrounded)
        {
            isGrounded = true;
            velocity.y = -2f;
        }
        else
        {
            isGrounded = false;
            velocity.y += Constants.GRAVITY * Time.deltaTime;
        }
    }
    
    public Vector3 GetVelocity() => velocity;
    public bool IsMoving() => moveDirection.magnitude > 0.1f;
}

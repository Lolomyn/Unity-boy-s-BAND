using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasketBall : MonoBehaviour
{
    private Vector3 startPosition;
    // Start is called before the first frame update
    void Start()
    {
        startPosition = transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        if (transform.position.y <= -1f)
        {
            transform.position = startPosition;
            GetComponent<Rigidbody>().velocity = Vector3.zero;
        }
    }
}

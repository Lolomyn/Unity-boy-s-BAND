using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BCounter_duga : MonoBehaviour
{
    public static int Score_duga;
    public void OnTriggerExit(Collider variable)
    {
        Score_duga = 3;
    }
}

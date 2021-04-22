using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BCounter_duga : MonoBehaviour
{
    public static int Score_duga;
    public void OnTriggerExit(Collider variable)
    {
        Score_duga = 3;
        print(Score_duga);
        StartCoroutine(Coroutine());
    }  

    private IEnumerator Coroutine()
    {
        yield return new WaitForSeconds(1.5f);
        Score_duga = 2;
        print(Score_duga);
    }
}

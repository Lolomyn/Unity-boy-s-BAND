using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace ScoreVR
{
    public class BCounter : MonoBehaviour
    {
        public static int Score;

        public void OnTriggerExit(Collider variable)
        {
            Score = 2;
        }
    }
}
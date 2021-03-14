using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace ScoreVR
{
    public class BCounter : MonoBehaviour
    {
        public static int Score;
        //void OnGUI()
        //{
        //    GUI.Label(new Rect(900, 10, 100, 100), "Score: " + Score);
        //}

        public void OnTriggerExit(Collider variable)
        {
            Score = 2;
        }
    }
}
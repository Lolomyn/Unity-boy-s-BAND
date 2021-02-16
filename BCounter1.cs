using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace ScoreVR
{
    public class BCounter : MonoBehaviour
    {
        public static int Score;
        // Start is called before the first frame update
        void Start()
        {
        }

        void OnGUI()
        {
            GUI.Label(new Rect(900, 10, 100, 100), "Score: " + Score);
        }

        // Update is called once per frame
        void Update()
        {
        }

        public void OnTriggerExit(Collider variable)
        {
            Score++;
        }
    }
}
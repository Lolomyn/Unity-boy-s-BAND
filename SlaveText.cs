using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using ScoreVR;

public class SlaveText : MonoBehaviour
{
    public TMP_Text score_text;
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        score_text.text = "Score=" + BCounter.Score;
    }
}

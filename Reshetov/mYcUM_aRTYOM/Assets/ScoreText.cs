using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using ScoreVR;

public class ScoreText : MonoBehaviour
{
    public TMP_Text score_text;
    int temp_score_default = 0;
    int temp_score_duga = 0;

    void Update()
    {
        if (BCounter.Score == 2 && BCounter_duga.Score_duga != 3)
        {
            temp_score_default += 2;
            score_text.text = "Score: " + temp_score_default;
            temp_score_duga = temp_score_default;
            BCounter.Score = 0;
        }
        else if (BCounter.Score == 2 && BCounter_duga.Score_duga == 3)
        {
            temp_score_duga += 3;
            score_text.text = "Score: "+ temp_score_duga;
            temp_score_default = temp_score_duga;
            BCounter.Score = 0;
            BCounter_duga.Score_duga = 0; 
        }
    }
}
package com.ndkapp.www.mediconsult;

import androidx.appcompat.app.AppCompatActivity;


import android.content.Intent;
import android.os.Bundle;

import android.text.method.ScrollingMovementMethod;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class Treatment extends AppCompatActivity {
    TextView treatment,medcon,treatdesc,poss,head;
    AccessToken key;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_treatment);
        Intent intent = getIntent();
        Issue issue = new Issue();
        key = new AccessToken();
        issue.Name = intent.getStringExtra("Name");
        head=findViewById(R.id.head);
        head.setText(issue.Name);
        issue.ID = intent.getStringExtra("ID");
        issue.ProfName = intent.getStringExtra("ProfName");
        String url=intent.getStringExtra("url");
        medcon=findViewById(R.id.medcon);
        treatment = findViewById(R.id.treatment);
        poss = findViewById(R.id.poss);
        treatdesc = findViewById(R.id.treatdesc);
        myissue(url);

    }

    void myissue(String issueurl)
    {
        RequestQueue queue = Volley.newRequestQueue(this);
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, issueurl, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject object) {
                        try {
                            String desc="";
                            String m="";
                            String ps="";
                            String td="";
                            desc= object.getString("Description");
                            treatment.setText(desc);
                            m=object.getString("MedicalCondition");
                            medcon.setText(m);
                            ps=object.getString("PossibleSymptoms");
                            poss.setText(ps);
                            td=object.getString("TreatmentDescription");
                            treatdesc.setText(td);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }
                        , new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                    }
                });
        queue.add(jsonObjectRequest);

    }
}

package com.ndkapp.www.mediconsult;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
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

import java.util.ArrayList;

public class MainActivity2 extends AppCompatActivity {

    Button search;
    EditText symptom;
    TextView head;
    ArrayList<String> Issue_Names;
    ArrayList<String> Issue_ID;
    ListView list;
    AccessToken key;
    ArrayAdapter<String> itemsAdapter;
    String keyword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        key = new AccessToken();
        search = findViewById(R.id.search);
        symptom = findViewById(R.id.symptoms);
        head=findViewById(R.id.nametext);
        list = findViewById(R.id.list);
        Issue_Names = new ArrayList<String>();
        Issue_ID = new ArrayList<String>();
        String name = getIntent().getStringExtra("name");
        String gender = getIntent().getStringExtra("gender");
        head.setText(gender+" "+name+" you may have...");
        keyword = "";
        itemsAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1,Issue_Names);

        list.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> a, View v, int position, long id) {
                TextView txt = (TextView)v.findViewById(android.R.id.text1);
                Intent intent = new Intent(MainActivity2.this, Treatment.class);
                intent.putExtra("Name",txt.getText());
                String iid = Issue_ID.get(position);
                intent.putExtra("ID",iid);
                String issueurl = "https://sandbox-healthservice.priaid.ch/issues/"+iid+"/info?token="+key.Token+"&format=json&language=en-gb";
                intent.putExtra("url",issueurl);
                SIssue(issueurl,intent);
            }
        });


        search.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                symptom.setHint("SYMPTOM");
                if (!(String.valueOf(symptom.getText()).replace(" ", "").equalsIgnoreCase(keyword.replace(" ", "")))) {
                    Issue_Names.clear();
                    Issue_ID.clear();
                    itemsAdapter.clear();
                    keyword = String.valueOf(symptom.getText());
                    SSymptom(keyword);
                }
            }
        });
    }

    void SSymptom(final String keyword) {
        String symurl = "https://sandbox-healthservice.priaid.ch/symptoms?token=" + key.Token + "&format=json&language=en-gb";
        RequestQueue queue = Volley.newRequestQueue(this);
        JsonArrayRequest jsonArrayRequest = new JsonArrayRequest
                (Request.Method.GET, symurl, null, new Response.Listener<JSONArray>() {

                    @Override
                    public void onResponse(JSONArray array) {
                        String diagurl = "";
                        String name = "";
                        for (int i = 0; i < array.length(); i++) {
                            JSONObject currObject = null;
                            try {
                                currObject = array.getJSONObject(i);
                                name = currObject.getString("Name");
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            if (name.replace(" ", "").equalsIgnoreCase(keyword.replace(" ", ""))||keyword.toLowerCase().contains(name.toLowerCase())) {
                                try {
                                    diagurl = "https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[" + currObject.getString("ID") + "]&gender=male&year_of_birth=1997&token=" + key.Token + "&format=json&language=en-gb";
                                    SDiagnosis(diagurl);
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                                break;
                            }
                        }
                        if (diagurl.isEmpty()) {
                            symptom.setText("Wrong Input!");
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error

                    }
                });
        queue.add(jsonArrayRequest);
    }

    void SDiagnosis(final String diagurl) {
        RequestQueue queue = Volley.newRequestQueue(this);
        JsonArrayRequest jsonArrayRequest = new JsonArrayRequest
                (Request.Method.GET, diagurl, null, new Response.Listener<JSONArray>() {

                    @Override
                    public void onResponse(JSONArray array) {

                        for (int i = 0; i < array.length(); i++) {
                            JSONObject currObject = null;
                            try {
                                currObject = array.getJSONObject(i).getJSONObject("Issue");
                                Issue_Names.add(currObject.getString("Name"));
                                Issue_ID.add(currObject.getString("ID"));

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }
                        list.setAdapter(itemsAdapter);
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        // TODO: Handle error
                    }
                });
        queue.add(jsonArrayRequest);
    }

    void SIssue(String issueurl,final Intent intent)
    {
        RequestQueue queue = Volley.newRequestQueue(this);
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, issueurl, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject object) {
                        try {
                            intent.putExtra("ProfName",object.getString("ProfName"));
                            startActivity(intent);
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
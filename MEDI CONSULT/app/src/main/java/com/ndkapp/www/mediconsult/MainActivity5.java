package com.ndkapp.www.mediconsult;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class MainActivity5 extends AppCompatActivity {

    TextView txt;
    String names;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main5);

        txt = findViewById(R.id.txtname);

        Bundle bundle = getIntent().getExtras();
        names = bundle.getString("name");
        txt.setText(names);
    }
}
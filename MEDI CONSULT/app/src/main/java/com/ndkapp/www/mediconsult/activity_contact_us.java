package com.ndkapp.www.mediconsult;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

public class activity_contact_us extends AppCompatActivity {

    TextView t1;
    TextView t2;
    TextView t3;
    ImageView i1;
    ImageView i2;
    ImageView i3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_us);

        t1 = findViewById(R.id.call_cs);
        t2 = findViewById(R.id.mail_cs);
        t3 = findViewById(R.id.map_cs);
        i1 = findViewById(R.id.final_call);
        i2 = findViewById(R.id.final_mail);
        i3 = findViewById(R.id.final_map);

        t1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(Intent.ACTION_DIAL,
                        Uri.parse("tel:+918888888888"));
                startActivity(i);
            }
        });

        i1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(Intent.ACTION_DIAL,
                        Uri.parse("tel:+918888888888"));
                startActivity(i);
            }
        });

        t2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Intent.ACTION_VIEW,
                        Uri.parse("mailto:" + "medi.consult@gmail.com"));
                startActivity(i);
            }
        });

        i2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(Intent.ACTION_VIEW,
                    Uri.parse("mailto:" + "medi.consult@gmail.com"));
                startActivity(i);
            }
        });

        t3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent bIntent = new Intent(Intent.ACTION_VIEW,
                        Uri.parse("https://www.google.com/maps/place/Shri+Ramdeobaba+College+of+Engineering+and+Management/@21.1766214,79.0594336,17z/data=!3m1!4b1!4m5!3m4!1s0x3bd4c1a8970c08e9:0xfe4a9c97e7e671cb!8m2!3d21.1766214!4d79.0616223"));
                startActivity(bIntent);
            }
        });

        i3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent bIntent = new Intent(Intent.ACTION_VIEW,
                        Uri.parse("https://www.google.com/maps/place/Shri+Ramdeobaba+College+of+Engineering+and+Management/@21.1766214,79.0594336,17z/data=!3m1!4b1!4m5!3m4!1s0x3bd4c1a8970c08e9:0xfe4a9c97e7e671cb!8m2!3d21.1766214!4d79.0616223"));
                startActivity(bIntent);
            }
        });
    }
}

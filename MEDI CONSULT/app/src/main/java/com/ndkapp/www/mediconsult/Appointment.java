package com.ndkapp.www.mediconsult;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.DatePicker;
import android.widget.EditText;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Appointment extends AppCompatActivity {

    EditText ed;
    DatePickerDialog picker;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_appointment);

        ed= findViewById(R.id.date);
        ed.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                final Calendar cldr = Calendar.getInstance();
                int day = cldr.get(Calendar.DAY_OF_MONTH);
                int month = cldr.get(Calendar.MONTH);
                int year = cldr.get(Calendar.YEAR);
                picker = new DatePickerDialog(Appointment.this,
                        new DatePickerDialog.OnDateSetListener() {
                            @Override
                            public void onDateSet(DatePicker datePicker, int year, int month, int day) {
                                ed.setText(day + "/" + (month + 1) + "/" + year);
//                                Calendar dob = new GregorianCalendar(year, month, day);
//                                Calendar currentDate = new GregorianCalendar();
//                                int age = currentDate.get(Calendar.YEAR) - dob.get(Calendar.YEAR);
                            }
                        },year,month,day);
                picker.show();
            }
        });
    }
}
#include <Servo.h>

void setup()
{
  pinMode(1, OUTPUT);
  Serial.begin(9600);
  Serial.println("Beep!");  

  tone(4, 3000, 1000);
  delay(1000);
}  
 
void loop()
{         
  Serial.println("Waiting for reset...");
  delay(1000);
}

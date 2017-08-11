#include <Servo.h>

int ledPin = 13;
void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(3, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);   
  delay(500);              
  digitalWrite(ledPin, LOW);
  delay(500);   
  digitalWrite(10, LOW);   
  delay(500);              
  digitalWrite(10, HIGH);
  delay(500);  
  digitalWrite(3, HIGH);
  delay(500);
  digitalWrite(3, LOW);
  delay(500);               
}


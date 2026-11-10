import datetime

from django.db import models
from django.contrib.auth import  get_user_model
# Create your models here.
class Patient(models.Model):
    patient_no=models.CharField(null=False,blank=False)
    name=models.CharField(max_length=25)
    Dob=models.DateField()
    sex=models.CharField(max_length=25,default='M')
    mobile=models.CharField(max_length=12,db_index=True)
    mobile2=models.CharField(max_length=12)
    email=models.EmailField(null=True,blank=True)
    Address=models.TextField(null=False,blank=False)
    emergency_contact=models.CharField(max_length=15)
    blood=models.CharField(null=False,blank=False,db_index=True)
    clinical_alerts=models.CharField()
    is_active=models.BooleanField(default=True)
    def __str__(self):
        return  self.name
class Patientcard(models.Model):
    User=get_user_model()
    patient=models.ForeignKey(Patient, related_name='patient_card',on_delete=models.CASCADE)
    card_no=models.CharField(null=False,blank=False)
    issue_date=models.DateTimeField(auto_now_add=True)
    status=models.CharField(choices=(('pending','Pending'),('confirmed','Confirmed'),('cancelled','Cancelled')))
    replacement_link=models.CharField(null=True,blank=True)
    issued_by=models.ForeignKey(User,related_name='patient',on_delete=models.SET_NULL,null=True)

    class Meta:
        constraints=[
            models.UniqueConstraint(fields=['patient'],name='unique_constraint_patientcard')
        ]





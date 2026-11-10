from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    roles=(
    ('admin','Admin'),
    ('doctor','Doctor'),
    ('pharmacist','Pharmacist'),
    ('front_officer','Front Officer'),
    ('nurse','Nurse'),
    ('purchase_manager','Purchase Manager'),
    )
    role=models.CharField(max_length=20,choices=roles)

    def __str__(self):
        return self.username
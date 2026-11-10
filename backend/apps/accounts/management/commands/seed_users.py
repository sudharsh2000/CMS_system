from sys import stdout

from django.core.management.base import BaseCommand
from django.contrib.auth import  get_user_model

class Command(BaseCommand):
    help = 'Seed users into the database'

    def handle(self, *args, **kwargs):
        User = get_user_model()

        users_list = [
            {
                'username': 'front_officer',
                'email': 'front_officer@example.com',
                'password': 'FrontOfficer@123',
                'role': 'front_officer'
            },
            {
                'username': 'doctor',
                'email': 'doctor@example.com',
                'password': 'Doctor@123',
                'role': 'doctor'
            },
            {
                'username': 'pharmacist',
                'email': 'pharmacist@example.com',
                'password': 'Pharmacist@123',
                'role': 'pharmacist'
            },
            {
                'username': 'nurse',
                'email': 'nurse@example.com',
                'password': 'Nurse@123',
                'role': 'nurse'
            },
            {
                'username': 'purchase_manager',
                'email':'purchase_manager@example.com',
                'password': 'PurchaseManager@123',
                'role': 'purchase_manager'
            }
        ]

        # Create a superuser
        for user in users_list:

                    User.objects.get_or_create(
                        username=user['username'],
                        email=user['email'],
                        password=user['password'],
                        role=user['role']
                    )
        stdout.write(self.style.SUCCESS('Successfully seeded users into the database.'))
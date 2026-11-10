from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Seed users into the database'

    def handle(self, *args, **kwargs):
        User = get_user_model()
        # Create a superuserss
        if not User.objects.filter(username='admin').exists():
            User.objects.create_user('admin', 'admin@example.com', 'Admin@123',is_superuser=True)
        self.stdout.write(self.style.SUCCESS('Users seeded successfully.'))
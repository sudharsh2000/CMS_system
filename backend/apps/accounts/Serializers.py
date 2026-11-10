from typing import Any

from rest_framework import serializers
from .models import User

class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role','password']
        extra_kwargs = {'password': {'write_only': True},
                        'id': {'read_only': True}}
        def validate_password(self, value):
            if len(value) < 8:
                raise serializers.ValidationError("Password must be at least 8 characters long.")
            if not any(char.isdigit() for char in value):
                raise serializers.ValidationError("Password must contain at least one digit.")
            if not any(char.isalpha() for char in value):
                raise serializers.ValidationError("Password must contain at least one letter.")
            if not any(char.isupper() for char in value):
                raise serializers.ValidationError("Password must contain at least one uppercase letter.")
            # You can add custom password validation logic here if needed
            return value

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                raise serializers.ValidationError("Invalid username or password.")

            if not user.check_password(password):
                raise serializers.ValidationError("Invalid username or password.")
        else:
            raise serializers.ValidationError("Both username and password are required.")

        attrs['user'] = user
        return attrs
class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)




    def validate_new_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("New password must be at least 8 characters long.")
        if not any(char.isdigit() for char in value):
            raise serializers.ValidationError("New password must contain at least one digit.")
        if not any(char.isalpha() for char in value):
            raise serializers.ValidationError("New password must contain at least one letter.")
        if not any(char.isupper() for char in value):
            raise serializers.ValidationError("New password must contain at least one uppercase letter.")
        # You can add custom password validation logic here if needed
        return value


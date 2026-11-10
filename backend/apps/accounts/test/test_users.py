

import pytest
from django.contrib.auth import get_user, get_user_model
from rest_framework.test import APIClient

@pytest.fixture()
def api_client():

    return APIClient()

@pytest.mark.django_db
def test_user_login(api_client):
    User=get_user_model()
    url = '/accounts/api/login/'
    User.objects.create_user(username='Admin', password='Admin@123', role='admin')
    data = {
        'username': 'Admin',
        'password': 'Admin@123'
    }
    response =api_client.post(url, data, format='json')
    print(response.status_code)
    assert response.status_code == 200


    assert  'refresh_token' in response.cookies
    assert 'access_token' in response.data
@pytest.mark.parametrize("role_to_create", ['admin', 'front_officer', 'doctor','nurse','pharmacist','purchase_manager'])
@pytest.mark.django_db
def test_create_user(api_client, role_to_create):
    User=get_user_model()
    url = '/accounts/api/users/'
    user = User.objects.create_user(username='Admin', password='Admin@123', role='admin')
    api_client.force_authenticate(user=user)

    data = {
        'username': f'{role_to_create}_user',
        'email': f'{role_to_create}@example.com',
        'password': f'{role_to_create}S@123',
        'role': role_to_create
    }
    response = api_client.post(url, data, format='json')
    assert response.status_code == 201
    assert response.data['username'] == f'{role_to_create}_user'
    assert response.data['email'] ==f'{role_to_create}@example.com'
    assert response.data['role'] == role_to_create

@pytest.mark.django_db
def test_get_users_byAdmin(api_client):
    User=get_user_model()
    User.objects.create_user(username='front_officer',password='Front_officer@123',role='front_officer')
    User.objects.create_user(username='doctor', password='Doctor@123', role='doctor')
    User.objects.create_user(username='nurse', password='Nurse@123', role='nurse')
    user=User.objects.create_user(username="Admin",password="Admin@123",role='admin')
    api_client.force_authenticate(user)
    response=api_client.get('/accounts/api/users/',format="json")
    assert response.status_code ==200
    assert  len(response.data) >=3
@pytest.mark.django_db
def test_change_password_byUser(api_client):
    url='/accounts/api/change-password/'

    User=get_user_model()

    User.objects.create_user(username='doctor', password='Doctor@123', role='doctor')

    api_client.force_authenticate(User)
    response=api_client.post(url,data={
        'old_password':"Doctor@123",
        'new_password':"Doctor@1234"

    },format='json')
    assert  response.status_code == 200





from django.contrib.auth.base_user import AbstractBaseUser
from django.shortcuts import render
from drf_spectacular.utils import extend_schema
from rest_framework.response import Response
from rest_framework.views import APIView
from  rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.tokens import RefreshToken

from .Serializers import Userserializer, LoginSerializer, PasswordChangeSerializer
from common.permissions import ISadmin
from .models import User

# Create your views here.
class USerView(ModelViewSet):
    permission_classes = [ISadmin]
    serializer_class = Userserializer
    queryset = User.objects.all()
@extend_schema(request=LoginSerializer,responses=LoginSerializer)
class LoginView(APIView):
    def post(self,request):
        serializer=LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        refresh=RefreshToken.for_user(user)
        response=Response({"message":"Login successful","access_token":str(refresh.access_token),"id":user.id, "username":user.username,"role":user.role})
        response.set_cookie(key='refresh_token',value=str(refresh),httponly=True,max_age=12*24*60*60)
        return response
class RefreshTokenView(APIView):
    def post(self,request):
        refresh_token=request.COOKIES.get('refresh_token')
        if not refresh_token:
            return Response({"error":"Refresh token not found"},status=400)
        try:
            refresh=RefreshToken(refresh_token)
            access_token=str(refresh.access_token)
            response=Response({"access_token":access_token})
            return response
        except Exception as e:
            return Response({"error":"Invalid refresh token"},status=400)
class LogoutView(APIView):
    def post(self,request):
        refresh_token=request.COOKIES.get('refresh_token')
        if not refresh_token:
            return Response({"error":"Refresh token not found"},status=400)
        try:
            refresh=RefreshToken(refresh_token)
            refresh.blacklist()
            response=Response({"message":"Logout successful"})
            response.delete_cookie('refresh_token')

            return response
        except Exception as e:
            return Response({"error":"Invalid refresh token"},status=400)
# class ChangepasswordView(APIView):
#     def post(self,request):
#         serializer=PasswordChangeSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user=request.user
#
#
#         new_password=serializer.validated_data['new_password']
#         old_password=serializer.validated_data['old_password']
#         if not user.check_password(str(old_password)):
#             return Response({"error":"Old password is incorrect"},status=400)
#
#         user.set_password(new_password)
#         user.save()
#
#         return Response({"message":"Password changed successfully"})
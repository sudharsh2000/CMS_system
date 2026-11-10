from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import USerView, LoginView,RefreshTokenView,LogoutView


router = DefaultRouter()
router.register(r'users', USerView)



urlpatterns=[
    path('api/', include(router.urls)),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/refresh/', RefreshTokenView.as_view(), name='refresh'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    # path('api/change-password/', ChangepasswordView.as_view(), name='change-password')
]
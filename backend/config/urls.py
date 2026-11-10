"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

from .health import health_check

urlpatterns = [
    path('admin/', admin.site.urls),
    path('health/', health_check, name='health_check'),
    path('accounts/', include('apps.accounts.urls')),
    path('audit/', include('apps.audit.urls')),
    path('billing/', include('apps.billing.urls')),
    path('clinical/', include('apps.clinical.urls')),
    path('inventory/', include('apps.inventory.urls')),
    path('patients/', include('apps.patients.urls')),
    path('pharmacy/', include('apps.pharmacy.urls')),
    path('reporting/', include('apps.reporting.urls')),

    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),

    # 2. Swagger UI (ഏറ്റവും ജനപ്രിയമായ ഇന്ററാക്ടീവ് പേജ്)
    path('api/docs/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # 3. Redoc UI (മറ്റൊരു തരം മനോഹരമായ ലേഔട്ട് - ഓപ്ഷണൽ ആണ്)
    path('api/docs/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

]

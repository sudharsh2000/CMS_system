from rest_framework.permissions import BasePermission


class ISadmin(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == 'admin')
class IsDoctor(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == 'doctor')
class IsPharmacist(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == 'pharmacist')
class IsFrontOfficer(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == 'front_officer')
class IsNurse(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == 'nurse')
class IsPurchaseManager(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == 'purchase_manager')
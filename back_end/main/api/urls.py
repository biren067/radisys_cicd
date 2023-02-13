
from django.urls import path
from . import views

urlpatterns = [
    path('rubuild/', views.intel_ru_build),
]

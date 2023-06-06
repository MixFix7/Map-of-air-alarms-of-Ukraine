from django.urls import path
from .views import *

urlpatterns = [
    path('', Map.as_view(), name="home")
]
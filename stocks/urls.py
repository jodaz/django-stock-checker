from django.urls import path
from . import views

urlpatterns = [
    path('api/stock-prices/', views.StockListCreate.as_view()),
]


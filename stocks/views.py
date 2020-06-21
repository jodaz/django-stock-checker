from .models import Stock
from .serializers import StockSerializer
from rest_framework import generics

class StockListCreate(generics.ListCreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


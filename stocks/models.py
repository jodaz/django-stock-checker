from django.db import models

class Stock(models.Model):
    name = models.CharField(max_length=10)
    votes = models.IntegerField(default=0)

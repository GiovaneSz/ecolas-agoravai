 
from django.shortcuts import render
from rest_framework import viewsets
from escola.models import Escola
from escola.serializers import EscolaSerializer
from doador.models import Doador
from doador.serializers import DoadorSerializer

# Create your views here.

class EscolaViewSet(viewsets.ModelViewSet):
    queryset = Escola.objects.all()
    serializer_class = EscolaSerializer

class DoadorViewSet(viewsets.ModelViewSet):
    queryset = Doador.objects.all()
    serializer_class = DoadorSerializer

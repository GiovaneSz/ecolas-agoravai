from rest_framework import serializers
from escola.models import Escola
from doador.models import Doador

class EscolaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Escola
        fields = ['id', 'nome', 'email', 'telefone', 'endereco', 'senha']

class DoadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doador
        fields = ['id', 'nome', 'email', 'telefone', 'senha']
from rest_framework import serializers
from .models import Patrimonio, Ambientes, Manutentores, Gestores, OrdemServico


class PatrimoniosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patrimonio
        fields = '__all__'


class AmbientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambientes
        fields = ['ni', 'nome']  # Corrigido



class GestoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestores
        fields = '__all__'

class ManutentoresSerializer(serializers.ModelSerializer):
    gestor = serializers.PrimaryKeyRelatedField(queryset=Gestores.objects.all())

    class Meta:
        model = Manutentores
        fields = '__all__'

class GestoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestores
        fields = ['ni', 'nome', 'area', 'cargo']


class OrdemServicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdemServico
        fields = ['id', 'descri', 'abert', 'fecha', 'status', 'patri', 'ambi', 'manu', 'respo', 'prio']

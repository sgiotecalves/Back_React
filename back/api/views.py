from rest_framework import generics
from .models import Patrimonio, Ambientes, Manutentores, Gestores, OrdemServico
from .serializers import (
    PatrimoniosSerializer,
    AmbientesSerializer,
    ManutentoresSerializer,
    GestoresSerializer,
    OrdemServicoSerializer
)

class PatrimoniosListCreate(generics.ListCreateAPIView):
    queryset = Patrimonio.objects.all()
    serializer_class = PatrimoniosSerializer

class AmbientesListCreate(generics.ListCreateAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = AmbientesSerializer

class ManutentoresListCreate(generics.ListCreateAPIView):
    queryset = Manutentores.objects.all()
    serializer_class = ManutentoresSerializer

class GestoresListCreate(generics.ListCreateAPIView):
    queryset = Gestores.objects.all()
    serializer_class = GestoresSerializer

class OrdemServicoListCreate(generics.ListCreateAPIView):
    queryset = OrdemServico.objects.all()
    serializer_class = OrdemServicoSerializer

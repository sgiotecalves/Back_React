from django.urls import path
from .views import (
    PatrimoniosListCreate,
    AmbientesListCreate,
    ManutentoresListCreate,
    GestoresListCreate,
    OrdemServicoListCreate,
)

urlpatterns = [
    path('patrimonios/', PatrimoniosListCreate.as_view(), name='patrimonios-list-create'),
    path('ambientes/', AmbientesListCreate.as_view(), name='ambientes-list-create'),
    path('manutentores/', ManutentoresListCreate.as_view(), name='manutentores-list-create'),
    path('gestores/', GestoresListCreate.as_view(), name='gestores-list-create'),
    path('ordem-servico/', OrdemServicoListCreate.as_view(), name='ordemservico-list-create'),
    path('ambientes/', AmbientesListCreate.as_view(), name='ambientes-list-create'),
    path('manutentores/', ManutentoresListCreate.as_view(), name='manutentores-list-create'),
]

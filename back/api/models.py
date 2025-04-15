from django.db import models


class Patrimonio(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField(default="Sem descrição")
    localizacao = models.CharField(max_length=255, default="Não informado")


    def __str__(self):
        return self.nome


class Ambientes(models.Model):
    ni = models.CharField(max_length=10)
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome



class Manutentores(models.Model):
    ni = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    area = models.CharField(max_length=255)
    gestor = models.CharField(max_length=255)

    def __str__(self):
        return self.nome



class Gestores(models.Model):
    ni = models.CharField(max_length=20)
    nome = models.CharField(max_length=100)
    area = models.CharField(max_length=100, null=True, blank=True)
    cargo = models.CharField(max_length=100, null=True, blank=True)


    def __str__(self):
        return self.nome
    
class Manutentores(models.Model):
    ni = models.CharField(max_length=20, unique=True)
    nome = models.CharField(max_length=100)
    area = models.CharField(max_length=100)
    gestor = models.ForeignKey(Gestores, on_delete=models.CASCADE, related_name='manutentores')

    def __str__(self):
        return f"{self.nome} ({self.ni})"


class OrdemServico(models.Model):
    descri = models.TextField()
    abert = models.DateTimeField(auto_now_add=True)
    fecha = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=[
        ('iniciada', 'Iniciada'),
        ('em_andamento', 'Em andamento'),
        ('finalizada', 'Finalizada'),
        ('cancelada', 'Cancelada')
    ])
    patri = models.ForeignKey(Patrimonio, on_delete=models.SET_NULL, null=True, blank=True)
    ambi = models.ForeignKey(Ambientes, on_delete=models.CASCADE)
    manu = models.ForeignKey(Manutentores, on_delete=models.CASCADE)
    respo = models.ForeignKey(Gestores, on_delete=models.SET_NULL, null=True, blank=True)
    prio = models.CharField(max_length=10, choices=[
        ('alta', 'Alta'),
        ('media', 'Média'),
        ('baixa', 'Baixa')
    ])

    def __str__(self):
        return f"OS #{self.id} - {self.status}"

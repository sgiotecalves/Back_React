# Generated by Django 5.1.5 on 2025-04-08 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_patrimonio_descricao'),
    ]

    operations = [
        migrations.AddField(
            model_name='patrimonio',
            name='localizacao',
            field=models.CharField(default='Não informado', max_length=255),
        ),
        migrations.AlterField(
            model_name='patrimonio',
            name='descricao',
            field=models.TextField(default='Sem descrição'),
        ),
    ]

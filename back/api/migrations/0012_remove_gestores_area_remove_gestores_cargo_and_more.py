# Generated by Django 5.1.5 on 2025-04-09 19:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_ambientes_ni_alter_ambientes_nome'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gestores',
            name='area',
        ),
        migrations.RemoveField(
            model_name='gestores',
            name='cargo',
        ),
        migrations.RemoveField(
            model_name='gestores',
            name='ni',
        ),
        migrations.AlterField(
            model_name='gestores',
            name='nome',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='manutentores',
            name='area',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='manutentores',
            name='gestor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='manutentores', to='api.gestores'),
        ),
        migrations.AlterField(
            model_name='manutentores',
            name='ni',
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='manutentores',
            name='nome',
            field=models.CharField(max_length=100),
        ),
    ]

# Generated by Django 2.1.7 on 2019-07-07 03:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('honor', '0005_alter_honor_goods_head_img_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='class_id',
            field=models.ForeignKey(help_text='所属分类', on_delete=django.db.models.deletion.CASCADE, to='honor.GoodsClass', verbose_name='class_id'),
        ),
    ]

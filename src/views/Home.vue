<template>
    <v-card
    class="px-5">
      <p>
        <span class="bold-header">
          Предмет учебного курса:
        </span>«Обучение PostgreSQL».
      </p>
      <p>
        <span class="bold-header">
        Цель изучения данного учебного курса:        
      </span>
       формирование современных теоретических знаний, приобретение умений и навыков, позволяющих владеть на практике основными приемами и методами по управлению базами данных PostgreSQL.
      </p>
      <p>
        <span class="bold-header">
          Задачи данного учебного курса: 
        </span>
        <ul>
          <li>Освоить базовые принципы работы с PostgreSQL, а именно умение манипулирования основных объектов БД, программирование на языках запросов SQL и PL/pgSQL.</li>
          <li>Уметь организовывать взаимодействие PostgreSQL с клиентской частью приложений. </li>
        </ul>
      </p>
      <p>
        <span class="bold-header">
          Перечень знаний умений и навыков, приобретаемых при изучении курса:
        </span>
        <ul>
          <li>История и архитектура PostgreSQL;</li>
          <li>Основные типы данных PostgreSQL;</li>
          <li>Проектирование и создание объектов базы данных и взаимосвязи между ними;</li>
          <li>Адаптация структуры базы данных под вновь возникающие требования;</li>
        </ul>
      </p>
      <p>
        <span class="bold-header">
          Основные результаты деятельности обучения по данному курсу:
        </span>
        <ul>
          <li>Базовое умение администрации СУБД PostgreSQL;</li>
          <li>Умение организовывать сложные запросы;</li>
          <li>Умение интегрировать базу данных PostgreSQL к клиентскому приложению;</li>
        </ul>
      </p>
      <p>
        <span class="bold-header">
          Основные дидактические единицы:
        </span>

        <v-container class="grey lighten-5">
          <v-row
            no-gutters
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              Раздел курса
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              Количество академических часов
              </v-card>
            </v-col>
          </v-row>
          <v-row
            no-gutters
            class="d-flex  align-stretch"
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              История и архитектура PostgreSQL. Установка и базовые принципы администрирования PostgreSQL на Windows и Linux
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
                style="height: 100%"
              >
              2
              </v-card>
            </v-col>
          </v-row>
          <v-row
            no-gutters
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              Базы данных, таблицы, наполнение таблиц, простые запросы, изменение и удаление данных.  Соединения и подзапросы, группировки и сортировки
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2 align-self-auto"
                outlined
                tile
                style="height: 100%"
              >
              2
              </v-card>
            </v-col>
          </v-row>
          <v-row
            no-gutters
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              Работа с демонстрационной базой данных. Оконные и агрегатные функции
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2 align-self-auto"
                outlined
                tile
                style="height: 100%"
              >
              2
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </p>
      <p>
        <span class="bold-header">
          Список рекомендуемых источников
        </span>
        <ol>
          <li>Документация PostgreSQL и Postgres Pro – URL: <a :href="'https://postgrespro.ru/docs'" target="_blank">https://postgrespro.ru/docs</a></li>
          <li>Новиков Б. А. Основы технологий баз данных: учеб. пособие / Б. А. Новиков, Е. А. Горшкова, Н. Г. Графеева; под ред. Е. В. Рогова. — 2-е изд. — М.: ДМК Пресс, 2020. — 582 с.</li>
          <li>Моргунов, Е. П. PostgreSQL. Основы языка SQL: учеб. пособие / Е. П. Моргунов; под ред. Е. В. Рогова, П. В. Лузанова. — СПб.: БХВ-Петербург, 2018. — 336 с.: ил</li>
          <li>Рогов Е. В. PostgreSQL изнутри. — М.: ДМК Пресс, 2022. — 660 с.</li>
          <li>Г. Гарсиа-Молина, Дж. Ульман, Дж. Уидом. Системы баз данных. Полный курс. М.:Вильямс, 2004</li>
        </ol>
      </p>
      <p>
        <span class="bold-header">
          О курсе
        </span>

        <v-container class="grey lighten-5">
          <v-row
            no-gutters
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              Раздел курса
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              Краткое содержание
              </v-card>
            </v-col>
          </v-row>
          <v-row
            no-gutters
            class="d-flex  align-stretch"
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
                style="height: 100%"
              >
              История и архитектура PostgreSQL. Установка и базовые принципы администрирования PostgreSQL на Windows и Linux
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
                style="height: 100%"
              >
              В данном разделе вы познакомитесь с краткой историей создания PostgreSQL, а также с её текущим состоянием. Узнаете в чём заключаются её сильные стороны. 
              В ходе практической части вы научитесь устанавливать СУБД PostgreSQL на свой ПК под ОС Windows или Linux.
              </v-card>
            </v-col>
          </v-row>
          <v-row
            no-gutters
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
                style="height: 100%"
              >
              Базы данных, таблицы, наполнение таблиц, простые запросы, изменение и удаление данных.  Соединения и подзапросы, группировки и сортировки
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2 align-self-auto"
                outlined
                tile
                style="height: 100%"
              >
              Соединения и подзапросы, группировки и сортировки	В данном разделе вы научитесь создавать свои собственные базы данных, таблицы. Сумеете правильно манипулировать данными внутри таблицы, а также создавать несложные запросы, содержащие в себе сортировки, группировки и подзапросы.
              </v-card>
            </v-col>
          </v-row>
          <v-row
            no-gutters
          >
            <v-col
            >
              <v-card
                class="pa-2"
                outlined
                tile
                style="height: 100%"
              >
              Работа с демонстрационной базой данных. Оконные и агрегатные функции
              </v-card>
            </v-col>

            <v-col
            >
              <v-card
                class="pa-2 align-self-auto"
                outlined
                tile
                style="height: 100%"
              >
              В данном разделе вы ознакомитесь с демонстрационной базой данных. Научитесь устанавливать сторонние БД и подключать их к PostgreSQL. Ознакомитесь со сложными запросами к таблицам, а также научитесь использовать оконные и агрегатные функции.
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </p>
      <h3>
        Перечни
      </h3>
      <p>
        <span class="bold-header">
          Перечень инструментальных средств
        </span>
        <ol>
          <li>ПК на ОС Windows/Linux;</li>
          <li>Виртуальная машина под ОС Linux;</li>
          <li>Любой текстовый редактор;</li>
          <li>СУБД PostgreSQL;</li>
        </ol>
      </p>
      <p>
        <span class="bold-header">
          Перечень рекомендуемых источников
        </span>
        <ol>
          <li>Документация PostgreSQL и Postgres Pro – URL: https://postgrespro.ru/docs</li>
          <li>Руководство по PostgreSQL – URL: https://metanit.com/sql/postgresql/</li>
          <li>Новиков Б. А. Основы технологий баз данных: учеб. пособие / Б. А. Новиков, Е. А. Горшкова, Н. Г. Графеева; под ред. Е. В. Рогова. — 2-е изд. — М.: ДМК Пресс, 2020. — 582 с.</li>
          <li>Моргунов, Е. П. PostgreSQL. Основы языка SQL: учеб. пособие / Е. П. Моргунов; под ред. Е. В. Рогова, П. В. Лузанова. — СПб.: БХВ-Петербург, 2018. — 336 с.: ил</li>
          <li>Рогов Е. В. PostgreSQL изнутри. — М.: ДМК Пресс, 2022. — 660 с.</li>
          <li>Г. Гарсиа-Молина, Дж. Ульман, Дж. Уидом. Системы баз данных. Полный курс. М.:Вильямс, 2004</li>
        </ol>
      </p>
      <p>
        <span class="bold-header">
          Формы итогового контроля
        </span>
        <p>
          Итоговый контроль достигается за счёт:
        </p>
        <ol>
          <li>Контрольных вопросов после каждого раздела;</li>
          <li>Задач для самостоятельного решения после каждого раздела;</li>
          <li>Контрольного тестирования по прохождению всех материалов курса;</li>
          <li>Проектного задания по прохождению всех материалов курса;</li>
        </ol>
      </p>
      <h3 style="text-align-last: right;">
        Курс подготовила магистр 309 группы Фильчукова Дарья
      </h3>
    </v-card>
</template>

<style src="@/assets/styles/common-styles.css">
</style>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

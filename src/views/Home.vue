<template>
    <v-card
    class="px-5">
      <p>
        <span class="bold-header">
          Предмет учебного курса:
        </span>«Обучение Flask».
      </p>
      <p>
        <span class="bold-header">
        Цель изучения данного учебного курса:        
      </span>
      Целью учебного курса является формирование современных теоретических знаний, приобретение умений и навыков, позволяющих владеть на практике основными приемами и методами построения web-приложений на фреймворке Flask. </p>
      <p>
        <span class="bold-header">
          Задачи данного учебного курса: 
        </span>
        <ul>
          <li>Освоить базовые принципы работы с Flask, а именно умение создать простейшее приложение.</li>
          <li>Уметь организовывать взаимодействие представлений Flask с шаблонами страниц. </li>
        </ul>
      </p>
      <p>
        <span class="bold-header">
          Перечень знаний умений и навыков, приобретаемых при изучении курса:
        </span>
        <ul>
          <li>Понимание, как архитектурно устроен микрофреймворк Flask;</li>
          <li>Умение работать с контекстом запроса из представлений;</li>
          <li>Умение настроить конфигурацию web-приложения Flask;</li>
        </ul>
      </p>
      <p>
        <span class="bold-header">
          Основные результаты деятельности обучения по данному курсу:
        </span>
        <ul>
          <li>Базовый уровень создания приложений на Flask;</li>
          <li>Умение организовывать разделение по fingerprint-ам основной логики представлений;</li>
          <li>Умение создавать шаблоны страниц.</li>
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
              Архитектура Flask, установка, создание простейшей программы,
дополнительные параметры инициализации приложения Flask, отрисовка шаблонов, построение URL, контекст запроса/ответа, серверные статусы ответов
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
              Ошибки и перенаправления, журналирование, конфигурация приложения, Blueprints
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
          <li>
            Документация Flask – URL: https://flask.palletsprojects.com/en/2.2.x 

          </li>
          <li>
            Документация Flask на русском языке – URL: https://flask-russian-docs.readthedocs.io/ru/latest/quickstart.html 

          </li>
          <li>
            М. Гринберг, Разработка веб-приложений с использованием Flask на языке Python: Litres, 2022

          </li>
          <li>

            Г. Двайер, Flask By Example: Unleash the full potential of the Flask web framework by creating simple yet powerful web applications: Packt Publishing, 2016. — 276 с.
          </li>
          <li>
            М. Лутц, Изучаем Python. М.:Вильямс, 2011

          </li>

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
              Введение в Flask
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
              В данном разделе вы познакомитесь с краткой характеристикой архитектуры Flask, узнаете о рендеринге и создании шаблонов страниц, о том, как программно строить URL, а также про контекст HTTP запроса и ответа.
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
              Конфигурация web-приложения
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
              В данном разделе вы научитесь задавать стартовые параметры приложения, узнаете о blueprint-ах, а также получите некоторые рекомендации по архитектуре web-приложений на Flask.
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
          <li>Любой текстовый редактор;</li>
          <li>Установленный интерпретатор Python и менеджер пакетов pip;;</li>
        </ol>
      </p>
      <p>
        <span class="bold-header">
          Перечень рекомендуемых источников
        </span>
        <ol>
          <li>
          	Flask Framework Cookbook, Шалабх Агарвал – URL: https://realpython.com/tutorials/flask/

          </li>
          <li>

            Learning Flask Framework, Matt CopperWaite, Charles Leifer, 2015 – URL: https://auth0.com/blog/best-practices-for-flask-api-development/ 
          </li>
          <li>
            How to structure a Flask-RESTPlus web service for production builds – URL: https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/

          </li>

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
        </ol>
      </p>
      <h3 style="text-align-last: right;">
        Курс подготовил студент 309 группы Косиков Андрей
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

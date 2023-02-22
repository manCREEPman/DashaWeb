<template>
    <v-card
    class="px-5">
      <p>
        <span class="bold-header">
          Предмет учебного курса:
        </span>«Использование и применение коллекций Map, Set, WeakMap, WeakSet в языке JavaScript».
      </p>
      <p>
        <span class="bold-header">
        Цель изучения данного учебного курса:        
      </span>
       формирование современных теоретических знаний, приобретение умений и навыков, позволяющих владеть на практике основными приемами использование и применение коллекций Map, Set, WeakMap, WeakSet в языке JavaScript.
      </p>
      <p>
        <span class="bold-header">
          Задачи данного учебного курса: 
        </span>
        <ul>
          <li>Освоить базовые принципы работы с коллекциями Map, Set, WeakMap, WeakSet в языке JavaScript;</li>
          <li>Приобрести практические навыки взаимодействия с коллекциями Map, Set, WeakMap, WeakSet в языке JavaScript.</li>
        </ul>
      </p>
      <p>
        <span class="bold-header">
          Перечень знаний умений и навыков, приобретаемых при изучении курса:
        </span>
        <ul>
          <li>Основные типы коллекций в языке JavaScript;</li>
          <li>Проектирование и создание объектов коллекций и взаимосвязи между ними;</li>
          <li>Углубленные знания по работе со структурами данных в JavaScript.</li>
        </ul>
      </p>
      <p>
        <span class="bold-header">
          Основные результаты деятельности обучения по данному курсу:
        </span>
        <ul>
          <li>Базовое умение работы с коллекциями в JavaScript;</li>
          <li>Умение организовывать запросы к коллекциям;</li>
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
              Изучение существующих видов коллекций в языке JavaScript.
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
              3
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
              Изучение упрощенных видов коллекций на основе изученных в JavaScript.
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
              3
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
          <li>Современный учебник JavaScript – URL: <a :href="'https://learn.javascript.ru/'" target="_blank">https://learn.javascript.ru/</a></li>
          <li>Справочник по JavaScript – URL:  <a :href="'https://developer.mozilla.org/ru/docs/Web/JavaScript '" target="_blank">https://developer.mozilla.org/ru/docs/Web/JavaScript </a></li>
          <li>Фримен Э., Робсон Э., Изучаем программирование на JavaScript: Питер, 2022 — 660 с.</li>
          <li>К. Симпсон, You Don′t Know JS – Scope and Closures: O′Reilly, 2014. — 98 с.</li>
          <li>К. Симпсон, You Don't Know JS: Up & Going. O′Reilly, 2015 — 88 с.</li>
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
              Изучение существующих видов коллекций в языке JavaScript.
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
              В данном разделе вы познакомитесь с коллекциями Map и Set, в которых добавление элементов всегда осуществляется в порядке LIFO, так что нельзя сказать, что это – неупорядоченные коллекции, но поменять порядок элементов или получить элемент напрямую по его номеру нельзя.
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
              Изучение упрощенных видов коллекций на основе изученных в JavaScript.
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
              WeakMap и WeakSet используются как вспомогательные структуры данных в дополнение к «основному» месту хранения объекта. Если объект удаляется из основного хранилища и нигде не используется, кроме как в качестве ключа в WeakMap или в WeakSet, то он будет удалён автоматически.
              Обе этих структуры данных не поддерживают методы и свойства, работающие со всем содержимым сразу или возвращающие информацию о размере коллекции. Возможны только операции на отдельном элементе коллекции.
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
          <li>ПК с ОС поддерживающий современные браузеры (на основе Chromium, Webkit, Quantum) или LTS версию Node.js;</li>
          <li>Любой текстовый редактор;</li>
        </ol>
      </p>
      <p>
        <span class="bold-header">
          Перечень рекомендуемых источников
        </span>
        <ol>
          <li > Скринкаст по Node.js – URL: <a :href="'https://learn.javascript.ru/screencast/nodejs'" target="_blank">https://learn.javascript.ru/screencast/nodejs</a></li>
          <li> Крокфорд Д., Как устроен JavaScript, 2019 — 304 с.</li>
          <li>Бибо Б., Марас И., Резиг Д., Секреты JavaScript ниндзя, 2018 — 544 с.</li>
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
        Курс подготовил студент 309 группы Дылько Илья
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

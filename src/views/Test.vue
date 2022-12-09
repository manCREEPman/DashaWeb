<template>
    <v-card
    class="px-5">
        <v-card-title>
            <span class="bold-header">
                Комплекс тестовых заданий
            </span>
        </v-card-title>

        <span class="bold-header">
            Шкала оценивания прохождения теста
        </span>
        <p>
          Количество баллов за задание 1 – 2
          Количество баллов за остальные задания – 1
          Макс. балл – 21.
        </p>

        <p>
            Тест считается пройденным успешно, если набрано от 17 до 21 баллов.
            <br>
            Тест считается пройденным, если набрано от 10 до 16 баллов.
            <br>
            Тест считается проваленным, если набрано от 0 до 9 баллов.
        </p>


        <ol>

          <li class="bold-header">
            Выберите верные утверждения:
                <div class="normal-header">
                    <v-checkbox :disabled="q1_1d" v-model="question1_1" label="Flask - микрофреймворк. Приставка 'микро' означает, что для создания базового web-приложения необходимо наличие дополнительных библиотек."></v-checkbox>
                    <v-checkbox :disabled="q1_2d" v-model="question1_2" label="Flask построен на библиотеке Werkzueg - комплексной библиотеке для поддержки WSGI-приложений и шаблонизаторе Jinja2 (который ничем не отличается от шаблонизатора Django)"></v-checkbox>
                    <v-checkbox :disabled="q1_3d" v-model="question1_3" label="За отрисовку шаблонов в Flask отвечает функция render_template." :class="{correct: answersCheck}"></v-checkbox>
                    <v-checkbox :disabled="q1_4d" v-model="question1_4" label="Flask позволяет делать части URL динамически меняющимися и задействовать в функции несколько правил." :class="{correct: answersCheck}"></v-checkbox>
                </div>
            </li>
            <li class="bold-header">
              Для того чтобы указать Flask, какой из URL должен запускать нашу функцию, используется декоратор:
                <div class="normal-header">
                    <v-radio-group
                    v-model="question2"
                    :disabled="q2d"
                    >
                        <v-radio
                        label="url()"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="path()"
                        value="2"
                        >
                        </v-radio>
                        <v-radio
                        label="route()"
                        value="3"
                        :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Функция … позволяет возвращать ответы в формате application/json, передавая в качестве параметра словарь с какими-либо данными.
              <div class="normal-header">
                    <v-text-field v-model="question3" :disabled="q3d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q3d" class="correct" disabled value="jsonify" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
              Чтобы перенаправить пользователя в иную конечную точку, используется функция: …
              <div class="normal-header">
                    <v-text-field v-model="question4" :disabled="q4d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q4d" class="correct" disabled value="redirect" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
                Для того чтобы преждевременно прервать запрос с кодом ошибки, используется функция: …
                <div class="normal-header">
                    <v-text-field v-model="question5" :disabled="q5d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q5d" class="correct" disabled value="abort" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
              Для того чтобы видоизменить страницу с ошибкой, используется декоратор: …
              <div class="normal-header">
                    <v-text-field v-model="question6" :disabled="q6d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q6d" class="correct" disabled value="errorhandler" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
              Для вывода ошибок или отладочной информации можно использовать журналирование. Для этого можно воспользоваться полем:
              <div class="normal-header">
                    <v-radio-group
                    v-model="question7"
                    :disabled="q7d"
                    >
                        <v-radio
                        label="debugger"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="logger"
                        value="2"
                        :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                        <v-radio
                        label="recorder"
                        value="3"
                        
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Если флаг SESSION_REFRESH_EACH_REQUEST установлен в True (по умолчанию):
              <div class="normal-header">
                    <v-radio-group
                    v-model="question8"
                    :disabled="q8d"
                    >
                        <v-radio
                        label="Flask проверяет, был ли изменен шаблон, каждый раз, когда он запрашивается."
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="Blueprints будут заново подгружаться после каждого запроса."
                        value="2"
                        >
                        </v-radio>
                        <v-radio
                        label="Cookies будут обновляться при каждом запросе."
                        value="3"
                        :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Если объём содержимого входящих запросов больше значения, заданного в MAX_CONTENT_LENGTH, FLASK будет возвращать код статуса:
                  <div class="normal-header">
                    <v-radio-group
                    v-model="question9"
                    :disabled="q9d"
                    >
                        <v-radio
                        label="405"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="412"
                        value="2"
                        
                        >
                        </v-radio>
                        <v-radio
                        label="413"
                        value="3"
                        :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Blueprint во Flask - это:
                <div class="normal-header">
                    <v-radio-group
                    v-model="question10"
                    :disabled="q10d"
                    >
                        <v-radio
                        label="Подключаемое приложение"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="Набор операций, которые могут быть зарегистрированы в приложении"
                        value="2" :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                        <v-radio
                        label="Файлы конфигурации"
                        value="3"
                       
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              На каком порту по умолчанию разворачивается сервер Flask:
                <div class="normal-header">
                    <v-radio-group
                    v-model="question11"
                    :disabled="q11d"
                    >
                        <v-radio
                        label="1337"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="5000"
                        value="2" :class="{ correct: answersCheck }"
                        
                        >
                        </v-radio>
                        <v-radio
                        label="4000"
                        value="3"
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Какой параметр приложения содержит путь к настроенному приложению Flask:
              <div class="normal-header">
                    <v-text-field v-model="question12" :disabled="q12d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q12d" class="correct" disabled value="APPLICATION_ROOT" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
              Какой параметр приложения отвечает за включение/отключение режима отладки:
<div class="normal-header">
                    <v-radio-group
                    v-model="question13"
                    :disabled="q13d"
                    >
                        <v-radio
                        label="DEBUG"
                        value="1" :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                        <v-radio
                        label="TEMPLATES_AUTO_RELOAD"
                        value="2"
                        
                        >
                        </v-radio>
                        <v-radio
                        label="JSON_SORT_KEYS"
                        value="3"
                       
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Какой параметр сообщает приложению, что cookie необходимо передавать только по защищённому протоколу?
<div class="normal-header">
                    <v-radio-group
                    v-model="question14"
                    :disabled="q14d"
                    >
                        <v-radio
                        label="COOKIE_SECURE"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="SESSION_COOKIE_SECURE"
                        value="2" :class="{ correct: answersCheck }"
                        
                        >
                        </v-radio>
                        <v-radio
                        label="HTTPS_COOKIES"
                        value="3"
                        
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Напишите название функции, которая создаёт переменную ответа в представлении:
              <div class="normal-header">
                    <v-text-field v-model="question15" :disabled="q15d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q15d" class="correct" disabled value="make_response" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
              Какой параметр приложения нужен для задания секретного ключа?
<div class="normal-header">
                    <v-radio-group
                    v-model="question16"
                    :disabled="q16d"
                    >
                        <v-radio
                        label="SECRET_KEY_DBMS"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="FLASK_SECRET"
                        value="2"
                        
                        >
                        </v-radio>
                        <v-radio
                        label="SECRET_KEY"
                        value="3"
                        :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              Напишите название функции, отвечающей за регистрацию blueprint:
<div class="normal-header">
                    <v-text-field v-model="question17" :disabled="q17d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q17d" class="correct" disabled value="register_blueprint" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
              Как подключить статические стили на странице шаблона Flask?
<div class="normal-header">
                    <v-radio-group
                    v-model="question18"
                    :disabled="q18d"
                    >
                        <v-radio
                        label="Например, в тэге link указать атрибут с параметром href=' url_for('static', filename='style.css') '"
                        value="1" :class="{ correct: answersCheck }"
                        >
                        </v-radio>
                        <v-radio
                        label="Использовать директиву шаблонизатора {% import static %}"
                        value="2"
                        
                        >
                        </v-radio>
                        <v-radio
                        label=" Нет верного ответа"
                        value="3"
                       
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
            <li class="bold-header">
              С помощью параметра … можно задать хост и порт:

<div class="normal-header">
                    <v-text-field v-model="question19" :disabled="q19d" label="Ответ:"></v-text-field>
                    <v-text-field v-if="q19d" class="correct" disabled value="SERVER_NAME" label="Ответ:"></v-text-field>
                </div>
            </li>
            <li class="bold-header">
              Для чего нужны blueprint-ы?
<div class="normal-header">
                    <v-radio-group
                    v-model="question20"
                    :disabled="q20d"
                    >
                        <v-radio
                        label="Blueprint-ы сжимают статический контент, вследствие чего страница подгружается быстрее"
                        value="1"
                        >
                        </v-radio>
                        <v-radio
                        label="Для снижения нагрузки на http-сервер"
                        value="2"
                        
                        >
                        </v-radio>
                        <v-radio
                        label="Для разбиения логики представлений больших приложений"
                        value="3" :class="{ correct: answersCheck }"
                        
                        >
                        </v-radio>
                    </v-radio-group>
                </div>
            </li>
        </ol>

        <v-card-actions>
            <v-btn color="primary" @click="checkAnswers()">Проверить</v-btn>
            <v-btn @click="clearAnswers()">Сбросить результаты</v-btn>
        </v-card-actions>

        <div v-if="this.answersCheck">
          <div class="bold-header">
            Баллы: 
          </div>
          {{ this.points }}
        </div>
    </v-card>
</template>

<style src="@/assets/styles/common-styles.css">
</style>

<script>

export default {
    name: 'Test',

    methods: {
        test() {
            console.log(this.question1)
        },

        checkAnswers() {
            let points = 0
            this.answersCheck = true

            if (this.question1_3) {
                points += 1
            }
            if (this.question1_4) {
                points += 1
            }
            if (this.question2 == 3) {
                points += 1
            }
            if (this.question3.toLowerCase() == 'jsonify') {
                points += 1
            }
            if (this.question4.toLowerCase() == 'redirect') {
                points += 1
            }
            if (this.question5.toLowerCase() == 'abort') {
                points += 1
            }
            if (this.question6.toLowerCase() == 'errorhandler'){
                points += 1
            }
            if (this.question7 == 2) {
                points += 1
            }
            if (this.question8 == 3) {
                points += 1
            }
            if (this.question9 == 3) {
                points += 1
            }
            if (this.question10 == 2) {
                points += 1
            }
            if (this.question11 == 2) {
                points += 1
            }
            if (
                (this.question12.toLowerCase() == 'application_root')
               ){
                points += 1
            }
            if (
                this.question13 == 1
               ){
                points += 1
            }
            if (this.question14 == 2){
                points += 1
            }
            if (this.question15.toLowerCase() == 'make_response') {
                points += 1
            }
            if (this.question16 == 3) {
                points += 1
            }
            if (this.question17.toLowerCase() == 'register_blueprint') {
                points += 1
            }
            if (this.question18 == 1) {
                points += 1
            }
            if (this.question19.toLowerCase() == 'server_name') {
                points += 1
            }
            if (this.question20 == 3) {
                points += 1
            }

            this.q1_1d = true
            this.q1_2d = true
            this.q1_3d = true
            this.q1_4d = true
            this.q2d = true
            this.q3d = true
            this.q4d = true
            this.q5d = true
            this.q6d = true
            this.q7d = true
            this.q8d = true
            this.q9d = true
            this.q10d = true
            this.q11d = true
            this.q12d = true
            this.q13d = true
            this.q14d = true
            this.q15d = true
            this.q16d = true
            this.q17d = true
            this.q18d = true
            this.q19d = true
            this.q20d = true

            this.points = points
        },

        clearAnswers() {
            this.answersCheck = false
            this.question1_1 = false
            this.question1_2 = false
            this.question1_3 = false
            this.question1_4 = false
            this.question2 = 0
            this.question3 = ''
            this.question4 = ''
            this.question5 = ''
            this.question6 = ''
            this.question7 = 0
            this.question8 = 0
            this.question9 = 0
            this.question10 = 0
            this.question11 = 0
            this.question12 = ''
            this.question13 = 0
            this.question14 = 0
            this.question15 = ''
            this.question16 = 0
            this.question17 = ''
            this.question18 = 0
            this.question19 = ''
            this.question20 = 0

            this.q1_1d = false
            this.q1_2d = false
            this.q1_3d = false
            this.q1_4d = false
            this.q2d = false
            this.q3d = false
            this.q4d = false
            this.q5d = false
            this.q6d = false
            this.q7d = false
            this.q8d = false
            this.q9d = false
            this.q10d = false
            this.q11d = false
            this.q12d = false
            this.q13d = false
            this.q14d = false
            this.q15d = false
            this.q16d = false
            this.q17d = false
            this.q18d = false
            this.q19d = false
            this.q20d = false

            this.points = 0
        }
    },


    data() {
        return {
            points: 0,
            answersCheck: false,

            question1_1: false,
            question1_2: false,
            question1_3: false,
            question1_4: false,
            question2: 0,
            question3: '',
            question4: '',
            question5: '',
            question6: '',
            question7: 0,
            question8: 0,
            question9: 0,
            question10: 0,
            question11: 0,
            question12: '',
            question13: 0,
            question14: 0,
            question15: '',
            question16: 0,
            question17: '',
            question18: 0,
            question19: '',
            question20: 0,

            q1_1d: false,
            q1_2d: false,
            q1_3d: false,
            q1_4d: false,
            q2d: false,
            q3d: false,
            q4d: false,
            q5d: false,
            q6d: false,
            q7d: false,
            q8d: false,
            q9d: false,
            q10d: false,
            q11d: false,
            q12d: false,
            q13d: false,
            q14d: false,
            q15d: false,
            q16d: false,
            q17d: false,
            q18d: false,
            q19d: false,
            q20d: false,
        }
    },
}
</script>
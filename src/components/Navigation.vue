<template>
    <v-container
    pa-0
    ml-0
    style="min-width: 704px;"
    >
        <v-row
        >
            <v-col
            style="padding-bottom: 0; position: fixed;"
            class="flex-grow-0"
            >
                <v-card
                    width="300"
                    style="height: 100vh"
                >
                    <v-list>
                        <router-link  class="rl-style" to="/">
                            <v-list-item
                            link
                            >
                                <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                                </v-list-item-icon>
    
                                <v-list-item-title>
                                    О курсе
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>

                        <v-list-group
                            :value="true"
                            prepend-icon="mdi-database"
                        >
                            <template v-slot:activator>
                            <v-list-item-title>Разделы</v-list-item-title>
                            </template>

                            <router-link class="rl-style" to="/section1">
                                <v-list-item
                                link
                                >
                                    <v-list-item-content>
                                        Изучение объектов для хранения именованных коллекций и массивов для хранения упорядоченных коллекций в JavaScript и используя Map и Set
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link class="rl-style" to="/section2">
                                <v-list-item
                                link
                                >
                                    <v-list-item-content>
                                        Использование объектов для хранения массивов и именованных коллекций для хранения коллекций в JavaScript WeakMap и WeakSet
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            
                        </v-list-group>

                        <router-link class="rl-style" to="/test">
                            <v-list-item
                            link>
                                <v-list-item-icon>
                                <v-icon>mdi-clipboard-check-multiple</v-icon>
                                </v-list-item-icon>
    
                                <v-list-item-title>
                                        Тест
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>

                        <router-link class="rl-style" to="/tasks">
                            <v-list-item
                            link>
                                <v-list-item-icon>
                                <v-icon>mdi-folder-edit-outline</v-icon>
                                </v-list-item-icon>

                                <v-list-item-title>
                                        Практические задания
                                </v-list-item-title>
                            </v-list-item>
                        </router-link>
                    </v-list>
                </v-card>
            </v-col>
            <v-col
            style="
            padding-bottom: 0;
            "
            >
                <router-view style="padding-top: 16px; margin-left: 300px;"/>    
            </v-col>
        </v-row>
    
</v-container>
    
</template>

<style scoped src="@/assets/styles/common-styles.css">
</style>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            link1: "/",
            link2: "/section1"
        }
    }
}
</script>


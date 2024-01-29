<template>
  <v-container>
    <v-row>
      <v-btn icon="mdi-arrow-left" size="small" color="success" @click="$router.back()"></v-btn>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ employee.name }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-img src="../public/img/profile-photo.png" aspect-ratio="1" :width="100"></v-img>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <ul>
                  <li><strong>Cargo:</strong> {{ employee.position }}</li>
                  <li><strong>Descrição:</strong> {{ employee.description }}</li>
                </ul>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  employee: Object
})
</script>
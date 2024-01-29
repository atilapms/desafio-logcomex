<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <NuxtLink to="/employees">
          <v-btn color="success">Lista de Funcionários</v-btn>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useEmployeeStore } from '~/store'

const { fetchEmployees } = useEmployeeStore()

onMounted(() => {
  fetchEmployees()
})
</script>
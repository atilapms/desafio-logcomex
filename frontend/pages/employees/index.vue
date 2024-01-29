<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-col class="d-flex align-center justify-space-between">
            <v-card-title>Lista de Funcionários</v-card-title>
            <v-btn color="success">Novo Funcionário</v-btn>
          </v-col>
          <v-card-text>
            <template v-if="employees.length > 0">
              <EmployeeList :employees="employees" :loading="loading" />
            </template>
            <template v-else>
              <v-progress-circular
                indeterminate
                color="primary"
                size="32"
              ></v-progress-circular>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useEmployeeStore } from '~/store';
import EmployeeList from '@/components/EmployeeList.vue';

const { employees } = useEmployeeStore()
</script>
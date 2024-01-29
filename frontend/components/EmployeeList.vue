<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    item-key="id"
    :search="search"
    :loading="loading"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-btn
        color="success"
        class="mr-2"
        @click="showDetails(item.id)"
      >
        Detalhes
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup>
import { useEmployeeStore } from '~/store'
import { defineProps } from 'vue'

const $router = useRouter()

const { employees, fetchEmployeeDetails } = useEmployeeStore()

const props = defineProps({
  employees: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  search: {
    type: String,
    default: '',
  },
})

const headers = [
  { title: 'ID', value: 'id' },
  { title: 'Nome', value: 'name' },
  { title: 'Ações', value: 'actions', sortable: false },
]

const showDetails = (id) => {
  fetchEmployeeDetails(id)
  $router.push({ name: 'employees-id', params: { id } })
}
</script>

<style scoped>
/* Estilos CSS para o componente EmployeeList.vue */
</style>

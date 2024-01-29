<template>
  <div>
    <employee-details :employee="employeeDetails" />
  </div>
</template>

<script setup>
import { useEmployeeStore } from '~/store';
import EmployeeDetails from '@/components/EmployeeDetails.vue';

const { employeeDetails } = useEmployeeStore();
</script>
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore({
  id: 'employee',

  state: () => ({
    employees: [],
    employeeDetails: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchEmployees() {
      try {
        this.loading = true
        const response = await fetch('http://localhost:3001/api/employees')
        const data = await response.json()
        this.employees = data
      } catch (error) {
        this.error = error.message || 'Failed to fetch employees'
      } finally {
        this.loading = false
      }
    },
    async fetchEmployeeDetails(id) {
      this.loading = true;
      try {
        const response = await fetch(`http://localhost:3001/api/employees/${id}`)
        const data = await response.json()
        this.employeeDetails = data
      } catch (error) {
        console.error(`Error fetching employee details for ID ${id}:`, error);
      } finally {
        this.loading = false;
      }
    },
  },
})
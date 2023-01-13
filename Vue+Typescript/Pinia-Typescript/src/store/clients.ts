import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '../clients/interfaces/client';

export const useClientsStore = defineStore('clients', () => {

    const currentPage = ref<number>(1);
    const pageSize = ref<number>(10);
    const clients = ref<Client[]>([]);
  return {
    //State

    //Getters

    //Actions
    setClients(newClients: Client[]) {
        clients.value = newClients;
    },
    setPage(page: number) {
        if(currentPage.value === page) return;

        currentPage.value = page;
    }
  };
});
<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';

import BreezeTc from '@/Components/TableColumn.vue';
import BreezeTable from '@/Components/Table.vue';

defineProps(['departments']);

</script>

<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Departments
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">

                        <breeze-table>
                            <template #header>
                                <breeze-tc>ID</breeze-tc>
                                <breeze-tc>Name</breeze-tc>
                                <breeze-tc>Email</breeze-tc>
                                <breeze-tc>Phone</breeze-tc>
                                <breeze-tc>Actions</breeze-tc>
                            </template>
                            <tr v-for="d in departments" :key="d.id" class="hover:bg-gray-200">
                                <breeze-tc>{{ d.id }}</breeze-tc>
                                <breeze-tc>{{ d.name }}</breeze-tc>
                                <breeze-tc>{{ d.email }}</breeze-tc>
                                <breeze-tc>{{ d.phone }}</breeze-tc>
                                <breeze-tc></breeze-tc>
                            </tr>
                        </breeze-table>
                        
                        <table class="w-full whitespace-nowrap">
                            <thead>
                               <tr class="font-bold text-left">
                                    <breeze-tc>ID</breeze-tc>
                                    <breeze-tc>Name</breeze-tc>
                                    <breeze-tc>Email</breeze-tc>
                                    <breeze-tc>Phone</breeze-tc>
                                    <breeze-tc>Actions</breeze-tc>
                               </tr> 
                            </thead>
                            <tbody>
                                <tr v-for="d in departments" :key="d.id" class="hover:bg-gray-200">
                                    <breeze-tc>{{ d.id }}</breeze-tc>
                                    <breeze-tc>{{ d.name }}</breeze-tc>
                                    <breeze-tc>{{ d.email }}</breeze-tc>
                                    <breeze-tc>{{ d.phone }}</breeze-tc>
                                    <breeze-tc></breeze-tc>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

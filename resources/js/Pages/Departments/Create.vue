<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create New Departments
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">

                        <div v-show="form.hasErrors">
                            <div class="text-red-500 font-medium">
                                Please make the following correction
                            </div>  
                        </div>
                        <form @submit.prevent="submit">

                            <div>
                                <breeze-label for="name" value="Name"></breeze-label>
                                <breeze-input 
                                    type="text" 
                                    id="name" 
                                    class="mt-1 block w-1/2"
                                    v-model="form.name"
                                    required
                                    autofocus
                                >
                                </breeze-input>
                                <breeze-input-error :message="form.errors.name"></breeze-input-error>
                            </div>
                            <div class="mt-4">
                                <breeze-label for="email" value="Email"></breeze-label>
                                <breeze-input 
                                    type="email" 
                                    id="email" 
                                    class="mt-1 block w-1/2"
                                    v-model="form.email"
                                >
                                </breeze-input>
                                <breeze-input-error :message="form.errors.email"></breeze-input-error>
                            </div>

                            <div class="mt-4">
                                <breeze-label for="phone" value="Phone"></breeze-label>
                                <breeze-input 
                                    type="text" 
                                    id="phone" 
                                    class="mt-1 block w-1/2"
                                    v-model="form.phone"
                                >
                                </breeze-input>
                                <breeze-input-error :message="form.errors.phone"></breeze-input-error>
                            </div>

                            <div class="flex item-center justify-end mt-4">
                                <breeze-button>Create</breeze-button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script>

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { Head } from '@inertiajs/inertia-vue3';

import BreezeLink from '@/Components/AnchorLink';
import BreezeLabel from '@/Components/Label';
import BreezeInput from '@/Components/Input';
import BreezeInputError from '@/Components/InputError';
import BreezeButton from '@/Components/Button';

export default{

    components: { 
        Head, 
        BreezeAuthenticatedLayout, 
        BreezeLink, 
        BreezeLabel, 
        BreezeInput, 
        BreezeInputError, 
        BreezeButton, 
    },

    setup () {
        const form = useForm({
            name: null,
            email: null,
            phone: null,
        });

        return { form };
    },

    methods: { 
        submit(){ 
            this.form.post(route('departments.store'));
        }, 
    },




}

</script>

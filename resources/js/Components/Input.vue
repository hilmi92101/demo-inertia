<!--
<script setup>
import { onMounted, ref } from 'vue';

defineProps(['modelValue']);

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
</script>
-->
<template>
    <input class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
    :class="classes"
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" 
    ref="input"
    >
</template>

<script>
    export default {
        props: ['modelValue', 'error'],

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.input.focus()
            }
        },
        computed: {

            classes() {
                return this.error ?
                'border-red-600 focus:border-red-700 focus:ring focus:ring-red-200 ':
                'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200';
            }
        }
    }
</script>

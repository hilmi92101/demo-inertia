<template>  
    <div> 
        This is the Welcome.vue page 

        <inertia-link href="/test">Test page</inertia-link> <br>
        <inertia-link :href="route('test')">Test page</inertia-link>

        <p>{{ $page.props.appName }}</p>
          
    </div>  
</template>
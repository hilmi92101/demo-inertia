<template>  
    <div> 
        This is the Test.vue page 

        <inertia-link href="/">Welcome page</inertia-link> <br>
        <inertia-link :href="route('welcome')">Welcome page</inertia-link>

        <p>{{ $page.props.appName }} test</p>
          
    </div>  
</template>
<template>
    <div class="navbar">
        <nav class="indigo darken-4">
            <div class="nav-wrapper">
            <router-link :to="{ name: 'Index' }" href="#" class="brand-logo">Ninja Smoothies</router-link>
                <div class="nav-content">
                    <router-link :to="{ name: 'AddSmoothy' }" class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                        <i class="material-icons red">add</i>
                    </router-link>
                </div>
            </div>
        </nav>
    </div> 
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.navbar nav {
    padding: 0px 20px;
}
</style>
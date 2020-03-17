<template>
    <div class="navbar">
        <nav class="blue darken-4">
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Ninja Smoothies</a>
                <div class="nav-content">
                    <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                        <i class="material-icons red">add</i>
                    </a>
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
    padding: 0 20px;
}
</style>
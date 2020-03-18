<template>
    <div class="addSmoothy container">
        <h2 class="center-align text-indigo">Add New Smoothy Recipe</h2>
        <form @submit.prevent="AddSmoothy">
            <div class="row">
                <div class="input-field col s12">
                    <input id="SmoothyTitle" type="text" class="validate" v-model="title" name="title">
                    <label for="SmoothyTitle">Smoothy Title:</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12" v-for="(ing, index) in ingredients" :key="index">
                    <input id="ingredient" type="text" class="validate" v-model="ingredients[index]" name="ingredient">
                    <label for="ingredient">ingredient:</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="SmoothyTitle" type="text" class="validate" v-model="another" name="title" @keydown.tab.prevent="addIng">
                    <label for="SmoothyTitle">Add an ingredient:</label>
                </div>
            </div>
            <p v-if="feedback" class="red-text center-align">{{ feedback }}</p>
            <button class="waves-effect waves-light btn-large sendButton">Button</button>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'AddSmoothy',
    data() {
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null
        }
    },

    methods: {
        AddSmoothy() {
            if(this.title){
                this.feedback = null
                // Create a slug
                this.slug = slugify(this.title, {
                    replacement: "-",
                    remove: /[$*_=~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('smoothies').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
                }).then(() => {
                    this.$router.push({ name: 'Index' })
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = 'You must enter a smoothy title'
            }
        },

        addIng(){
            if(this.another){
                this.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add an ingredient'
            }
        }
    }
}
</script>

<style scoped>
.addSmoothy {
    margin-top: 2%;
}

.addSmoothy form {
    margin-top: 5%;
}

.addSmoothy h2 {
    color: #3f51b5;
}

form .row {
    margin-left: 50%;
    transform: translateX(-50%);
}

.sendButton {
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 2rem;
    background-color: #3f51b5;
}
</style>
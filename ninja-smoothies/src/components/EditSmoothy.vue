<template>
    <div v-if="smoothy" class="EditSmoothy container">
        <h2 class="center-align text-indigo">Edit {{smoothy.title}} Smoothy</h2>
        <form @submit.prevent="EditSmoothy">
            <div class="row">
                <div class="input-field col s12">
                    <input id="SmoothyTitle" type="text" class="validate" v-model="smoothy.title" name="title">
                    <label for="SmoothyTitle">Smoothy Title:</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12" v-for="(ing, index) in smoothy.ingredients" :key="index">
                    <input id="ingredient" type="text" class="validate" v-model="smoothy.ingredients[index]" name="ingredient">
                    <label for="ingredient">ingredient:</label>
                    <i class="small material-icons DeleteIcon" @click="deleteIng(ing)">delete</i>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="SmoothyTitle" type="text" class="validate" v-model="another" name="title" @keydown.tab.prevent="addIng">
                    <label for="SmoothyTitle">Add an ingredient:</label>
                </div>
            </div>
            <p v-if="feedback" class="red-text center-align">{{ feedback }}</p>
            <button class="waves-effect waves-light btn-large sendButton">Update Smoothy</button>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditSmoothy',
    data() {
        return {
            smoothy: null,
            another: null,
            feedback: null
        }
    },

    created() {
        let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothy_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.smoothy = doc.data()
                this.smoothy.id = doc.id
            })
        })
    },

    methods: {
        EditSmoothy() {
            if(this.smoothy.title){
                this.feedback = null
                // Create a slug
                this.smoothy.slug = slugify(this.smoothy.title, {
                    replacement: "-",
                    remove: /[$*_=~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('smoothies').doc(this.smoothy.id).update({
                    title: this.smoothy.title,
                    ingredients: this.smoothy.ingredients,
                    slug: this.smoothy.slug
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
                this.smoothy.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add an ingredient'
            }
        },

        deleteIng(ing){
            this.smoothy.ingredients = this.smoothy.ingredients.filter(ingredient => ingredient !== ing)
        }
    }
}
</script>

<style scoped>
.sendButton {
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 2rem;
    background-color: #3f51b5;
}

.DeleteIcon {
    color: red;
    cursor: pointer;
    position: absolute;
    transform: translate(-2rem, .5rem);
}

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
</style>
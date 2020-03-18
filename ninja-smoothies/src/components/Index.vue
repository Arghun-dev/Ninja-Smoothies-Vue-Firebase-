<template>
  <div class="index">
    <div class="row">
      <div class="col s12 m4" v-for='smoothy in smoothies' :key='smoothy.id'>
        <div class="card blue-grey darken-1">
          <i class="small material-icons deleteIcon" @click='deleteSmoothy(smoothy.id)'>delete</i>
          <div class="card-content white-text">
            <span class="card-title">{{ smoothy.title }}</span>
          </div>
          <div class="ingredients">
            <li v-for='(ingredient, index) in smoothy.ingredients' :key='index'>
              <span class="chip">{{ ingredient }}</span>
            </li>
          </div>
          <router-link :to="{ name: 'EditSmoothy', params: {smoothy_slug: smoothy.slug} }" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      smoothies: []
    }
  },

  methods: {
    deleteSmoothy(id) {
      // Delete Doc from firestore
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        this.smoothies = this.smoothies.filter(smoothy => smoothy.id !== id)
      })
    }
  },

  created() {
    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let smoothy = doc.data()
        smoothy.id = doc.id
        this.smoothies.push(smoothy)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  padding: 3rem;
}

.card {
  margin: 2rem;
  text-align: center;
  padding-bottom: 30%;
}

.deleteIcon {
  cursor: pointer;
  color: #ccc;
  float: right;
  padding: 1rem;
}

.card-title {
  font-size: 220%;
  font-weight: bold;
}

.ingredients {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.ingredients li {
  list-style: none;
}

.ingredients li span {
  font-size: 130%;
}
</style>

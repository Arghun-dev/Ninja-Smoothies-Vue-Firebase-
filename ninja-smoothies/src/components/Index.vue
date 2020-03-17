<template>
  <div class="index">
    <div class="row">
      <div class="col s12 m4" v-for='(smoothy, id) in smoothies' :key='id'>
        <div class="card blue-grey darken-1">
          <a href=""><i class="small material-icons deleteIcon">delete</i></a>
          <div class="card-content white-text">
            <span class="card-title">{{ smoothy.title }}</span>
          </div>
          <div class="ingredients">
            <li v-for='(ingredient, index) in smoothy.ingredients' :key='index'>
              <span class="chip">{{ ingredient }}</span>
            </li>
          </div>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      smoothies: [
        { title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['bananas', 'coffee', 'milk'], id: 1 },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: 2 },
        { title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'lime', 'juice'], id: 2 }
      ]
    }
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
  color: #f44336;
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

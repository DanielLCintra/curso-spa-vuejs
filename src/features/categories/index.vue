<script>
  import findIndex from 'lodash/findIndex'
  import http from '@/service/http'

  export default {
    name: 'Categories',
    data () {
      return {
        list: []
      }
    },
    async mounted () {
      const response = await http.get('/categoria')

      if (response != null) {
        this.list = response.data.categories
      }
    },
    methods: {
      navigation (route) {
        this.$router.push({name: route})
      },
      updateList (obj) {
        const { category } = obj
        const index = findIndex(this.list, {id: category.id})

        if (index > -1) {
          this.list[index].name = category.name
          return false
        }

        this.list.unshift(category)
      },
      askRemove (category) {
        const msg = `Tem certeza que deseja remover ${category.name}?`
        const confirm = window.confirm(msg)
        if (confirm) {
          this.doRemove(category.id)
        }
      },
      async doRemove (id) {
        const response = await http.delete(`/categoria/${id}`)
        const { message } = response.data
        const index = findIndex(this.list, { id })
        if (index > -1) {
          this.list.splice(index, 1)
        }
        this.$bus.$emit('display-alert', {
          type: 'success',
          message
        })
      }
    },
    computed: {
      shouldDisplayNew () {
        return this.$route.name === 'categories.index'
      },
      shouldDisplayBack () {
        return this.$route.name === 'categories.form'
      },
      hasCategories () {
        return this.list.length > 0
      }
    }
  }
</script>

<template>
	<div>
    <h2>
  		<div class="row">
        <div class="col-md-6">
          Categorias
        </div>
        <div class="col-md-6 text-right">
          <button class="btn btn-primary btn-xs" v-show="shouldDisplayNew" @click="navigation('categories.form')">Nova</button>
          <button class="btn btn-default btn-xs" v-show="shouldDisplayBack" @click="navigation('categories.index')">Voltar</button>
        </div>
      </div>
    </h2>

    <transition name="slide-fade">
      <router-view @update-category-list="updateList"></router-view>  
    </transition> 
    
    <div class="no-categories" v-show="!hasCategories">
      <h4>Não há ainda categorias salvas</h4>  
    </div>
    <div class="row" v-show="hasCategories">
      <div class="col-sm-6 col-md-4" v-for="category in list" :key="category.id">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{category.name}}</h3>
            <p class="text-right">
              <router-link class="btn btn-default btn-xs" :to="{ name: 'categories.form' , params: {id: category.id}}">Editar</router-link>
              <a href="#" class="btn btn-default btn-xs" @click.prevent="askRemove(category)"  role="button">Excluir</a>
            </p>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<style scoped>
.custom-height {
  min-height: 160px;
}
.no-categories {
  padding: 35px;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-fade-leave-to {
  opacity: 0;
}
.no-categories{
  padding: 35px;
}
</style>
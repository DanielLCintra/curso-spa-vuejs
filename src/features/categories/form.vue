<script>
  export default {
    methods: {
      submit () {
        alert('salva essa bagaça!')
      }
    }
  }
</script>

<template>
  <div>
    <form @submit.prevent="submit" class="well">
      <div class="form-group">
      	<label class="control-label">Nome</label>
      	<input type="text" class="form-control">
      </div>
      <div class="text-right">
      	<button class="btn btn-primary btn-xs" type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>
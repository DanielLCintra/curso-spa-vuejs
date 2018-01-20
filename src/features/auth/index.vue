<script>
  import axios from 'axios'

  export default {
    name: 'Authentication',
    data () {
      return {
        email: 'cintra.70@gmail.com',
        password: 'sp21vc64'
      }
    },
    methods: {
      login () {
        const { email, password } = this
        const payload = { email, password }
        const url = 'http://localhost:1234/autenticacao'

        axios.post(url, payload)
          .then(this.successHandler)
          .catch(this.errorHandler)
      },
      successHandler (res) {
        console.log(res.data)
      },
      errorHandler (error) {
        console.log(error)
      }
    }
  }
</script>

<template>
	<div>
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<form class="well top25" @submit.prevent="login">
					<div class="form-group">
						<label class="control-label">E-mail</label>
						<input type="email" class="form-control" v-model="email">
					</div>
					<div class="form-group">
						<label class="control-label">Password</label>
						<input type="password" class="form-control" v-model='password'>
					</div>
					<div class="text-right">
						<button class="btn btn-primary btn-xs" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.top25{
		margin-top: 25px;
	}
</style>
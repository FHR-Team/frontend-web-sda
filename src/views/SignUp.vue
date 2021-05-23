<template>
  <div class="sign-in vh-100">
      <div class="container bg-white h-100">
          <div class="d-flex h-100 justify-content-center align-items-center">
              <div class="row rounded shadow">
                  <div class="col p-3 d-flex flex-column justify-content-center align-items-center">
                      <img src="../assets/sidoarjo.png" width="100px" height="90.28px" alt="">
                      <h1 class="text-success font-weight-bold tx-50">Sign Up</h1>
                      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <label for="email" class="pt-3 mb-0">Email</label>
                        <div class="input-group input-group-sm border-bottom border-success">
                            <input id="email" type="text" class="form-control no-border" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="myemail@example.com" v-model="form.email">
                            <div class="input-group-append">
                                <span class="input-group-text no-border bg-transparent" id="inputGroup-sizing-sm"><b-icon icon="envelope"></b-icon></span>
                            </div>
                        </div>

                        <label for="password" class="pt-3 mb-0">Password</label>
                        <div class="input-group input-group-sm border-bottom border-success">
                            <input id="password" type="password" class="form-control no-border" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="form.password">
                            <div class="input-group-append">
                                <span class="input-group-text no-border bg-transparent" id="inputGroup-sizing-sm"><b-icon icon="eye-slash"></b-icon></span>
                            </div>
                        </div>

                        <label for="nama" class="pt-3 mb-0">Full Name</label>
                        <div class="input-group input-group-sm border-bottom border-success">
                            <input id="nama" type="text" class="form-control no-border" aria-describedby="inputGroup-sizing-sm" v-model="form.nama">
                        </div>

                        <b-button type="submit" variant="success" class="btn-block rounded-pill mt-2">Register</b-button>
                        <hr>
                      </b-form>
                      <p class="text-muted mb-0">Sudah punya akun? <router-link to="/sign-in" class="text-muted">login</router-link></p>
                  </div>
                  <div class="col p-0"><img class="img-fluid h-100 rounded-right" src="../assets/batik2.png" alt=""></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "SignUp",
    data() {
      return {
        form: {
          email: '',
          password: '',
          nama: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.pass = ''
        this.form.nama = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style>

</style>
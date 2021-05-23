<template>
  <div class="sign-in vh-100">
      <div class="container bg-white h-100">
          <div class="d-flex h-100 justify-content-center align-items-center">
              <div class="row rounded shadow">
                  <div class="col p-0"><img class="img-fluid h-100 rounded-left" src="../assets/batik1.png" alt=""></div>
                  <div class="col p-3 d-flex flex-column justify-content-center align-items-center">
                      <img src="../assets/sidoarjo.png" width="100px" height="90.28px" alt="">
                      <h1 class="text-success font-weight-bold tx-50">Sign In</h1>
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

                        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="py-3 mb-0">
                            <b-form-checkbox-group id="checkboxes-4" :aria-describedby="ariaDescribedby">
                                <b-form-checkbox class="text-muted" v-model="form.remember">Remember Me</b-form-checkbox>
                                <a href="#" class="text-muted">Lupa Password?</a>
                            </b-form-checkbox-group>
                        </b-form-group>

                        <b-button type="submit" variant="success" class="btn-block rounded-pill">Sign In</b-button>
                        <hr>
                      </b-form>
                      <p class="text-muted mb-0">Belum punya akun? <a href="#" class="text-muted">registrasi</a></p>
                      <p class="text-muted small my-1">atau</p>
                      <div class="d-flex justify-content-around w-50">
                          <div class="btn btn-light rounded-circle shadow-sm p-1"><img src="../assets/google.svg" alt=""></div>
                          <div class="btn btn-light rounded-circle shadow-sm p-1"><img src="../assets/facebook.svg" alt=""></div>
                          <div class="btn btn-light rounded-circle shadow-sm p-1"><img src="../assets/twitter.svg" alt=""></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "SignIn",
    data() {
      return {
        form: {
          email: '',
          password: '',
          remember: false
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
        this.form.remember = false
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
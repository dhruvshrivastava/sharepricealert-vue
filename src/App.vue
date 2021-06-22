<template>
  <div id="app">    
   <template>
    <b-navbar class = "is-black">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <h2><b>Share<i>Price</i>Alert</b></h2>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>

        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button label="Sign Up" 
                    type = "is-success"
                    @click ="isRegisterModalActive = true" />

                    <template>
                        <section><strong>
                            <b-button
                                label="Login"
                                type="is-info"
                                @click="isLoginModalActive = true" /></strong>


                            <b-modal
                                v-model="isRegisterModalActive"
                                has-modal-card
                                trap-focus
                                scroll = "keep"
                                aria-role="dialog"
                                aria-label="Login"
                                aria-modal>
                                <template>
                                <form action = "#" @submit.prevent="register">
                                  <div class="modal-card" style="width: auto">
                                      <header class="modal-card-head">
                                          <p class="modal-card-title">Register to <strong>SharePriceAlert.com</strong></p>
                                      </header>

                                  <section class="modal-card-body">
                                    
                                      <b-field label="Email">
                                          <b-input
                                              type="email"
                                              :value="email"
                                              placeholder="Your email"
                                              v-model = "email"
                                              required>
                                          </b-input>
                                      </b-field>

                                      <b-field label="Password">
                                          <b-input
                                              type="password"
                                              :value="password"
                                              password-reveal
                                              placeholder="Your password"
                                              v-model = "password"
                                              required>
                                          </b-input>
                                      </b-field>
                                  </section>
                                  <footer class="modal-card-foot">
                                      <b-button
                                          v-if ="registerButtonActive === true"
                                          label="Register and Login"
                                          type="is-success" native-type="submit" @click="register"/>
                                  </footer>
                              </div>
                          </form>
                                </template>
                            </b-modal>
                            <b-modal
                                v-model="isLoginModalActive"
                                has-modal-card
                                trap-focus
                                scroll = "keep"
                                aria-role="dialog"
                                aria-label="Login"
                                aria-modal>
                                <template>
                                <form action = "#" @submit.prevent = "login">
                                  <div class="modal-card" style="width: auto">
                                      <header class="modal-card-head">
                                          <p class="modal-card-title">Login to <strong>SharePriceAlert.com</strong></p>
                                      </header>
                                  <section class="modal-card-body">
                                      <b-field label="Email">
                                          <b-input
                                              type="email"
                                              :value="email"
                                              placeholder="Your email"
                                              v-model = "login_email"
                                              required>
                                          </b-input>
                                      </b-field>

                                      <b-field label="Password">
                                          <b-input
                                              type="password"
                                              :value="password"
                                              password-reveal
                                              placeholder="Your password"
                                              v-model = "login_password"
                                              required>
                                          </b-input>
                                      </b-field>

                                      <b-checkbox>Remember me</b-checkbox>
                                  </section>
                                  <footer class="modal-card-foot">
                                      <b-button
                                          v-if="loginButtonActive === true"
                                          label="Login"
                                          type="is-success" native-type="submit" @click = "login"/>
                                  </footer>
                              </div>
                          </form>
                                </template>
                            </b-modal>
                        </section>
                    </template>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <br>
   </template>
   <router-link to="/"></router-link>
       <router-view/>
       <br>
    </div>

</template>



<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      isLoginModalActive: false,
      isRegisterModalActive: false,
      email: '',
      password: '',
      login_email: '',
      login_password: '',
      display_email: null,
      loginButtonActive: true,
      registerButtonActive: true
    }
  },
  methods: {
    register() {
      firebase 
      .auth() 
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Successfully registered! Please login');
        this.$router.push('/');
        this.isRegisterModalActive = false
        this.registerButtonActive = false
      })
      .catch(error => {
        alert(error.message)
      });
    },
      login() {
    firebase
    .auth()
    .signInWithEmailAndPassword(this.login_email, this.login_password)
    .then(() => {
      alert('Successfully logged in');
      this.$router.push('/');
      this.display_email = this.login_email
      this.isLoginModalActive = false
      this.loginButtonActive = false 
    })
    .catch(error => {
      alert(error.message)
    });
  }
  }

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

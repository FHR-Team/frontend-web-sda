<template>
  <div class="contact">
      <Title :title="title" />
      <Navbar />
      <div class="bgx" v-bind:style="{ 'background-image': 'url(' + heroImage + ')' }">
          <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
              <h1 class="text-white font-weight-bold tx-72-resp text-center">Hubungi Kami</h1>
          </div>
      </div>
      <div class="container d-flex flex-column mw-860">
          <p class="tx-18 mt-5">Jika anda memiliki pertanyaan terkait website atau informasi dalam website ini, mohon isi formulir berikut untuk menghubungi kami. Terima Kasih.</p>
          <form>
              <div class="row">
                  <div class="col-12">
                      <input type="text" name="nama" id="nama" placeholder="Nama" class="w-100 border-0 bg-gray p-2">
                  </div>
              </div>
              <div class="row my-3">
                  <div class="col-12">
                      <textarea name="pesan" id="pesan" rows="10" placeholder="Tulis pesan Anda di sini" class="w-100 border-0 bg-gray p-2"></textarea>
                  </div>
              </div>
              <div class="row my-3">
                  <div class="col-6 col-md-2">
                      <img :src="captcha" alt="">
                  </div>
                  <div class="col-6 col-md-4">
                      <input type="text" name="verification" id="verification" placeholder="Verification Code" class="w-100 border-0 bg-gray p-2">
                  </div>
                  <div class="col-12 col-md-6">
                      <input type="email" name="email" id="email" placeholder="Email" class="w-100 border-0 bg-gray p-2">
                  </div>
              </div>
              <div class="row my-5">
                  <div class="col-12">
                      <button type="submit" class="btn btn-success font-weight-bold btn-block">Submit</button>
                  </div>
              </div>
          </form>
      </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Title from '@/components/Title.vue'

export default {
    name: "Contact",
    components: {
        Navbar, Footer, Title
    },
    data() {
        return {
            title: 'Kontak',
            heroImage: '',
            captcha: ''
        }
    },
    created() {
        this.getImage()
    },
    methods: {
        getImage() {
            this.heroImage = "'../assets/slide.jpg'"
            this.captcha = "../assets/captcha.png"
        }
    }
}
</script>
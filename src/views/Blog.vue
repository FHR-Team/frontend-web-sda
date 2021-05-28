<template>
  <div class="blog">
      <Title :title="title" />
      <Navbar />
      <div class="bgx" v-bind:style="{ 'background-image': 'url(' + heroImage + ')' }">
          <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
              <p class="text-white font-weight-bold tx-24-resp text-center mb-0">{{datePublished}} | Oleh {{writtenBy}} | {{views}} views</p>
              <h1 class="text-white font-weight-bold tx-72-resp text-center">{{title}}</h1>
          </div>
      </div>
      <div class="container d-flex flex-column mw-860">
          <div class="blog-content tx-24-resp align-self-center py-4" v-html="markdown"></div>
          <p class="font-weight-bold tx-24-resp mt-3">Bagikan</p>
          <div class="d-flex tx-24-resp align-content-center">
              <a href="#" class="text-success pr-2"><b-icon-twitter></b-icon-twitter></a>
              <a href="#" class="text-success px-2"><b-icon-linkedin></b-icon-linkedin></a>
              <a href="#" class="text-success px-2"><b-icon-facebook></b-icon-facebook></a>
              <a href="#" class="text-success px-2"><b-icon-instagram></b-icon-instagram></a>
              <a href="#" class="text-success pl-2"><b-icon-youtube></b-icon-youtube></a>
          </div>
          <p class="font-weight-bold tx-24-resp mt-5">Komentar</p>
          <form>
              <div class="row">
                  <div class="col-12">
                      <textarea name="komentar" id="komentar" rows="10" placeholder="Tulis komentar Anda di sini" class="w-100 border-0 bg-gray p-2"></textarea>
                  </div>
              </div>
              <div class="row my-3">
                  <div class="col-12 col-md-6 py-2">
                      <input type="email" name="email" id="email" placeholder="Email" class="w-100 border-0 bg-gray p-2">
                  </div>
                  <div class="col-12 col-md-6 py-2">
                      <input type="text" name="nama" id="nama" placeholder="Nama" class="w-100 border-0 bg-gray p-2">
                  </div>
              </div>
              <div class="row my-5">
                  <div class="col-12">
                      <button type="submit" class="btn btn-success font-weight-bold btn-block">Kirim</button>
                  </div>
              </div>
          </form>
      </div>
      <Footer />
  </div>
</template>

<script>
import marked from 'marked'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Title from '@/components/Title.vue'

export default {
    name: "Blog",
    components: {
        Navbar, Footer, Title
    },
    data() {
        return {
            heroImage: '',
            datePublished: '',
            writtenBy: '',
            views: 0,
            title: '',
            content: ''
        }
    },
    computed: {
        markdown() {
            return marked(this.content)
        }
    },
    created() {
        this.getBlog(this.$route.params.sub, this.$route.params.id)
    },
    methods: {
        getBlog(sub, id) {
            console.log(sub, id);
            this.heroImage = "'../assets/news.jpg'"
            this.datePublished = '5 Mei 2021'
            this.writtenBy = 'Admin'
            this.views = 65647
            this.title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            this.content = "## What is Lorem Ipsum?\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n## Where does it come from?\n\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\n## Why do we use it?\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
    }
}
</script>
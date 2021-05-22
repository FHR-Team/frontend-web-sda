<template>
  <div class="menu-layanan">
      <div class="container">
          <div class="d-flex text-center mx-4">
              <div class="col" v-for="item in dataMenuLayanan" :key="item.nama">
                  <b-button :href="item.link" class="btn btn-layanan btn-light btn-block rounded-lg shadow font-weight-bold tx-14 p-4">
                      <img class="mb-2" :src="item.image" alt=""><br>
                      <span>{{item.nama}}</span>
                  </b-button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "MenuLayanan",
    data() {
        return {
            dataMenuLayanan: []
        }
    },
    created() {
        this.dataMenuLayanan = this.getDataMenuLayanan()
    },
    methods: {
        getDataMenuLayanan() {
            return [
                {nama: 'SiGAP', image:'./assets/layanan/sigap.png', link:'#'},
                {nama: 'IN kamRS', image:'./assets/layanan/inkamrs.png', link:'#'},
                {nama: 'D-S3', image:'./assets/layanan/d-s3.png', link:'#'},
                {nama: 'SAntri RS', image:'./assets/layanan/santri.png', link:'#'},
                {nama: 'SIAP TARIK', image:'./assets/layanan/siaptarik.png', link:'#'},
                {nama: 'e - MONKAS', image:'./assets/layanan/e-monkas.png', link:'#'},
            ]
        }
    }
}
</script>

<style>
.menu-layanan {
    margin-top: -4rem;
}
.btn-layanan:hover, .btn-layanan:focus, .btn-layanan:active {
    color: #FFFFFF !important;
    background-color: #01AB55 !important;
    border: 1px solid #01AB55 !important;
}
</style>
<template>
  <div class="home">
    <Navbar active='0'/>


    <b-carousel :interval="3000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;">
      <b-carousel-slide v-for="item in dataCarousel" :key="item.id">
        <template #img>
          <img class="d-block img-fluid w-100 dark-80" width="1024" height="480" :src="item.image" alt="image slot">
        </template>
        <div class="text-xl-left">
            <p class="font-weight-bold tx-86-resp mb-0">{{item.title}}</p>
            <p class="font-weight-bold tx-64-resp mb-lg-5 mb-md-4 mb-sm-3 mb-2">{{item.subtitle}}</p>
            <b-button class="btn-selengkapnya rounded-pill text-white font-weight-bold tx-16-resp px-lg-3 px-2 py-lg-2 py-1" :href="item.link">Selengkapnya</b-button>
        </div>
      </b-carousel-slide>
    </b-carousel>


    <div class="home-infos">
      <MenuLayanan />
      <div class="container pb-5">
          <div class="row py-5 m-5">
              <div class="col p-3" v-for="item in info1" :key="item.title">
                  <h4 class="font-weight-bold tx-19">{{item.title}}</h4>
                  <span class="d-flex"><hr class="lg ml-0 mr-2"> <hr class="md mx-0"></span>
                  <p class="font-weight-bold tx-13">{{item.isi}}</p>
                  <a class="read-more font-weight-bold tx-11" href="#">Read More &RightArrow;</a>
              </div>
          </div>
          <div class="row mb-5">
              <a href="#" class="col-md-4 col-12 p-0" v-for="item in info2" :key="item.title">
                  <img class="img-fluid w-100 h-100" :src="item.image" alt="">
                  <div class="hero-info text-center text-white h2">
                      <p class="tx-36">{{item.title}}</p>
                      <b-icon icon="arrow-right-circle"></b-icon>
                  </div>
              </a>
          </div>
      </div>
    </div>


    <div class="counter">
      <div class="container bg-white shadow-sm rounded">
        <div class="px-5 py-2">
          <div class="row">
            <div class="col d-flex justify-content-center align-items-center">
              <p class="h1 font-weight-bold tx-36 text-success mr-2">26</p>
              <p class="h4 font-weight-bold tx-16">Rumah Sakit</p>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <p class="h1 font-weight-bold tx-36 text-success mr-2">100</p>
              <p class="h4 font-weight-bold tx-16">Sarana Kesehatan</p>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <p class="h1 font-weight-bold tx-36 text-success mr-2">1591</p>
              <p class="h4 font-weight-bold tx-16">Years of Foundation</p>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <p class="h1 font-weight-bold tx-36 text-success mr-2">628</p>
              <p class="h4 font-weight-bold tx-16">Industri</p>
            </div>
          </div>
          <div class="row">
            <div class="col d-flex justify-content-center align-items-center">
              <p class="h1 font-weight-bold tx-36 text-success mr-2">2200K</p>
              <p class="h4 font-weight-bold tx-16">Jumlah Penduduk</p>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <p class="h1 font-weight-bold tx-36 text-success mr-2">16000M</p>
              <p class="h4 font-weight-bold tx-16">Investasi</p>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <p class="h1 font-weight-bold tx-36 text-success mr-2">3000M</p>
              <p class="h4 font-weight-bold tx-16">PAD</p>
            </div>
          </div>
        </div>
        <div class="hhr p-1"></div>
      </div>
    </div>


    <div class="news py-4 my-5">
      <div class="container py-5">
          <div class="row">
              <div class="d-block d-md-none col-12 text-center">
                  <img class="img-fluid rounded-lg" :src="news.image" alt="">
              </div>
              <div class="col-12 col-md-5">
                  <p class="h3 news font-weight-bold tx-24 my-3">{{news.title}}</p>
                  <p class="font-weight-bold tx-13">{{news.excerpt}}</p>
                  <b-button class="btn btn-success rounded-lg font-weight-bold tx-12 my-3" :href="news.link">READ MORE</b-button>
              </div>
              <div class="d-none d-md-block col text-center">
                  <img class="img-fluid rounded-lg" :src="news.image" alt="">
              </div>
          </div>
      </div>
    </div>


    <div class="gallery">
      <div class="bg-success rounded-lg p-4">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-auto p-0 h3 text-warning font-weight-bold tx-36-resp">SIDOARJO</div>
                  <div class="col-auto p-0 h1 text-primary tx-64-resp">/</div>
                  <div class="col-auto p-0 h3 align-self-end text-white font-weight-bold tx-36-resp">GALLERY</div>
              </div>
              <div class="d-flex flex-column flex-md-row justify-content-around">
                  <div class="d-flex d-md-block justify-content-center m-1"><img class="rounded-lg" src="../assets/gallery0.png" alt=""></div>
                  <div class="d-flex d-md-block justify-content-center m-1 align-self-md-end"><img class="rounded-lg" src="../assets/gallery1.png" alt=""></div>
                  <div class="d-flex d-md-block justify-content-center m-1"><img class="rounded-lg" src="../assets/gallery2.png" alt=""></div>
              </div>
          </div>
      </div>
    </div>


    <div class="ln-pemerintahan py-5 my-5">
      <div class="container bg-success rounded-lg p-4">
          <div class="row font-weight-bold">
            <div class="col d-flex flex-column py-3">
                <p class="text-light">Dinas</p>
                <a class="text-light small" v-for="item in dataDinas" :key="item.title" :href="item.link">{{item.title}}</a>
            </div>
            <div class="col d-flex flex-column py-3">
                <p class="text-light">Kecamatan</p>
                <a class="text-light small" v-for="item in dataKecamatan" :key="item.title" :href="item.link">{{item.title}}</a>
            </div>
            <div class="col d-flex flex-column py-3">
                <p class="text-light">Badan</p>
                <a class="text-light small" v-for="item in dataBadan" :key="item.title" :href="item.link">{{item.title}}</a>
            </div>
            <div class="col d-flex flex-column py-3">
                <p class="text-light">Bagian</p>
                <a class="text-light small" v-for="item in dataBagian" :key="item.title" :href="item.link">{{item.title}}</a>
            </div>
            <div class="col d-flex flex-column py-3">
                <p class="text-light">Lainnya</p>
                <a class="text-light small" v-for="item in dataLainnya" :key="item.title" :href="item.link">{{item.title}}</a>
            </div>
          </div>
      </div>
    </div>


    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MenuLayanan from '@/components/MenuLayanan.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "Home",
  components: {
    Navbar, MenuLayanan, Footer
  },
  data() {
    return {
      dataCarousel: [],
      lorem: 'Esse eiusmod esse tempor proident culpa velit quis do non quis dolor. Est exercitation cillum ipsum ad veniam fugiat nostrud irure. Id enim esse est ea in elit consectetur magna in.',
      info1: [],
      info2: [],
      news: [],
      dataDinas: [],
      dataKecamatan: [],
      dataBadan: [],
      dataBagian: [],
      dataLainnya: []
    }
  },
  created() {
    this.dataCarousel = this.getDataCarousel()
    this.info1 = this.getInfo1()
    this.info2 = this.getInfo2()
    this.news = this.getNews()
    this.getDataLink()
  },
  methods: {
    getDataCarousel() {
      var data = []
      for (let i = 0; i < 3; i++) {
        var d = {
          id: i,
          title: 'Bangga Sidoarjo',
          subtitle: 'Sidoarjo Bersih Hatinya',
          image: './assets/slide.jpg',
          link: '#'
        }
        data.push(d)
      }
      return data
    },
    getInfo1() {
      return [
          {title: 'Pengumuman', isi: this.lorem},
          {title: 'Kegiatan', isi: this.lorem},
          {title: 'Pengadaan Barang Jasa', isi: this.lorem}
      ]
    },
    getInfo2() {
      return [
          {
              title: 'Vaksinasi Covid-19',
              image: './assets/info0.jpg'
          },
          {
              title: 'Dampak Covid-19 Terhadap Masyarakat',
              image: './assets/info1.jpg'
          },
          {
              title: 'Dampak Covid-19 Terhadap Ekonomi',
              image: './assets/info2.jpg'
          }
      ]
    },
    getNews() {
      return {
          title: 'Seorang bocah mencuri kotak amal untuk top up diamond Epep',
          excerpt: 'Kamis, 22/4/2021, Buduran - Seorang bocah berinisial J nekat mencuri kotak amal di sebuah masjid milik komplek TNI - AD. Hal tersebut diketahui oleh penjaga masjid tersebut melalui CCTV. Akibatnya seorang bocah dilarikan ke Rumah Sakit terdekat akibat luka tembak di kepalanya. Namun,...',
          link: '#',
          image: './assets/news.jpg'
      }
    },
    getDataLink() {
      this.dataDinas = [
          {title: 'Dinas Komunikasi dan Informasi', link:'#'},
          {title: 'Dinas Penanaman Modal dan PTSP', link:'#'},
          {title: 'Dinas Kependudukan dan Pencatatan Sipil', link:'#'},
          {title: 'Dinas Pendidikan dan Kebudayaan', link:'#'},
          {title: 'Dinas Pekerjaan Umum Bina Marga dan Sumber Daya Air', link:'#'},
          {title: 'Dinas Perumahan, Permukiman, Cipta Karya, dan Tata Ruang', link:'#'},
          {title: 'Dinas Pangan dan Pertanian', link:'#'},
          {title: 'Dinas Perikanan', link:'#'},
          {title: 'Dinas Tenaga Kerja', link:'#'},
          {title: 'Dinas Perindustrian dan Perdagangan', link:'#'},
          {title: 'Dinas Kepemudaan, Olahraga dan Pariwisata', link:'#'},
          {title: 'Dinas Lingkungan Hidup dan Kebersihan', link:'#'},
          {title: 'Dinas Perpustakaan dan Kearsipan', link:'#'},
          {title: 'Dinas Sosial', link:'#'},
          {title: 'Dinas Kesehatan', link:'#'},
          {title: 'Dinas Perhubungan', link:'#'},
          {title: 'Dinas Koperasi dan Usaha Mikro', link:'#'},
          {title: 'Dinas Pemberdayaan Masyarakat dan Desa', link:'#'},
          {title: 'Dinas Pemberdayaan Perempuan dan Perlindungan Anak, KB', link:'#'},
          {title: 'Satpol PP Sidoarjo', link:'#'}
      ]
      this.dataKecamatan = [
          {title: 'Kecamatan Balongbendo', link:'#'},
          {title: 'Kecamatan Buduran', link:'#'},
          {title: 'Kecamatan Candi', link:'#'},
          {title: 'Kecamatan Gedangan', link:'#'},
          {title: 'Kecamatan Jabon', link:'#'},
          {title: 'Kecamatan Krembung', link:'#'},
          {title: 'Kecamatan Krian', link:'#'},
          {title: 'Kecamatan Porong', link:'#'},
          {title: 'Kecamatan Prambon', link:'#'},
          {title: 'Kecamatan Sedati', link:'#'},
          {title: 'Kecamatan Sidoarjo', link:'#'},
          {title: 'Kecamatan Sukodono', link:'#'},
          {title: 'Kecamatan Taman', link:'#'},
          {title: 'Kecamatan Tanggulangin', link:'#'},
          {title: 'Kecamatan Tarik', link:'#'},
          {title: 'Kecamatan Tulangan', link:'#'},
          {title: 'Kecamatan Waru', link:'#'},
          {title: 'Kecamatan Wonoayu', link:'#'}
      ]
      this.dataBadan = [
          {title: 'Badan Pengelolaan Keuangan dan Aset Daerah', link:'#'},
          {title: 'Badan Perencanaan Pembangunan Daerah', link:'#'},
          {title: 'Badan Kepegawaian Daerah', link:'#'},
          {title: 'Badan Pelayanan Pajak Daerah', link:'#'},
          {title: 'Badan Penanggulangan Bencana Daerah', link:'#'},
          {title: 'Badan Kesatuan Bangsa dan Politik', link:'#'},
      ]
      this.dataBagian = [
          {title: 'Bagian Layanan Pengadaan Barang dan Jasa (LPSE)', link:'#'},
          {title: 'Bagian Administrasi Pembangunan', link:'#'},
          {title: 'Bagian Organisasi', link:'#'}
      ]
      this.dataLainnya = [
          {title: 'PDAM DELTA TIRTA', link:'#'},
          {title: 'PPID', link:'#'},
          {title: 'RSUD', link:'#'},
          {title: 'SJDIH', link:'#'},
          {title: 'TKPKD', link:'#'},
          {title: 'CSR Sidoarjo', link:'#'},
          {title: 'BAKOHUMAS', link:'#'},
          {title: 'Polresta Sidoarjo', link:'#'},
          {title: 'Kodim Sidoarjo', link:'#'},
          {title: 'DPRD Sidoarjo', link:'#'},
          {title: 'Pengadilan Negeri Sidoarjo', link:'#'},
          {title: 'KPUD Sidoarjo', link:'#'},
          {title: 'Badan Pusat Statistik', link:'#'},
      ]
    }
  }
}
</script>

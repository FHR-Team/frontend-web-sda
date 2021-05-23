<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="p-0">
        <div class="d-sm-flex d-block w-100">
            <div class="d-flex flex-shrink-sm-1 flex-sm-column flex-row">
                <b-navbar-brand href="#" class="bg-dark text-white d-flex flex-row flex-fill align-items-center justify-content-center p-2 mr-0">
                    <img src="../assets/sidoarjo.png" alt="Logo Sidoarjo" height="53px" width="55px" class="mx-2">
                    <div class="h6 font-weight-bold tx-12 my-0 mx-2">Kabupaten<br>Sidoarjo</div>
                </b-navbar-brand>
                <form class="collapse navbar-collapse">
                    <div class="form-group mb-0">
                        <div class="input-group input-group-sm">
                            <input type="text" class="form-control no-border" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Cari...">
                            <div class="input-group-append">
                                <span class="input-group-text no-border bg-transparent" id="inputGroup-sizing-sm"><b-icon icon="search"></b-icon></span>
                            </div>
                        </div>
                    </div>
                </form>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </div>

            <b-collapse id="nav-collapse" is-nav class="px-2">
                <div class="d-flex flex-fill flex-wrap justify-content-center align-content-around h-100">
                    <b-navbar-nav class="justify-content-around align-items-center w-100 my-1">
                        <b-nav-item href="#" class="font-weight-bold tx-16" :active="active == 0">Home</b-nav-item>
                        <b-nav-item-dropdown text="Tentang Sidoarjo" class="font-weight-bold tx-16">
                            <b-dropdown-item v-for="item in dataTentangSidoarjo" :key="item.title" :href="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Fasilitas" class="font-weight-bold tx-16">
                            <b-dropdown-item v-for="item in dataFasilitas" :key="item.title" :href="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Layanan" class="font-weight-bold tx-16">
                            <b-dropdown-item v-for="item in dataLayanan" :key="item.title" :href="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Publik" class="font-weight-bold tx-16">
                            <b-dropdown-item v-for="item in dataPublik" :key="item.title" :href="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Pelaporan Kerja" class="font-weight-bold tx-16">
                            <b-dropdown-item v-for="item in dataPelaporanKerja" :key="item.title" :href="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="ID" class="font-weight-bold tx-16">
                            <b-dropdown-item v-for="item in dataBahasa" :key="item.title" :href="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <div class="d-none d-md-block">
                        <span class="text-muted font-weight-bold tx-12">{{tanggal}}</span>
                    </div>
                </div>

                <!-- Right aligned nav items -->
                <div class="d-flex flex-column justify-content-around h-100">
                    <b-navbar-nav class="ml-auto justify-content-around my-1">
                        <b-button size="md rounded-pill" class="btn-warning text-white my-2 my-sm-0 mr-md-1 px-4 font-weight-bold tx-16" href="#">Kontak</b-button>
                        <router-link class="btn btn-success rounded-pill my-2 my-sm-0 ml-md-1 px-4 font-weight-bold tx-16" to="/sign-in">Login</router-link>
                    </b-navbar-nav>
                    <div class="d-none d-md-flex justify-content-around">
                        <a href="#" class="text-muted"><b-icon icon="twitter"></b-icon></a>
                        <a href="#" class="text-muted"><b-icon icon="linkedin"></b-icon></a>
                        <a href="#" class="text-muted"><b-icon icon="facebook"></b-icon></a>
                        <a href="#" class="text-muted"><b-icon icon="instagram"></b-icon></a>
                        <a href="#" class="text-muted"><b-icon icon="youtube"></b-icon></a>
                    </div>
                </div>
            </b-collapse>
        </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
      active: Number
  },
  data() {
      return {
          dataTentangSidoarjo: [],
          dataFasilitas: [],
          dataLayanan: [],
          dataPublik: [],
          dataPelaporanKerja: [],
          dataBahasa: [],
          tanggal: '',
          timer: ''
      }
  },
  created() {
      this.setDate
      this.timer = setInterval(this.setDate, 1000)
      this.setDataDropdown()
  },
  methods: {
      setDataDropdown() {
          this.dataTentangSidoarjo = [
              {title: 'Kabupaten Sidoarjo', link: '#'},
              {title: 'Geografis', link: '#'},
              {title: 'Profil Masyarakat', link: '#'},
              {title: 'Profil Pemimpin Daerah', link: '#'},
              {title: 'Pemerintahan', link: '#'},
              {title: 'Pariwisata & Industri Kreatif', link: '#'},
              {title: 'Ekonomi & Bisnis', link: '#'},
              {title: 'Selayang Pandang Kab. Sidoarjo', link: '#'},
              {title: 'Sidoarjo Smart City', link: '#'},
              {title: 'Warna-Warni Sidoarjo', link: '#'}
          ]
          this.dataFasilitas = [
              {title: 'Pendidikan', link: '#'},
              {title: 'Kesehatan', link: '#'},
              {title: 'Transportasi', link: '#'},
              {title: 'Akomodasi', link: '#'},
              {title: 'Kantor Dinas', link: '#'},
              {title: 'Kantor Pelayanan Publik', link: '#'},
              {title: 'Olahraga', link: '#'},
              {title: 'Komunitas', link: '#'},
              {title: 'Tempat Ibadah', link: '#'},
              {title: 'Pasar', link: '#'},
              {title: 'Ruang Terbuka Hijau', link: '#'}
          ]
          this.dataLayanan = [
              {title: 'Informasi COVID-19', link: '#'},
              {title: 'Kependudukan dan Catatan Sipil', link: '#'},
              {title: 'Kesehatan', link: '#'},
              {title: 'Pendidikan', link: '#'},
              {title: 'Tanggap Bencana', link: '#'},
              {title: 'Transparansi Keuangan', link: '#'},
              {title: 'Perencanaan Kota', link: '#'},
              {title: 'Perijinan', link: '#'},
              {title: 'PDAM', link: '#'},
              {title: 'Perpajakan', link: '#'}
          ]
          this.dataPublik = [
              {title: 'Berinvestasi di Sidoarjo', link: '#'},
              {title: 'Berita', link: '#'},
              {title: 'Pengumuman', link: '#'},
              {title: 'Agenda / Kegiatan', link: '#'},
              {title: 'Majalah Gema Delta', link: '#'},
              {title: 'SJDIH', link: '#'},
              {title: 'PPID', link: '#'},
              {title: 'Bakohumas', link: '#'},
              {title: 'Pengaduan Masyarakat P3M', link: '#'},
              {title: 'LAPOR !', link: '#'},
              {title: 'Mitra Media', link: '#'}
          ]
          this.dataPelaporanKerja = [
              {title: 'LAKIP', link: '#'},
              {title: 'LKPJ', link: '#'},
              {title: 'LPPD', link: '#'},
              {title: 'RLPPD', link: '#'},
              {title: 'PAPARAN SAKIP', link: '#'}
          ]
          this.dataBahasa = [
              {title: 'Bahasa Indonesia', link: '#'},
              {title: 'Bahasa Inggris', link: '#'},
              {title: 'Bahasa Jawa', link: '#'}
          ]
      },
      setDate() {
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
          var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          
          var d = new Date()

          var dayName = days[d.getDay()]
          var formattedDate = this.ordinal_suffix_of(d.getDate())
          var formattedMonth = months[d.getMonth()]
          this.tanggal = dayName + ' ' + formattedDate + ' of ' + formattedMonth + ' ' + d.getFullYear() + ' ' + this.formatAMPM(d)
      },
      ordinal_suffix_of(i) {
          var j = i % 10, k = i % 100
          if (j == 1 && k != 11) {
            return i + 'st'
          }
          if (j == 2 && k != 12) {
            return i + 'nd'
          }
          if (j == 3 && k != 13) {
            return i + 'rd'
          }
          return i + 'th'
      },
      formatAMPM(date) {
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var seconds = date.getSeconds()
        var ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12
        hours = hours ? hours : 12 // the hour '0' should be '12'
        hours = hours < 10 ? '0'+hours : hours
        minutes = minutes < 10 ? '0'+minutes : minutes
        seconds = seconds < 10 ? '0'+seconds : seconds
        var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm
        return strTime
      }
  },
  beforeDestroy() {
      clearInterval(this.timer)
  }
};
</script>
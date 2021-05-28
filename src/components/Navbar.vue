<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="p-0">
        <div class="d-block d-lg-flex w-100">
            <div class="d-flex flex-row flex-fill flex-lg-column">
                <b-navbar-brand to="/" class="bg-dark text-white d-flex flex-row flex-fill align-items-center justify-content-center p-2 mr-0">
                    <img src="../assets/sidoarjo.png" alt="Logo Sidoarjo" height="53px" width="55px" class="mx-2">
                    <div class="h6 font-weight-bold tx-12 my-0 mx-2">Kabupaten<br>Sidoarjo</div>
                </b-navbar-brand>
                <form class="d-none d-lg-block collapse navbar-collapse">
                    <div class="form-group w-100 mb-0">
                        <div class="input-group input-group-sm">
                            <input type="text" class="form-control no-border" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Cari...">
                            <div class="input-group-append">
                                <span class="input-group-text no-border bg-transparent" id="inputGroup-sizing-sm"><b-icon icon="search"></b-icon></span>
                            </div>
                        </div>
                    </div>
                </form>
                <b-navbar-toggle target="nav-collapse" class="bg-dark rounded-0 border-0"></b-navbar-toggle>
            </div>

            <b-collapse id="nav-collapse" is-nav class="px-2">
                <div class="d-flex flex-fill flex-wrap justify-content-center h-100">
                    <b-navbar-nav class="justify-content-around align-items-center w-100 my-1">
                        <b-nav-item to="/" class="font-weight-bold tx-16 w-100 text-center" :active="active == 0">Home</b-nav-item>
                        <b-nav-item-dropdown text="Tentang Sidoarjo" class="font-weight-bold tx-16 w-100 text-center" :class="{'active' : $route.params.sub === 'tentang'}">
                            <b-dropdown-item v-for="item in dataTentangSidoarjo" :key="item.title" :to="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Fasilitas" class="font-weight-bold tx-16 w-100 text-center" :class="{'active' : $route.params.sub === 'fasilitas'}">
                            <b-dropdown-item v-for="item in dataFasilitas" :key="item.title" :to="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Layanan" class="font-weight-bold tx-16 w-100 text-center" :class="{'active' : $route.params.sub === 'layanan'}">
                            <b-dropdown-item v-for="item in dataLayanan" :key="item.title" :to="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Publik" class="font-weight-bold tx-16 w-100 text-center" :class="{'active' : $route.params.sub === 'publik'}">
                            <b-dropdown-item v-for="item in dataPublik" :key="item.title" :to="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Pelaporan Kerja" class="font-weight-bold tx-16 w-100 text-center" :class="{'active' : $route.params.sub === 'pelaporan-kerja'}">
                            <b-dropdown-item v-for="item in dataPelaporanKerja" :key="item.title" :to="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="ID" class="font-weight-bold tx-16 w-100 text-center">
                            <b-dropdown-item v-for="item in dataBahasa" :key="item.title" :to="item.link" class="font-weight-bold tx-16">{{item.title}}</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <div class="d-none d-lg-block">
                        <span class="d-inline-block text-center text-muted font-weight-bold tx-12 align-bottom" style="width: 280px">{{tanggal}}</span>
                    </div>
                </div>

                <!-- Right aligned nav items -->
                <div class="d-flex flex-column justify-content-around h-100">
                    <b-navbar-nav class="ml-lg-auto justify-content-around my-1">
                        <router-link class="btn btn-warning rounded-pill my-1 my-lg-0 mr-lg-1 px-4 font-weight-bold tx-16 text-white" to="/kontak">Kontak</router-link>
                        <router-link class="btn btn-success rounded-pill my-1 my-lg-0 ml-lg-1 px-4 font-weight-bold tx-16" to="/sign-in">Login</router-link>
                    </b-navbar-nav>
                    <div class="d-none d-lg-flex justify-content-around">
                        <a href="https://twitter.com/pemkabsidoarjo2" target="_blank" class="text-secondary"><b-icon icon="twitter"></b-icon></a>
                        <a href="http://id.linkedin.com/" target="_blank" class="text-secondary"><b-icon icon="linkedin"></b-icon></a>
                        <a href="https://www.facebook.com/pemkabsidoarjo/" target="_blank" class="text-secondary"><b-icon icon="facebook"></b-icon></a>
                        <a href="https://www.instagram.com/pemkabsidoarjo/" target="_blank" class="text-secondary"><b-icon icon="instagram"></b-icon></a>
                        <a href="https://www.youtube.com/channel/UCDVKd5uHI-1A7kW6ucqping" target="_blank" class="text-secondary"><b-icon icon="youtube"></b-icon></a>
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
          tanggal: '-',
          timer: ''
      }
  },
  beforeCreate() {
      this.setDate
  },
  created() {
      this.timer = setInterval(this.setDate, 1000)
      this.setDataDropdown()
  },
  methods: {
      slugify(t) {
          return t.toLowerCase().replace(/[^\w ]+/g,'').trim().replace(/ +/g,'-')
      },
      replacer(data, titles, prepend) {
          titles.forEach(e => {
            const l = this.slugify(e)
            data.push({title: e, link: prepend+l})
          });
      },
      setDataDropdown() {
          this.replacer(this.dataTentangSidoarjo, [
              'Kabupaten Sidoarjo', 'Geografis', 'Profil Masyarakat', 'Profil Pemimpin Daerah', 'Pemerintahan', 'Pariwisata & Industri Kreatif', 'Ekonomi & Bisnis', 'Selayang Pandang Kab. Sidoarjo', 'Sidoarjo Smart City', 'Warna-Warni Sidoarjo'
            ], '/tentang/')
          this.replacer(this.dataFasilitas, [
              'Pendidikan', 'Kesehatan', 'Transportasi', 'Akomodasi', 'Kantor Dinas', 'Kantor Pelayanan Publik', 'Olahraga', 'Komunitas', 'Tempat Ibadah', 'Pasar', 'Ruang Terbuka Hijau'
            ], '/fasilitas/')
          this.replacer(this.dataLayanan, [
              'Informasi COVID-19', 'Kependudukan dan Catatan Sipil', 'Kesehatan', 'Pendidikan', 'Tanggap Bencana', 'Transparansi Keuangan', 'Perencanaan Kota', 'Perijinan', 'PDAM', 'Perpajakan'
            ], '/layanan/')
          this.replacer(this.dataPublik, [
              'Berinvestasi di Sidoarjo', 'Berita', 'Pengumuman', 'Agenda / Kegiatan', 'Majalah Gema Delta', 'SJDIH', 'PPID', 'Bakohumas', 'Pengaduan Masyarakat P3M', 'LAPOR !', 'Mitra Media'
            ], '/publik/')
          this.replacer(this.dataPelaporanKerja, [
              'LAKIP', 'LKPJ', 'LPPD', 'RLPPD', 'PAPARAN SAKIP'
            ], '/pelaporan-kerja/')

          this.dataBahasa = [
              {title: 'Bahasa Indonesia', link: '/id'},
              {title: 'Bahasa Inggris', link: '/en'},
              {title: 'Bahasa Jawa', link: '/jv'}
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
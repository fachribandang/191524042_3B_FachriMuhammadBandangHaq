<template>
    <main class="language">
        <div>
            <h1>Language Editor</h1>
            <div class="tableFixHead">
                <table>
                    <thead>
                        <tr>
                            <th>
                              <button @click="sortLanguageListById">ID</button>
                            </th>
                            <th>
                              <button @click="sortLanguageListByName">Name</button>
                            </th>
                            <th>
                              Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="Language in LanguageList"
                        :key="Language.language_id">
                            <td style="text-align:center;">
                              {{ Language.language_id }}
                            </td>
                            <td>
                                <div class ="popup">
                                <input
                                    type="text"
                                    :id="'InputLanguage'+Language.language_id"
                                    :value="Language.name"
                                    @blur="updateLanguage(Language.language_id)"
                                    @keyup.enter="$event.target.blur()"
                                    readonly>
                                <span
                                    class="popuptext"
                                    :id="'Popup'+Language.language_id"
                                    >update disini,lalu tekan enter </span>
                                </div>
                            </td>
                            <td>
                                <button @click="editLanguage(Language.language_id)">
                                  <font-awesome-icon icon="edit" size="lg"/>
                                </button>
                                <button @click="deleteLanguage(Language.language_id)">
                                  <font-awesome-icon icon="trash" size="lg"/>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align:center;">
                                <button @click="openAddTaskModul">
                                  <font-awesome-icon icon="plus-circle" size="lg"/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <add-language-modal
        @closeAddLanguageModul="closeAddLanguageModul()"
        @addLanguage="addLanguage"/>
    </main>
</template>
<script>

import LanguageDbService from '../services/Language-db-service'
import AddLanguageModal from '../components/AddLanguageModal.vue'

export default ({
  components: {
    AddLanguageModal
  },

  created () {
    this.getAllLanguage()
  },

  data () {
    return {
      LanguageList: []
    }
  },

  methods: {
    // fungis pengolahan data
    createNewLanguageObject (id, name, date) {
    // create a new task object , return object
    // task object description
    // language_id      : id,
    // name             : string,
    // last_update      : date,
      return {
        language_id: id,
        name: name,
        last_update: date
      }
    },
    async getAllLanguage () {
      // menerima list language dari database
      const respone = await LanguageDbService.getAll()
      this.LanguageList = respone.data
    },
    getLanguageById (id) {
      // menerima data objek language dari temp variable global LanguageList dengan menggunakan id sebagai parameternya
      const n = this.LanguageList.length
      for (let i = 0; i < n; i++) {
        if (this.LanguageList[i].language_id === id) {
          return this.LanguageList[i]
        }
      }
      return -1
    },
    sortLanguageListById () {
      // sorting data LanguageList berdasarkan idnya
      this.LanguageList = this.LanguageList.sort((a, b) => a.language_id - b.language_id)
      this.$forceUpdate()
    },
    sortLanguageListByName () {
      // sorting data LanguageList berdasarkan namanya nya
      this.LanguageList = this.LanguageList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      this.$forceUpdate()
    },
    // fungsi yang berhubungan dengan CRUD
    // post
    openAddTaskModul () {
      document.querySelector('#add-language-modal').style.display = 'block'
    },
    closeAddLanguageModul () {
      document.querySelector('#add-language-modal').style.display = 'none'
    },
    // update / put
    updateDataLanguage () {
      // update data language yang baru dari data base
      setTimeout(() => { this.getAllLanguage() }, 1000)
      // generate ulang component vue
      this.$forceUpdate()
    },
    addLanguage (value) {
      document.querySelector('#add-language-modal').style.display = 'none'
      this.updateDataLanguage()
    },
    popUpUpdateInfo (id, Case) {
      // memberikan po up message bahwa file input sudah bisa diedit
      // atau file sudah di commit untuk mengedit data di database
      var popup = document.getElementById('Popup' + id)
      popup.classList.toggle('show')
      if (Case) {
        popup.innerText = 'update disini,lalu tekan enter'
      } else {
        popup.innerText = 'data telah di update'
      }
      // pop up message hanya akan ada selama 2 detik
      setTimeout(() => { popup.setAttribute('class', 'popuptext') }, 2000)
    },
    editLanguage (id) {
    // memberikan akses untuk mengubah value dalam input table nama language
      this.popUpUpdateInfo(id, true)
      document.getElementById('InputLanguage' + id).readOnly = false
    },
    updateLanguage (id) {
      const languageName = document.getElementById('InputLanguage' + id).value
      const tempLanguage = this.getLanguageById(id)
      // jika isi dari inputan tidak berubah, data tidak akan di update
      if (tempLanguage.name === languageName) {

      } else {
        this.popUpUpdateInfo(id, false)
        const Cdate = new Date()
        const objLanguage = this.createNewLanguageObject(id, languageName, Cdate.toISOString())
        LanguageDbService.update(id, objLanguage)
        document.getElementById('InputLanguage' + id).readOnly = true
      }
    },
    // delete
    deleteLanguage (id) {
      LanguageDbService.delete(id)
      this.updateDataLanguage()
    }

  }
})
</script>
<style>
@import '../assets/css/table.css';
@import '../assets/css/add-language-modal.css';
</style>

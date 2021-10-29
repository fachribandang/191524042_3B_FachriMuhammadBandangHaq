<template>
    <div id="add-language-modal" class="modal">
        <span id="close-language-button" class="close" title="Close Modal"
        @click="closeAddLanguageModul">×</span>
        <form id="inputTask" class="modal-content animate" style="border:1px solid #ccc">
            <div class="modal-container">
            <label><b>Add new Language</b></label>
            <input type="text" placeholder="Language name" name="email" v-model="name" required>
            <div class="clearfix">
                <button
                id="modal-modal-button"
                class="modal-add-button"
                type="submit"
                title="commit add task"
                @click="addLanguage">
                <font-awesome-icon icon="plus-circle" size="3x"/>
                </button>
            </div>
            </div>
        </form>
    </div>
</template>

<script>
import LanguageDbService from '../services/Language-db-service'

export default {
  created () {
    this.updateLanguageSize()
  },
  data () {
    return {
      languageLen: 0,
      name: ''
    }
  },
  methods: {
    closeAddLanguageModul () {
      // membuat event baru, event saat modul di tutup
      this.$emit('closeAddLanguageModul')
    },
    addLanguage (event) {
      // post data language ke data base
      event.preventDefault()
      const Cdate = new Date()
      const language = this.createNewLanguageObject(
        this.languageLen,
        this.name,
        Cdate.toISOString()
      )
      this.languageLen = this.languageLen + 1
      LanguageDbService.create(language)
      // membuat event baru, event saat data di post
      this.$emit('addLanguage', language)
    },
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
    async updateLanguageSize () {
      // update temporary data panjang / total list language
      // digunakan sebagai acuan membuat id objek
      const respone = await LanguageDbService.getAll()
      this.languageLen = (respone.data).length + 1
    }
  }
}
</script>

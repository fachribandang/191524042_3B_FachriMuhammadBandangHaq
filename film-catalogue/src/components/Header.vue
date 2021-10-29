
<template>
  <div class="header">
    <h1>191524042</h1>
    <div class="theme-switcher"
    @change="changeTheme">
      <label class="switcher">
        <input type="checkbox" id="theme-switcher">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataTheme'],
  methods: {
    changeTheme () {
      // membuat event baru , event disaat tema aplikasi berubah
      this.$emit('changeTheme')
    }
  }
}
</script>

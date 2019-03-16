<template>
  <div>
    <h1>Edit Note</h1>
    <form @submit.prevent="checkNote" v-if="note">
      <div v-if="showError">Please fill all the fields and check the title does not exist yet.</div>
      <div>
        <label>Title</label>
        <input type="text" placeholder="Title" @input="showError = false" v-model="note.title">
      </div>
      <div class="">
        <label>Body</label>
        <textarea placeholder="Type your note here..." @input="showError = false" v-model="note.body"></textarea>
      </div>
      <div>
        <button type="submit">Save Note</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        note: null,
        showError: false
      }
    },
    computed: mapGetters(['getNote']),
    methods: {
      ...mapMutations(['editNote']),
      checkNote () {
        if (this.note.title !== '' && this.note.body !== '') {
          this.editNote(this.note)
          this.$router.push('/notes')
        } else {
          this.showError = true
        }
      }
    },
    created () {
      this.note = JSON.parse(JSON.stringify(this.getNote(this.$route.params.id)))
    }
  }
</script>
<template>
  <div>
    <h1>Add Note</h1>
    <form @submit.prevent="checkNote">
      <div v-if="showError">Please fill all the fields and check the title does not exist yet.</div>
      <div>
        <label>Title</label>
        <input type="text" placeholder="Title" @input="showError = false" v-model="fields.title">
      </div>
      <div class="">
        <label>Body</label>
        <textarea placeholder="Type your note here..." @input="showError = false" v-model="fields.body"></textarea>
      </div>
      <div>
        <button type="submit">Save Note</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        fields: {
          title: '',
          body: ''
        },
        showError: false
      }
    },
    methods: {
      ...mapMutations(['addNote']),
      checkNote () {
        if (this.fields.title !== '' && this.fields.body !== '') {
          this.addNote(this.fields)
          this.$router.push('/notes')
        } else {
          this.showError = true
        }
      }
    }
  }
</script>
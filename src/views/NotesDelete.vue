<template>
  <div>
    <h1>Delete Note</h1>
    <div v-if="note">Are you sure to delete the note "{{ note.id }}"?</div>
    <div>
      <button type="button" @click="removeNote">Delete</button>
      <router-link to="/notes" tag="button">Cancel</router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        note: null
      }
    },
    computed: mapGetters(['getNote']),
    methods: {
      ...mapMutations(['deleteNote']),
      removeNote () {
        this.deleteNote(this.$route.params.id)
        this.$router.push('/notes')
      }
    },
    created () {
      this.note = this.getNote(this.$route.params.id)
    }
  }
</script>
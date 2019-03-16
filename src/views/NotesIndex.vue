<template>
  <div>
    <h1>Home</h1>
    <div v-for="note in notes">
      <div>{{ note.title }}</div>
      <div>{{ note.body }}</div>
      <router-link :to="`/notes/${note.id}/edit`" tag="button">Edit</router-link>
      <router-link :to="`/notes/${note.id}/delete`" tag="button">Delete</router-link>
    </div>
    <div>
      <router-link to="/notes/add">Add Note</router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      notes: state => state.notes
    })
  }
</script>

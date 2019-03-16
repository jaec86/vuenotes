import Vue from 'vue'
import Router from 'vue-router'
import NotesIndex from './views/NotesIndex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/notes'
    },
    {
      path: '/notes',
      name: 'notes-index',
      component: NotesIndex
    },
    {
      path: '/notes/add',
      name: 'notes-add',
      component: () => import(/* webpackChunkName: "notes-add" */ './views/NotesAdd.vue')
    },
    {
      path: '/notes/:id/edit',
      name: 'notes-edit',
      component: () => import(/* webpackChunkName: "notes-edit" */ './views/NotesEdit.vue')
    },
    {
      path: '/notes/:id/delete',
      name: 'notes-delete',
      component: () => import(/* webpackChunkName: "notes-delete" */ './views/NotesDelete.vue')
    }
  ]
})

<template>
  <v-app>
    <v-toolbar
      color="primary"
      dark
      extended
      flat />

      <v-layout row pb-2>
        <v-flex xs8 offset-xs2>
          <v-card class="card--flex-toolbar">
            <v-toolbar card prominent>
              <v-toolbar-title class="body-2 grey--text">Shadowsocks Setting Editor</v-toolbar-title>
              <v-spacer></v-spacer>

              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn @click="restart" icon>
                    <v-icon>autorenew</v-icon>
                  </v-btn>
                  <v-btn v-on="on" icon>
                    <v-icon>add</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm6>
                          <v-text-field v-model="editedUser.port" label="Port"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                          <v-text-field v-model="editedUser.password" label="Password"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>

            <v-divider></v-divider>

            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="users"
                hide-actions
              >
                <template v-slot:items="props">
                  <td>{{ props.item.port }}</td>
                  <td>{{ props.item.password }}</td>
                  <td class="layout justify-end align-center">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editUser(props.item)"
                    >edit</v-icon>
                    <v-icon
                      small
                      @click="deleteUser(props.item)"
                    >delete</v-icon>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
          {{ snackText }}
          <v-btn flat @click="snack = false">Close</v-btn>
        </v-snackbar>
      </v-layout>
  </v-app>
</template>

<script>
import * as Api from './api'

export default {
  name: 'app',

  data () {
    return {
      dialog: false,
      snack: false,
      snackColor: '',
      snackText: '',
      editedIndex: -1,
      editedUser: {
        port: '',
        password: ''
      },
      defaultUser: {
        port: '',
        password: ''
      },
      headers: [
        { text: 'Port', value: 'port' },
        { text: 'Password', value: 'password', sortable: false },
        { text: 'Actions', value: 'port', align: 'right', sortable: false }
      ],
      users: []
    }
  },

  created () {
    this.fetchData()
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1
        ? 'New User'
        : 'Edit User'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    fetchData () {
      Api
        .fetchUsers()
        .then(({ data }) => {
          this.users = data
        })
    },

    editUser (user) {
      this.editedIndex = this.users.indexOf(user)
      this.editedUser = { ...user }
      this.dialog = true
    },

    deleteUser (user) {
      const index = this.users.indexOf(user)
      if (confirm('Are you sure you want to delete this user?')) {
        Api
          .deleteUser(this.users[index].port)
          .then(() => {
            this.snack = true
            this.snackColor = 'success'
            this.snackText = 'User deleted'
            this.fetchData()
          })
      }
    },

    save () {
      const editedIndex = this.editedIndex
      const request = editedIndex > -1
        ? Api.updateUser(this.users[editedIndex].port, this.editedUser)
        : Api.createUser(this.editedUser)

      request
        .then(() => {
          this.fetchData()
          this.close()

          this.snack = true
          this.snackColor = 'success'
          this.snackText = 'User saved'
        })
    },

    close () {
      this.dialog = false
      this.editedUser = { ...this.defaultUser }
      this.editedIndex = -1
    },

    restart () {
      Api
        .callAction('restart-ssr')
        .then(() => {
          this.snack = true
          this.snackColor = 'success'
          this.snackText = 'Restarted'
        })
        .catch(err => {
          this.snack = true
          this.snackColor = 'error'
          this.snackText = err.data.msg
        })
    }
  }
}
</script>

<style>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>

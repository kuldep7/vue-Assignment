<template>
  <v-data-table
  :headers="headers"
  :items="desserts"
  sort-by="name"
  class="elevation-1 container mx-auto"
  >
  <template v-slot:top>
    <v-toolbar flat color="white">
        <div class="text-3xl text-gray-500 w-full text-center">
            List of All customers
        </div>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="70%">
            <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.name" label="Full name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.address.street" label="Street"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.address.suite" label="Suite"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.address.city" label="City"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.address.geo.lat" label="Latitude"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.address.geo.lng" label="Longitude"></v-text-field>
                    </v-col>
                </v-row>
                <v-divider ></v-divider>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.company.name" label="Company Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.company.catchPhrase" label="Company Catch Phrase"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.company.bs" label="Company BS"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
  </v-card-actions>
</v-card>
</v-dialog>
</v-toolbar>
</template>
<template v-slot:item.actions="{ item }">
  <v-icon
  small
  class="mr-2"
  @click="editItem(item)"
  >
  mdi-pencil
</v-icon>
<v-icon
small
@click="deleteItem(item)"
>
mdi-delete
</v-icon>
</template>
<template v-slot:no-data>
  <v-btn color="primary" @click="initialize">Reset</v-btn>
</template>
</v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
      {
        text: 'Full name',
        align: 'start',
        value: 'name',
    },
    { text: 'Email', value: 'email' },
    { text: 'Phone', value: 'phone' },
    { text: 'Street', value: 'address.street' },
    { text: 'Suite', value: 'address.suite' },
    { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
        id:'',
        name: '',
        email: '',
        address: {geo:{}},
        company: {},
        phone: 0,
    },
    defaultItem: {
        id:'',
        name: '',
        email: '',
        address: {geo:{}},
        company: {},
        phone: 0,
    },
}),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
},

watch: {
  dialog (val) {
    val || this.close()
},
},

created () {
  this.initialize()
},

methods: {
  initialize () {
    let init = this
    window.axios.get('https://jsonplaceholder.typicode.com/users').then(res=>init.desserts = res.data)
},

editItem (item) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
},

deleteItem (item) {
    const index = this.desserts.indexOf(item)
    let data = this.desserts.splice(index, 1)
    window.axios.delete(`https://jsonplaceholder.typicode.com/users/${data[0].id}`).then(() =>{
        window.Swal.fire({
            title:'Success',
            text:'Data created Successfully Deleted on ID: '+data[0].id,
            icon:'success',
            showConfirmButton:false,
            allowEscapeKey:false,
            allowOutsideClick:false,
            timer:2000,
            timerProgressBar:true
        })
    })
},

close () {
    this.dialog = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
  })
},

save () {
    if (this.editedIndex > -1) {
      Object.assign(this.desserts[this.editedIndex], this.editedItem)
  } else {
      this.desserts.push(this.editedItem)
  }
  let init =this
  window.axios.put(`https://jsonplaceholder.typicode.com/users/${this.editedItem.id}`).then((res) =>{
    window.Swal.fire({
        title:'Success',
        text:'Data created Successfully Edited on ID: '+res.data.id,
        icon:'success',
        showConfirmButton:false,
        allowEscapeKey:false,
        allowOutsideClick:false,
        timer:2000,
        timerProgressBar:true
    }).then(()=>{
      init.close()
  })
})
},
},
}
</script>
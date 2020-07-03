<template>
  <v-stepper v-model="stepNo" vertical class="px-5 container">
    <v-stepper-step :editable="isEditable" :complete="stepNo > 1" step="1">
     Personal Details
     <small>*All are required</small>
   </v-stepper-step>

   <v-stepper-content step="1">
    <v-card color="grey lighten-5" class="mb-12 h-full">
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.name"
              label="Full Name"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.email"
              label="Email Address"
              outlined
              clearable
              :rules="[rules.required,rules.email]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.phone"
              label="Phone Number"
              outlined
              clearable
              type="number"
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.address.street"
              label="Street"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.address.suite"
              label="Suite"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.address.city"
              label="City"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.address.zipcode"
              label="Zip Code"
              outlined
              type="number"
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.address.geo.lat"
              label="Latitude"
              outlined
              type="number"
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.address.geo.lng"
              label="Longitude"
              type="number"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <div class="flex w-full justify-center">
      <v-btn color="primary" @click="step(2)">Continue</v-btn>
    </div>
  </v-stepper-content>

  <v-stepper-step :editable="isEditable" :complete="stepNo > 2" step="2">Username & Company Details</v-stepper-step>

  <v-stepper-content step="2">
    <v-card color="grey lighten-5" class="mb-12 h-full">
      <v-form ref="form2">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.username"
              label="Username"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.website"
              label="Website"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.company.name"
              label="Company Name"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.company.catchPhrase"
              label="Company Catch Phrase"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
              v-model="form.company.bs"
              label="Company BS"
              outlined
              clearable
              :rules="[rules.required]" hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <div class="flex w-full justify-center">
      <v-btn color="primary" @click="step(3)">Continue</v-btn>
      <v-btn text @click="step(1)">Back</v-btn>
    </div>
  </v-stepper-content>


  <v-stepper-step :editable="isEditable" step="3">Review Data</v-stepper-step>
  <v-stepper-content step="3">
    <v-card color="lighten-5" class="mb-12 h-full">
     <div class="container mx-auto">
      <div class="w-full text-center text-blue-800 mb-3 font-semibold text-2xl"> Review Data</div>
      <h4 class="text-bold text-xl mb-4">
        Personal Details
        <button class=" ml-3 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded-full shadow-md" @click="step(1)">Edit</button>
      </h4>
      <div class="grid md:grid-cols-4 grid-cols-1 col-gap-2">
        <div class="border p-4 rounded mt-2 shadow-md ">Full name: {{ form.name}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Email: {{ form.email}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Phone: {{ form.phone}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Address Street: {{ form.address.street}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Address Suite: {{ form.address.suite}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">City: {{ form.address.city}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Zip Code: {{ form.address.zipcode}}
        </div> <div class="border p-4 rounded mt-2 shadow-md ">Latitude: {{ form.address.geo.lat}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Longitude: {{ form.address.geo.lng}}</div>
      </div>
      <h4 class="text-bold text-xl mb-4 mt-3">
        Company Details
        <button class=" ml-3 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded-full shadow-md" @click="step(2)">Edit</button>
      </h4>
      <div class="grid md:grid-cols-4 grid-cols-1 col-gap-2">
        <div class="border p-4 rounded mt-2 shadow-md ">Username: {{ form.username}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Company Name: {{ form.company.name}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Company Catch Phrase: {{ form.company.catchPhrase}}</div>
        <div class="border p-4 rounded mt-2 shadow-md ">Company BS: {{ form.company.bs}}</div>
      </div>
    </div>
  </v-card>
  <div class="flex w-full justify-center">
    <v-btn color="primary" :loading="isLoading" :disabled="isLoading" @click="submit">Continue</v-btn>
    <v-btn text @click="step(2)" :disabled="isLoading">Back</v-btn>
  </div>
</v-stepper-content>
</v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        stepNo: 1,
        isEditable:true,
        isLoading:false,
        form:{address:{geo:{}},company:{}},
        rules: {
          required: value => !!value || 'Required.',
          email: v => /.+@.+/.test(v) || 'E-mail must be valid',
        },
      }
    },
    methods:{
      step(id){
        if(this.isEditable){
          if(this.$refs.form.validate()) {
            if(this.$refs.form2.validate()) {
              this.stepNo = id
            }else{
              this.stepNo = 2
            }
          }else{
            this.stepNo = 1
          }
        }
      },
      submit(){
        let init =this
        this.isLoading=true
        this.isEditable=false
        if(this.$refs.form.validate()) {
          if(this.$refs.form2.validate()) {
           window.axios.post('https://jsonplaceholder.typicode.com/users',this.form).then((res)=>{
            window.Swal.fire({
              title:'Success',
              text:'Data created Successfully Created on ID: '+res.data.id,
              icon:'success',
              showConfirmButton:false,
              allowEscapeKey:false,
              allowOutsideClick:false,
              timer:2000,
              timerProgressBar:true
            }).then(()=>{
              init.isLoading=false
              init.form = {address:{geo:{}},company:{}}
              init.stepNo=1
              init.isEditable=true
            })
          })
         }else{
          this.stepNo = 2
        }
      }else{
        this.stepNo = 1
      }

    }
  }
}
</script>
<template>
  <v-app id="app">
   <div class="app min-h-screen">
    <div class="w-full h-20 p-4 shadow-md">
      <ul class="flex justify-center items-center h-full">
        <li>
          <router-link to="/" class="border mr-2 p-4 rounded hover:bg-teal-500 hover:text-white cursor-pointer">Home</router-link></li>
          <li>
            <router-link to="/create" class="border mr-2 p-4 rounded hover:bg-teal-500 hover:text-white cursor-pointer">Create</router-link></li>
          </ul>
        </div>
        <div class="mt-8">
          <router-view/>
        </div>
      </div>
    </v-app>
  </template>

  <style>

</style>

<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      rel="stylesheet"
    >
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    >

    <div id="app">
      <v-app>
        <v-content>
          <v-container>
            <h1>
              Tailwind CSS Vue
            </h1>

            <div class="mt-4">
              <router-view />
            </div>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({

  })
}
</script>

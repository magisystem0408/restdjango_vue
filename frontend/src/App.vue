<template>
 <v-app>
   <v-app-bar color="success" dark app>
     <v-toolbar-title>求人情報</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-toolbar-items>
       <v-btn text to="/">ホーム</v-btn>
       <v-btn text to="/editor">仕事追加</v-btn>
     </v-toolbar-items>
   </v-app-bar>
  <v-content>
   <router-view />
    <v-footer color="success" dark app class="justify-center">
      あなたの名前
    </v-footer>
  </v-content>
 </v-app>
</template>

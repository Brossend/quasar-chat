<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{title}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { EssentialLinkProps } from 'components/EssentialLink.vue';
import {computed} from "vue";
import {useRoute} from "vue-router";

defineOptions({
  name: 'MainLayout'
});

const route = useRoute();

const title = computed(() => {
  if (route.name) {
    const name : string = route.name.toString();

    return name.charAt(0).toLocaleUpperCase() + name.slice(1);
  }

  return '';
});
</script>

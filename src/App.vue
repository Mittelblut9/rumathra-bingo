<template>
  <router-view/>
</template>

<script>
import socket from '@/assets/js/websocket';

export default {
    name: 'App',
    data() {
        return {
            socket,
            edit: false
        };
    },
};
</script>

<style src="@/assets/scss/base.scss" lang="scss"></style>

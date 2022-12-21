<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <font-awesome-icon v-if="icon" :icon="icon"/>
    <slot/>
  </a>
  <RouterLink
      v-else
      v-bind="$props"
      custom
      v-slot="{ isActive, href, navigate }"
  >
    <a
        v-bind="$attrs"
        :href="href"
        @click="navigate"
        :class="isActive ? activeClass : inactiveClass"
    >
      <font-awesome-icon v-if="icon" :icon="icon"/>
      <slot/>
    </a>
  </RouterLink>
</template>

<script lang="ts">
import {RouterLink} from 'vue-router'

export default {
  name: 'AppLink',
  inheritAttrs: false,

  props: {
    // @ts-ignore
    ...RouterLink.props,
    inactiveClass: String,
    activeClass: String,
    exactActiveClass: String,
    icon: String || null
  },

  computed: {
    isExternalLink(): boolean {
      // @ts-ignore
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
}
</script>
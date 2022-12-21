<template>
  <nav class="navbar bg-primary text-primary-content rounded-md mb-8 shadow-xl">
    <div class="navbar-start">
      <RouterLink
        :to="{ name: 'welcome' }"
        class="btn btn-ghost h-12 m-0 ml-0 pl-0"
      >
        <div class="avatar rounded-full overflow-clip h-12 w-12 mr-2">
          <img src="@/assets/logo.png" alt="WAI2K" class="mx-auto" />
        </div>
        WAI2K Dash
      </RouterLink>
      <ul class="menu menu-horizontal p-0">
        <li>
          <Link
            :to="{ name: 'welcome' }"
            icon="fa-solid fa-home"
            active-class="active rounded-md"
            class="hover:rounded-md focus:rounded-md"
          >
            Welcome
          </Link>
        </li>
        <li>
          <Link
            :to="{ name: 'status' }"
            icon="fa-solid fa-circle-info"
            active-class="active rounded-md"
            class="hover:rounded-md focus:rounded-md"
          >
            Status
          </Link>
        </li>
        <li>
          <Link
            :to="{ name: 'logistics' }"
            icon="fa-solid fa-user"
            active-class="active rounded-md"
            class="hover:rounded-md focus:rounded-md"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            :to="{ name: 'restart' }"
            icon="fa-solid fa-wrench"
            active-class="active rounded-md"
            class="hover:rounded-md focus:rounded-md"
          >
            Preferences
          </Link>
        </li>
        <li>
          <Link
            :to="{ name: 'about' }"
            icon="fa-solid fa-circle-question"
            active-class="active rounded-md"
            class="hover:rounded-md focus:rounded-md"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-end"></div>
  </nav>
</template>
<script setup lang="ts">
import Link from "@/components/Link.vue";
</script>

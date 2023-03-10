<template>
  <div>
    <label tabindex="0" class="btn btn-ghost rounded-btn m-1">{{
      profileName
    }}</label>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-100"
    >
      <li
        v-for="profile in store.profiles"
        :key="profile"
        class="grid grid-cols-5 my-2 gap-2"
      >
        <a
          @click.prevent="loadProfile(profile)"
          class="col-span-4"
          :class="{ active: profile === profileName }"
          >{{ profile }}</a
        >
        <a class="btn btn-error" @click.prevent="deleteProfile(profile)">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </a>
      </li>
      <li class="cursor-default">
        <div
          class="divider hover:bg-transparent focus:bg-transparent cursor-default"
        >
          Add new
        </div>
      </li>
      <li class="hover:bg-transparent focus:bg-transparent">
        <div class="form-control hover:bg-transparent focus:bg-transparent">
          <div class="input-group">
            <input
              type="text"
              ref="newProfileInput"
              placeholder="Profile name"
              class="input"
            />
            <button class="btn btn-square" @click="createProfile()">
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useProfileStore } from "@/stores/profile";
import { useProfileListStore } from "@/stores/profileList";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const store = useProfileListStore();
const currentProfileStore = useProfileStore();

const newProfileInput = ref(null);

const profileName = computed(() => {
  return currentProfileStore.name;
});

const loadProfile = (name: string) => {
  store.loadByName(name).then(() => {
    currentProfileStore.load();
  });
};
const deleteProfile = (name: string) => {
  store.deleteByName(name).then(() => {
    store.load();
  });
};

const createProfile = () => {
  // @ts-ignore
  let profileNameInput = newProfileInput.value.value;
  store.loadByName(profileNameInput).then(() => {
    profileNameInput = "";
    store.load();
    currentProfileStore.load();
  });
};

onMounted(async () => {
  await Promise.all([store.load(), currentProfileStore.load()]);
});
</script>

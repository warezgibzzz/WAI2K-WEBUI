<template>
  <main>
    <h3 class="ml-1 my-4 uppercase">YuuBot</h3>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">API key</span>
        <input
          type="text"
          class="input w-1/2 max-w-md"
          v-model="apiKey"
          @change="store.checkApiKey()"
        />
      </label>
    </div>
    <h3 class="ml-1 my-4 uppercase">Notifications</h3>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">On restart</span>
        <input
          type="checkbox"
          class="toggle"
          v-model="notificationOnRestart"
          :true-value="true"
          :false-value="false"
        />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">On stop condition</span>
        <input
          type="checkbox"
          class="toggle"
          v-model="notificationOnStopCondition"
          :true-value="true"
          :false-value="false"
        />
      </label>
    </div>
  </main>
  <h3 class="ml-1 my-4 uppercase">Send test message</h3>
  <form ref="yuu-test">
    <fieldset>
      <legend class="ml-1 w-full">
        Test message
        <button
          @click="() => 'test'"
          class="btn btn-primary btn-xs float-right"
        >
          Send
        </button>
      </legend>

      <div class="form-control my-4">
        <input
          type="text"
          class="input w-full"
          placeholder="Message title"
          ref=""
        />
      </div>
      <div class="form-control">
        <textarea class="textarea h-24" placeholder="Message body"></textarea>
      </div>
    </fieldset>
  </form>
</template>
<script setup lang="ts">
import { useConfigStore } from "@/stores/config";
import { computed } from "vue";

const store = useConfigStore();

const apiKey = computed({
  get() {
    return store.apiKey;
  },
  set(value) {
    store.setApiKey(value);
  },
});
const notificationOnRestart = computed({
  get() {
    return store.notificationOnRestart;
  },
  set(value) {
    store.setNotificationOnRestart(value);
  },
});
const notificationOnStopCondition = computed({
  get() {
    return store.notificationOnStopCondition;
  },
  set(value) {
    store.setNotificationOnStopCondition(value);
  },
});
</script>

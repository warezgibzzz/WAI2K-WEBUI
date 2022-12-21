<template>
  <main>
    <h3 class="ml-1 my-4 uppercase">YuuBot</h3>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">API key</span>
        <input type="text" class="input w-1/2 max-w-md" />
      </label>
    </div>
    <h3 class="ml-1 my-4 uppercase">Notifications</h3>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">On restart</span>
        <input type="checkbox" class="toggle" checked />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">On stop condition</span>
        <input type="checkbox" class="toggle" checked />
      </label>
    </div>
  </main>
  <h3 class="ml-1 my-4 uppercase">Send test message</h3>
  <form ref="yuu-test">
    <fieldset>
      <legend class="ml-1 w-full">
        Test message
        <a href="#" class="btn btn-primary btn-xs float-right">Send</a>
      </legend>

      <div class="form-control my-4">
        <input type="text" class="input w-full" placeholder="Message title" />
      </div>
      <div class="form-control">
        <textarea class="textarea h-24" placeholder="Message body"></textarea>
      </div>
    </fieldset>
  </form>
</template>

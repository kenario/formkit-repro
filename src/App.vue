<script setup lang="ts">
/**
 * Reproduction repo for showing that assigning an icon through props at the plugin level
 * does not seem to render the icon vs component level declaration. Note that this only seems to happen
 * when FormKit is unstyled, as it works correctly when it is using the genesis theme.
 */
import { getNode } from '@formkit/core'
import { onMounted } from 'vue';

onMounted(() => {
  /*
    You can see that selectIcon is present for the inputs node
    for both plugin and component level. But if you inspect both components,
    the element without the component level declaration seems to be missing.
    Sometimes the component level input is also missing its icon.
  */
  console.log('plugin: ', getNode('plugin')?.props.selectIcon)
  console.log('component: ', getNode('component')?.props.selectIcon)
})
</script>

<template>
  <div>
    <!-- CLOSE ICON VIA PLUGIN - DOES NOT SHOW UP -->
    <FormKit
      id="plugin"
      type="dropdown"
      label="PLUGIN LEVEL"
      :options="[
        'Vite',
        'Vue'
      ]"
    />

    <br>

    <!-- CLOSE ICON AT COMPONENT LEVEL - SOMETIMES SHOWS UP, SOMETIMES IT DOESN'T -->
    <FormKit
      id="component"
      type="dropdown"
      label="COMPONENT LEVEL"
      :options="[
        'Vite',
        'Vue'
      ]"
      select-icon="close"
    />
  </div>
</template>

<style>
.formkit-selector {
  width: 300px;
  height: 40px;
  color: white;
  position: relative;
}
.formkit-select-icon {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0;
}
</style>

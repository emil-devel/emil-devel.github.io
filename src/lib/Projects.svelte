<script lang="ts">
  import { fly } from "svelte/transition";
  import Slider from "./projects/Slider.svelte";

  let title: boolean = false;
  let projects: boolean = false;
  setTimeout(() => {
    title = true;
  }, 2800);
  setTimeout(() => {
    projects = true;
  }, 3000);
</script>

{#if title}
  <h2
    class="h6 pb-1 text-right text-primary-600"
    in:fly={{ x: 200, duration: 400 }}
  >
    Projects
  </h2>
{/if}
{#if projects}
  <div in:fly={{ y: 200, duration: 400 }}>
    <Slider />
  </div>
{/if}

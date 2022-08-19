<div class="races-container">
  {#each races as race}
    <Race race="{race}" />
  {/each}
</div>

<script>
import { onMount } from 'svelte';
import Race from './Race.svelte';

let races = 'x';

onMount(() => {
  return fetch('/api/races.json')
    .then(res => res.json())
    .then(data => (races = data))
})
</script>

<style lang="scss">
  .races-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }

  @media only screen and (max-width: 600px) {
    .races-container {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 2rem;
    }
  }
</style>


<TopAppBar bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton on:click={() => (open = !open)} class="material-icons">
        menu
      </IconButton>
      <Title>Stoperica</Title>
    </Section>
    <Section align="end" toolbar>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
  <Drawer variant="modal" bind:open>
    <button>evo me</button>
  </Drawer>
  <Scrim />
  <AppContent class="app-content">
    <main class="main-content">
      <Races />
    </main>
  </AppContent>
</AutoAdjust>

<script>
  import Drawer, { AppContent, Scrim } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import Races from './lib/races/index.svelte';
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';

  let open = false;
  let topAppBar;
</script>

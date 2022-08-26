
<TopAppBar bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton on:click={() => (open = !open)} class="material-icons">
        menu
      </IconButton>
      <Image src={logo} />
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
  import _, { Image } from '@smui/image-list';
  import Drawer, { AppContent, Scrim } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import logo from './assets/logo.png';
  import Races from './lib/races/index.svelte';
  import TopAppBar, { AutoAdjust, Row, Section } from '@smui/top-app-bar';

  let open = false;
  let topAppBar;
</script>

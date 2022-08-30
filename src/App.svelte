
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
    <button on:click={showLogin}>Login</button>
    <button on:click={subscribe}>Notifications</button>
    {#if a2hsPrompt}
      <button on:click={a2hs}>A2HS</button>
    {/if}
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
  import { onMount } from 'svelte';
  import Races from './lib/races/index.svelte';
  import TopAppBar, { AutoAdjust, Row, Section } from '@smui/top-app-bar';

  let open = false;
  let topAppBar;
  let a2hsPrompt;
  let serviceWorkerRegistration;

  function a2hs() {
    a2hsPrompt.prompt();
    a2hsPrompt.userChoice.then(res => {
      const hasAccepted = res.outcome === 'accepted';
      console.log(`User ${hasAccepted ? 'y' : 'n'} accepted the A2HS prompt`);
      a2hsPrompt = null;
    });
  }

  function showLogin() {
    console.log('TODO');
  }

  function subscribe() {
     serviceWorkerRegistration.pushManager.subscribe({
      applicationServerKey: 'BGL6jnCXZRnGWgUGp5BgbVmhgDR1T4duBdI2whWn4mQf_8KsTcewl9vXABYfez0NwXtg6C5dL6UqzKn1CzJMCwQ',
      userVisibleOnly: true
     }).then(console.log);
  }

  onMount(() => {
    Notification.requestPermission();
    navigator.serviceWorker.ready.then(registration => {
      registration.pushManager.getSubscription().then(console.log);
      serviceWorkerRegistration = registration;
    });
    window.addEventListener('beforeinstallprompt', e => {
      a2hsPrompt = e;
      console.log(e);
    });
  })
</script>

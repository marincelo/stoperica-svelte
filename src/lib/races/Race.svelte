<div class="race-container">
  <Card>
    <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({race.picture_url})">
    </Media>
    <Content>{race.name}</Content>
  </Card>
</div>

<script>
  import Card, {
    Content,
    Media,
    MediaContent,
  } from '@smui/card';

  export let race = {};
</script>

<style lang="scss">
  img {
    width: auto;
    height: 100%;
  }
</style>

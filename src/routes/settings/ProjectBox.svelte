<script>
  import { Box } from "svelte-elegant";

  export let href;
</script>

<a {href} class="box-container">
  <Box width="100%" height="100%" variant="Hoverable" padding="20px"
    ><slot /></Box
  >
</a>

<style>
  .box-container {
    text-decoration: none;
    width: 250px;
    height: 250px;
  }
</style>

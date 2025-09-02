<script>
  import { Box } from "svelte-elegant";
</script>

<div class="box-container">
  <Box width="100%" height="100%" variant="Hoverable"><slot /></Box>
</div>

<style>
  .box-container {
    width: 250px;
    height: 250px;
  }
</style>

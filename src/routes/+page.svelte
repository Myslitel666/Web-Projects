<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  function navigate() {
    goto("/settings");
  }

  onMount(() => {
    navigate();
  });
</script>

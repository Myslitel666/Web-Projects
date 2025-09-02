<script>
  import ProjectBox from "./ProjectBox.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {});
</script>

<div class="container">
  <ProjectBox href="https://math-trainer-lime.vercel.app">
    Math Trainer
  </ProjectBox>
  <ProjectBox href="https://memory-trainer-five.vercel.app">
    Memory Trainer
  </ProjectBox>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 10px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .width {
    width: 6.75rem;
  }

  .mgn-top {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switch-container {
    display: flex;
    align-items: center;
    margin-top: 0.77rem;
  }
</style>

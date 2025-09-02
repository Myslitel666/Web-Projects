<script>
  import ProjectBox from "./ProjectBox.svelte";
  import { themeStore } from "svelte-elegant/stores";
  import { onMount } from "svelte";

  onMount(() => {});
</script>

<div class="container">
  <ProjectBox href="https://math-trainer-lime.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Math</span>
        <span> Trainer </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        The simulator for solving mathematical examples.
      </p>
      <p>Solve the example:</p>
      <div>
        <span>125 </span>
        <span style:color={$themeStore.palette.primary}>÷</span>
        <span>5</span>
        <span style:color={$themeStore.palette.primary}>= ••</span>
      </div>
    </div>
  </ProjectBox>
  <ProjectBox href="https://memory-trainer-five.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Memory</span>
        <span> Trainer </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        The simulator for memory training.
      </p>
      <p>Repeat the number:</p>
      <div>
        <span style:color={$themeStore.palette.primary}>7053482</span>
      </div>
    </div>
  </ProjectBox>
</div>

<style>
  .container {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* ← Это переносит на новую строку */
    gap: 10px;
  }

  .content {
    gap: 15px;
    height: 100%;
    width: 100%;
    font-size: 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
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

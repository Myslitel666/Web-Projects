<script>
  import ProjectBox from "./ProjectBox.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  // Загружаем значение из localStorage или используем true по умолчанию
  let difficultyLevels = "";
  let trainingTime = "";

  let isInitialized = false;

  onMount(() => {
    difficultyLevels = "Medium";
    isInitialized = true;
    let storedTime = localStorage.getItem("time");

    if (storedTime) {
      trainingTime = storedTime;
    } else {
      trainingTime = "1";
    }
  });

  function navigate(link) {
    goto(link);
  }

  $: {
    if (Number(trainingTime) > 60) {
      trainingTime = "60";
    }
  }
</script>

<div class="container">
  <a href="https://math-trainer-lime.vercel.app">
    <ProjectBox>Math Trainer</ProjectBox>
  </a>
  <a href="https://memory-trainer-five.vercel.app">
    <ProjectBox>Memory Trainer</ProjectBox>
  </a>
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

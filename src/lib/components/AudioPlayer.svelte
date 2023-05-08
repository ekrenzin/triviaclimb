<script lang="ts">
  import { AudioQueue, AudioPlay } from "$lib/Store";
  import correct from "$lib/assets/audio/correct.wav";
  import incorrect from "$lib/assets/audio/incorrect.wav";
  import countdown from "$lib/assets/audio/countdown.wav";
  import load from "$lib/assets/audio/loading.wav";
  import { onMount } from "svelte";

  const audioSources: Record<string, HTMLAudioElement> = {};

  onMount(() => {
    audioSources.correct = new Audio(correct);
    audioSources.incorrect = new Audio(incorrect);
    audioSources.countdown = new Audio(countdown);
    audioSources.load = new Audio(load);
  });

  AudioPlay.subscribe((a) => {
    try {
      if (!a) return;
      resetAudio();

      const audio = a.split("_")[0];
      const method = a.split("_")[1];

      let audioSource = audioSources[audio];
      if (!audioSource) return;
      if (method === "play") {
        audioSource.play();
      } else if (method === "pause") {
        audioSource.pause();
      } else if (method === "loop") {
        audioSource.loop = true;
        audioSource.play();
      }
    } catch (e) {
      console.error(e);
    }
  });

  function resetAudio() {
    //for each audio source, reset the time and pause
    Object.values(audioSources).forEach((audio) => {
      audio.currentTime = 0;
      audio.pause();
    });
    AudioPlay.set(null)
  }
</script>

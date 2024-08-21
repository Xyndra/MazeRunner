<script lang="ts">
    import TopBar from './lib/TopBar.svelte';
    import ScreenTooSmall from "./lib/ScreenTooSmall.svelte";
    import CodeWindow from "./lib/CodeWindow.svelte";
    import Playground from "./lib/Playground.svelte";
</script>

<div class="w-screen h-screen flex flex-col">
    <TopBar />
    <ScreenTooSmall />
    <div class="w-full bg-error flex-grow flex flex-row">
        <CodeWindow />
        <Playground />
    </div>
</div>
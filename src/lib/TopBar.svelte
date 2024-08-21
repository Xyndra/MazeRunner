<script lang="ts">
    import maze_runner_logo from '/maze_runner.svg'
    import { infinite } from "../store";

    let toggleInfiniteMazes = (event: Event) => {
        const response = confirm("Are you sure? This will delete all code you wrote!");
        if (response) {
            $infinite = !$infinite;
        } else {
            event.preventDefault();
        }
    }
</script>

<div class="flex flex-row p-1 items-center bg-neutral">
    <img src={maze_runner_logo} alt="Maze Runner" class="w-12 h-12 m-2" />
    <h1 class="text-3xl font-bold mr-2">Maze Runner</h1>
    <h2 class="text-xl font-bold text-gray-500 translate-y-0.5">-  Maze algorithm visualizer and tester</h2>
    <div class="flex-grow"></div>
    <div class="flex flex-row items-center">
        <h1 class="text-xl font-bold mr-2">Normal Mazes</h1>
        <input type="checkbox" class="toggle toggle-lg toggle-primary border-primary bg-primary hover:bg-yellow-300" checked={$infinite} on:click={toggleInfiniteMazes} />
        <h1 class="text-xl font-bold ml-2">Infinite Mazes</h1>
    </div>
</div>
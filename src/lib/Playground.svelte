<script lang="ts">
    import { code, infinite } from "../store.js";

    code.subscribe(value => {
        // Check that DOM is loaded
        if (document.readyState !== "complete") return
        if (document.getElementById("code")) {
            document.getElementById("code")!.remove();
        }
        let script = document.createElement("script");
        script.innerHTML = value;
        script.id = "code";
        document.body.appendChild(script);
    });

    let width = 10;
    let height = 10;
</script>

<div class="w-full h-full">
    {#if !$infinite}
        <div class="w-full bg-secondary text-black flex items-center justify-start p-2">
            <div class="flex flex-col items-center h-28 justify-around">
                <div class="flex items-center justify-start">
                    <label for="width" class="text-xl">Width</label>
                    <div class="w-80">
                        <input type="range" min="1" max="20" step="1" bind:value={width} class="w-full" />
                        <div class="flex w-full justify-between px-2 text-xs">
                            {#each Array.from({ length: 20 }) as _, i}
                                <span>|</span>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-start">
                    <label for="height" class="text-xl">Height</label>
                    <div class="w-80">
                        <input type="range" min="1" max="20" step="1" bind:value={height} class="w-full" />
                        <div class="flex w-full justify-between px-2 text-xs">
                            {#each Array.from({ length: 20 }) as _, i}
                                <span>|</span>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary">Run</button>
        </div>
    {/if}
    <div id="playground" class="w-full h-full max-h-full bg-info text-black">
        {#if !$infinite}
            <div id="grid" class="w-full h-full max-h-full">
                {#each Array.from({ length: height }) as _, i}
                    <div class="flex w-full h-full">
                        {#each Array.from({ length: width }) as _, j}
                            <div id="{i}-{j}" class="w-full aspect-square bg-accent"></div>
                        {/each}
                    </div>
                {/each}
            </div>
        {:else}
            <div class="w-full h-full flex items-center justify-center">
                <div class="w-80 h-80 bg-primary"></div>
            </div>
        {/if}
    </div>
</div>


<style>
    #playground {
        overflow: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
</style>
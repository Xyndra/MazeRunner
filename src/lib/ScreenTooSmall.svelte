<div class="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center z-50 bg-red-600">
    <div class="flex flex-col items-center text-center">
        <h1 class="text-4xl font-bold mb-3">Screen Too Small</h1>
        <h2 class="text-2xl font-bold">Please resize your screen to a larger size</h2>
    </div>
</div>

<style>
    div {
        display: none;
    }
    @media (max-width: 1000px) {
        div {
            display: flex;
        }
    }
</style>
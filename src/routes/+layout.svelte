<script>
    import "../app.css";
</script>
  
<div class="scene">
    <slot />
</div>

<style>
    .scene {
        width: 100%;
        height: 100;
        position: absolute;
        inset: 0;
        /* background: radial-gradient(hsl(220, 14%, 20%), hsl(220, 14%, 20%)); */
        background-attachment: fixed;
        background-color: #132A13;
        color: #F1F9F1;
    }

</style>
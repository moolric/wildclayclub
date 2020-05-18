<template>
    <div class="grid-wrapper">
        <div class="grid" id="grid">
            <div 
                v-for="item in grid.items"
                :class="itemClasses(item)"
                v-html="item.name || item.content"
                
            ></div>
        </div>
    </div>
</template>

<script>
    export default {
        async asyncData() {
            try {
                const grid = await import(`~/content/data/grids/grid-seq.json`);
                return {
                    grid
                }
            } catch(err) {
                return false
            }
        },
        methods: {
            itemClasses(item) {
                let space = item.space ? `space-${item.space}` : '';
                let type = item.type || '';
                let area = item.area || '';
                return `${type} ${area} ${space}`;
            }
        }
    }
</script>

<style>
    html {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    .modal {
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 2;
        background-color: rgba(0,0,0,.5);
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal.hide {
        display: none;
    }
    .modal-inner {
        height: 80vh;
        width: 60vw;
        background-color: #fff;
        border: .5vw solid black;
        padding: 2vw;
        overflow: auto;
    }
    .modal-header {
        padding-bottom: 1vw;
        margin-bottom: 1vw;
        border-bottom: .25vw solid black;
        font-size: 2vw;
    }
    .grid-wrapper {
        padding: 0.5vh 0 0 0.5vw;
        width: 100vw;
        height: 100vh;

    }
    .grid {
        width: 99vw;
        height: 99vh;
        display: grid;
        grid-template-columns: repeat(25, 5vw);
        grid-auto-rows: 5vw;
        grid-gap: .5vw;
        overflow: hidden;
        position:  relative;
        z-index: 1;
    }
    .grid > div {
        display: grid;
        text-align: center;
        align-items: center;
    }

    .logo {
        border: .5vw solid black;
        grid-row: span 3;
        grid-column: span 3;
        font-size: 4vw;
        line-height: 1;
        text-transform: uppercase;
    }
    .suburb {
        padding: .5vw;
        font-size: .7vw;
        transition: background 2s;
        border-width: .2vw;
        border-style:  solid;
        cursor: pointer;
    }
    .suburb:hover {
        transition: background 0.1s;
    }
    .label {
        grid-column: span 2;
        font-size: 1.5vw;
        padding: 0.5vw;
        line-height: 1;
    }
    .north {
        border-color: dodgerblue;
    }
    .north:hover {
        background: rgba(30, 144, 255,.7);
    }
    .north.label {
        background-color:dodgerblue;
    }
    .west {
        border-color: darkseagreen;
    }
    .west:hover {
        background: rgba(143, 188, 143,0.7);
    }
    .west.label {
        background-color:darkseagreen;
    }
    .east {
        border-color: gold;
    }
    .east:hover {
        background: rgba(255, 215, 0,0.7);
    }
    .east.label {
        background-color:gold;
    }
    .inner {
        border-color: palevioletred;
    }
    .inner:hover {
        background: rgba(219, 112, 147,0.7);
    }
    .inner.label {
        background-color:palevioletred;
    }
    .south {
        border-color: mediumpurple;
    }
    .south:hover {
        background: rgba(147, 112, 219,0.7);
    }
    .south.label {
        background-color:mediumpurple;
    }
    .redlands {
        border-color: darkorange;
    }
    .redlands:hover {
        background: rgba(255, 140, 0,0.7);
    }
    .redlands.label {
        background-color:darkorange;
    }
    .space {
        background: #f9f9f9;
        border-color: #f9f9f9;
    }
    .space-12 {
        grid-column: span 12;
    }
    .space-11 {
        grid-column: span 11;
    }
    .space-10 {
        grid-column: span 10;
    }
    .space-9 {
        grid-column: span 9;
    }
    .space-8 {
        grid-column: span 8;
    }
    .space-7 {
        grid-column: span 7;
    }
    .space-6 {
        grid-column: span 6;
    }
    .space-5 {
        grid-column: span 5;
    }
    .space-4 {
        grid-column: span 4;
    }
    .space-3 {
        grid-column: span 3;
    }
    .space-2 {
        grid-column: span 2;
    }
</style>



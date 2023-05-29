<script setup lang="ts">

import type { img } from '../common/PortfolioItems'
import type { PropType } from 'vue'

import { ref } from "vue";



const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  desc: String,
  imgs: {
    type: Array as PropType<img[]>,
    required: true
  }
})


const hover = ref(false);
const visible = ref(false);
const maximized = ref(false);

const onClick = () => visible.value = !visible.value;
const onMouseEnter = () => hover.value = true;
const onMouseLeave = () => hover.value = false;
const onMaximize = () => maximized.value = true;
const onMinimize = () => maximized.value = false;


</script>

<template>

<div class="main-container">
    <div :class="{ 'card-active':  hover, 'card-inactive': !hover}" class="hover-overlay flex-center"
    @click="onClick"
    @mouseover="onMouseEnter"
    @mouseleave="onMouseLeave"
    >
        <h1 class="hover-overlay-title">{{ props.title }}</h1>
        <h1 class="hover-overlay-arrow">></h1>
    </div>


    
    <Card :style="{ 
        backgroundImage: 'url(' + props.imgs[0].i + ')', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }" 
    class="card-main"
    >

    <template #content>
        <Dialog v-model:visible="visible" 
        modal maximizable 
        @maximize="onMaximize"
        @unmaximize="onMinimize"
        :header="props.title" 
        :style="{ width: '50vw' }"
        class="neon-border">
            
            <div class="flex-center" >

                <div class="col-1 flex-center" v-if="props.imgs.length > 1">
                    <Galleria :value="props.imgs" var="img" :numVisible="5" 
                        :showThumbnails="true" :showItemNavigators="true"
                        >
                        <template #item="slotProps">
                            <div class="flex-div">
                                <img :class="{'dialog-img-maximized': maximized, 'dialog-img': !maximized}" 
                                    :src="slotProps.item.i" :alt="slotProps.item.alt" />
                            </div>
                            
                        </template>
                        <template #thumbnail="slotProps">
                            <img class="dialog-img-thumbnail" :src="slotProps.item.thumbnail" :alt="slotProps.item.alt" style="display: block;" />
                        </template>
                        <template #caption="slotProps">
                            <p class="text-white">{{ slotProps.item.alt }}</p>
                        </template>
                    </Galleria>
                </div>
                <div v-else>
                    <div class="flex-div">
                        <img class="dialog-img-main" :src="props.imgs[0].i" :alt="props.imgs[0].alt" />
                    </div>
                </div>


                <div class="col-1" :class="{'dialog-text-maximized': maximized, 'dialog-text': !maximized}">
                    <h3>{{ props.subtitle }}</h3>
                    <p>{{ props.desc }}</p>
                </div>
            </div>
        
            
        </Dialog>
    </template>
</Card>

</div>



</template>

<style scoped>

    @import '../assets/base.css';

    .main-container {
        margin: 0.1em;
        width: 15rem;
        height: 15rem;
        flex-grow: 1;
        position: relative;
    }

    .card-main {
        width: 100%;
        height: 100%;
        position:absolute;
    }

    .hover-overlay {
        background-color: aqua;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 5;
        border-radius: 6px;
        padding: 2rem;

        display: flex;
        align-items: center;

        font-size:  small;
        
    }

    .hover-overlay-title {
        position: absolute;
        z-index: 4;
        left: 10%;
        right: 40%; 

        font-weight: bold;
        font-family: 'Beon', monospace;
        
    }

    .hover-overlay-arrow {
        position: absolute;
        z-index: 4;
        left: 80%;

        font-weight: bolder;
    }


    .card-active {
        background-color: #00000090;
        color: #e4e4e4;
        transition: 0.10s;
        transition-timing-function: ease-in-out;
    }

    .card-inactive {
        background-color: #e4e4e400;
        color: #39487a00;
        transition: 0.20s;
        transition-timing-function: ease-in-out;
    }


    .dialog-img-maximized {
        height: 30vw;
    }
    
    .dialog-img {
        height: 25vw;
    }
    
    .dialog-img-thumbnail {
        width: 5rem;
    }

    .dialog-text {
        padding: 1rem;
        
    }

    .dialog-text-maximized {
        padding: 2rem 10rem;
    }

    


</style>

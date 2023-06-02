<script setup lang="ts">

import type { img, link } from '../common/PortfolioItems'
import type { PropType } from 'vue'

import { ref } from "vue";



const props = defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  subtitle: String,
  desc: String,
  imgs: {
    type: Array as PropType<img[]>,
    required: true
  },
  tags: {
    type: Array as PropType<string[]>,
    required: true
  },
  link: Array as PropType<link[]>,
})


const hover = ref(false);
const visible = ref(false);
const maximized = ref(false);

const onClick = () => visible.value = !visible.value;
const onMouseEnter = () => hover.value = true;
const onMouseLeave = () => hover.value = false;
const onMaximize = () => maximized.value = true;
const onMinimize = () => maximized.value = false;

const monthIndex = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const getDateString = () => monthIndex[props.date.getMonth()] + " " + props.date.getFullYear();
const getLinkDesc = (link: link) => (link.url.startsWith("http")) ? link.desc + " (External Link)" : link.desc;


</script>

<template>

<div class="main-container">
    <div :class="{ 'card-active':  hover, 'card-inactive': !hover}" class="hover-overlay flex-center"
    @click="onClick"
    @mouseover="onMouseEnter"
    @mouseleave="onMouseLeave"
    >
        <h1 class="hover-overlay-title">{{ props.title }}</h1>
        <i class="pi pi-angle-right hover-overlay-arrow" />
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
            class="neon-border">
                
                <div class="flex-center" >

                    <div class="col-1 flex-center">
                        <Galleria :value="props.imgs" var="img" :numVisible="5" 
                            :showThumbnails="false" :showItemNavigators="false" 
                            :showIndicators="true" :changeItemOnIndicatorHover="true"
                            >
                            <template #item="slotProps">
                                <div class="flex-div">
                                    <img :class="{'dialog-img-maximized': maximized, 'dialog-img': !maximized}" 
                                        :src="slotProps.item.i" :alt="slotProps.item.alt" />
                                </div>
                                
                            </template>
                            <template #caption="slotProps">
                                <p class="text-white">{{ slotProps.item.alt }}</p>
                            </template>

                        </Galleria>
                    </div>
                    <!-- <div v-else>
                        <div class="flex-div">
                            <img class="dialog-img" :src="props.imgs[0].i" :alt="props.imgs[0].alt" />
                        </div>
                    </div> -->


                    <div class="col-1" :class="{'dialog-text-maximized': maximized, 'dialog-text': !maximized}">
                        <p v-if="props.link" v-for="link in props.link" >
                            <a :href="link.url" target="_blank">{{ getLinkDesc(link) }}</a>
                        </p>
                        <p class="date">{{ getDateString() }}</p>
                        <p>{{ props.desc }}</p>
                    </div>

                    <div class="dialog-chips-container">
                        <Chip v-for="tag in props.tags" :label="tag" class="" style="margin: 0.2rem;"/>
                    </div>
                </div>
            
                
            </Dialog>
        </template>
    </Card>

</div>



</template>

<style scoped>

    @import '../assets/base.css';

    a {
        color: var(--color-text-header);
        border-bottom: 1px solid var(--color-text-header);
        box-sizing: border-box;
    }

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
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 5;
        border-radius: 6px;
        padding: 2rem;

        display: flex;
        align-items: center;

        font-size:  small;
        cursor: pointer;
        
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
        font-size: 2rem;

        font-weight: bolder;
    }


    .card-active {
        background-color: var(--color-overlay);
        color: var(--color-text);
        transition: 0.20s;
        transition-timing-function: ease-in-out;
    }

    .card-inactive {
        background-color: var(--color-overlay-transparent);
        color: var(--color-overlay-transparent);
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
        max-width: 100%;
        margin-top: 1rem;
        padding: 1rem;
        
    }

    .dialog-text-maximized {
        padding: 2rem 10rem;
    }

    .date {
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: var(--color-text-dark);

    }

    .dialog-chips-container {
        padding:  0 16px;
        display: flex;
        flex-wrap: wrap;

        justify-content: left;
        width: 100%;
        margin: 0 1rem;
    }

    @media (max-width: 768px) {
        .dialog-img {
            width: 60%;
            height: auto;
        }

    }
    


</style>

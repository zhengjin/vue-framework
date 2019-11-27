/* eslint-disable */
<template>
    <div>
        <button @click="handleClick1">
            click before
        </button>
        <button @click="handleClick">
            click after
        </button>
        <button @click="handleClick2">
            click around
        </button>
    </div>
</template>

<script>
   import {before, after, around} from '@/burry/decorator'

    export default {
        name: "Button",
        data() {
            return {
                buryData: ['2222','44444','55555'],
                buryBeforeData: ['1111','222222','33333'],
                buryAroundData: ['handleClick2','222222','222222','33333'],
            }
        },
        created() {
            this.buryAroundData = ['handleClick2','222222','222222','33333'];
        },
        methods: {
            @after(['2222','44444','55555'])
            handleClick(evt) {
                const page = this.$route.path;
                alert(evt);
            },
            @before(['1111','222222','33333'])
            handleClick1(evt) {
                alert(evt);
            },
            @before(['handleClick2','222222','222222','33333'])
            @around(['handleClick1','222222','222222','33333'])
            handleClick2(evt) {
                alert(evt);
            }
        },
    }
</script>

<style scoped>

</style>

/* eslint-disable */
<template>
    <div>
        <button @click="handleClick1">
            aaaaa
        </button>
        <button @click="handleClick">
            sssss
        </button>
    </div>
</template>

<script>
   import {before, after, around, eventBefore} from '@/burry/decorator'

    export default {
        name: "Button",
        methods: {
            @after('2222','44444','55555')
            handleClick(evt) {
                alert(evt);
            },
            @before(['1111','222222','33333'])
            handleClick1(evt) {
                alert(evt);
            }
        },
    }
</script>

<style scoped>

</style>

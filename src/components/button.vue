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
            @before('1111')
            @after('2222')
            @around('3333')
            handleClick(evt) {
                debugger
                // this.$emit('click', evt);
                alert(11111);
            },
            @eventBefore('3333')
            handleClick1(evt) {
                debugger
                alert(evt);
            }
        },
    }
</script>

<style scoped>

</style>

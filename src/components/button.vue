/* eslint-disable */
<template>
    <div>
        <button @click="handleClick1">
            click before
        </button>
        <button @click="handleClick($event,resultData)">
            click after
        </button>
        <button @click="handleClick2">
            click around
        </button>
    </div>
</template>

<script>
   import {before, after, around} from '@/tracker/decorator'
   import * as Sentry from '@sentry/browser';

   const watchList = {
       eat () {
           console.log('after eat');
           const name = this.name;
           debugger
           return {
               eventType: 'eat',
               name,
               data: this.props.resultData
           }
       }
   }

   export default {
        name: "Button",
        props: {
            resultData: {
                type: Object,
                default() {
                    return { transferChannel: 4 } // 转账渠道，转账给谁
                }
            }
        },
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
        watch: {
            tag30ResultItemD: {
                handler (a,b) {
                    console.log(a);
                    console.log(b);
                },
                deep: true
            }
        },
        computed: {
            successTime() {
                return ['handleClick2','222222','222222','33333'];
            },
        },
        methods: {
            @after(['222222','33333','44444'])
            handleClick(evt) {
                const page = this.$route.path;
                // alert(evt);
            },
            @before(['1111','222222','33333'])
            handleClick1(evt) {
                // alert(evt);
            },
            @before(watchList)
            @around(['handleClick1','222222','222222','33333'])
            handleClick2(evt) {
                // alert(evt);
                throw new Error("Something broke")
                // this.componentDidCatch(new Error("Something broke"));
            },
            componentDidCatch(error, errorInfo) {
                Sentry.withScope((scope) => {
                    scope.setExtras(errorInfo);
                    const eventId = Sentry.captureException(error);
                    this.setState({eventId});
                });
            }
        },
    }
</script>

<style scoped>

</style>

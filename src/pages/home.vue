<template>
    <div style="margin: 20px;">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleForm.pass" autocomplete="off" clearable placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" clearable placeholder="请输入内容"></el-input>
            </el-form-item>
            <div>
                <el-card shadow="always" style="margin-bottom: 8px">
                    <el-radio border size="medium" v-model="radio" label="1" style="width: 100%">Split equally</el-radio>
                </el-card>
                <el-card shadow="always">
                    <el-radio border size="medium" v-model="radio" label="2" style="width: 100%">Split individually</el-radio>
                </el-card>
            </div>

            <div style="margin: 20px 0">
                <el-checkbox v-model="checked1">备选项1</el-checkbox>
            </div>

            <div style="margin: 20px 0">
                <el-radio border size="small" v-model="radio" label="1" style="width: 100%">Paid</el-radio>
            </div>

            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm.age" placeholder="数字键盘" type="number" pattern="[0-9]*" inputmode="decimal" step="0.01" clearable></el-input>
            </el-form-item>

            <div>
                <el-button @click="submitForm('ruleForm')" type="danger" style="width: 100%" size="large" round :disabled="false">提交</el-button>
            </div>
            <div>
                <el-button @click="resetForm('ruleForm')" type="danger" style="width: 100%" size="large" round :disabled="false">重置</el-button>
            </div>
        </el-form>

        <div class="circle"></div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    // import HelloWorld from '@/components/HelloWorld.vue'
    // import Button from '@/components/Button.vue'

    import Vue from 'vue'
    import {Button, Card, Form, Input, Radio, Checkbox, FormItem} from 'overseas-vue'
    import 'overseas-vue/lib/theme-chalk/button.css'
    Vue.component(Button.name, Button);

    import 'overseas-vue/lib/theme-chalk/card.css'
    Vue.component(Card.name, Card);

    import 'overseas-vue/lib/theme-chalk/input.css'
    Vue.component(Input.name, Input);

    import 'overseas-vue/lib/theme-chalk/radio.css'
    Vue.component(Radio.name, Radio);

    import 'overseas-vue/lib/theme-chalk/checkbox.css'
    Vue.component(Checkbox.name, Checkbox);

    import 'overseas-vue/lib/theme-chalk/icon.css'
    import 'overseas-vue/lib/theme-chalk/form.css'
    import 'overseas-vue/lib/theme-chalk/form-item.css'
    Vue.component(Form.name, Form);
    Vue.component(FormItem.name, FormItem);
    export default {
        name: "home",
        data() {
            const checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                input: 'Hello Element UI!',
                radio: '1',
                checked1: false,
                checked2: true,

                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
    }
</script>

<style scoped>
    @keyframes run {
        0%,
        100% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-100vw);
        }
        50.000001% {
            transform: translateX(100vw);
        }
    }

    .circle {
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 50%;
        animation: linear infinite;
        animation-name: run;
        animation-duration: 5s;
    }
</style>

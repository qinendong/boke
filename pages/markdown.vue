<template>
    <div class="indexContainer">
        <div class="btnsContainer">
            <div class="btn1" @click="getMdValueFn">获取mdValue</div>
            <div class="btn1" @click="getHtmlValueFn">获取htmlValue</div>
        </div>
        <div class="maskContainer" v-if="dilogStatus">
            <div class="contentContainer">
            <div class="closeBtnContainer" @click="closeMaskFn"></div>
                <textarea class="showAreaContainer" v-model="msgShow" readonly></textarea>
            </div>
        </div>
        <div class="editorContainer">
            <markdown 
            :mdValuesP="msg.mdValue"  
            :fullPageStatusP="false" 
            :editStatusP="true" 
            :previewStatusP="true" 
            :navStatusP="true"
            :icoStatusP="true"  
            @childevent="childEventHandler"
            ></markdown>
        </div>
    </div>
</template>

<script>
    import markdown from '~/components/markdown.vue'
    export default {
        middleware:"login",
        name: 'index',
        data() {
            return {
                msgShow:'我要显示的内容',
                dilogStatus:false,
                msg: {
                    mdValue:'## Vue-markdownEditor'
                }
            }
        },
        components: {
            markdown
        },
        methods: {
            childEventHandler:function(res){
                // res会传回一个data,包含属性mdValue和htmlValue，具体含义请自行翻译
                this.msg=res;
            },
            getMdValueFn:function(){
                this.msgShow=this.msg.mdValue;
                this.dilogStatus=true;
            },
            getHtmlValueFn:function(){
                this.msgShow=this.msg.htmlValue;
                this.dilogStatus=true;
                
            },
            closeMaskFn:function(){
                this.msgShow='';
                this.dilogStatus=false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .show{
        position: absolute;
        left: 0;
        top: 0;
    }
    .indexContainer {
        width: 100%;
        height: 600px;
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .btnsContainer{
        position: absolute;
        z-index: 10;
        left: 65px;
        top: 5px;
        height: 25px;
        min-width: 300px;
        // background: pink;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .btn1{
            display: inline-block;
            border:1px solid #ccc;
            margin-right: 10px;
            box-sizing: border-box;
            padding: 0 10px;
            background: #fff;
            font-size: 12px;
            height: 25px;
            line-height: 25px;
            cursor:pointer;
            moz-user-select: -moz-none; 
            -moz-user-select: none; 
            -o-user-select:none; 
            -khtml-user-select:none; /* you could also put this in a class */ 
            -webkit-user-select:none;/* and add the CSS class here instead */ 
            -ms-user-select:none; 
            user-select:none;/**禁止选中文字*/ 
            &:active{
                opacity: 0.8;
                background: lightblue;
            }
        }
    }
    .maskContainer{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        height: 100vh;
        width: 100vw;
        background: rgba(0,0,0,0.5);
        // z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        .contentContainer{
            width: 60%;
            height: 60%;
            background: #fefefe;
            padding: 20px;
            box-sizing: border-box;
            position: relative;
            .showAreaContainer{
                height: 100%;
                width: 100%;
                outline: none;
                background: #eee;
                display: block;
                resize: none;
                padding: 10px;
                box-sizing: border-box;
            }
            .closeBtnContainer{
                position: absolute;
                height: 30px;
                width: 30px;
                right: -40px;
                top: -40px;
                border:1px solid #fff;
                border-radius: 50%;
                &::before{
                    content: '';
                    position: absolute;
                    width: 70%;
                    height: 2px;
                    display: bblock;
                    background: #fff;
                    left: 15%;
                    top: calc(50% - 1px);
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                }
                &::after{
                    content: '';
                    position: absolute;
                    width: 70%;
                    height: 2px;
                    display: bblock;
                    background: #fff;
                    left: 15%;
                    top: calc(50% - 1px);
                    transform: rotate(-45deg);
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                }
            }

        }

    }
    
    .editorContainer {
        width: 90%;
        height: 90%;
        border: 1px solid #ddd;
    }
</style>
<template>
    <div>
        <div style="color: #333;" class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox"  @change="countchanged"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
        }
    },
    methods: {
        countchanged(){
            this.$emit('getcount',parseInt(this.$refs.numbox.value))
        }
    },
    mounted(){
        mui(".mui-numbox").numbox()
    }
}
</script>
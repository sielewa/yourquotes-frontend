<template>
    <div class="button_container">
        <button type="button" class="btn container_content" :value="value">
            {{ value }}
        </button>
    </div>
</template>

<style lang="scss">
    .button_container {
        width: 20px;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        text-align: center;
    }
</style>

<script>
export default {
    name: 'Button',
    props:{
        value: {
            type: String,
            required: true
        }
    }
}
</script>
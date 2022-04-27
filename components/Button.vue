<template>
    <div class="button_container">
        <template v-if="element === 'button'">
            <button type="button" class="btn container_content" :value="value">
                {{ value }}
            </button>
        </template>
        <template v-else-if="element === 'submit'">
            <button type="submit" class="btn container_content" :value="value">
                {{ value }}
            </button>
        </template>
    </div>
</template>

<style lang="scss">
    .button_container {
        width: fit-content;
        display: block;
        margin: 0 auto;
        text-align: center;

        background-color: $primary;
        border: 1px solid $primary;
        border-radius: 20px;
        transition: .3s;

        &:hover {
            background-color: white;
            color: $primary;
            cursor: pointer;
            transition: .3s;

            & > .container_content {
                color: $primary;
            }
        }

        & > .container_content {
            display: block;
            width: 100% !important;
            padding: 10px 40px 10px 40px;
            font-size: 1.5rem;
            letter-spacing: 2px;
            font-weight: 600;
            transition: .3s;
            color: white;
            text-decoration: none;
        }
    }
</style>

<script>
export default {
    name: 'Button',
    props:{
        value: {
            type: String,
            required: true
        },
        element: {
            type: String,
            default: 'button'
        }
    }
}
</script>
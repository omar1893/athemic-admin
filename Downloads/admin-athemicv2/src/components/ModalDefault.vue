<template>
    <Transition name="fade">
        <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Transition name="scale">
                <div v-if="show" class="bg-white ml-70 rounded-2xl shadow-xl max-w-xl w-full p-6 relative">
                    <!-- Botón cerrar -->
                    <button @click="$emit('close')" class="absolute top-3 right-3 text-black w-8 h-8 rounded-full bg-[#EDEFF3] flex items-center justify-center">
                        ✖
                    </button>

                    <div>
                        <slot />
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup>
defineProps({
    show: Boolean,
    title: {
        type: String,
        default: "Modal"
    }
})
defineEmits(["close"])
</script>

<style scoped>


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Scale para la caja */
.scale-enter-active,
.scale-leave-active {
    transition: all 0.25s ease;
}

.scale-enter-from {
    opacity: 0;
    transform: scale(0.9);
}

.scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>
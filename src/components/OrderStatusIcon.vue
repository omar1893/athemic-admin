<template>
    <div class="flex flex-col justify-between gap-5 h-auto">

        <div v-if="[1, 2, 3, 4, 5, 6].includes(showStatus)">
            <OrderIconRecieved :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconRecieved>
        </div>

        <div v-if="[2, 3, 4, 5, 6].includes(showStatus)">
            <OrderIconAccepted :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconAccepted>
        </div>

        <div v-if="[3, 4, 5, 6].includes(showStatus)">
            <OrderIconPreparing :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconPreparing>
        </div>

        <div v-if="[4, 5, 6].includes(showStatus)">
            <OrderIconReady :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconReady>
        </div>

        <div v-if="[5, 6].includes(showStatus)">
            <OrderIconDispatched :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconDispatched>
        </div>

        <div v-if="[6].includes(showStatus)">
            <OrderIconDelivered :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconDelivered>
        </div>

        <div v-if="[7].includes(showStatus)">
            <OrderIconCanceled :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconCanceled>
        </div>

        <!-- EN CENTRO DE DISTRIBUCIÓN - POR DEFINIR -->
        <!-- <div v-show="false">
            <OrderIconCanceled :suborderStatus=props.suborderStatus :suborderDate=props.suborderDate></OrderIconCanceled>
        </div> -->
        
    </div>


</template>

<script setup>
import { ref } from 'vue';
import OrderIconAccepted from './OrderIconAccepted.vue';
import OrderIconCanceled from './OrderIconCanceled.vue';
import OrderIconPreparing from './OrderIconPreparing.vue';
import OrderIconReady from './OrderIconReady.vue';
import OrderIconRecieved from './OrderIconRecieved.vue';
import OrderIconDispatched from './OrderIconDispatched.vue';
import OrderIconDelivered from './OrderIconDelivered.vue';

let showStatus = ref("")
const props = defineProps({
    suborderStatus: {
        type: String,
        required: false
    },
    suborderDate: {
        type: String,
        required: false
    }
})

switch (props.suborderStatus) {
    case 'RECEIVED':
        showStatus = 1
        break
    case 'ACCEPTED':
        showStatus = 2
        break
    case 'PREPARING':
        showStatus = 3
        break
    case 'READY_FOR_PICKUP':
        showStatus = 4
        break
    case 'DISPATCHED':
        showStatus = 5
        break
    case 'COMPLETED':
        showStatus = 6
        break
    case 'CANCELED':
        showStatus = 7
        break
}

</script>
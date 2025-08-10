<script setup>
import LineChart from '../../components/LineChart.vue'
import StoreComparison from '../../components/StoreComparison.vue'
</script>

<template>

  <div class="monserrat flex gap-3 justify-center">

    <div class="bg-white rounded-xl w-[18rem] h-[6rem] flex flex-wrap justify-between px-5 py-2">
      <span class="text-[1.8rem] font-semibold">73.840,00</span>
      <div class="bg-[#875EF8] rounded-full p-1 h-[1.8rem] w-[1.8rem] "> <svg width="21" height="20" viewBox="0 0 21 20"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.3156 2.50195V17.502M14.4823 6.25195C14.1739 4.95803 13.0863 4.00195 11.792 4.00195H10.3156H8.9267C7.39258 4.00195 6.14893 5.3451 6.14893 7.00195C6.14893 8.65881 7.39258 10.002 8.9267 10.002H10.3156L11.7045 10.002C13.2386 10.002 14.4823 11.3451 14.4823 13.002C14.4823 14.6588 13.2386 16.002 11.7045 16.002H10.3156H8.83919C7.54486 16.002 6.45729 15.0459 6.14893 13.752"
            stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="flex justify-between w-full">
        <span class="text-sm font-semibold"> Ventas Totales </span>
        <span class="text-xs"> 23.5% vs anterior</span>
      </div>
    </div>

    <div class="bg-white rounded-xl w-[18rem] h-[6rem] flex flex-wrap justify-between px-5 py-2">
      <span class="text-[1.8rem] font-semibold">840</span>
      <div class="bg-[#875EF8] rounded-full p-1 h-[1.8rem] w-[1.8rem] "><svg width="21" height="20" viewBox="0 0 21 20"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3153 9.58464V17.5013M6.98193 4.16797L13.6486 7.91797" stroke="white" stroke-width="1.66667" />
          <path
            d="M9.06527 2.38966C9.83877 1.94307 10.7918 1.94307 11.5653 2.38966L16.2821 5.11295C17.0556 5.55953 17.5321 6.38485 17.5321 7.27801V12.7246C17.5321 13.6178 17.0556 14.4431 16.2821 14.8897L11.5653 17.6129C10.7918 18.0595 9.83877 18.0595 9.06527 17.6129L4.34839 14.8897C3.57489 14.4431 3.09839 13.6178 3.09839 12.7246L3.09839 7.27801C3.09839 6.38485 3.57489 5.55953 4.34839 5.11295L9.06527 2.38966Z"
            stroke="white" stroke-width="1.66667" />
          <path d="M17.3986 6.25195L11.0951 9.58911C10.6073 9.84736 10.0233 9.84736 9.53545 9.58911L3.23193 6.25195"
            stroke="white" stroke-width="1.66667" />
        </svg>

      </div>
      <div class="flex justify-between w-full">
        <span class="text-sm font-semibold"> Pedidos Totales </span>
        <span class="text-xs"> 23.5% vs anterior</span>
      </div>
    </div>

    <div class="bg-white rounded-xl w-[18rem] h-[6rem] flex flex-wrap justify-between px-5 py-2">
      <span class="text-[1.8rem] font-semibold">400</span>

      <div class="bg-[#875EF8] rounded-full h-[1.8rem] w-[1.8rem] flex justify-around p-1">
        <svg class="stroke-current" width="16" height="17" viewBox="0 0 16 17" fill="none">
          <path
            d="M11.3333 4.33333C11.3333 6.17428 9.84093 7.66667 7.99998 7.66667C6.15903 7.66667 4.66665 6.17428 4.66665 4.33333C4.66665 2.49238 6.15903 1 7.99998 1C9.84093 1 11.3333 2.49238 11.3333 4.33333Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M11.3333 11H4.66665C2.8257 11 1.33331 12.4924 1.33331 14.3333C1.33331 15.2538 2.07951 16 2.99998 16H13C13.9205 16 14.6666 15.2538 14.6666 14.3333C14.6666 12.4924 13.1743 11 11.3333 11Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <div class="flex justify-between w-full">
        <span class="text-sm font-semibold"> Clientes Totales </span>
        <span class="text-xs"> 23.5% vs anterior</span>
      </div>
    </div>
  </div>

  <div class="monserrat orders-enhanced-container text-[#170033]">
    <div>

      <div class="flex justify-between">
        <span class="font-semibold">Tendencia de Ventas</span>
        <select class="poppins border-2 border-gray-100 rounded-full text-[#170033] py-1 px-2">
          <option class="rounded-full" value="Filtrar por fecha">Filtrar fecha</option>
        </select>
      </div>

      <span class="text-sm font-medium">Obtén una visión clara de los picos de actividad</span>
      <!-- placeholder de gráfico -->
      <LineChart class="mt-2" />
    </div>
  </div>

  <div class="flex my-6 mx-auto max-w-[900px] gap-5">

    <div class=" monserrat w-1/2 flex py-4 px-2 bg-white rounded-xl items-start flex-wrap">

      <div class="w-full h-10 flex justify-between items-center">
        <span class="font-semibold">Comparativa de Tiendas</span>
        <select class="border-2 border-gray-100 rounded-full text-[#170033] text-xs font-medium py-1 px-2">
          <option class="rounded-full" value="Filtrar por fecha">Filtrar fecha</option>
        </select>
      </div>

      <div class=" w-full">
        <StoreComparison class="monserrat" />
      </div>
    </div>

    <div class="monserrat flex py-4 px-2 bg-white rounded-xl flex-wrap justify-between">
      <span class="font-semibold mb-5">Productos Más Vendidos</span>
      <ul>
        <li class="mb-4">
          <div class="font-semibold text-[#170033]"><span
              class="bg-[#F3EFFE] text-[#875EF8] rounded-[200px] px-3 py-1 mr-1">1</span>Auriculares Inalámbricos Pro
          </div>
          <div class="pl-9 text-base font-light text-[#170033]">89 unidades</div>
        </li>
        <li class="mb-4">
          <div class="font-semibold text-[#170033]"><span
              class="bg-[#F3EFFE] text-[#875EF8] rounded-[200px] px-3 py-1 mr-1">2</span>Funda Iphone 14 Pro</div>
          <div class="pl-9 text-base font-light text-[#170033]">89 unidades</div>
        </li>
        <li class="mb-4">
          <div class="font-semibold text-[#170033]"><span
              class="bg-[#F3EFFE] text-[#875EF8] rounded-[200px] px-3 py-1 mr-1">3</span>Cable USB-C (2m)</div>
          <div class="pl-9 text-base font-light text-[#170033]">89 unidades</div>
        </li>
        <li class="mb-4">
          <div class="font-semibold text-[#170033]"><span
              class="bg-[#F3EFFE] text-[#875EF8] rounded-[200px] px-3 py-1 mr-1">4</span>Cargador Inalámbrico 15W</div>
          <div class="pl-9 text-base font-light text-[#170033]">89 unidades</div>
        </li>
        <li class="mb-4">
          <div class="font-semibold text-[#170033]"><span
              class="bg-[#F3EFFE] text-[#875EF8] rounded-[200px] px-3 py-1 mr-1">5</span>Altavoz Bluetooth Premium</div>
          <div class="pl-9 text-base font-light text-[#170033]">89 unidades</div>
        </li>
      </ul>
    </div>
  </div>

  <div class="monserrat orders-enhanced-container text-[#170033] font-semibold">
    <div class="mb-5">
      <span>Actividad Reciente</span>
    </div>

    <ul>

      <li>
        <div class="flex mb-5">
          <div class="mr-1">
            <div class="rounded-[200px] p-1 bg-[#F3EFFE] p-1"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.3156 2.50195V17.502M14.4823 6.25195C14.1739 4.95803 13.0863 4.00195 11.792 4.00195H10.3156H8.9267C7.39258 4.00195 6.14893 5.3451 6.14893 7.00195C6.14893 8.65881 7.39258 10.002 8.9267 10.002H10.3156L11.7045 10.002C13.2386 10.002 14.4823 11.3451 14.4823 13.002C14.4823 14.6588 13.2386 16.002 11.7045 16.002H10.3156H8.83919C7.54486 16.002 6.45729 15.0459 6.14893 13.752"
                  stroke="#875EF8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex-col">
            <div>Nueva venta: $123,00</div>
            <div class="text-base font-light text-[#170033]">Tieda: AudioTech</div>
          </div>
          <div class="ml-auto font-light">
            <span>5 de mayo de 2023</span>
          </div>
        </div>
      </li>

      <li>
        <div class="flex mb-5">
          <div class="mr-1">
            <div class="rounded-[200px] p-1 bg-[#F3EFFE]"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.3156 2.50195V17.502M14.4823 6.25195C14.1739 4.95803 13.0863 4.00195 11.792 4.00195H10.3156H8.9267C7.39258 4.00195 6.14893 5.3451 6.14893 7.00195C6.14893 8.65881 7.39258 10.002 8.9267 10.002H10.3156L11.7045 10.002C13.2386 10.002 14.4823 11.3451 14.4823 13.002C14.4823 14.6588 13.2386 16.002 11.7045 16.002H10.3156H8.83919C7.54486 16.002 6.45729 15.0459 6.14893 13.752"
                  stroke="#875EF8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex-col">
            <div>Nueva venta: $123,00</div>
            <div class="text-base font-light text-[#170033]">Tieda: AudioTech</div>
          </div>
          <div class="ml-auto font-light">
            <span>5 de mayo de 2023</span>
          </div>
        </div>
      </li>

      <li>
        <div class="flex mb-5">
          <div class="mr-1">
            <div class="rounded-[200px] p-1 bg-[#F3EFFE]"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.3156 2.50195V17.502M14.4823 6.25195C14.1739 4.95803 13.0863 4.00195 11.792 4.00195H10.3156H8.9267C7.39258 4.00195 6.14893 5.3451 6.14893 7.00195C6.14893 8.65881 7.39258 10.002 8.9267 10.002H10.3156L11.7045 10.002C13.2386 10.002 14.4823 11.3451 14.4823 13.002C14.4823 14.6588 13.2386 16.002 11.7045 16.002H10.3156H8.83919C7.54486 16.002 6.45729 15.0459 6.14893 13.752"
                  stroke="#875EF8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex-col">
            <div>Nueva venta: $123,00</div>
            <div class="text-base font-light text-[#170033]">Tieda: AudioTech</div>
          </div>
          <div class="ml-auto font-light">
            <span>5 de mayo de 2023</span>
          </div>
        </div>
      </li>

      <li>
        <div class="flex mb-5">
          <div class="mr-1">
            <div class="rounded-[200px] p-1 bg-[#F3EFFE]"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.3156 2.50195V17.502M14.4823 6.25195C14.1739 4.95803 13.0863 4.00195 11.792 4.00195H10.3156H8.9267C7.39258 4.00195 6.14893 5.3451 6.14893 7.00195C6.14893 8.65881 7.39258 10.002 8.9267 10.002H10.3156L11.7045 10.002C13.2386 10.002 14.4823 11.3451 14.4823 13.002C14.4823 14.6588 13.2386 16.002 11.7045 16.002H10.3156H8.83919C7.54486 16.002 6.45729 15.0459 6.14893 13.752"
                  stroke="#875EF8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex-col">
            <div>Nueva venta: $123,00</div>
            <div class="text-base font-light text-[#170033]">Tieda: AudioTech</div>
          </div>
          <div class="ml-auto font-light">
            <span>5 de mayo de 2023</span>
          </div>
        </div>
      </li>

      <li>
        <div class="flex mb-5">
          <div class="mr-1">
            <div class="rounded-[200px] p-1 bg-[#F3EFFE]"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.3156 2.50195V17.502M14.4823 6.25195C14.1739 4.95803 13.0863 4.00195 11.792 4.00195H10.3156H8.9267C7.39258 4.00195 6.14893 5.3451 6.14893 7.00195C6.14893 8.65881 7.39258 10.002 8.9267 10.002H10.3156L11.7045 10.002C13.2386 10.002 14.4823 11.3451 14.4823 13.002C14.4823 14.6588 13.2386 16.002 11.7045 16.002H10.3156H8.83919C7.54486 16.002 6.45729 15.0459 6.14893 13.752"
                  stroke="#875EF8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="flex-col">
            <div>Nueva venta: $123,00</div>
            <div class="text-base font-light text-[#170033]">Tieda: AudioTech</div>
          </div>
          <div class="ml-auto font-light">
            <span>5 de mayo de 2023</span>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>
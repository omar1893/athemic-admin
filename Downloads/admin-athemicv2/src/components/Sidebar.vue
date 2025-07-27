<template>
  <aside class="w-[299px] bg-white shadow-md px-6 py-8 fixed inset-y-0 left-0 z-20">
    <!-- Top Title -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-indigo-900"><img src="../assets/logo/athemic.svg"></h1>
    </div>
    <!-- Navigation Menu -->
    <nav class="flex-1">
      <ul class="space-y-2">
        <li :class="selectedCategory === 'orders' ? 'SelectedAdmin' : ''" @click="setActiveCategory('orders')">
          <router-link to="/orders" class="flex items-center gap-3 px-3 py-2 rounded-full">
            <span class="w-5 h-5 flex items-center justify-center">
              <svg class="iconAdmin w-5 h-5" fill="none" stroke="#currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M6.39258 1.97264V12.806M11.3926 4.07921V14.9125M7.58515 2.37222L10.2122 3.68576C10.6375 3.8984 10.8501 4.00471 11.0728 4.04824C11.284 4.08953 11.5012 4.08953 11.7124 4.04824C11.935 4.00471 12.1476 3.8984 12.5729 3.68576C13.8153 3.06457 14.4365 2.75397 14.942 2.82005C15.4157 2.88199 15.8401 3.14429 16.1074 3.54035C16.3926 3.96289 16.3926 4.65741 16.3926 6.04644V10.9612C16.3926 11.5594 16.3926 11.8586 16.3015 12.1227C16.2209 12.3562 16.0895 12.5689 15.9166 12.7454C15.7211 12.945 15.4536 13.0788 14.9185 13.3463L12.5851 14.513C12.1479 14.7316 11.9292 14.8409 11.6999 14.884C11.4968 14.9221 11.2884 14.9221 11.0852 14.884C10.8559 14.8409 10.6373 14.7316 10.2 14.513L7.57292 13.1994C7.14765 12.9868 6.93502 12.8805 6.71236 12.837C6.50117 12.7957 6.28398 12.7957 6.0728 12.837C5.85014 12.8805 5.63751 12.9868 5.21224 13.1994C3.96985 13.8206 3.34866 14.1312 2.8432 14.0651C2.36942 14.0032 1.94501 13.7409 1.67773 13.3449C1.39258 12.9223 1.39258 12.2278 1.39258 10.8388V5.92402C1.39258 5.32576 1.39258 5.02663 1.48367 4.76254C1.56422 4.529 1.69569 4.31628 1.86855 4.13979C2.06402 3.94021 2.33157 3.80644 2.86667 3.53888L5.20001 2.37222C5.63728 2.15358 5.85592 2.04426 6.08525 2.00124C6.28836 1.96313 6.49679 1.96313 6.69991 2.00124C6.92924 2.04426 7.14787 2.15358 7.58515 2.37222Z" />
              </svg>
              <!-- <img src="../assets/icons/products.svg"> -->
            </span>
            <span class=" categoryAdmin monserrat">Órdenes</span>
            <span
              class="monserrat bubbleAdmin px-2 py-0.5 rounded-full bg-indigo-500 text-white text-xs font-semibold">125</span>
          </router-link>
        </li>
        <li :class="selectedCategory === 'products' ? 'SelectedAdmin' : ''" @click="setActiveCategory('products')">
          <router-link to="/products"
            class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-full">
            <span class="w-5 h-5 flex items-center justify-center">
              <svg class="iconAdmin w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M5.55924 5.60807H5.56758M1.49064 5.3237L1.45464 6.00781C1.38568 7.31793 1.3512 7.97299 1.47599 8.59236C1.58659 9.1413 1.78861 9.66775 2.07362 10.1498C2.39521 10.6936 2.85904 11.1575 3.78672 12.0851L5.80464 14.103C6.90141 15.1998 7.4498 15.7482 8.0378 16.0478C9.2262 16.6533 10.6327 16.6533 11.8211 16.0478C12.4091 15.7482 12.9575 15.1998 14.0542 14.103C15.151 13.0063 15.6994 12.4579 15.999 11.8699C16.6045 10.6815 16.6045 9.27503 15.999 8.08663C15.6994 7.49863 15.151 6.95024 14.0542 5.85347L12.0363 3.83555C11.1086 2.90787 10.6448 2.44403 10.1009 2.12245C9.61893 1.83744 9.09247 1.63541 8.54353 1.52482C7.92416 1.40003 7.2691 1.43451 5.95898 1.50346L5.27488 1.53947C4.00421 1.60635 3.36887 1.63979 2.87657 1.90382C2.44292 2.13638 2.08755 2.49175 1.85499 2.92539C1.59096 3.4177 1.55752 4.05304 1.49064 5.3237ZM5.96716 5.5978C5.96716 5.82792 5.78062 6.01447 5.5505 6.01447C5.32038 6.01447 5.13383 5.82792 5.13383 5.5978C5.13383 5.36768 5.32038 5.18113 5.5505 5.18113C5.78062 5.18113 5.96716 5.36768 5.96716 5.5978Z" />
              </svg>
              <!-- <img src="../assets/icons/products.svg"> -->
            </span>
            <span class="categoryAdmin monserrat">Productos</span>
          </router-link>
        </li>
        <li :class="selectedCategory === 'tag' ? 'SelectedAdmin' : ''" @click="setActiveCategory('tag')">
          <router-link to="/tags/create"
            class="flex items-center gap-3 px-3 py-2 rounded-full text-gray-700">
            <span class="w-5 h-5 flex items-center justify-center">
              <!-- Heroicon: Plus (placeholder) -->
              <svg class="iconAdmin w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" />
              </svg>
            </span>
            <span class="categoryAdmin monserrat">Crear Tag</span>
          </router-link>
        </li>
        <li :class="selectedCategory === 'stores' ? 'SelectedAdmin' : ''" @click="setActiveCategory('stores')">
          <router-link to="/stores"
            class="flex items-center gap-3 px-3 py-2 rounded-full text-gray-700">
            <span class="w-5 h-5 flex items-center justify-center">
              <svg class="iconAdmin w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M17.3929 11.2734V5.27344C17.3929 3.87331 17.3929 3.17324 17.1204 2.63846C16.8807 2.16806 16.4983 1.7856 16.0279 1.54592C15.4931 1.27344 14.793 1.27344 13.3929 1.27344H6.3929C4.99277 1.27344 4.29271 1.27344 3.75793 1.54592C3.28752 1.7856 2.90507 2.16806 2.66539 2.63846C2.3929 3.17324 2.3929 3.87331 2.3929 5.27344V11.2734M17.3929 11.2734L2.3929 11.2734M17.3929 11.2734C17.8531 11.2734 18.2262 11.6465 18.2262 12.1068C18.2262 13.4875 17.1069 14.6068 15.7262 14.6068L4.05957 14.6068C2.67886 14.6068 1.55957 13.4875 1.55957 12.1068C1.55957 11.6465 1.93267 11.2734 2.3929 11.2734" />
              </svg>
              <!-- <img src="../assets/icons/shops.svg"> -->
            </span>
            <span class="categoryAdmin monserrat">Tiendas</span>
          </router-link>
        </li>
        <li :class="selectedCategory === 'staff' ? 'SelectedAdmin' : ''" @click="setActiveCategory('staff')">
          <router-link to="/staff"
            class="flex items-center gap-3 px-3 py-2 rounded-full text-gray-700">
            <span class="w-5 h-5 flex items-center justify-center">
              <svg class="iconAdmin w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M15.7217 15.8983C15.637 14.4365 14.3656 13.276 12.8096 13.276H6.97624C5.4202 13.276 4.14877 14.4365 4.06406 15.8983M15.7217 15.8983C17.2672 14.3856 18.2262 12.2761 18.2262 9.94271C18.2262 5.34034 14.4953 1.60938 9.8929 1.60938C5.29053 1.60938 1.55957 5.34034 1.55957 9.94271C1.55957 12.2761 2.51863 14.3856 4.06406 15.8983M15.7217 15.8983C14.219 17.3693 12.1619 18.276 9.8929 18.276C7.62396 18.276 5.5668 17.3693 4.06406 15.8983M12.3929 8.27604C12.3929 9.65675 11.2736 10.776 9.8929 10.776C8.51219 10.776 7.3929 9.65675 7.3929 8.27604C7.3929 6.89533 8.51219 5.77604 9.8929 5.77604C11.2736 5.77604 12.3929 6.89533 12.3929 8.27604Z" />
              </svg>
              <!-- <img src="../assets/icons/staff.svg"> -->
            </span>
            <span class="categoryAdmin monserrat">Dependientes</span>
          </router-link>
        </li>
        <li :class="selectedCategory === 'users' ? 'SelectedAdmin' : ''" @click="setActiveCategory('users')">
          <router-link to="/users"
            class="flex items-center gap-3 px-3 py-2 rounded-full text-gray-700">
            <span class="w-5 h-5 flex items-center justify-center">
              <svg class="iconAdmin" width="16" height="17" viewBox="0 0 16 17" fill="none" stroke="currentColor">
                <path
                  d="M11.3333 4.33333C11.3333 6.17428 9.84093 7.66667 7.99998 7.66667C6.15903 7.66667 4.66665 6.17428 4.66665 4.33333C4.66665 2.49238 6.15903 1 7.99998 1C9.84093 1 11.3333 2.49238 11.3333 4.33333Z"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M11.3333 11H4.66665C2.8257 11 1.33331 12.4924 1.33331 14.3333C1.33331 15.2538 2.07951 16 2.99998 16H13C13.9205 16 14.6666 15.2538 14.6666 14.3333C14.6666 12.4924 13.1743 11 11.3333 11Z"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <!-- <img src="../assets/icons/user.svg"> -->
            </span>
            <span class="categoryAdmin monserrat">Usuarios</span>
          </router-link>
        </li>
        <li :class="selectedCategory === 'analytics' ? 'SelectedAdmin' : ''" @click="setActiveCategory('analytics')">
          <router-link to="/analytics"
            class="flex items-center gap-3 px-3 py-2 rounded-full text-gray-700">
            <span class="w-5 h-5 flex items-center justify-center">
              <svg class="iconAdmin" width="12" height="18" viewBox="0 0 12 18" fill="none" stroke="currentColor">
                <path
                  d="M5.89225 1.44141V16.4414M10.0589 5.19141C9.75056 3.89749 8.66299 2.94141 7.36865 2.94141H5.89225H4.50336C2.96924 2.94141 1.72559 4.28455 1.72559 5.94141C1.72559 7.59826 2.96924 8.94141 4.50336 8.94141H5.89225L7.28114 8.94141C8.81527 8.94141 10.0589 10.2846 10.0589 11.9414C10.0589 13.5983 8.81527 14.9414 7.28114 14.9414H5.89225H4.41585C3.12152 14.9414 2.03395 13.9853 1.72559 12.6914"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <!-- <img src="../assets/icons/analytics.svg"> -->
            </span>
            <span class="categoryAdmin monserrat">Analíticas</span>
          </router-link>
        </li>
        <li :class="selectedCategory === 'support' ? 'SelectedAdmin' : ''" @click="setActiveCategory('support')">
          <router-link to="/support"
            class="flex items-center gap-3 px-3 py-2 rounded-full text-gray-700">
            <span class="w-5 h-5 flex items-center justify-center">
              <svg class="iconAdmin" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor">
                <path
                  d="M14.1959 3.63811C12.8386 2.28087 10.9636 1.44141 8.89258 1.44141C6.82151 1.44141 4.94651 2.28087 3.58928 3.63811M14.1959 3.63811C15.5531 4.99534 16.3926 6.87034 16.3926 8.94141C16.3926 11.0125 15.5531 12.8875 14.1959 14.2447M14.1959 3.63811L10.6603 7.17364M10.6603 7.17364C10.2079 6.72123 9.58293 6.44141 8.89258 6.44141C8.20222 6.44141 7.57722 6.72123 7.12481 7.17364M10.6603 7.17364C11.1128 7.62605 11.3926 8.25105 11.3926 8.94141C11.3926 9.63176 11.1128 10.2568 10.6603 10.7092M7.12481 7.17364C6.6724 7.62605 6.39258 8.25105 6.39258 8.94141C6.39258 9.63176 6.6724 10.2568 7.12481 10.7092M7.12481 7.17364L3.58928 3.63811M7.12481 10.7092C7.57722 11.1616 8.20222 11.4414 8.89258 11.4414C9.58293 11.4414 10.2079 11.1616 10.6603 10.7092M7.12481 10.7092L3.58928 14.2447M10.6603 10.7092L14.1959 14.2447M14.1959 14.2447C12.8386 15.6019 10.9636 16.4414 8.89258 16.4414C6.82151 16.4414 4.94651 15.6019 3.58928 14.2447M3.58928 14.2447C2.23204 12.8875 1.39258 11.0125 1.39258 8.94141C1.39258 6.87034 2.23204 4.99534 3.58928 3.63811"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <!-- <img src="../assets/icons/support.svg"> -->
            </span>
            <span class="categoryAdmin monserrat">Soporte</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- Spacer -->
    <div class="flex-1"></div>

    <!-- Log out and copyright -->
    <div class="mt-8">
      <a href="#" 
        class="flex items-center  gap-2 text-indigo-900 font-semibold px-3 py-2 rounded-full bg-gray-200">
        <span class="poppins font-medium text-[#170033]">Log out</span>
        <span class=" ml-auto w-5 h-5 flex items-center justify-center">
          <!-- Heroicon: Logout (placeholder) -->
          <svg class="iconAdmin" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M11.5006 5.46094C12.1586 5.95443 12.7529 6.52693 13.2701 7.16522C13.34 7.25155 13.375 7.35624 13.375 7.46094M11.5006 9.46094C12.1586 8.96744 12.7529 8.39494 13.2701 7.75665C13.34 7.67032 13.375 7.56563 13.375 7.46094M13.375 7.46094H4.70833M8.04167 2.47946C7.33399 1.84608 6.39947 1.46094 5.375 1.46094C3.16586 1.46094 1.375 3.2518 1.375 5.46094V9.46094C1.375 11.6701 3.16586 13.4609 5.375 13.4609C6.39947 13.4609 7.33399 13.0758 8.04167 12.4424"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </a>
      <p class="poppins text-[#170033] mt-8 text-[10px] text-justify">Copyright 2025 Athemic. Todos los derechos
        reservados</p>
    </div>
  </aside>
</template>

<script setup>
// Sidebar del admin
import { ref } from 'vue'

const selectedCategory = ref('') // Inicialmente nada seleccionado

function setActiveCategory(category) {
  selectedCategory.value = category
}

</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.monserrat {
  font-family: 'Montserrat', sans-serif;
}

.poppins {
  font-family: 'Poppins', sans-serif;
}

.iconAdmin {
  stroke: #170033;
}

.categoryAdmin {
  font-weight: 600;
  color: #170033;
  border-radius: 34px;
}

.bubbleAdmin {
  background-color: #875EF8;
}

.SelectedAdmin {
  background-color: #875EF814;
  border-radius: 34px;
}
</style>
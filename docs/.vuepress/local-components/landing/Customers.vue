<template>
  <section class="customer-logos flex container mx-auto my-20 items-center">
    <img src="images/customers/customer-blackbaud.png" alt="Blackbaud">
    <img src="images/customers/customer-cisco.png" alt="Cisco">
    <img src="images/customers/customer-avis.png" alt="Avis">
    <img src="images/customers/customer-tmobile.png" alt="T-Mobile">
    <img src="images/customers/customer-vmware.png" alt="VMWare">
    <img src="images/customers/customer-cintas.png" alt="Cintas">
    <img src="images/customers/customer-bed-bath-beyond.png" alt="Bed Bath &amp; Beyond">
    <img src="images/customers/customer-navistar.png" alt="Navistar">
  </section>
</template>

<style lang="stylus">
.customer-logos
  position relative

  &::before,&::after
    content ''
    display block
    height 100%
    position absolute
    top 0
    width 12.5%
    z-index 1

  &::after
    background linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%)
    right: 0

  &::before
    background linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)
    left: 0

  img
    padding 0 1.5%
    width 12.5%
    opacity 0.5
</style>
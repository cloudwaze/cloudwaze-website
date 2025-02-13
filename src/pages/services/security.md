---
layout: ../../layouts/ServiceLayout.astro
title: Cloud Security Services
description: Enterprise-grade security solutions for your cloud infrastructure
heroTitle: Cloud Security & Compliance
heroDescription: Protect your cloud infrastructure with comprehensive security solutions and compliance management
---

<div class="security-shield-pattern mb-16" data-aos="fade-up">
  <div class="max-w-4xl mx-auto text-center">
    <div class="inline-block p-4 bg-blue-600 rounded-full mb-8">
      <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    </div>
    <h2 class="text-3xl font-bold mb-4">Enterprise Security Solutions</h2>
    <p class="text-xl text-gray-600">Comprehensive security services to protect your cloud infrastructure and ensure compliance</p>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
  <div class="security-card" data-aos="flip-left">
    <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white h-full">
      <div class="security-icon mb-6">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      </div>
      <h3 class="text-xl font-bold mb-4">Threat Protection</h3>
      <ul class="space-y-3">
        <li class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          Advanced Threat Detection
        </li>
        <!-- Add more list items -->
      </ul>
    </div>
  </div>
  <!-- Add more security cards -->
</div>

<div class="bg-gray-50 py-16 px-4 rounded-3xl my-16">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Security Framework</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="framework-step" data-aos="fade-up">
        <div class="step-number">01</div>
        <h3 class="text-xl font-bold mb-4">Assessment</h3>
        <p class="text-gray-600">Comprehensive security assessment of your cloud infrastructure</p>
      </div>
      <!-- Add more framework steps -->
    </div>
  </div>
</div>

<style>
  .security-shield-pattern {
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239BA9B4' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }

  .security-card {
    @apply transform transition-all duration-300 hover:-translate-y-2;
  }

  .framework-step {
    @apply bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300;
  }

  .step-number {
    @apply w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4;
  }
</style> 
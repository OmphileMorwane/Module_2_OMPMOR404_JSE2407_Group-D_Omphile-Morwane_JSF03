<template>
        <header class="header">
          <nav class="nav">
            <div class="nav-container">
              <a href="/" class="logo">
                <img src="/src/assets/online-shop.png" class="logo-img" alt="Flowbite Logo" />
                <span class="logo-text">SwiftCart</span>
              </a>
              <button @click="toggleNavbar" type="button" class="menu-button" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="menu-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div :class="{'hidden': !navbarOpen, 'block': navbarOpen}" class="navbar-dropdown" id="navbar-dropdown">
                <ul class="navbar-list">
                  <li>
                    <a href="#" class="navbar-item">Wishlist</a>
                  </li>
                  <li class="navbar-cart">
                    <a href="#" class="navbar-item">
                      <div class="cart-notification">
                        <p class="cart-count">2</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cart-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="navbar-item cart-mobile">Cart</a>
                  </li>
                  <li>
                    <a href="login" class="navbar-item">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </template>
      
      <script>
      export default {
        data() {
          return {
            navbarOpen: false,
          };
        },
        methods: {
          toggleNavbar() {
            this.navbarOpen = !this.navbarOpen;
          },
        },
      };
      </script>
      
      <style>
      .header {
        position:absolute;
        top: 0;
        z-index: 50;
        width: 100%;
      }
      
      .nav {
        background-color: #6b7280; /* Gray 500 */
        border-color: hsl(216, 12%, 84%); /* Gray 200 */
        width:auto;
      }
      
      .nav-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 16px;
        width: 100%;
      }
      
      .logo {
        display: flex;
        align-items: center;
        gap: 12px; /* space-x-3 */
      }
      
      .logo-img {
        height: 32px; /* h-8 */
      }
      
      .logo-text {
        font-size: 24px; /* text-2xl */
        font-weight: 600; /* font-semibold */
        color: white;
      }
      
      .menu-button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        width: 40px;
        height: 40px;
        justify-content: center;
        font-size: 14px;
        color: white;
        border-radius: 8px;
        border: none;
        background: none;
        cursor: pointer;
      }
      
      .menu-button:hover {
        background-color: #f3f4f6; /* Gray 100 */
      }
      
      .menu-button:focus {
        outline: none;
        box-shadow: 0 0 0 2px #d1d5db; /* focus:ring-2 focus:ring-gray-200 */
      }
      
      .menu-icon {
        width: 20px; /* w-5 */
        height: 20px; /* h-5 */
      }
      
      .navbar-dropdown {
        width: 100%;
      }
      
      .navbar-list {
        display: flex;
        flex-direction: column;
        font-weight: 500; /* font-medium */
        padding: 16px;
        margin-top: 16px;
        border: 1px solid #d1d5db; /* border-gray-100 */
        border-radius: 8px;
        background-color: #6b7280; /* Gray 500 */
      }
      
      .navbar-item {
        display: block;
        padding: 8px 12px;
        color: white;
        border-radius: 8px;
        text-decoration: none;
      }
      
      .navbar-item:hover {
        background-color: #f3f4f6; /* Gray 100 */
      }
      
      .navbar-cart {
        display: none;
        position: relative;
      }
      
      .navbar-cart .navbar-item {
        display: flex;
        align-items: center;
      }
      
      .cart-notification {
        position: absolute;
        left: 12px;
        top: -16px;
        display: flex;
        height: 8px;
        width: 8px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #ef4444; /* Red 500 */
        padding: 12px;
        font-size: 12px;
        color: white;
      }
      
      .cart-icon {
        height: 24px; /* h-6 */
        width: 24px; /* w-6 */
        color: white;
        cursor: pointer;
      }
      
      .cart-mobile {
        display: block;
      }
      
      /* Responsive Styles */
      @media (min-width: 768px) {
        .menu-button {
          display: none;
        }
      
        .navbar-dropdown {
          display: block !important;
          width: auto;
        }
      
        .navbar-list {
          flex-direction: row;
          gap: 32px; /* space-x-8 */
          margin-top: 0;
          border: none;
        }
      
        .navbar-item {
          padding: 0;
          background: none;
          border: none;
          color: white;
        }
      
        .navbar-item:hover {
          color: #3b82f6; /* Blue 700 */
        }
      
        .navbar-cart {
          display: block;
        }
      
        .cart-mobile {
          display: none;
        }
      }
      </style>
      
      
# Tamagotchi Store

Welcome to our Tamagotchi Store: an e-commerce web application that sells Tamagotchis to users/guests and allows shop-front management for admins.

Users can create an account and revisit a persistent cart of saved items.

See the launched site [here](https://tamagotchi-store.herokuapp.com/home)

## Prerequisites

Before you begin, ensure you have met the following requirements:

You have installed the latest version of `npm`

## How to Install

* Fork and clone:

`https://github.com/harry-potter-grace-shopper/Grace-Shopper`

* Run the following commands:

```
npm install
npm start dev
```

This starts the web application on [localhost:8080](http://localhost:8080/)

# Features

## Store front

![Store Front](img/storeFront.mov)
Upon opening the page, the user will be presented with the product dashboard.

On this page, the user will see all of the Tamagotchis available for purchase in the center of the page. Pagination was used to simplify the display. You can also filter you search by selecting the Tamagotchi color. From here, users can select each toy for further information and add them to their cart.

## User Log-In

The user can create a secure account using their email address. The user can log-in and see their order history and hold items within their shopping cart between visits.
The user is also able to update and modify their account details.

## Guest Cart

A visitor doesn't need a user account in order to shop. A guest can add items to a guest cart and checkout. The guest's cart can also persist between visits, should they leave and return another time to complete their purchase.

## Admin Powers

Admin powers are reserved for the shop owner. They are able to update the details of any of the shop item and add new products to the store front. Admin users are also able to view the details of all other user accounts.

# Resources

Built using Express, React, Redux, Sequelize and Node.js.

# Creators

Aleksandra Bardymova @AleksandraBard, Yumiko Mannarelli @yumiko2695, Lilly Oh @lillyoh & Martha Betterton @m-bettert0n

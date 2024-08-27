# Expense Tracker 💵
This application is designed for managing the internal budget of IEEE CS.

1. [App Flow](#app-flow)
   1. [Login](#1-login)
   2. [Allocating Budget](#2-allocating-budget)
   3. [Submitting an Invoice](#3-submitting-an-invoice)
   4. [Verifying an Invoice](#4-verifying-an-invoice)
   5. [Getting a Summary](#5-getting-a-summary)
2. [Features](#features)
   1. [ECs](#ecs-are-allowed-to)
   2. [CCs and JCs](#ccs-and-jcs-are-allowed-to)
3. [Stack Used](#stack-used)
   1. [Frontend](#frontend)
   2. [Backend](#backend)

## App Flow

### 1. Login
The login page includes three buttons for `EC`, `CC`, and `JC`. Users select their role, enter their password, and log in.

### 2. Allocating Budget
`ECs` can initiate a new event and assign a budget. This budget becomes available for `CCs` and `JCs` to use.

### 3. Submitting an Invoice
`CCs` and `JCs` can submit invoices by uploading a picture of the bill and entering the amount. The invoice will enter a pending state until verified by a `CC` or `EC`.

### 4. Verifying an Invoice
When a `CC` or `EC` verifies an invoice, the amount is deducted from the allocated budget.

### 5. Getting a Summary
`ECs` can generate a comprehensive summary of all expenses, including detailed statistics on spending by category and user.

## Features

### CCs and JCs can:
- View statistics
- Submit invoices
- Access their own invoices
- Change their password
- Update their profile picture
- View all events
- Check notifications

### ECs can:
- Perform all actions available to `CCs` and `JCs`, plus:
  - Create, edit, or delete events
  - Allocate budgets
  - Approve or reject invoices
  - Create or delete `CC` or `JC` users
  - Enable or disable `CC` or `JC` tokens

## Stack Used

### Frontend
- React Native
- NativeWind

### Backend
- NodeJS (Express)
- PostgreSQL

\
Made with ❤️ by IEEECS

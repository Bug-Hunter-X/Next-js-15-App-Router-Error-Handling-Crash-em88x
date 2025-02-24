# Next.js 15 App Router Error Handling Crash

This repository demonstrates a common error encountered when using the Next.js 15 App Router: Throwing an error in a page component causes the whole application to crash.

## Problem

In previous Next.js versions, errors in a page would often result in a user-friendly error message.  However, with the App Router, the default behavior is to crash the entire app.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You'll see a full application crash instead of a user-friendly error message.

## Solution

The provided solution shows how to implement custom error boundaries to elegantly handle errors within the App Router, providing users with a better experience instead of crashing the entire app.

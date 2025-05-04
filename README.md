# atm-penchecks
To run the project: 
- npm install
- npm run dev

AI Tools:
- Grok

I used Grok for the main setup and the general scaffold: The store and the services file, since I didn't remember very much how to do it from scratch.

What would I have done better with a real app and more time:

1. Create a back-end service, instead of mocking it all with local storage. So I would move all of the logic for confirming user transactions and creating users.
2. Better separation of concerns, as I got some logic between the store and the service that is not standarized and separated correctly.
3. Route guards: right now the app doesn't have any protected routes
4. Try/Catch and error handling validations. I only added validations in places where I was completely sure the app could fail. If I had a real API, I would add try/catch on any service that mades an API call or that is prompt to fail.
5. Service validation: I'm only validating money transactions in the components, not in the services.
6. Using typescript

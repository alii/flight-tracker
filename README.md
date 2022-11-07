<center>
    <h1>flight-tracker</h1>
    <p>[ab]use in-flight Wi-Fi portals to fetch live statistics</p>
</center>

![Screenshot of the dashboard](./doc/screenshot.png)

This project is the result of having no internet on a flight and cached node_modules. It is designed to be dynamic so it will work with multiple airlines. Below is a list of the airlines supported (will add more when I fly more OK).

- Air Canada

## Usage

> **Warning**
> This project will only work on a local device, connected to in-flight Wi-Fi. It will not work if deployed to a cloud platform! It works completely offline (you don't even have to pay for the Wi-Fi in most cases).

```bash
yarn
yarn build
yarn start
```

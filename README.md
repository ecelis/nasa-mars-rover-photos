# NASA Mars Rover Images

## Run

- Make sure to be at te top level diretory, the one with this `README.md` file.
- The values in `back/sample.env` are good to get the app running.
- Keep the TCP port 3000 free or use `PORT=<number> npm start`.

```
cp back/sample.env back/.env
npm install
npm start
```

Browse http://localhost:3000 and use `test` as username. To keep it simple I avoided passwords, but you require a valid token from the API. The token is not persisted on the client, only in the React state, so be prepared to login again if you browse away.

A sample deployment is at http://patito.ninja:3000

To run tests `npm test`. Some might fail due to expired token or race condition on the system.

## Details

Copy and edit `cp back/sample.env back/.env`, using a valid **NASA_API_KEY** key is the only requirement. Get yours at [NASA APIs](https://api.nasa.gov)

Edit `back/.env` and change at least **NASA_API_KEY** with a valid one.

```
NASA_API_KEY=DEMO
NASA_API=https://api.nasa.gov/mars-photos/api/v1/
JWT_SECRET=verylongrandomstring
```

By default the project will run a production build of the frontend hosted in the expressjs backend. So expect the startime to take some time.

## Testing

```
npm test
```

### Front

- [x] Display NASA logo
- [x] Layout, 2 columns (1/4 and 3/4)
- [x] List of cameras in left column.
    - [x] Clicable elements
- [x] Dislpay selected camera in right column.
- [x] Bold selected camera
- [x] 4x5 grid of images in right column.
    - [x] Clickable elements
- [x] Show carousel on image click
    - [x] use arrow keys to navigate carousel.
- [x] Security, yous must login with username **test**

### Back

- [x] Tests
- [x] Protected endpoints
    - `/user/login` GET query params **username** returns a JWT
    - `/rover` GET REST paramas `:rover` and `:camera` returns JSON of images
    
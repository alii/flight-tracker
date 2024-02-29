# delta

(flight DL1239, ATL -> JFK on 11/27)

implementing delta is very different than aircanada

- there are different requests made and the same data is not available.
- delta is now using a different wifi provider that isn't gogoair, but that also varies depending on some flights. this provider is usually found at deltawifi.com or wifi.delta.com

first, there's a request to https://wifi.delta.com/api/flight-data (referrer, https://wifi.delta.com/my-trip)

```json
{
	"timestamp": "2023-11-28T03:27:10Z",
	"eta": null,
	"flightDuration": null,
	"flightNumber": "DAL1239",
	"latitude": 36.08888626098633,
	"longitude": -77.77960205078125,
	"noseId": "6708",
	"paState": false,
	"vehicleId": "N6708D",
	"destination": "KJFK",
	"origin": "KATL",
	"flightId": "N6708D_SF_20231128013603",
	"airspeed": null,
	"airTemperature": 52,
	"altitude": 37489,
	"distanceToGo": null,
	"doorState": "Closed",
	"groundspeed": 582,
	"heading": 32,
	"timeToGo": null,
	"wheelWeightState": "Off"
}
```

then there's another request to https://wifi.delta.com/api/portableElectronicDevice/v2/flights/N6708D_SF_20231128013603/details/2023-11-27

- flight id is used
- flight's date is also used as a param
- there's a timezone conversion

```json
{
	"onTime": true,
	"estimatedTotalDuration": "PT02H22M",
	"estimatedArrivalUtcTs": "2023-11-28T04:26:00.000Z",
	"timeToGo": "PT01H04M"
}
```

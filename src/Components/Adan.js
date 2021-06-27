import React, { Component } from 'react'

export default class Adan extends Component {

    state = ({
        "code": 200,
        "status": "OK",
        "results": {
          "datetime": [
            {
              "times": {
                "Imsak": "03:55",
                "Sunrise": "05:46",
                "Fajr": "04:05",
                "Dhuhr": "13:53",
                "Asr": "18:10",
                "Sunset": "22:00",
                "Maghrib": "22:24",
                "Isha": "23:41",
                "Midnight": "01:02"
              },
              "date": {
                "timestamp": 1624492800,
                "gregorian": "2021-06-24",
                "hijri": "1442-11-14"
              }
            }
          ],
          "location": {
            "latitude": 48.85661315917969,
            "longitude": 2.352221965789795,
            "elevation": 36.0,
            "city": "Paris",
            "country": "France",
            "country_code": "FR",
            "timezone": "Europe/Paris",
            "local_offset": 2.0
          },
          "settings": {
            "timeformat": "HH:mm",
            "school": "Ithna Ashari",
            "juristic": "Shafii",
            "highlat": "None",
            "fajr_angle": 12.0,
            "isha_angle": 12.0
          }
        }
      })



    render() {
        return (
            <div>
                {this.state.results.datetime.map(time => (
                    <div>
                       <h1> Imsak : {time.times.Imsak} </h1>
                       <h1>Fajr : {time.times.Fajr} </h1>
                       <h1> Dhuhr : {time.times.Dhuhr} </h1>
                       <h1> Asr : {time.times.Asr} </h1>
                       <h1> Maghrib : {time.times.Maghrib} </h1>
                       <h1> Isha : {time.times.Isha} </h1>
                     </div>
                ))}
            </div>
        )
    }
}

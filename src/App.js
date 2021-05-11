import React, { useState, useEffect } from 'react';
import './App.css';
import { createCharacteristicProvider } from './bluetooth';

// function Metric({name, uuid, service}) {
//   const [value, setValue] = useState(false);
//
//   service.getCharacteristic(uuid)
//     .then(char => char.startNotifications())
//     .then(char => char.addEventListener('characteristicvaluechanged', value => {
//       setValue();
//     }));
//
//   return (
//     <div className="metric">
//       <dt>{ name }</dt>
//       <dd>{ value || 'нет данных' }</dd>
//     </div>
//   );
// }


function Values({values}) {
  return (
    <div>
      {values['pm0.1'] &&
      <div>
        <strong>PM0.1</strong>
        <p>{values['pm0.1']}</p>
      </div>
      }
      {values['pm2.5'] &&
      <div>
        <strong>PM0.1</strong>
        <p>{values['pm2.5']}</p>
      </div>
      }
      {values['pm10'] &&
      <div>
        <strong>PM0.1</strong>
        <p>{values['pm10']}</p>
      </div>
      }
    </div>
  );
}

function App() {
  const metrics = {
    'cc4f2f18-7b99-4fae-b46d-3568a42cb3f8': 'pm0.1',
    'd7f6bea5-4e01-458d-9395-9e42ddd00b69': 'pm2.5',
    '4e79550a-da13-4cc3-905c-2c4426d305be': 'pm10',
  };

  const [values, setValues] = useState(false);
  const [primaryService, setPrimaryService] = useState(false);
  const [location, setLocation] = useState(false);

  const fetchMetrics = (service) => {
    let vals = {};
    for (var uuid in metrics) {
      service.getCharacteristic(uuid)
        .then(char => char.startNotifications())
        .then(char => char.addEventListener('characteristicvaluechanged', value => {
          var name = metrics[value.target.uuid];
          vals = Object.assign(
            vals,
            {
              [name]: value.target.value.getUint8(0)
            }
          );
          setValues(vals);
        }))
    }
  }

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(pos => {
      setLocation({lat: pos.coords.latitude, lng: pos.coords.longitude, acc: pos.coords.accuracy});
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!primaryService) {
        return;
      }

      fetchMetrics(primaryService);
    }, 1000);

    return () => clearInterval(interval);
  });


  useEffect(() => {
    const now = new Date();

    if (values === false) {
      return;
    }

    const interval = setInterval(() => {
      const body = {
        location: location.lat + ', ' + location.lng,
        "pm0.1": values['pm0.1'],
        "pm2.5": values['pm2.5'],
        "pm10": values['pm10'],
        "createdAt": now.toISOString()
      };

      fetch("https://pms.kixlive.ru/measurements/_doc", {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(body)
      })
    }, 1000);
    return () => clearInterval(interval);
  }, [values]);


  return (
    <div className="App">
      <header className="App-header">
        {primaryService !== false ? <p>Датчик подключен</p> : <p>Датчик не подключен</p>}
        {!primaryService && <button onClick= {() => {
          createCharacteristicProvider().then(primaryService => {
            setPrimaryService(primaryService);
            fetchMetrics(primaryService);
        })}}>
        Подключить
        </button>}
        {values && <Values values={values}/>}
      </header>
    </div>
  );
}

export default App;

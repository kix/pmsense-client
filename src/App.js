import React, { useState } from 'react';
import './App.css';
import { createCharacteristicProvider } from './bluetooth';

function Metric({name, uuid, service}) {
  const [value, setValue] = useState(false);

  service.getCharacteristic(uuid)
    .then(char => char.startNotifications())
    .then(char => char.addEventListener('characteristicvaluechanged', value => {
      setValue(value.target.value.getUint8(0));
    }));

  return (
    <div className="metric">
      <dt>{ name }</dt>
      <dd>{ value || 'нет данных' }</dd>
    </div>
  );
}

function App() {
  const [primaryService, setPrimaryService] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {primaryService !== false ? <p>Датчик подключен</p> : <p>Датчик не подключен</p>}
        {!primaryService && <button onClick= {() => {
          createCharacteristicProvider().then(primaryService => {
            setPrimaryService(primaryService);
        })}}>
        Подключить
        </button>}

        { primaryService !== false && [
          <Metric name="PM0.1" uuid='cc4f2f18-7b99-4fae-b46d-3568a42cb3f8' service={primaryService}/>,
          <Metric name="PM2.5" uuid='d7f6bea5-4e01-458d-9395-9e42ddd00b69' service={primaryService}/>,
          <Metric name="PM10" uuid='4e79550a-da13-4cc3-905c-2c4426d305be' service={primaryService}/>
        ]}
      </header>
    </div>
  );
}

export default App;

import { useLocation } from 'react-router-dom';
import { EstablishmentInfo } from './data/establishment';
import { ContainerLong, List } from './styles/molecules/Containers';
import { H2, P } from './styles/atoms';
import { Card, Left, Right, Image } from './styles/molecules';
import React, { useState } from 'react';

const EstablishmentsDetails: React.FC = () => {
  const location = useLocation();
  const establishmentInfo = location.state as EstablishmentInfo;

  console.log(establishmentInfo, 'oui');
  console.log(establishmentInfo.establishment_name, 'ouioui');

  const [serviceId, setServiceId] = useState('');
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const appointmentData = {
      serviceId,
      userId,
      date,
      duration
    };

    fetch('http://51.254.118.50/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentData)
    })
      .then(response => response.json())
      .then(data => {
        setServiceId('');
        setUserId('');
        setDate('');
        setDuration('');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
    <ContainerLong>
      <List>
        <H2>{establishmentInfo.establishment_name}</H2>
        <Card>
            <Left>
              <Image src={establishmentInfo.image} />
            </Left>
            <Right>
              <P>{establishmentInfo.establishment_address}</P>
              <P>{establishmentInfo.establishment_description}</P>
            </Right>
          </Card>
      </List>
      <form onSubmit={handleSubmit}>

      <label htmlFor="userId">User ID:</label>
      <input
        type="text"
        id="userId"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <label htmlFor="duration">Durée:</label>
      <input
        type="text"
        id="duration"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />

      <button type="submit">Prendre rendez-vous</button>
    </form>
    </ContainerLong>
      
      
    </>
  );
}

export default EstablishmentsDetails;

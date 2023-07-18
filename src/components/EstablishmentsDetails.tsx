import { useLocation } from 'react-router-dom';
import { EstablishmentInfo } from './data/establishment';
import { ContainerLong, List } from './styles/molecules/Containers';
import { Button, H2, Label, P } from './styles/atoms';
import { Card, Left, Right, Image, Input, Form } from './styles/molecules';
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

  const timeOptions = [
    '15 minutes',
    '30 minutes',
    '45 minutes',
    '1 heure',
  ];

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
      <Form onSubmit={handleSubmit}>

      <Label htmlFor="date">Date:</Label>
      <Input
        type="date"
        id="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <Label htmlFor="duration">Durée:</Label>
      <select
        id="duration"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      >
        <option value="">-- Choisissez une durée --</option>
        {timeOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <Button color='#000' customAttribute='' type="submit">Prendre rendez-vous</Button>
    </Form>
    </ContainerLong>
      
      
    </>
  );
}

export default EstablishmentsDetails;

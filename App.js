import React from 'react';
import { Text, View } from 'react-native';
import fetchGraphQL from './src/fetchGraphQL';
import style from './style/style';

const { useState, useEffect } = React;

export default function App() {
  // We'll load the name of a repository, initially setting it to null
  const [autoparkit, setAutoparkit] = useState(null);
  const [curTime, setCurTime] = useState(null);
 
  function getTime() {
    var today = new Date(),
    curTime = today.toTimeString().slice(0, 5);
    setCurTime(curTime);
  }

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query GetAllCarParks {
        carParks {
          carParkId
          name
          lat
          lon
          maxCapacity
          spacesAvailable
        }
      }
    `).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      console.log(data);
      setAutoparkit(response.data);
      getTime();
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>Oulun parkkihallit: </Text>
      <Text style={style.searchTime}>Tilatieto haettu klo: {curTime} </Text>
      {autoparkit != null ? autoparkit.carParks.map(autoparkit => (
        <View style={style.cards} key={autoparkit.carParkId}>
          { autoparkit.maxCapacity > 0 &&
          <Text style={style.name}>{autoparkit.name}</Text>
          }
          { autoparkit.maxCapacity > 0 &&
          <Text style={style.space}>Vapaana: {autoparkit.spacesAvailable} / {autoparkit.maxCapacity}</Text>
          }
        </View>
      )) : <Text>Loading</Text>}
    </View>
  );
}
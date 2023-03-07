import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

function RocketList() {
  const rockets = useSelector((store) => store.rockets.list);
  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.rocket_id}
          id={rocket.rocket_id}
          name={rocket.rocket_name}
          desc={rocket.description}
          reserved={rocket.reserved}
          picture={rocket.flickr_images[0]}
        />
      ))}
    </div>
  );
}

export default RocketList;

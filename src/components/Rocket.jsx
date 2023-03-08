import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelReserve } from '../redux/rocket/rocketSlice';
import styles from './Rocket.module.css';

function RocketUi({
  name, desc, picture, reserved, id,
}) {
  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };
  const handleCancel = () => {
    dispatch(cancelReserve(id));
  };

  return (
    <div className={styles.rocketflex}>
      <div className={styles.imgdiv}>
        <img src={picture} alt={name} className={styles.img} />
      </div>
      {!reserved && (
        <div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.desc}>{desc}</p>
          <button type="button" className={styles.reservebtn} onClick={handleReserve}>
            Reserve Rocket
          </button>
        </div>
      )}
      {reserved && (
        <div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.desc}>
            <span className={styles.reservespan}>reserved</span>
            {desc}
          </p>
          <button type="button" className={styles.cancelbtn} onClick={handleCancel}>
            Cancel Reservation
          </button>
        </div>
      )}
    </div>
  );
}
RocketUi.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketUi;

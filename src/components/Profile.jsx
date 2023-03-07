import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';
import { selectReservedRockets } from '../redux/rocket/rocketSlice';

function Profile() {
  const missions = useSelector((state) => state.missions.missionstore);
  const reservedRockets = useSelector(selectReservedRockets);
  return (
    <div className="px-2 pr-2">
      <Row>
        <Col
          sm={12}
          lg={6}
          md={6}
          className="ps-lg-5"
        >
          <h2>My Missions</h2>
          <ListGroup>
            {missions.filter((mission) => mission.reserved === true).map((mission) => (
              <ListGroup.Item key={mission.mission_id}>
                {mission.mission_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col
          sm={12}
          lg={6}
          md={6}
          className="pe-lg-5"
        >
          <h2>My Rockets</h2>
          <section className={styles.section}>
            <ul className={styles.list}>
              {reservedRockets.map((e) => (
                <li key={e.rocket_id} className={styles.listItem}>
                  {e.rocket_name}
                </li>
              ))}
            </ul>
          </section>

        </Col>

      </Row>
    </div>
  );
}

export default Profile;

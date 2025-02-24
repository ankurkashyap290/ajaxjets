import React from 'react';
import { Card } from 'react-bootstrap';

class JetCard extends React.Component {
  render() {
    const { img, title, wifi, seats } = this.props;
    const newTitle = title.split('and');
    return (
      <a href={`/jet-description=${title}`}>
        <Card className='listItemCard'>
          <Card.Img variant='top' src={img} className='cardImage' />
          <Card.Body>
            <div className='jetCardTitleBar'>
              <div className='jetCardTitle'>
                <Card.Title>
                  {title.includes('and') ? (
                    <span>
                      {newTitle[0]} And
                      <br />
                      {newTitle[1]}
                    </span>
                  ) : (
                    <div> {title}</div>
                  )}
                </Card.Title>
              </div>
              {wifi ? (
                <div className='wifi'>
                  <i className='fa fa-wifi' aria-hidden='true'></i>
                </div>
              ) : null}
            </div>
            <div className='jetCardData'>
              <ul>
                <li>{`${seats} Passenger`}</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </a>
    );
  }
}

export default JetCard;

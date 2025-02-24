import React from 'react';
import { Card } from 'react-bootstrap';

class JetCard extends React.Component {
  render() {
    const { img, title, desc } = this.props;
    const newTitle = title.split('and');
    return (
      <a href={`/aircraft-description=${title}`}>
        <Card className='listItemCard'>
          <Card.Img variant='top' src={img} className='cardImageAircraft' />
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
            </div>
            <div className='jetCardData'>
              <ul>
                <li>
                  {desc} <br />
                  <span style={{ color: '#1b76ae' }}>Read More...</span>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </a>
    );
  }
}

export default JetCard;

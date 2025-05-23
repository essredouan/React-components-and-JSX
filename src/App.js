import React from 'react';
import { Card, Container } from 'react-bootstrap';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "Ahmed"; // غير الاسم هنا أو خليها ""

function App() {
  return (
    <Container style={{ maxWidth: '400px', marginTop: '20px' }}>
      <Card>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}</p>
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              style={{ borderRadius: '50%' }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
}

export default App;


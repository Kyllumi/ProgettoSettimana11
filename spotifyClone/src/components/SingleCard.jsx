import React from 'react'
import Card from 'react-bootstrap/Card';

export default function SingleCard({ rock }) {
  return (
    <>
        {rock.map((item) => (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.album.cover_medium} />
                </Card>
            ))}
    </>
  )
}

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Link,
  Rating,
  Typography,
} from '@mui/material';
import { AddShoppingCart, ImageNotSupported } from '@mui/icons-material';
import React, { useState } from 'react';
import { CardParams } from '../utilities/helperFunctions';

interface Props {
  item: CardParams;
  addToCart: () => void;
}
const CardLayout: React.FC<Props> = ({ item, addToCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card
      sx={{
        borderRadius: '8px',
        height: '270px',
        position: 'relative',
        width: '350px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#d7d5d6',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {item.image ? (
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '6px',
              padding: '8px',
              position: 'relative',
              top: '1rem',
            }}
          >
            <Link className='item-link' href={item.link}>
              <CardMedia
                aria-describedby='item-image'
                sx={{
                  borderRadius: '6px',
                  height: '80px',
                  width: '80px',
                }}
                image={`${item.image}`}
              />
            </Link>
          </Box>
        ) : (
          <ImageNotSupported sx={{ height: '120px', width: '80px' }} />
        )}
        <Box
          sx={{
            '.item-category': { fontWeight: 400 },
          }}
        >
          <Box sx={{ textAlign: 'end' }}>
            <Box sx={{ alignItems: 'center', display: 'flex', pb: 1 }}>
              <Rating
                sx={{ paddingRight: 1 }}
                name='read-only'
                readOnly
                value={item.rating}
              />
              {item.reviews.toLocaleString()}
            </Box>
            <Link className='item-category' href='#'>
              {item.category}
            </Link>
          </Box>
        </Box>
      </Box>
      <CardContent sx={{ display: 'flex', padding: 1, mt: '1rem' }}>
        <Box
          sx={{
            padding: '8px',
            '.item-price': {
              fontSize: '18px',
              fontWeight: 500,
            },
            '.item-title': {
              '&::after': {
                content: item.title.length > 80 ? '"..."' : null,
                position: 'absolute',
              },
            },
          }}
        >
          <Typography
            className='item-title'
            variant='body2'
            color='text.secondary'
          >
            {item.title.length > 80 ? item.title.substring(0, 80) : item.title}
          </Typography>

          <span className='item-price'>{`$${item.price}`}</span>
        </Box>
      </CardContent>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          '.item-id': {
            fontSize: '10px',
          },
        }}
      >
        <Button
          aria-describedby={id}
          sx={{ mb: 1 }}
          size='medium'
          variant='contained'
          endIcon={<AddShoppingCart />}
          onClick={() => {
            addToCart();
            handleClick;
          }}
        >
          Add to cart
        </Button>
        <p className='item-id'>{item.id}</p>
      </Box>
    </Card>
  );
};

export default CardLayout;

import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/homeSectionCard';
import { Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { mens_kurta } from '../../../data/mens_kurta';

const HomeSectionCarousel = () => {
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => carouselRef.current?.slidePrev();
    const slideNext = () => carouselRef.current?.slideNext();

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard/>);

    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    controlsStrategy="alternate"
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
            </div>
            <Button
                variant='contained'
                className='Z-50 bg-white'
                onClick={slideNext}
                sx={{
                    position: 'absolute',
                    top: "50%",
                    right: "1rem",
                    transform: "translateY(-50%)",
                    zIndex: 50
                }}
                color='primary'
                aria-label='next'
            >
                <ChevronRightIcon />
            </Button>

            <Button
                variant='contained'
                className='Z-50 bg-white'
                onClick={slidePrev}
                sx={{
                    position: 'absolute',
                    top: "50%",
                    left: "1rem",
                    transform: "translateY(-50%) rotate(180deg)",
                    zIndex: 50
                }}
                color='primary'
                aria-label='previous'
            >
                <ChevronRightIcon />
            </Button>
        </div>
    )
}

export default HomeSectionCarousel;

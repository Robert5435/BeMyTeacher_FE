import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ratingValue } from '../STORE';
import { useAtom } from 'jotai';


export default function StarsRating(props) {
    console.log(props,"values rating")
    const [value, setValue] = useState(props.rating);
    const [counter, setCounter] = useState(props.rateCounter)
    const [valueRating, setValueRating] = useAtom(ratingValue);

    function eventHandler(newValue) {
        console.log(newValue)
        var formData = new FormData()
        formData.append("rating", newValue);
        formData.append("userId", props.userId);

        fetch("https://localhost:5001/Users/Rate",
            {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });
            setCounter(counter + 1);

    }
    if (props.readOnly) {
        return (
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" defaultValue={value} readOnly />
                <p>{counter} users have rated this teacher</p>

            </Box>
        );
    } else {
        return (
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Rate teacher</Typography>
                <Rating
                    name="simple-controlled"
                    defaultValue={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        eventHandler(newValue);
                    }}
                />
                {/* 
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
            </Box>
        );
    }



}
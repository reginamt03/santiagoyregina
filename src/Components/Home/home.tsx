import React, { useEffect, useState } from 'react';
import ContentBox from './../MainBox/box';
import { makeStyles, Theme, Typography, Card } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import mobileBackground from './../../pictures/mobileBackground.png'
import webBackground from './../../pictures/webBackground.jpg'
import SingleLineGridList from '../Countdown/SingleGridList';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'transparent',
            maxWidth: '100%',
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%,-50%)',

        },
        title:
        {
            backgroundColor: theme.palette.primary.light,
            opacity: '0.7',
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: 'xx-large',
        },
    }))

export default function Home() {
    const classes = useStyles();

    const [width, setWidth] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile: boolean = (width <= 768);

    return (
        <div id='Home'>
            <ContentBox>
                <img src={isMobile ? mobileBackground : webBackground} alt="homePic" />
                <Card elevation={0} className={classes.root}  >
                    <Typography className={classes.title} >
                        Santiago & Regina
                    </Typography>
                    <SingleLineGridList></SingleLineGridList>
                </Card>
            </ContentBox>
        </div>

    )

}

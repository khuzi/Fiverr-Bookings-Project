import React, { useContext, useState } from "react";
import Head from "next/head";

import { Grid, Button } from "@material-ui/core";

import { MyCalender, Options, CalenderModal } from "../components/calender";
import { PageTitle, LgBtn } from "../components/ui";

import { CalenderContext } from "../context/calenderFetch";

import classes from "../styles/calender.module.css";

export default function Home() {
  const contextValues = useContext(CalenderContext);
  const { calType, setCalType, showOptions, setShowOptions } = contextValues;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <CalenderModal open={open} handleClose={handleClose} />
      <PageTitle text="Calender" />
      <Grid container justify="space-between">
        <Grid item xs={6}>
          <LgBtn
            showOptions={showOptions}
            setShowOptions={setShowOptions}
            calender
            bookingType={calType}
            setBookingType={setCalType}
            management
          />
        </Grid>
        <Grid container item xs={2} justify="flex-end" alignItems="center">
          <Button onClick={handleClickOpen} className={classes.promo_btn}>
            Promotions
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.middleWarper}>
        <Grid item xs={9} className={classes.calenderBox}>
          <MyCalender />
        </Grid>
        <Grid item xs={3}>
          {showOptions && (
            <div className={classes.optionsBox}>
              <Options value={contextValues} />
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
}

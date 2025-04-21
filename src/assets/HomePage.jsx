import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

import { useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate();
  const goMobileRecharge=()=>navigate("/mobo-recharge")
  const goDTHRecharge=()=>navigate("/DTH-recharge")
  const goFASTag=()=> navigate("/FASTag-recharge")
  const goBroadBand=()=>navigate("/broadband-recharge")
  const goCableTV=()=>navigate("/cable-tv-recharge")
  const goGasBill=()=>navigate("/gas-bill")
  const goElecBill=()=>navigate("/electicity-bill")
  const gowaterBill=()=>navigate("/water-bill")
  
  const cardData = [
    { title: "Mobile recharge", desc: "📱 Instant mobile recharges at your fingertips.", img: "/mobrech.png", action: goMobileRecharge },
    { title: "FASTag recharge", desc: "🚗 Recharge your FASTag in seconds—no queues, no delays.", img: "/ftag.jpg",action: goFASTag },
    { title: "Broadband recharge", desc: "🌐 Pay your broadband bills quickly and securely online.", img: "/broad.jpg",action:goBroadBand },
    { title: "Cable recharge", desc: "📡Recharge your cable TV in seconds—anytime, anywhere.", img: "/cabel.jpg",action: goCableTV },
    { title: "DTH recharge", desc: "📺 Recharge your DTH instantly anytime, anywhere.", img: "dth.png" ,action: goDTHRecharge},
    { title: "Gas bill", desc: "🔥 Pay your gas bills instantly with secure online payments.", img: "gas.jpg",action:goGasBill },
    { title: "Electicity bill", desc: "💡 Pay your electricity bills anytime, anywhere.", img: "elec.jpg",action:goElecBill },
    { title: "Water bill", desc: "💧 Pay your water bills effortlessly, Stay hydrated and hassle-free.", img: "water.jpg",action:gowaterBill },
    
  ];

  return (
    <><Typography variant="h3" component="h3" gutterBottom align="center" paddingTop={8}>
         Welcome to Payzz
      </Typography>
      <Typography variant="p" component="p" gutterBottom align="center">
      Your one-stop solution for all your recharge and bill payments needs.
      </Typography>
      <Grid container spacing={3} padding={2} alignItems="center" justifyContent="center">
              {cardData.map((card, index) => (
                  <Grid item xs={12} sm={6} md={3} sx={{ width: 300, height: 350 }} key={index}>
                      <Card sx={{ maxWidth: 345 }} className="card">
                          <CardMedia
                              component="img"
                              height="140"
                              image={card.img}
                              alt={card.title} 
                              />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  {card.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  {card.desc}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="medium" color="primary" onClick={card.action}>
                                  Continue
                              </Button>
                          </CardActions>
                      </Card>
                  </Grid>
              ))}
          </Grid></>
  );
}

export default HomePage;

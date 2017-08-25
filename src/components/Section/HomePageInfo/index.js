import React, { Component } from "react"
import {Grid, Row, Col} from 'react-bootstrap'
import { style } from "glamor"

const styles = {
    section: style({
        padding: "30px 0"
    }),
    getVip: style({
        '& h1': {
            width: "100%",
            textAlign: "center",
            marginBottom: 30
        },
        '& li': {
            fontSize: "2.2rem",
        }
    }),
    adsArea: style({
        '& div': {
            width: "100%",
            height: "200px",
            border: "1px solid #ccc",
            marginTop: 30,
        },
        '& h1': {
            fontSize: "3.5rem",
            textAlign: "center"
        }
    }),
    titleBg: style({
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#2e4766",
        '&::before':{
            content: "url(./imgs/bannerbg.png)",
            position: "absolute",
            left: "-2px",
            height: "3rem",
            width: "2rem",
            overflow: "hidden"
        },
        '&::after':{
            content: "url(./imgs/titleAfter.svg)",
            position: "absolute",
            right: "14px",
            height: "4rem",
            width: "1.5rem",
            overflow: "hidden"
        }
    })
}

export default class HomePageInfo extends Component {
    render() {
        return(
            <section className={styles.section} >
                <Grid>
                    <Row className="showgrid">
                        <Col {...styles.getVip} xs={12} sm={4} md={4} lg={4} >
                            <h1 {...styles.titleBg} >Get VIP</h1>
                            <ul>
                                <li>No Ads</li>
                                <li>Unlimited Access</li>
                                <li>Free Equations</li>
                            </ul>
                        </Col>

                        <Col {...styles.adsArea} xs={12} sm={4} md={4} lg={4} >
                            <div>
                                <h1>Ads Area</h1>
                            </div>
                        </Col>

                        <Col {...styles.adsArea} xs={12} sm={4} md={4} lg={4} >
                            <div>
                                <h1>Ads Area</h1>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}
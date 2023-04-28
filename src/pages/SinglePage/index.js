import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Blogs, Container, Item } from '../../components/style'
import { Batata } from '../../api'
import { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { IoPawOutline, IoPersonOutline } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import { HiBellAlert } from 'react-icons/hi2';
import { BsBookmark } from 'react-icons/bs';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { ButtonUp } from "../../components/BtnUp";
import { Link } from 'react-router-dom';


export const SinglePage = () => {
  return (
    <div className='bg-light d-flex flex-column fade-in'> 
        <Header/>
        <div className=' m-auto' style={{width:'90%'}}>
            <h1 className='text-center text-muted mt-2'>Online pet everything your pet needs</h1>
            <Link to="/site/blog"><IoIosArrowRoundBack size={55} style={{color:'f58525'}}></IoIosArrowRoundBack></Link>
            <div className='w-100 d-flex aling-items-center justify-content-center flex-column mt-2 blog-lg'>
                <div className='blog-post '>
                    <Row className='w-100 m-0 gap-5 m-auto mb-5'>
                        <Col sm={12} lg={10} xl={9} className='d-flex flex-column gap-3 m-auto' data-aos="zoom-in">
                            <img src="https://kutto.netlify.app/img/blog/rc_post_thumb01.jpg" alt="" className='w-100 rounded-3'/>
                            <div className='d-flex gap-3 text-muted '>
                                <div className='d-flex gap-1 align-items-start '>
                                    <BsBookmark size={25} color={'#f52369'}/>
                                    <h5 className='font-blog'>Siberian Husky, Breed /</h5>
                                </div>
                                <div className='d-flex gap-1 align-items-start '>
                                    <IoPersonOutline size={25}/>
                                    <h5 className='font-blog'>Admin /</h5>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <HiBellAlert size={25}/>
                                    <h5 className='font-blog'> Mar 10, 2021</h5>
                                </div>
                            </div>
                            <h2>Online pet everything your pet needs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, excepturi nemo blanditiis inventore quis, mollitia dignissimos dolore atque at perferendis laborum natus officia molestiae beatae quod soluta minus, consequuntur sequi.</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <ButtonUp></ButtonUp>
        </div>
        <Footer/>
    </div>     
  )
}

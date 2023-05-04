import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button,Text,Container,Navbar,Link} from "@nextui-org/react";
import Page1 from '../components/1';
import Page2 from '../components/2';
import Page3 from '../components/3';
import Page4 from '../components/4';
import Page5 from '../components/5';
import Page6 from '@/components/6';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState({n:0,e:0,cord:[],elem:[],area:0,modu:0,globalSM:[],sn:0,sN:[],ssN:[],ln:0,lN:[],llN:[],curPage:1});
  const [nav, setNav] = useState({label:"Step 1",next:{active : false,show:true,label : 'Next'},prev:{active : false,show:false,label : 'Previous'}});
  const [curPage, setCurPage] = useState(1)
  const main_title = "Truss Calculation"
  const pages = [<Page1 key={"1"} data={data} setData={setData} nav={nav} setNav={setNav}/>,
                  <Page2 key={"2"} data={data} setData={setData} nav={nav} setNav={setNav}/>,
                  <Page3 key={"3"} data={data} setData={setData} nav={nav} setNav={setNav}/>,
                  <Page4 key={"4"} data={data} setData={setData} nav={nav} setNav={setNav}/>,
                  <Page5 key={"5"} data={data} setData={setData} nav={nav} setNav={setNav}/>,
                  <Page6 key={"6"} data={data} setData={setData} nav={nav} setNav={setNav} />
                ]
  return (
    <>
      <Head>
        <title>Truss</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{boxSizing:"border-box"}}
    css={{
      maxW: "100%"
    }}
  >
      <Navbar variant={'sticky'} style={{boxShadow:'unset'}} >
      
        <Navbar.Brand style={{paddingLeft:13}}>
        <div style={{display:'flex',gap:'2vw',alignItems:'center'}}>
            <Button id='btnA' disabled={!nav.prev.active}  style={{display: !nav.prev.show ? 'none' : '',padding:10,minWidth:'unset',maxHeight:'unset'}} color="ghosted">
                <FontAwesomeIcon icon={faChevronLeft} onClick={()=>{
                   setNav((prevNav) => ({...prevNav,prev:{...prevNav.prev,active:false}}))
                   setData((prevData) => ({...prevData,curPage : prevData.curPage-1}))
                }} style={{width:18,height:18}} /></Button>
            <Text style={{fontSize:'2.75rem',fontWeight:'500'}}>{nav.label}</Text>
            </div>
        </Navbar.Brand>
        <Navbar.Content style={{paddingRight:13,gap:'1vh'}}>
       
          <Navbar.Item>
            <Button disabled={!nav.next.active} style={{display: !nav.next.show ? 'none' : ''}}  auto flat color={"secondary"} rounded onClick={()=>{
              setNav((prevNav) => ({...prevNav,next:{...prevNav.next,active:false}}))
              setData((prevData) => ({...prevData,curPage : prevData.curPage+1}))
            }}>
              {nav.next.label}
            </Button>
          </Navbar.Item>
        </Navbar.Content>
</Navbar>
      <Container lg>
        {pages[data.curPage-1]}
        {/* <Text>{JSON.stringify(data)}</Text> */}
        </Container>
        </div>
    </>
  )
}
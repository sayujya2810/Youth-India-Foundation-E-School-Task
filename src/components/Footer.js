import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <div style={{height:"30vh", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#f25a5a", marginTop:"3rem", width:"100%"}}>
        <div style={{width:"30%",backgroundColor:"bisque", padding:"2rem", borderRadius:"10px", border:"4px solid black", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"60%"}}>
            <div style={{display:"flex", alignItems:"center"}}>
                <img style={{height:"60px"}} src='../profile.png' />
                <p style={{paddingBottom:"10px"}}>Sayujya Malkan</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly", width:"40%"}} >
                <a style={{color:"bisque"}} href='https://github.com/sayujya2810' target='_blank'><h3 style={{backgroundColor:"black", padding:"5px", borderRadius:"50%", width:"25px", height:"25px", display:"flex", alignItems:"center", justifyContent:"center"}}><AiFillGithub /></h3></a>
                <a style={{color:"bisque"}} href='https://www.linkedin.com/in/sayujya-malkan-a78232198/' target='_blank'><h3 style={{backgroundColor:"black", padding:"5px", borderRadius:"50%", width:"25px", height:"25px", display:"flex", alignItems:"center", justifyContent:"center"}}><AiFillLinkedin /></h3></a>
                <a style={{color:"bisque"}} href='https://www.instagram.com/sayujya7601/' target='_blank'><h3 style={{backgroundColor:"black", padding:"5px", borderRadius:"50%", width:"25px", height:"25px", display:"flex", alignItems:"center", justifyContent:"center"}}><AiFillInstagram /></h3></a>
                <a style={{color:"bisque"}} href="mailto:sayujyamalkan@gmail.com" target='_blank'><h3 style={{backgroundColor:"black", padding:"5px", borderRadius:"50%", width:"25px", height:"25px", display:"flex", alignItems:"center", justifyContent:"center"}}><FiMail /></h3></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
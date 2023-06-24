
import { Box, Button, Container, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import axios from 'axios';
import TypewriterEffect from './TypewriteEffect';



const SingleUser = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data,setdata]=useState("")
  const [flag,setflag]=useState(false)
  const [responseData, setResponseData] = useState('');
  const totalSlides = 6; // Total number of slides
  const slidesToShow = 3; // Number of slides to show at a time
  const images = ['https://mentorathome.com/wp-content/uploads/2023/02/NCERT-Book-Class-8-Maths-1024x576.webp', 'https://cdn1.byjus.com/wp-content/uploads/2023/05/NCERT-Books-for-Class-10.png', 'https://mentorathome.com/wp-content/uploads/2023/02/NCERT-Book-Class-8-Maths-1024x576.webp', 'https://cdn1.byjus.com/wp-content/uploads/2023/05/NCERT-Books-for-Class-10.png', 'https://www.ncertbooks.guru/wp-content/uploads/2020/09/ncert-books-for-class-12-maths-chapter-1-relations-and-functions.jpeg', 'https://mentorathome.com/wp-content/uploads/2023/02/NCERT-Book-Class-8-Maths-1024x576.webp']; // Replace with your image URLs

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide >= totalSlides - slidesToShow ? 0 : prevSlide + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - slidesToShow : prevSlide - 1));
  };

  const visibleSlides = images.slice(currentSlide, currentSlide + slidesToShow);

  function fetchfun(){
    return   axios.post("https://actual-shoes-api.onrender.com/ask",{message:data})
      .then((res)=>{
        console.log(res)
        setResponseData(res.data.completion.content)
      })
      .catch((err)=>console.log(err))
    }
    const handlesubmit=(e)=>{
      if(responseData){
        setflag(false)
      }
  e.preventDefault()
  fetchfun().then(()=>{
    setflag(true)
    setdata("")
  })
  
  
    }
  


  return (
  <> 

    <Box mt={"4"}>
     
      <div style={{ backgroundColor: 'lightblue', padding: '20px', width: "80%", margin: "auto", borderRadius: "10px", borderTop: "20px" }}>
        <h1 style={{ color: "rgb(42, 41, 40) ", textAlign:"center", fontWeight: "bold", fontSize: "30px", width: 'auto' }}  >Start your learning journey from today. Best wishes!</h1>
      </div>
      <br />
     {/* write here  */}
     <Container maxW={"container.lg"} mt={"2"} mb={"12"}>
      <Text fontSize={{base:"xl",md:"4xl"}} color={"Teal"} fontWeight={"bold"}>Please put your question in the mysteries box.</Text>
      <div className="App">
      <form onSubmit={handlesubmit}>
        <input onChange={(e)=>setdata(e.target.value)} value={data} name='data' type='text' placeholder='Ask Here' style={{width:"40%",height:"40px",margin:"20px"}} />
        <Button colorScheme='teal' variant='outline'><input type='submit' /></Button>
      </form>
      <hr></hr>
 {flag ? <TypewriterEffect data={responseData} />  : data ?<Text fontSize={{base:"21px",md:"50px"}} color={"red.200"}>Wait few Sec after Clicking😁</Text> :""}
    </div>
    </Container >
     {/* my code end here  */}
      <div  >
        <h1 style={{ width: 'auto', textAlign: 'left', marginLeft: "170px", fontSize: "30px", fontWeight: "bold" }}>Achievements</h1>
        <div style={{ border: "1px solid yellow", width: "80%", backgroundColor: "rgb(212, 255, 189)", height: "200px", margin: "auto", borderRadius: "10px" }}>
          <h1 style={{ width: 'auto', textAlign: "center", color: "rgb(0, 158, 0) ", fontWeight: "bold", fontSize: "30px", marginTop: "35px" }}>Start a study Streak</h1>
          <h2 style={{ width: 'auto', textAlign: "center", color: "rgb(26, 187, 4) ", fontWeight: "bold", fontSize: "22px" }}>Steak help you to stay motivated and reach your goals. Start your streak today!</h2>
        </div>
      </div>
      <br /> <br />
      <div  >
        <h1 style={{ width: 'auto', textAlign: 'left', marginLeft: "170px", fontSize: "30px", fontWeight: "bold" }}>Score</h1>
        <div style={{ border: "1px solid yellow", width: "80%", backgroundColor: "rgb(209, 255, 253)", height: "200px", margin: "auto", borderRadius: "10px" }}>
          <h1 style={{ width: 'auto', textAlign: "center", color: "rgb(2, 117, 159) ", fontWeight: "bold", fontSize: "30px", marginTop: "35px" }}>Start for a Score</h1>
          <h2 style={{ width: 'auto', textAlign: "center", color: "rgb(0, 112, 168) ", fontWeight: "bold", fontSize: "22px" }}>Score help you to stay motivated and reach your goals. See your Score today!</h2>
        </div>
      </div>

      <br />
      <br />

      <div  >
        <h1 style={{ width: 'auto', textAlign: 'left', marginLeft: "170px", fontSize: "30px", fontWeight: "bold" }}>Recent</h1>
        <div style={{ border: "1px solid yellow", width: "80%", backgroundColor: "rgb(251, 255, 213)", height: "200px", margin: "auto", borderRadius: "10px" }}>
          <h1 style={{ width: 'auto', textAlign: "center", color: "rgb(219, 208, 0) ", fontWeight: "bold", fontSize: "30px", marginTop: "35px" }}>You have no sets yet!</h1>
          <h2 style={{ width: 'auto', textAlign: "center", color: "rgb(242, 231, 15) ", fontWeight: "bold", fontSize: "22px" }}>
            Sets you create here or study will display here!
          </h2>
        </div>
      </div>

      <br />             <br />
      <br />
      <input type="text" />

      <div>

      </div>


    
    </Box>
    
    </>
  );
};



export default SingleUser;